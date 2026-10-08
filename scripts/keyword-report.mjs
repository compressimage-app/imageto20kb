// Counts target keywords in the visible <main> text of every built page (case-insensitive, "20KB" and "20 KB" both match).
// "primary" counts every occurrence of the phrase, including inside longer variants like "compress image to 20kb online".
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
export const KW = {
  primary: /compress image to 20\s?kb/gi,
  'compress image to 20kb online': /compress image to 20\s?kb online/gi,
  'image compress to 20kb': /image compress to 20\s?kb/gi,
  'compress image to 100kb': /compress image to 100\s?kb/gi,
  'compress image to 100kb online': /compress image to 100\s?kb online/gi,
  'image compress to 100kb': /image compress to 100\s?kb/gi,
};
const clean = (h) => h.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ');
export function report(DIST = 'dist') {
  const rows = [];
  (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) {
    const html = readFileSync(p, 'utf8'); const main = html.match(/<main[\s\S]*?<\/main>/)?.[0]; if (!main) continue;
    const route = '/' + p.slice(DIST.length + 1).replace(/index\.html$/, '');
    const text = clean(main); const h1 = clean(main.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? ''); const title = clean(html.match(/<title>[\s\S]*?<\/title>/)?.[0] ?? '');
    const counts = Object.fromEntries(Object.entries(KW).map(([k, re]) => [k, (text.match(re) || []).length]));
    rows.push({ route, counts, h1Primary: /compress image to 20\s?kb/i.test(h1), titlePrimary: /compress image to 20\s?kb/i.test(title), h1 });
  } } })(DIST);
  return rows.sort((a, b) => a.route.localeCompare(b.route));
}
if (process.argv[1].endsWith('keyword-report.mjs')) {
  const rows = report();
  console.log('primary | +20 online | img cmp 20 | cmp 100 | cmp 100 online | img cmp 100 | H1 | title | route');
  for (const r of rows) { const c = r.counts; if (/403|404|500|503/.test(r.route)) continue;
    console.log([c.primary, c['compress image to 20kb online'], c['image compress to 20kb'], c['compress image to 100kb'], c['compress image to 100kb online'], c['image compress to 100kb']].map((n) => String(n).padStart(7)).join(' |'), '|', r.h1Primary ? ' Y' : ' -', '|', r.titlePrimary ? ' Y' : ' -', '|', r.route); }
  const withH1 = rows.filter((r) => r.h1Primary).length, with10 = rows.filter((r) => r.counts.primary >= 10).length;
  console.log(`\nPages with the primary keyword in the H1: ${withH1}. Pages with 10+ primary uses: ${with10}.`);
}
