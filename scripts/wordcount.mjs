import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
export function words(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  const t = main.replace(/<section class="panel"[\s\S]*?<\/section>/, '') // exclude tool UI text
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ');
  return t.split(/\s+/).filter((w) => /\w/.test(w)).length;
}
export function allPages(DIST = 'dist') {
  const out = {}; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && (out['/' + p.slice(DIST.length + 1).replace(/index\.html$/, '')] = words(readFileSync(p, 'utf8'))); } })(DIST);
  return out;
}
if (process.argv[1].endsWith('wordcount.mjs')) for (const [k, v] of Object.entries(allPages()).sort()) console.log(String(v).padStart(5), k);
