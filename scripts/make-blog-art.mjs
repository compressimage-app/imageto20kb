// Generates original, animated SVG illustrations for the blog (no third-party artwork, so no copyright issues).
// Animations are CSS inside the SVG and are disabled for prefers-reduced-motion. Run: node scripts/make-blog-art.mjs
import { writeFileSync } from 'node:fs';
const font = "font-family=\"system-ui,-apple-system,Segoe UI,Roboto,sans-serif\"";
const css = `.f{animation:fl 6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.b{animation-delay:-2s}.c{animation-delay:-4s}
@keyframes fl{50%{transform:translateY(-14px)}}
@keyframes ring{from{transform:scale(.7);opacity:.7}to{transform:scale(1.6);opacity:0}}
.r{animation:ring 2.8s ease-out infinite;transform-box:fill-box;transform-origin:center}.r2{animation-delay:-1.4s}
@keyframes draw{from{stroke-dashoffset:700}60%,to{stroke-dashoffset:0}}
.d{stroke-dasharray:700;animation:draw 4.5s ease-in-out infinite}
@keyframes pop{0%{opacity:0;transform:scale(.4)}12%,80%{opacity:1;transform:scale(1)}100%{opacity:0}}
.p{animation:pop 6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.p1{animation-delay:.5s}.p2{animation-delay:1.2s}.p3{animation-delay:1.9s}.p4{animation-delay:2.6s}
@keyframes sw{0%,45%{opacity:1}50%,95%{opacity:0}100%{opacity:1}}@keyframes sw2{0%,45%{opacity:0}50%,95%{opacity:1}100%{opacity:0}}
.s1{animation:sw 6s infinite}.s2{animation:sw2 6s infinite}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}`;
const wrap = (w, h, c1, c2, body, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><style>${css}</style><rect width="${w}" height="${h}" fill="url(#g)"/><g fill="#fff"><circle class="f" cx="${w * 0.12}" cy="${h * 0.2}" r="${h * 0.16}" opacity=".10"/><circle class="f b" cx="${w * 0.9}" cy="${h * 0.78}" r="${h * 0.22}" opacity=".10"/><circle class="f c" cx="${w * 0.78}" cy="${h * 0.14}" r="${h * 0.07}" opacity=".16"/></g>${body}</svg>`;
const card = (x, y, w, h, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#fff" ${extra}/>`;
const chip = (x, y, t, fill = '#10172A') => `<g><rect x="${x}" y="${y}" width="${t.length * 17 + 36}" height="46" rx="23" fill="${fill}"/><text x="${x + 18}" y="${y + 31}" ${font} font-size="24" font-weight="700" fill="#fff">${t}</text></g>`;
const person = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="46" fill="#c7d2fe"/><path d="M${cx - 90} ${cy + 150} q90 -150 ${180} 0z" fill="#a5b4fc"/>`;
const sig = (x, y, s = 1, stroke = '#4338ca', cls = '') => `<path class="${cls}" transform="translate(${x} ${y}) scale(${s})" d="M0 60 C20 -10 50 -10 40 50 C35 90 90 0 100 40 C105 70 140 10 160 45 C170 62 200 40 230 30" fill="none" stroke="${stroke}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
const check = (x, y, cls) => `<g class="p ${cls}"><circle cx="${x}" cy="${y}" r="24" fill="#10b981"/><path d="M${x - 11} ${y} l8 9 l15 -17" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const kbArt = (n, a, b, label) => [a, b, label, `<g class="f">${card(330, 140, 250, 330)}<rect x="364" y="190" width="182" height="120" rx="14" fill="#c7d2fe"/><circle cx="410" cy="232" r="18" fill="#fff"/><rect x="364" y="340" width="150" height="18" rx="9" fill="#e0e7ff"/><rect x="364" y="378" width="110" height="18" rx="9" fill="#e0e7ff"/></g><path d="M620 305 h70" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M668 280 l28 25 l-28 25" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><g class="f b"><rect x="730" y="190" width="300" height="250" rx="30" fill="#fff"/><text x="880" y="338" text-anchor="middle" ${font} font-size="110" font-weight="800" fill="#4338ca">${n}</text><text x="880" y="400" text-anchor="middle" ${font} font-size="44" font-weight="700" fill="#0e7490">KB</text></g>${check(1030, 190, 'p1')}`];
const art = {
  'how-to-compress-image-to-20kb': kbArt('20', '#4338ca', '#06B6D4', 'Illustration of a photo shrinking to a 20 KB file'),
  'how-to-compress-image-to-100kb': kbArt('100', '#0e7490', '#7c3aed', 'Illustration of a photo shrinking to a 100 KB file'),
  'how-to-resize-photo-and-signature-for-online-exam-forms': ['#4338ca', '#0e7490', 'Illustration of a photo and a signature card being resized to small file sizes',
    `<g class="f">${card(300, 120, 270, 350)}${person(435, 250)}${chip(335, 400, '35 KB', '#4338ca')}</g><g class="f b">${card(650, 210, 330, 170)}${sig(690, 262, 1.1, '#4338ca', 'd')}${chip(700, 400, '12 KB', '#0e7490')}</g><path d="M580 300 h56" stroke="#fff" stroke-width="8" stroke-linecap="round"/><path d="M620 280 l22 20 l-22 20" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`],
  'photo-rejected-file-size-too-large-after-compression': ['#be185d', '#4338ca', 'Illustration of a file with a warning turning into a green check',
    `<g class="f">${card(420, 110, 350, 410)}<rect x="460" y="170" width="200" height="22" rx="11" fill="#e0e7ff"/><rect x="460" y="215" width="270" height="22" rx="11" fill="#e0e7ff"/><rect x="460" y="260" width="240" height="22" rx="11" fill="#e0e7ff"/><text x="460" y="400" ${font} font-size="86" font-weight="800" fill="#4338ca">20 KB</text></g><g class="s1"><circle cx="790" cy="150" r="64" fill="#ef4444"/><rect x="782" y="112" width="16" height="48" rx="8" fill="#fff"/><circle cx="790" cy="182" r="9" fill="#fff"/></g><g class="s2"><circle cx="790" cy="150" r="64" fill="#10b981"/><path d="M762 150 l20 22 l38 -42" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/></g>`],
  'how-to-make-a-clean-signature-image-for-online-forms': ['#0e7490', '#4338ca', 'Illustration of a signature being drawn on white paper',
    `<g class="f">${card(230, 130, 740, 360)}<rect x="300" y="400" width="600" height="6" rx="3" fill="#c7d2fe"/>${sig(330, 250, 2.4, '#1e1b4b', 'd')}${chip(300, 440, '10–20 KB', '#0e7490')}</g>`],
  'photo-upload-checklist-for-private-jobs-and-online-admissions': ['#7c3aed', '#06B6D4', 'Illustration of a checklist with items being ticked off',
    `<g class="f">${card(400, 110, 400, 420)}<rect x="520" y="86" width="160" height="50" rx="16" fill="#10172A"/>${[0, 1, 2, 3].map((i) => `<rect x="${500}" y="${185 + i * 78}" width="${220 - (i % 2) * 50}" height="20" rx="10" fill="#e0e7ff"/>${check(455, 195 + i * 78, 'p' + (i + 1))}`).join('')}</g>`],
  'jpg-png-or-webp-which-format-for-online-forms': ['#0ea5e9', '#4338ca', 'Illustration of three image format cards labelled JPG, PNG and WebP',
    ['JPG|#f59e0b|300|180|f', 'PNG|#10b981|510|130|f b', 'WEBP|#ec4899|720|180|f c'].map((s) => { const [t, c, x, y, k] = s.split('|'); return `<g class="${k}">${card(+x, +y, 190, 260)}<rect x="${+x + 22}" y="${+y + 24}" width="146" height="110" rx="14" fill="${c}" opacity=".85"/><circle cx="${+x + 70}" cy="${+y + 70}" r="16" fill="#fff" opacity=".8"/><text x="${+x + 95}" y="${+y + 200}" text-anchor="middle" ${font} font-size="38" font-weight="800" fill="#10172A">${t}</text></g>`; }).join('')],
  'is-it-safe-to-compress-photos-online': ['#0f766e', '#1e1b4b', 'Illustration of a shield with a lock protecting a photo',
    `<g fill="none" stroke="#fff" stroke-width="5"><circle class="r" cx="600" cy="315" r="170"/><circle class="r r2" cx="600" cy="315" r="170"/></g><g class="f"><path d="M600 110 L770 175 V320 C770 420 690 485 600 520 C510 485 430 420 430 320 V175 Z" fill="#fff"/><rect x="545" y="285" width="110" height="90" rx="16" fill="#0f766e"/><path d="M570 285 v-28 a30 30 0 0 1 60 0 v28" fill="none" stroke="#0f766e" stroke-width="16" stroke-linecap="round"/><circle cx="600" cy="330" r="12" fill="#fff"/></g>`],
};
for (const [slug, [a, b, label, body]] of Object.entries(art)) writeFileSync(`public/img/blog/${slug}.svg`, wrap(1200, 630, a, b, body, label));
// blog index hero
const hero = `<g class="f">${card(980, 70, 200, 250)}${person(1080, 160).replace(/r="46"/, 'r="34"')}${chip(1000, 270, '35 KB', '#4338ca')}</g><g class="f b">${card(1230, 180, 250, 130)}${sig(1255, 215, 0.9, '#0e7490', 'd')}</g>${check(1180, 400, 'p1')}${check(1260, 430, 'p2')}${check(1340, 400, 'p3')}`;
writeFileSync('public/img/blog/blog-hero.svg', wrap(1600, 520, '#4338ca', '#0e7490', hero, 'Animated illustration of photo and signature cards being optimised'));
console.log('blog art written');
