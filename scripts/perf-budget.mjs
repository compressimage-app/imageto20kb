// Offline performance guard. Not a replacement for Lighthouse, but it catches the regressions that caused the slow mobile run.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
const DIST = 'dist'; const errors = [];
const pages = []; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); } })(DIST);
const size = (src) => { const f = join(DIST, src.split('?')[0]); return existsSync(f) ? statSync(f).size : 0; };
const rows = [];
for (const p of pages) {
  const html = readFileSync(p, 'utf8'); const route = '/' + p.slice(DIST.length + 1).replace(/index\.html$/, '');
  const eager = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).filter((t) => !/loading="lazy"/.test(t)).map((t) => t.match(/\ssrc="([^"]+)"/)?.[1]).filter(Boolean);
  const eagerBytes = eager.reduce((a, s) => a + size(s), 0);
  const modules = [...html.matchAll(/<script[^>]+type="module"[^>]+src="([^"]+)"/g)].map((m) => size(m[1]));
  const inlineJs = [...html.matchAll(/<script\b(?![^>]*(?:src=|ld\+json))[^>]*>([\s\S]*?)<\/script>/g)].reduce((a, m) => a + m[1].length, 0);
  rows.push({ route, gz: gzipSync(html).length, eager: eagerBytes, js: modules.reduce((a, b) => a + b, 0) + inlineJs });
  if (eagerBytes > 60 * 1024 && !/403|404|500|503/.test(route)) errors.push(`${route}: ${Math.round(eagerBytes / 1024)} KB of eager images (budget 60 KB)`);
  if (/\bfilter:blur\(|backdrop-filter/.test(html)) errors.push(`${route}: expensive blur filter in CSS`);
  if (/[☰◐✕▾⇆✓]/.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) errors.push(`${route}: text-symbol icons found (use SVG; they trigger font fallback)`);
  if (/@font-face|fonts\.googleapis/.test(html)) errors.push(`${route}: web font reference found`);
}
for (const r of rows.filter((r) => ['/', '/compress-image-to-20kb/', '/blog/'].includes(r.route))) console.log(`${r.route.padEnd(28)} HTML ${(r.gz / 1024).toFixed(1)} KB gz | eager images ${(r.eager / 1024).toFixed(1)} KB | page JS ${(r.js / 1024).toFixed(1)} KB`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Performance budget OK on ${rows.length} pages.`);
