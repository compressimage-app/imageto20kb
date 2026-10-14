// Heading structure audit over the full document order (header, main, footer).
// Rules: exactly one <h1>; the first heading is the <h1>; no level may jump more than one deeper (h1 -> h3); no <h1> after other headings.
import { readFileSync, readdirSync, statSync } from 'node:fs'; import { join } from 'node:path';
export function headingProblems(DIST = 'dist') {
  const problems = [];
  (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) {
    const html = readFileSync(p, 'utf8').replace(/<script[\s\S]*?<\/script>/g, ''); const route = '/' + p.slice(DIST.length + 1).replace(/index\.html$/, '');
    const hs = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ l: +m[1], t: m[2].replace(/<[^>]+>/g, '').trim() }));
    if (!hs.length) return; if (hs.filter((h) => h.l === 1).length !== 1) problems.push(`${route}: ${hs.filter((h) => h.l === 1).length} H1 headings`);
    if (hs[0].l !== 1) problems.push(`${route}: first heading is H${hs[0].l} "${hs[0].t}", not the H1`);
    for (let i = 1; i < hs.length; i++) { if (hs[i].l === 1) problems.push(`${route}: H1 "${hs[i].t}" appears after H${hs[i - 1].l} "${hs[i - 1].t}"`); else if (hs[i].l > hs[i - 1].l + 1) problems.push(`${route}: skipped level, H${hs[i - 1].l} "${hs[i - 1].t}" -> H${hs[i].l} "${hs[i].t}"`); }
  } } })(DIST);
  return problems;
}
if (process.argv[1]?.endsWith('heading-audit.mjs')) { const p = headingProblems(); if (p.length) { console.error([...new Set(p)].slice(0, 40).join('\n')); console.error(`\n${p.length} heading problem(s)`); process.exit(1); } console.log('Heading order OK on every page.'); }
