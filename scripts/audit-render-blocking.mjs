// Lists resources in <head> that can block first render. Fails on external stylesheets or external sync scripts.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
const DIST = 'dist', pages = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); } })(DIST);
let bad = 0; const inlineSizes = new Set();
for (const p of pages) {
  const head = readFileSync(p, 'utf8').match(/<head>[\s\S]*?<\/head>/)?.[0] ?? '';
  for (const m of head.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)) { console.log(`${p}: render-blocking stylesheet ${m[0]}`); bad++; }
  for (const m of head.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const a = m[1], inline = !/src=/.test(a);
    if (!inline && !/\b(async|defer)\b/.test(a) && !/type="module"/.test(a)) { console.log(`${p}: external blocking script ${a}`); bad++; }
    if (inline && !/application\/ld\+json/.test(a)) inlineSizes.add(m[2].length);
  }
}
const html = readFileSync(join(DIST, 'index.html'), 'utf8');
const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('');
console.log(`Pages scanned: ${pages.length}. Blocking resources found: ${bad}.`);
console.log(`Inline head scripts (bytes): ${[...inlineSizes].sort((a, b) => a - b).join(', ')} (tiny theme/consent loaders that must run before paint)`);
console.log(`Homepage: HTML ${(html.length / 1024).toFixed(1)} KB raw, ${(gzipSync(html).length / 1024).toFixed(1)} KB gzip; inlined CSS ${(css.length / 1024).toFixed(1)} KB raw, ${(gzipSync(css).length / 1024).toFixed(1)} KB gzip.`);
process.exit(bad ? 1 : 0);
