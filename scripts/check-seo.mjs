import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { words } from './wordcount.mjs';
const DIST = 'dist', SITE = 'https://www.imageto20kb.in';
const html = []; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); } })(DIST);
const noindexRoutes = new Set(), errors = [], titles = new Map(), descs = new Map(), routes = new Set();
const route = (p) => '/' + p.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/404\.html$/, '404/');
for (const p of html) routes.add(route(p).replace(/^\/\//, '/'));
for (const p of html) {
  const s = readFileSync(p, 'utf8'), r = route(p);
  const is404 = /noindex/.test(s.match(/<meta name="robots"[^>]*>/)?.[0] ?? ''); if (is404) noindexRoutes.add(r);
  const t = s.match(/<title>(.*?)<\/title>/)?.[1], d = s.match(/<meta name="description" content="(.*?)"/)?.[1], c = s.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  if (!is404 && r !== '/contact/' && words(s) < 600) errors.push(`${r}: only ${words(s)} words (min 600)`);
  if (!/rel="apple-touch-icon"/.test(s) || !/rel="manifest"/.test(s) || !/favicon-96x96\.png/.test(s)) errors.push(`${r}: favicon links missing`);
  if (!t) errors.push(`${r}: no title`); if (!d) errors.push(`${r}: no description`);
  if ((s.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${r}: expected exactly one h1`);
  if (!is404) {
    if (c !== SITE + r) errors.push(`${r}: canonical ${c}`);
    if (/noindex/.test(s)) errors.push(`${r}: unexpected noindex`);
    if (titles.has(t)) errors.push(`${r}: duplicate title with ${titles.get(t)}`); titles.set(t, r);
    if (descs.has(d)) errors.push(`${r}: duplicate description with ${descs.get(d)}`); descs.set(d, r);
  }
  for (const m of s.matchAll(/<a [^>]*href="(\/[^"#]*)(?:#[^"]*)?"/g)) { const h = m[1]; if (/\.(svg|xml|txt)$/.test(h)) continue; if (!routes.has(h)) errors.push(`${r}: broken internal link ${h}`); }
  for (const m of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { errors.push(`${r}: invalid JSON-LD`); } }
}
const sm = readFileSync(join(DIST, 'sitemap.xml'), 'utf8'); const locs = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
for (const l of locs) if (!routes.has(l.replace(SITE, ''))) errors.push(`sitemap URL has no page: ${l}`);
for (const r of routes) if (!noindexRoutes.has(r) && !locs.includes(SITE + r)) errors.push(`page missing from sitemap: ${r}`);
if (!readFileSync(join(DIST, 'robots.txt'), 'utf8').includes(`Sitemap: ${SITE}/sitemap.xml`)) errors.push('robots.txt missing sitemap');
for (const e of ['404.html','500.html','403/index.html','503/index.html']) if (!existsSync(join(DIST, e))) errors.push(`missing error page ${e}`);
if (!readFileSync(join(DIST, 'contact/index.html'), 'utf8').includes('mailto:compressimageto@gmail.com')) errors.push('contact email missing');
if (!existsSync(join(DIST, 'llms.txt'))) errors.push('llms.txt missing');
for (const [page, kw] of [['compress-image-to-200kb/', 'compress image to 200kb'], ['image-compressor/', 'squoosh image compression'], ['', 'squoosh']]) if (!new RegExp(kw, 'i').test(readFileSync(join(DIST, page, 'index.html'), 'utf8'))) errors.push(`keyword "${kw}" missing on /${page}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`SEO check passed: ${html.length} HTML files, ${locs.length} sitemap URLs.`);
