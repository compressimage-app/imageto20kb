import type { OutputMime } from './compress-image';

let cached: OutputMime[] | null = null;
/** Detect which formats this browser can really encode (checks the returned Blob type). */
export async function supportedOutputs(): Promise<OutputMime[]> {
  if (cached) return cached;
  const c = document.createElement('canvas');
  c.width = c.height = 1;
  const out: OutputMime[] = [];
  for (const m of ['image/jpeg', 'image/webp', 'image/png'] as OutputMime[]) {
    const ok = await new Promise<boolean>((res) => c.toBlob((b) => res(!!b && b.type === m), m, 0.5));
    if (ok) out.push(m);
  }
  return (cached = out);
}
