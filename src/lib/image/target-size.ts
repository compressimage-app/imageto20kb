/** 1 KB = 1,024 bytes everywhere in this project. */
export const KB = 1024;
export const MIN_TARGET_KB = 1;
export const MAX_TARGET_KB = 10240;

export const kbToBytes = (kb: number) => Math.round(kb * KB);

export function parseTargetKb(value: string | number): number | null {
  const n = typeof value === 'number' ? value : Number(String(value).trim());
  if (!Number.isFinite(n) || n < MIN_TARGET_KB || n > MAX_TARGET_KB) return null;
  return Math.round(n * 100) / 100;
}

export function formatBytes(bytes: number): string {
  if (bytes < KB) return `${bytes} B`;
  if (bytes < KB * KB) return `${(bytes / KB).toFixed(bytes < 10 * KB ? 2 : 1)} KB`;
  return `${(bytes / KB / KB).toFixed(2)} MB`;
}

/** Fit (w,h) inside max box (never upscales), then apply scale. Aspect ratio preserved. */
export function fitDimensions(w: number, h: number, maxW?: number, maxH?: number, scale = 1) {
  let r = 1;
  if (maxW && maxW > 0) r = Math.min(r, maxW / w);
  if (maxH && maxH > 0) r = Math.min(r, maxH / h);
  r *= scale;
  return { width: Math.max(1, Math.round(w * r)), height: Math.max(1, Math.round(h * r)) };
}

const EXT: Record<string, string> = { 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/png': 'png' };
export const extForMime = (mime: string) => EXT[mime] ?? 'bin';

/** Safe, unique filename whose extension matches the real encoded MIME type. */
export function safeFilename(original: string, mime: string, suffix: string, used: Set<string>): string {
  const base = original.replace(/\.[^.]*$/, '').normalize('NFKD').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').slice(0, 60) || 'image';
  const ext = extForMime(mime);
  let name = `${base}-${suffix}.${ext}`, i = 2;
  while (used.has(name.toLowerCase())) name = `${base}-${suffix}-${i++}.${ext}`;
  used.add(name.toLowerCase());
  return name;
}
