import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

// Runs the real built page script in a simulated DOM. Requires `npm run build` first.
function load() {
  const html = readFileSync('dist/index.html', 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'https://www.imageto20kb.in/', pretendToBeVisual: true,
    beforeParse(w) { (w as any).matchMedia = () => ({ matches: true, addEventListener() {}, addListener() {} }); } });
  const d = dom.window.document;
  const q = (id: string) => d.getElementById(id)!;
  return { dom, d, q, open: () => (q('menu-btn') as HTMLElement).click(), isOpen: () => q('nav').classList.contains('open') };
}
describe('mobile drawer', () => {
  let t: ReturnType<typeof load>;
  beforeEach(() => { t = load(); });
  it('starts closed', () => { expect(t.isOpen()).toBe(false); expect(t.q('menu-btn').getAttribute('aria-expanded')).toBe('false'); });
  it('opens, shows overlay, locks scroll', () => {
    t.open(); expect(t.isOpen()).toBe(true); expect(t.q('overlay').classList.contains('show')).toBe(true);
    expect(t.d.body.classList.contains('menu-open')).toBe(true); expect(t.q('menu-btn').getAttribute('aria-expanded')).toBe('true');
  });
  const closed = () => { expect(t.isOpen()).toBe(false); expect(t.q('overlay').classList.contains('show')).toBe(false); expect(t.d.body.classList.contains('menu-open')).toBe(false); };
  it('closes with the toggle button', () => { t.open(); (t.q('menu-btn') as HTMLElement).click(); closed(); });
  it('closes with the close button', () => { t.open(); (t.q('nav-close') as HTMLElement).click(); closed(); });
  it('closes by tapping the overlay', () => { t.open(); (t.q('overlay') as HTMLElement).click(); closed(); });
  it('closes with Escape', () => { t.open(); t.d.dispatchEvent(new (t.dom.window as any).KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); closed(); });
  it('closes when a link is tapped', () => { t.open(); (t.d.querySelector('#nav a') as HTMLElement).addEventListener('click', (e) => e.preventDefault()); (t.d.querySelector('#nav a') as HTMLElement).click(); closed(); });
  it('can reopen after closing', () => { t.open(); (t.q('nav-close') as HTMLElement).click(); t.open(); expect(t.isOpen()).toBe(true); });
});

describe('header navigation and Tools dropdown', () => {
  it('has only Home, About, Contact, Tools, Blog, FAQs at the top level', () => {
    const { d } = load();
    const items = [...d.querySelectorAll('#nav > a:not(.nav-cta), #nav > .dd > button')].map((e) => (e.textContent || '').replace('▾', '').trim());
    expect(items).toEqual(['Home', 'About', 'Contact', 'Tools', 'Blog', 'FAQs']);
  });
  it('Tools dropdown lists tool links, opens, closes with Escape and outside click', () => {
    const t = load(); const btn = t.q('tools-btn') as HTMLElement, panel = t.q('tools-menu');
    expect(panel.querySelectorAll('a').length).toBeGreaterThan(10);
    btn.click(); expect(panel.classList.contains('open')).toBe(true); expect(btn.getAttribute('aria-expanded')).toBe('true');
    t.d.dispatchEvent(new (t.dom.window as any).KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(panel.classList.contains('open')).toBe(false);
    btn.click(); (t.d.body as HTMLElement).click(); expect(panel.classList.contains('open')).toBe(false);
  });
  it('closing the mobile drawer also collapses Tools', () => {
    const t = load(); t.open(); (t.q('tools-btn') as HTMLElement).click(); expect(t.q('tools-menu').classList.contains('open')).toBe(true);
    (t.q('nav-close') as HTMLElement).click(); expect(t.q('tools-menu').classList.contains('open')).toBe(false);
  });
});
describe('footer', () => {
  it('has Tools, Exam forms, Site and Legal sections, a logo, and no email or byte-definition line', () => {
    const { d } = load(); const f = d.querySelector('footer')!;
    expect([...f.querySelectorAll('h2')].map((h) => h.textContent)).toEqual(['Tools', 'Exam forms', 'Site', 'Legal']);
    expect(f.querySelector('img.logo-img')).not.toBeNull();
    expect(f.textContent).not.toContain('@'); expect(f.textContent).not.toContain('1,024');
  });
});

// ---- cookie consent ----
function loadWith(storage: Record<string, string> = {}, path = 'dist/index.html') {
  const dom = new JSDOM(readFileSync(path, 'utf8'), { runScripts: 'dangerously', url: 'https://www.imageto20kb.in/', pretendToBeVisual: true,
    beforeParse(w) { (w as any).matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} }); for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v); } });
  const d = dom.window.document;
  const gaScripts = () => [...d.querySelectorAll('script')].filter((s) => (s.getAttribute('src') || '').includes('googletagmanager.com'));
  return { dom, d, gaScripts, banner: () => d.getElementById('consent') as HTMLElement };
}
describe('cookie consent', () => {
  it('shows the banner and does NOT load Google Analytics before a choice', () => {
    const t = loadWith(); expect(t.banner().hidden).toBe(false); expect(t.gaScripts().length).toBe(0);
  });
  it('accept loads the Google tag, stores the choice and hides the banner', () => {
    const t = loadWith(); (t.d.getElementById('consent-accept') as HTMLElement).click();
    expect(t.dom.window.localStorage.getItem('cookie-consent')).toBe('granted');
    expect(t.gaScripts().length).toBe(1); expect(t.gaScripts()[0].getAttribute('src')).toContain('G-YNJS39ZTBL'); expect(t.banner().hidden).toBe(true);
  });
  it('reject keeps analytics off and disables the tag', () => {
    const t = loadWith(); (t.d.getElementById('consent-reject') as HTMLElement).click();
    expect(t.dom.window.localStorage.getItem('cookie-consent')).toBe('denied'); expect(t.gaScripts().length).toBe(0);
    expect((t.dom.window as any)['ga-disable-G-YNJS39ZTBL']).toBe(true); expect(t.banner().hidden).toBe(true);
  });
  it('remembers a previous accept (loads tag, no banner) and a previous reject (no tag, no banner)', () => {
    const a = loadWith({ 'cookie-consent': 'granted' }); expect(a.gaScripts().length).toBe(1); expect(a.banner().hidden).toBe(true);
    const r = loadWith({ 'cookie-consent': 'denied' }); expect(r.gaScripts().length).toBe(0); expect(r.banner().hidden).toBe(true);
  });
  it('footer Cookie settings link reopens the banner', () => {
    const t = loadWith({ 'cookie-consent': 'denied' }); (t.d.querySelector('[data-cookie-settings]') as HTMLElement).click(); expect(t.banner().hidden).toBe(false);
  });
  it('cookie policy page has choice buttons that work', () => {
    const t = loadWith({}, 'dist/cookie-policy/index.html'); (t.d.querySelector('[data-consent="granted"]') as HTMLElement).click();
    expect(t.d.getElementById('consent-status')!.textContent).toContain('accepted'); expect(t.gaScripts().length).toBe(1);
    (t.d.querySelector('[data-consent="denied"]') as HTMLElement).click(); expect(t.d.getElementById('consent-status')!.textContent).toContain('rejected');
  });
});

describe('layout guards (static checks on built HTML/CSS)', () => {
  it('uses a centred prose column and no render-blocking stylesheet', () => {
    const html = readFileSync('dist/index.html', 'utf8');
    expect(html).not.toMatch(/<link[^>]+rel="stylesheet"/);
    expect(html).toMatch(/margin-inline:auto/);
    expect(html).toMatch(/overflow-x:clip/);
  });
});
