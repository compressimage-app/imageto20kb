// Post-build: split long <p> blocks into short, focused paragraphs at sentence boundaries (readability + retrieval).
// Only splits outside inline tags, never inside <a>/<strong>/<code>, and keeps the paragraph's attributes.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
export const MAX_WORDS = 48, SPLIT_ABOVE = 62;
const wc = (h) => h.replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /\w/.test(w)).length;
export function splitInner(inner) {
  if (/<(br|ul|ol|li|div|p|img|button|input|svg|table|h\d)\b/i.test(inner)) return [inner];
  const cuts = []; let depth = 0, i = 0;
  while (i < inner.length) {
    if (inner[i] === '<') { const end = inner.indexOf('>', i); const tag = inner.slice(i + 1, end); if (/^\//.test(tag)) depth--; else if (!/\/$/.test(tag)) depth++; i = end + 1; continue; }
    const m = /^[.!?]["”’)]?\s+/.exec(inner.slice(i));
    if (m && depth === 0 && /^[A-Z<"“]/.test(inner[i + m[0].length] || '') && !/(?:\b(?:e\.g|i\.e|vs|etc|No|approx))$/.test(inner.slice(Math.max(0, i - 5), i))) { cuts.push(i + m[0].trimEnd().length); i += m[0].length; continue; }
    i++;
  }
  if (!cuts.length) return [inner];
  const sentences = []; let prev = 0; for (const c of cuts) { sentences.push(inner.slice(prev, c).trim()); prev = c; } sentences.push(inner.slice(prev).trim());
  const out = []; let cur = '';
  for (const s of sentences.filter(Boolean)) { if (cur && wc(cur + ' ' + s) > MAX_WORDS) { out.push(cur); cur = s; } else cur = cur ? cur + ' ' + s : s; }
  if (cur) out.push(cur); return out;
}
export function chunkHtml(html) {
  return html.replace(/<p((?:\s[^>]*)?)>([\s\S]*?)<\/p>/g, (m, attrs, inner) => {
    if (wc(inner) <= SPLIT_ABOVE) return m;
    const parts = splitInner(inner); if (parts.length < 2) return m;
    return parts.map((p) => `<p${attrs}>${p}</p>`).join('');
  });
}
if (process.argv[1]?.endsWith('chunk-paragraphs.mjs')) {
  let files = 0, before = 0, after = 0;
  (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) {
    const html = readFileSync(p, 'utf8'), out = chunkHtml(html); before += (html.match(/<p[\s>]/g) || []).length; after += (out.match(/<p[\s>]/g) || []).length;
    if (out !== html) { writeFileSync(p, out); files++; } } } })('dist');
  console.log(`Chunked long paragraphs in ${files} files: ${before} -> ${after} paragraphs.`);
}
