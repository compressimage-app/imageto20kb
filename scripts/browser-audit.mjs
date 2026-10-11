// Real-browser regression check of dist/ on desktop and mobile. Optional dev tooling:
//   npm i -D puppeteer-core            (and either set CHROME_PATH to Chrome/Chromium, or npm i -D @sparticuz/chromium)
//   npm run build && npm run audit:browser
// It caught bugs unit tests cannot: hidden-on-desktop buttons that were visible, invalid CSS shorthands, sideways overflow.
import http from 'node:http'; import zlib from 'node:zlib';
import { readFileSync, existsSync, statSync } from 'node:fs'; import { join, extname } from 'node:path';
const root = join(process.cwd(), 'dist'), PORT = 4401;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]); let f = join(root, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  let status = 200; if (!existsSync(f)) { f = join(root, '404.html'); status = 404; }
  const ext = extname(f); let body = readFileSync(f); const h = { 'content-type': types[ext] || 'application/octet-stream' };
  if (['.html', '.js', '.css', '.svg', '.xml', '.txt'].includes(ext) && /br/.test(req.headers['accept-encoding'] || '')) { body = zlib.brotliCompressSync(body); h['content-encoding'] = 'br'; }
  res.writeHead(status, h); res.end(body);
}).listen(PORT);
let puppeteer; try { puppeteer = (await import('puppeteer-core')).default; } catch { console.error('Install puppeteer-core first: npm i -D puppeteer-core'); process.exit(2); }
let exe = process.env.CHROME_PATH, args = ['--no-sandbox'];
if (!exe) { try { const c = (await import('@sparticuz/chromium')).default; exe = await c.executablePath(); args = [...c.args, '--no-sandbox']; } catch { console.error('Set CHROME_PATH to a Chrome/Chromium binary, or npm i -D @sparticuz/chromium'); process.exit(2); } }
const browser = await puppeteer.launch({ executablePath: exe, args, headless: 'shell' });
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8'); const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.imageto20kb\.in([^<]*)<\/loc>/g)].map((m) => m[1]);
const problems = [];
const shown = (el) => !!el && getComputedStyle(el).display !== 'none' && getComputedStyle(el).visibility !== 'hidden' && el.getBoundingClientRect().width > 0;
for (const [label, vp] of [['desktop', { width: 1366, height: 768 }], ['mobile', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
  for (const path of paths) {
    const page = await browser.newPage(); await page.setViewport(vp);
    const errs = []; page.on('pageerror', (e) => errs.push('JS error: ' + e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); }); page.on('requestfailed', (r) => { if (!/google/.test(r.url())) errs.push('request failed: ' + r.url()); });
    await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle0' });
    const r = await page.evaluate((shownSrc) => {
      const shown = new Function('el', 'return (' + shownSrc + ')(el)');
      const q = (s) => document.querySelector(s);
      return { overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, close: shown(q('#nav-close')), menu: shown(q('#menu-btn')), cta: shown(q('#nav > a.nav-cta')), title: shown(q('.nav-title')), nav: shown(q('#nav')), navLinks: [...document.querySelectorAll('#nav > a:not(.nav-cta)')].filter(shown).length };
    }, shown.toString());
    const tag = `${label} ${path}`;
    if (r.overflow > 0) problems.push(`${tag}: sideways overflow of ${r.overflow}px`);
    if (label === 'desktop') { if (r.close) problems.push(`${tag}: close (X) button visible on desktop`); if (r.menu) problems.push(`${tag}: hamburger visible on desktop`); if (r.cta) problems.push(`${tag}: drawer CTA visible on desktop`); if (r.title) problems.push(`${tag}: drawer title visible on desktop`); if (r.navLinks !== 5) problems.push(`${tag}: expected 5 visible top-level links (+Tools), saw ${r.navLinks}`); }
    else { if (r.nav) problems.push(`${tag}: drawer open on load`); if (!r.menu) problems.push(`${tag}: menu button missing`); }
    for (const e of errs) problems.push(`${tag}: ${e}`);
    if (label === 'mobile' && path === '/') { // drawer interaction
      await page.click('#menu-btn'); await new Promise((s) => setTimeout(s, 450));
      const open = await page.evaluate((src) => { const f = new Function('el', 'return (' + src + ')(el)'); return { nav: f(document.querySelector('#nav')), close: f(document.querySelector('#nav-close')) }; }, shown.toString());
      if (!open.nav || !open.close) problems.push('mobile /: drawer did not open with a visible close button');
      await page.click('#nav-close'); await new Promise((s) => setTimeout(s, 450));
      if (await page.evaluate((src) => new Function('el', 'return (' + src + ')(el)')(document.querySelector('#nav')), shown.toString())) problems.push('mobile /: drawer did not close');
    }
    await page.close();
  }
}
await browser.close(); server.close();
console.log(`Checked ${paths.length} pages x 2 viewports.`);
if (problems.length) { console.error(problems.join('\n')); process.exit(1); } console.log('Browser audit OK: no overflow, correct header on desktop/mobile, drawer opens/closes, no console errors.');
