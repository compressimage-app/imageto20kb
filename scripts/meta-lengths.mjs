// Lists <title> and meta description lengths for every built page. Limits: title <= 60, description <= 160 characters.
import { readFileSync, readdirSync, statSync } from 'node:fs'; import { join } from 'node:path';
export const TITLE_MAX = 60, DESC_MAX = 160, DESC_MIN = 70;
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
export function metaRows(DIST = 'dist') {
  const rows = [];
  (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) {
    const h = readFileSync(p, 'utf8'); const title = dec(h.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''); const desc = dec(h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
    rows.push({ route: '/' + p.slice(DIST.length + 1).replace(/index\.html$/, ''), title, desc, noindex: /name="robots" content="noindex/.test(h) }); } } })(DIST);
  return rows.sort((a, b) => a.route.localeCompare(b.route));
}
if (process.argv[1]?.endsWith('meta-lengths.mjs')) {
  let bad = 0;
  for (const r of metaRows()) { const t = [...r.title].length, d = [...r.desc].length, flag = t > TITLE_MAX || d > DESC_MAX || d < DESC_MIN ? 'FIX' : 'ok ';
    if (flag === 'FIX') bad++; console.log(`${flag} title ${String(t).padStart(2)} desc ${String(d).padStart(3)}  ${r.route}`); }
  console.log(bad ? `\n${bad} page(s) outside limits` : '\nAll titles <= 60 and descriptions 70-160 characters.'); process.exit(bad ? 1 : 0);
}
