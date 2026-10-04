import { describe, it, expect } from 'vitest';
import { kbToBytes, parseTargetKb, fitDimensions, safeFilename, formatBytes } from '../src/lib/image/target-size';
import { sniffImage, CompressError } from '../src/lib/image/file-validation';

const bytes = (...n: number[]) => new Uint8Array(n);
describe('target size', () => {
  it('uses 1 KB = 1024 bytes', () => { expect(kbToBytes(20)).toBe(20480); expect(kbToBytes(100)).toBe(102400); });
  it('validates custom targets', () => { expect(parseTargetKb('150')).toBe(150); expect(parseTargetKb('0')).toBeNull(); expect(parseTargetKb('abc')).toBeNull(); expect(parseTargetKb(99999)).toBeNull(); });
  it('formats bytes', () => expect(formatBytes(20480)).toBe('20.0 KB'));
});
describe('dimensions', () => {
  it('preserves aspect ratio and never enlarges', () => {
    expect(fitDimensions(4000, 2000, 1000)).toEqual({ width: 1000, height: 500 });
    expect(fitDimensions(400, 200, 1000)).toEqual({ width: 400, height: 200 });
    expect(fitDimensions(1000, 1000, undefined, undefined, 0.5)).toEqual({ width: 500, height: 500 });
  });
});
describe('filenames', () => {
  it('are unique, safe and match the MIME extension', () => {
    const used = new Set<string>();
    const a = safeFilename('../My Photo.png', 'image/jpeg', '20kb', used);
    const b = safeFilename('../My Photo.png', 'image/jpeg', '20kb', used);
    expect(a).toBe('My-Photo-20kb.jpg'); expect(b).toBe('My-Photo-20kb-2.jpg');
  });
});
describe('file signatures', () => {
  it('accepts JPEG/PNG/WebP', () => {
    expect(sniffImage(bytes(0xff, 0xd8, 0xff, 0xe0))).toBe('image/jpeg');
    expect(sniffImage(bytes(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a))).toBe('image/png');
    const webp = new TextEncoder().encode('RIFF\0\0\0\0WEBPVP8 ' + 'x'.repeat(10));
    expect(sniffImage(webp)).toBe('image/webp');
  });
  it('rejects empty, GIF, SVG, HEIC and junk', () => {
    expect(() => sniffImage(bytes())).toThrow(CompressError);
    expect(() => sniffImage(new TextEncoder().encode('GIF89a....'))).toThrow(/GIF/);
    expect(() => sniffImage(new TextEncoder().encode('<svg xmlns="x"></svg>'))).toThrow(/SVG/);
    expect(() => sniffImage(new TextEncoder().encode('\0\0\0\x18ftypheic....'))).toThrow(/HEIC/);
    expect(() => sniffImage(new TextEncoder().encode('hello world, not an image'))).toThrow(/Unsupported/);
  });
  it('rejects animated WebP', () => {
    const b = new Uint8Array(32); b.set(new TextEncoder().encode('RIFF'), 0); b.set(new TextEncoder().encode('WEBP'), 8); b.set(new TextEncoder().encode('VP8X'), 12); b[20] = 0x02;
    expect(() => sniffImage(b)).toThrow(/Animated/);
  });
});
