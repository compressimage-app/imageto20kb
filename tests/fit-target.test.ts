import { describe, it, expect } from 'vitest';
import { createCanvas, loadImage, type Canvas } from '@napi-rs/canvas';
import { fitToTarget } from '../src/lib/image/fit-target';
import { fitDimensions, kbToBytes } from '../src/lib/image/target-size';

// ---------- deterministic synthetic "photos" ----------
function rng(seed: number) { return () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296); }
function makePhoto(w: number, h: number, noise: number, freq: number, seed: number): Canvas {
  const c = createCanvas(w, h), x = c.getContext('2d'), r = rng(seed);
  const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#2b5876'); g.addColorStop(0.5, '#d9a066'); g.addColorStop(1, '#4e4376');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) { x.fillStyle = `hsla(${r() * 360},60%,${30 + r() * 40}%,.7)`; x.beginPath(); x.arc(r() * w, r() * h, 30 + r() * w * 0.12, 0, 7); x.fill(); }
  const d = x.getImageData(0, 0, w, h), p = d.data;
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const k = (j * w + i) * 4, t = Math.sin(i * freq) * Math.cos(j * freq) * 18 + (r() - 0.5) * noise;
    p[k] += t; p[k + 1] += t; p[k + 2] += t;
  }
  x.putImageData(d, 0, 0);
  return c;
}
const render = (src: Canvas, w: number, h: number) => { const c = createCanvas(w, h), x = c.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, w, h); return c; };
async function psnr(orig: Canvas, jpeg: Buffer) {
  const W = orig.width, H = orig.height, back = createCanvas(W, H), bx = back.getContext('2d');
  bx.imageSmoothingQuality = 'high'; bx.drawImage(await loadImage(jpeg), 0, 0, W, H);
  const a = orig.getContext('2d').getImageData(0, 0, W, H).data, b = bx.getImageData(0, 0, W, H).data;
  let se = 0, n = 0; for (let i = 0; i < a.length; i += 4) for (let c = 0; c < 3; c++) { const d = a[i + c] - b[i + c]; se += d * d; n++; }
  return 10 * Math.log10((255 * 255) / (se / n));
}

// ---------- the previous algorithm, for comparison ----------
async function oldAlgo(src: Canvas, target: number) {
  const SCALES = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.22, 0.15];
  const enc = async (s: number, q: number) => { const d = fitDimensions(src.width, src.height, undefined, undefined, s); return { buf: await render(src, d.width, d.height).encode('jpeg', Math.round(q * 100)), q, ...d }; };
  let smallest: any = null;
  for (const s of SCALES) {
    const probe = async (q: number) => { const r = await enc(s, q); if (!smallest || r.buf.length < smallest.buf.length) smallest = r; return r; };
    if ((await probe(0.95)).buf.length <= target) return (await enc(s, 0.95));
    const low = await probe(0.1); if (low.buf.length > target) continue;
    let lo = 0.1, hi = 0.95, best = low;
    for (let i = 0; i < 7; i++) { const m = (lo + hi) / 2, r = await probe(m); if (r.buf.length <= target) { best = r; lo = m; } else hi = m; }
    return best;
  }
  return smallest;
}
async function newAlgo(src: Canvas, target: number) {
  const base = fitDimensions(src.width, src.height, undefined, undefined, 1);
  let cache: { key: string; c: Canvas } | null = null;
  const r = await fitToTarget<{ buf: Buffer; width: number; height: number }>({
    targetBytes: target, lossy: true, minQuality: 0.1, minScale: 24 / Math.min(base.width, base.height),
    async encode(s, q) {
      const d = fitDimensions(src.width, src.height, undefined, undefined, s), key = `${d.width}x${d.height}`;
      if (cache?.key !== key) cache = { key, c: render(src, d.width, d.height) };
      const buf = await cache.c.encode('jpeg', Math.round(q * 100));
      return { size: buf.length, data: { buf, ...d } };
    },
  });
  return { ...r.probe.data, q: r.quality, achieved: r.achieved, encodes: r.encodes };
}

const images = [
  { name: 'smooth 2400x1600', make: () => makePhoto(2400, 1600, 6, 0.01, 1) },
  { name: 'textured 3000x2000', make: () => makePhoto(3000, 2000, 40, 0.05, 2) },
  { name: 'portrait 1200x1600', make: () => makePhoto(1200, 1600, 20, 0.03, 3) },
];

describe('fitToTarget accuracy (real JPEG encoder, new vs old)', () => {
  for (const kb of [20, 100]) for (const im of images) {
    it(`${im.name} -> ${kb}KB`, async () => {
      const src = im.make(), T = kbToBytes(kb);
      const o = await oldAlgo(src, T), n = await newAlgo(src, T);
      const [po, pn] = [await psnr(src, o.buf), await psnr(src, n.buf)];
      console.log(`${kb}KB ${im.name.padEnd(20)} OLD ${(o.buf.length / T * 100).toFixed(0)}% ${o.width}x${o.height} q${Math.round(o.q * 100)} PSNR ${po.toFixed(1)} | NEW ${(n.buf.length / T * 100).toFixed(0)}% ${n.width}x${n.height} q${Math.round(n.q * 100)} PSNR ${pn.toFixed(1)} (${n.encodes} encodes)`);
      expect(n.achieved).toBe(true);
      expect(n.buf.length).toBeLessThanOrEqual(T);          // never over target when it says achieved
      expect(n.buf.length).toBeGreaterThanOrEqual(T * 0.88); // fills the target closely
      expect(n.encodes).toBeLessThanOrEqual(25);             // bounded work
    }, 120_000);
  }
});

describe('fitToTarget dimension preference', () => {
  const model = async (s: number, q: number) => ({ size: Math.round(100000 * s * s * q), data: 0 });
  it('default prefers moderate quality + smaller dimensions', async () => {
    const r = await fitToTarget({ targetBytes: 20000, lossy: true, minQuality: 0.1, minScale: 0.1, encode: model });
    expect(r.achieved).toBe(true); expect(r.scale).toBeLessThan(0.7); expect(r.quality).toBeGreaterThanOrEqual(0.6);
  });
  it('keepDimensions (preferredQuality = min) keeps full size when possible', async () => {
    const r = await fitToTarget({ targetBytes: 20000, lossy: true, minQuality: 0.1, preferredQuality: 0.1, minScale: 0.1, encode: model });
    expect(r.achieved).toBe(true); expect(r.scale).toBe(1); expect(r.quality).toBeLessThan(0.3);
  });
});

describe('fitToTarget edge cases', () => {
  it('reports not achieved when nothing can fit', async () => {
    const r = await fitToTarget({ targetBytes: 10, lossy: true, minQuality: 0.1, minScale: 0.5, encode: async () => ({ size: 5000, data: 0 }) });
    expect(r.achieved).toBe(false); expect(r.encodes).toBeLessThanOrEqual(25);
  });
  it('lossless encodes once', async () => {
    let n = 0; const r = await fitToTarget({ targetBytes: 10, lossy: false, minQuality: 0.1, minScale: 1, encode: async () => (n++, { size: 99, data: 0 }) });
    expect(n).toBe(1); expect(r.achieved).toBe(false);
  });
});
