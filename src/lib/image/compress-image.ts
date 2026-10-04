import { CompressError, validateFile } from './file-validation';
import { loadImage } from './image-loader';
import { fitToTarget } from './fit-target';
import { fitDimensions, kbToBytes } from './target-size';

export type OutputMime = 'image/jpeg' | 'image/webp' | 'image/png';
export interface CompressOptions {
  targetKb: number;
  format: OutputMime;
  maxWidth?: number;
  maxHeight?: number;
  minQuality?: number; // 0.05 - 0.9
  /** Keep dimensions as long as possible, accepting lower JPEG/WebP quality. */
  keepDimensions?: boolean;
  signal?: AbortSignal;
}
export interface CompressResult {
  status: 'achieved' | 'above-target';
  blob: Blob;
  mime: OutputMime;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  quality?: number;
  scale: number;
  notes: string[];
}

const MIN_SIDE = 24;
type AnyCanvas = OffscreenCanvas | HTMLCanvasElement;

function makeCanvas(w: number, h: number): AnyCanvas {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  const c = document.createElement('canvas'); c.width = w; c.height = h; return c;
}
const ctx2d = (c: AnyCanvas) => {
  const x = c.getContext('2d') as CanvasRenderingContext2D | null;
  if (!x) throw new CompressError('memory', 'Canvas is unavailable or out of memory.');
  x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high';
  return x;
};
async function toBlob(c: AnyCanvas, mime: OutputMime, q?: number): Promise<Blob> {
  const blob = 'convertToBlob' in c
    ? await c.convertToBlob({ type: mime, quality: q })
    : await new Promise<Blob | null>((res) => c.toBlob(res, mime, q));
  if (!blob) throw new CompressError('encoding', 'The browser failed to encode the image.');
  if (blob.type !== mime) throw new CompressError('encoding', `This browser cannot encode ${mime} (it returned ${blob.type || 'nothing'}).`);
  return blob;
}

/** Step-wise downscale (halving) so small outputs stay sharp instead of aliased. */
function resample(src: CanvasImageSource, sw: number, sh: number, dw: number, dh: number, whiteBg: boolean): AnyCanvas {
  let cur: CanvasImageSource = src, cw = sw, ch = sh;
  while (cw / 2 >= dw && ch / 2 >= dh) {
    const nw = Math.max(dw, Math.floor(cw / 2)), nh = Math.max(dh, Math.floor(ch / 2));
    const c = makeCanvas(nw, nh);
    ctx2d(c).drawImage(cur, 0, 0, nw, nh);
    cur = c as CanvasImageSource; cw = nw; ch = nh;
  }
  const out = makeCanvas(dw, dh);
  const x = ctx2d(out);
  if (whiteBg) { x.fillStyle = '#fff'; x.fillRect(0, 0, dw, dh); }
  x.drawImage(cur, 0, 0, dw, dh);
  return out;
}

export async function compressImage(file: File, opts: CompressOptions): Promise<CompressResult> {
  const inMime = await validateFile(file);
  const check = () => { if (opts.signal?.aborted) throw new CompressError('cancelled', 'Cancelled.'); };
  const img = await loadImage(file);
  const notes: string[] = [];
  try {
    const lossy = opts.format !== 'image/png';
    const whiteBg = opts.format === 'image/jpeg';
    if (whiteBg && inMime !== 'image/jpeg') notes.push('Transparent areas (if any) were replaced with a white background because JPEG has no transparency.');
    const base = fitDimensions(img.width, img.height, opts.maxWidth, opts.maxHeight, 1);
    const minScale = Math.min(base.width, base.height) > MIN_SIDE ? MIN_SIDE / Math.min(base.width, base.height) : 1;
    let cached: { key: string; canvas: AnyCanvas } | null = null; // reuse the canvas while only quality changes

    const minQuality = Math.min(0.9, Math.max(0.05, opts.minQuality ?? 0.1));
    const res = await fitToTarget<{ blob: Blob; w: number; h: number }>({
      targetBytes: kbToBytes(opts.targetKb), lossy, minScale, check, minQuality,
      preferredQuality: opts.keepDimensions ? minQuality : undefined,
      async encode(scale, quality) {
        const { width, height } = fitDimensions(img.width, img.height, opts.maxWidth, opts.maxHeight, scale);
        const key = `${width}x${height}`;
        if (cached?.key !== key) {
          try { cached = { key, canvas: resample(img.source, img.width, img.height, width, height, whiteBg) }; }
          catch (e) { if (e instanceof CompressError) throw e; throw new CompressError('memory', 'The browser ran out of memory while resizing.'); }
        }
        const blob = await toBlob(cached.canvas, opts.format, lossy ? quality : undefined);
        return { size: blob.size, data: { blob, w: width, h: height } };
      },
    });

    const { blob, w, h } = res.probe.data;
    if (res.achieved && res.scale < 1) notes.push(`Dimensions were reduced to ${Math.round(res.scale * 100)}% to keep quality high while reaching the target.`);
    if (!res.achieved) notes.push(opts.format === 'image/png'
      ? 'PNG is lossless, so it often cannot reach a small target. Choose JPEG or WebP for a smaller file.'
      : 'The target could not be reached without making the image extremely small or low quality. This is the smallest result produced.');
    return { status: res.achieved ? 'achieved' : 'above-target', blob, mime: opts.format, width: w, height: h, originalWidth: img.width, originalHeight: img.height, quality: lossy ? res.quality : undefined, scale: res.scale, notes };
  } finally {
    img.close();
  }
}
