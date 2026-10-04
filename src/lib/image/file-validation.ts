export const MAX_FILE_BYTES = 50 * 1024 * 1024;
export const MAX_PIXELS = 50_000_000;

export type ErrorCode = 'empty' | 'too-large' | 'unsupported' | 'invalid' | 'animated' | 'too-many-pixels' | 'memory' | 'encoding' | 'cancelled';
export class CompressError extends Error {
  code: ErrorCode;
  constructor(code: ErrorCode, message: string) { super(message); this.code = code; }
}

export type InputMime = 'image/jpeg' | 'image/png' | 'image/webp';
const ascii = (b: Uint8Array, s: number, e: number) => String.fromCharCode(...b.slice(s, e));

/** Detect the real type from magic bytes. Throws CompressError for unsupported/animated/empty input. */
export function sniffImage(b: Uint8Array): InputMime {
  if (b.length === 0) throw new CompressError('empty', 'This file is empty.');
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg';
  if (b.length >= 8 && b[0] === 0x89 && ascii(b, 1, 4) === 'PNG') {
    if (ascii(b, 0, Math.min(b.length, 4096)).includes('acTL')) throw new CompressError('animated', 'Animated PNG (APNG) is not supported because compression would remove the animation.');
    return 'image/png';
  }
  if (b.length >= 16 && ascii(b, 0, 4) === 'RIFF' && ascii(b, 8, 12) === 'WEBP') {
    if (ascii(b, 12, 16) === 'VP8X' && b.length > 20 && (b[20] & 0x02)) throw new CompressError('animated', 'Animated WebP is not supported because compression would remove the animation.');
    return 'image/webp';
  }
  if (ascii(b, 0, 3) === 'GIF') throw new CompressError('unsupported', 'GIF files are not supported (animation would be lost). Convert a still frame to JPG or PNG first.');
  if (b.length >= 12 && ascii(b, 4, 8) === 'ftyp') throw new CompressError('unsupported', 'HEIC/HEIF images are not supported in the browser pipeline. Export the photo as JPG first.');
  const head = ascii(b, 0, Math.min(b.length, 512)).toLowerCase();
  if (head.includes('<svg') || head.includes('<?xml')) throw new CompressError('unsupported', 'SVG files are not supported. They are vector graphics, so pixel compression does not apply.');
  throw new CompressError('unsupported', 'Unsupported or unrecognised file. Please choose a JPG, PNG or WebP image.');
}

export async function validateFile(file: File): Promise<InputMime> {
  if (file.size === 0) throw new CompressError('empty', 'This file is empty.');
  if (file.size > MAX_FILE_BYTES) throw new CompressError('too-large', `File is larger than the ${MAX_FILE_BYTES / 1024 / 1024} MB safety limit.`);
  const head = new Uint8Array(await file.slice(0, 4096).arrayBuffer());
  return sniffImage(head);
}
