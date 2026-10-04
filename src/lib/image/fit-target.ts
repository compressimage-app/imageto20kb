/**
 * Target-size search, independent of the DOM so it can be unit/benchmark tested.
 *
 * Strategy (lossy formats):
 *  A. Full size: if q=max fits, done. If q=Q_PREF (>= ~62%) fits, binary-search quality upward to fill the target.
 *  B. Otherwise binary-search the *scale* (continuous) at Q_PREF to find the largest dimensions that fit.
 *  C. At that scale, binary-search quality upward to use the leftover bytes.
 *  D. If even the minimum scale at Q_PREF is too big, lower quality toward the user's minimum at the minimum scale.
 * Moderate quality at slightly smaller dimensions looks better than full size at very low quality.
 * Every probe measures the REAL encoded size. Total encodes are bounded (~20).
 */
export interface Probe<T> { size: number; data: T }
export interface FitParams<T> {
  targetBytes: number;
  lossy: boolean;
  minQuality: number;
  maxQuality?: number;
  /** Quality below which shrinking dimensions is preferred. Defaults to PREFERRED_QUALITY; set to minQuality to keep dimensions. */
  preferredQuality?: number;
  minScale: number;
  encode(scale: number, quality: number): Promise<Probe<T>>;
  check?(): void;
}
export interface FitResult<T> { achieved: boolean; probe: Probe<T>; scale: number; quality: number; encodes: number }

export const FILL_WINDOW = 0.93; // stop searching once the result uses >= 93% of the target
export const PREFERRED_QUALITY = 0.62;

export async function fitToTarget<T>(p: FitParams<T>): Promise<FitResult<T>> {
  const T = p.targetBytes;
  const maxQ = p.maxQuality ?? 0.95;
  const qPref = Math.min(maxQ, Math.max(p.minQuality, p.preferredQuality ?? PREFERRED_QUALITY));
  let encodes = 0;
  type Cand = { probe: Probe<T>; scale: number; quality: number };
  let fit: Cand | null = null;
  let smallest: Cand | null = null;

  const probe = async (scale: number, quality: number) => {
    p.check?.();
    encodes++;
    const pr = await p.encode(scale, quality);
    const c: Cand = { probe: pr, scale, quality };
    if (!smallest || pr.size < smallest.probe.size) smallest = c;
    if (pr.size <= T && (!fit || pr.size > fit.probe.size)) fit = c;
    return pr.size;
  };
  /** Find the largest x in [lo,hi] whose size fits; stops early inside the fill window. */
  const bsearch = async (lo: number, hi: number, iters: number, f: (x: number) => Promise<number>) => {
    for (let i = 0; i < iters; i++) {
      const mid = (lo + hi) / 2;
      const size = await f(mid);
      if (size <= T) { lo = mid; if (size >= T * FILL_WINDOW) return; } else hi = mid;
    }
  };
  const done = (): FitResult<T> => {
    const c = (fit ?? smallest) as Cand;
    return { achieved: !!fit, probe: c.probe, scale: c.scale, quality: c.quality, encodes };
  };

  if (!p.lossy) { await probe(1, maxQ); return done(); }

  if ((await probe(1, maxQ)) <= T) return done();                         // A: fits at top quality
  if ((await probe(1, qPref)) <= T) {                                     // A: fill with quality
    await bsearch(qPref, maxQ, 7, (q) => probe(1, q));
    return done();
  }
  if (p.minScale < 1 && (await probe(p.minScale, qPref)) <= T) {          // B + C
    await bsearch(p.minScale, 1, 9, (s) => probe(s, qPref));
    const s = (fit as Cand | null)?.scale ?? p.minScale;
    if (((fit as Cand | null)?.probe.size ?? 0) < T * FILL_WINDOW) await bsearch(qPref, maxQ, 6, (q) => probe(s, q));
    return done();
  }
  if (p.minQuality < qPref) await bsearch(p.minQuality, qPref, 7, (q) => probe(p.minScale, q)); // D
  return done();
}
