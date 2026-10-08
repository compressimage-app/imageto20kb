import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { words } from './wordcount.mjs';
import { report as kwReport } from './keyword-report.mjs';
const DIST = 'dist', SITE = 'https://www.imageto20kb.in';
const html = []; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); } })(DIST);
const noindexRoutes = new Set(), errors = [], titles = new Map(), descs = new Map(), routes = new Set();
const route = (p) => '/' + p.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/404\.html$/, '404/');
for (const p of html) routes.add(route(p).replace(/^\/\//, '/'));
for (const p of html) {
  const s = readFileSync(p, 'utf8'), r = route(p);
  const is404 = /noindex/.test(s.match(/<meta name="robots"[^>]*>/)?.[0] ?? ''); if (is404) noindexRoutes.add(r);
  const t = s.match(/<title>(.*?)<\/title>/)?.[1], d = s.match(/<meta name="description" content="(.*?)"/)?.[1], c = s.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  if (!is404 && words(s) < 600) errors.push(`${r}: only ${words(s)} words (min 600)`);
  if (!/rel="apple-touch-icon"/.test(s) || !/rel="manifest"/.test(s) || !/favicon-96x96\.png/.test(s)) errors.push(`${r}: favicon links missing`);
  if (!s.includes('googletagmanager.com/gtag/js?id=') || !s.includes("ID='G-YNJS39ZTBL'") || !s.includes('id="consent"')) errors.push(`${r}: Google tag loader / consent banner missing`);
  if (!s.includes('name="msvalidate.01" content="B2CC874597C52F944CF785656679176A"')) errors.push(`${r}: Bing tag missing`);
  if ((r === '/' || (!is404 && /id="tool"/.test(s))) && !s.includes('class="ba-stage"')) errors.push(`${r}: before/after missing`);
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
{ const c = readFileSync(join(DIST, 'contact/index.html'), 'utf8'); if (!c.includes('mailto:compressimageto@gmail.com')) errors.push('contact email missing'); if (!c.includes('id="contact-form"')) errors.push('contact form missing'); }
for (const f of ['before.jpg','after-20kb.jpg','after-50kb.jpg','after-100kb.jpg','after-200kb.jpg']) if (!existsSync(join(DIST, 'img', f))) errors.push(`missing image ${f}`);
if (!existsSync(join(DIST, 'llms.txt'))) errors.push('llms.txt missing');
for (const [page, kw] of [['compress-image-to-200kb/', 'compress image to 200kb'], ['image-compressor/', 'squoosh image compression'], ['', 'squoosh']]) if (!new RegExp(kw, 'i').test(readFileSync(join(DIST, page, 'index.html'), 'utf8'))) errors.push(`keyword "${kw}" missing on /${page}`);
{ const rows = kwReport(DIST); const by = Object.fromEntries(rows.map((r) => [r.route, r]));
  const h1 = rows.filter((r) => r.h1Primary).length, ten = rows.filter((r) => r.counts.primary >= 10).length;
  if (h1 < 10) errors.push(`primary keyword in H1 on only ${h1} pages (need 10+)`);
  if (ten < 10) errors.push(`primary keyword used 10+ times on only ${ten} pages (need 10+)`);
  for (const r of rows) if (r.counts.primary > 20) errors.push(`${r.route}: primary keyword used ${r.counts.primary} times (stuffing guard: max 20)`);
  const all = ['compress image to 20kb online', 'image compress to 20kb', 'compress image to 100kb', 'compress image to 100kb online', 'image compress to 100kb'];
  const need = { '/': all, '/image-compressor/': all, '/compress-image-to-20kb/': all, '/compress-image-to-100kb/': all.filter((k) => k.includes('100')) };
  for (const [route, ks] of Object.entries(need)) for (const k of ks) if (!by[route] || by[route].counts[k] < 3) errors.push(`${route}: "${k}" used ${by[route]?.counts[k] ?? 0} times (need 3+)`);
  if (!existsSync(join(DIST, 'compress-image-to-20kb/index.html'))) errors.push('no URL containing the primary keyword'); }
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`SEO check passed: ${html.length} HTML files, ${locs.length} sitemap URLs.`);
