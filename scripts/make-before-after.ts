/**
 * Generates the original sample illustration (no third-party artwork, so no copyright issues)
 * and compresses it with the same search used by the site to produce honest before/after examples.
 * Run: npx vite-node scripts/make-before-after.ts
 */
import { createCanvas } from '@napi-rs/canvas';
import { writeFileSync } from 'node:fs';
import { fitToTarget } from '../src/lib/image/fit-target';
import { fitDimensions, kbToBytes } from '../src/lib/image/target-size';

const W = 1200, H = 800;
let seed = 7; const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const c = createCanvas(W, H), x = c.getContext('2d');

// sky
const sky = x.createLinearGradient(0, 0, 0, H * 0.62);
sky.addColorStop(0, '#1b1b4b'); sky.addColorStop(0.45, '#6a3a8f'); sky.addColorStop(0.8, '#f08a5d'); sky.addColorStop(1, '#ffd29a');
x.fillStyle = sky; x.fillRect(0, 0, W, H);
// stars
for (let i = 0; i < 140; i++) { x.fillStyle = `rgba(255,255,255,${0.2 + rnd() * 0.7})`; x.fillRect(rnd() * W, rnd() * H * 0.35, 1 + rnd() * 1.5, 1 + rnd() * 1.5); }
// sun glow
const sun = x.createRadialGradient(W * 0.68, H * 0.58, 4, W * 0.68, H * 0.58, 260);
sun.addColorStop(0, 'rgba(255,248,220,1)'); sun.addColorStop(0.15, 'rgba(255,214,150,.95)'); sun.addColorStop(1, 'rgba(255,170,110,0)');
x.fillStyle = sun; x.fillRect(0, 0, W, H);
// mountain layers
const horizon = H * 0.62;
const layers = [{ base: 0.46, amp: 120, col: '#7a4a86', f: 0.004 }, { base: 0.52, amp: 100, col: '#56397a', f: 0.006 }, { base: 0.57, amp: 80, col: '#3a2c66', f: 0.009 }, { base: 0.61, amp: 50, col: '#231d49', f: 0.014 }];
const ridge = (l: typeof layers[0], px: number) => H * l.base + Math.sin(px * l.f + l.amp) * l.amp * 0.5 + Math.sin(px * l.f * 2.7 + 1.3) * l.amp * 0.22 + Math.sin(px * l.f * 7.1) * l.amp * 0.08;
for (const l of layers) {
  x.beginPath(); x.moveTo(0, horizon + 2);
  for (let px = 0; px <= W; px += 3) x.lineTo(px, Math.min(ridge(l, px), horizon));
  x.lineTo(W, horizon + 2); x.closePath(); x.fillStyle = l.col; x.fill();
}
// pine trees on nearest ridge
x.fillStyle = '#150f33';
for (let px = 0; px < W; px += 9 + rnd() * 10) { const y = Math.min(ridge(layers[3], px), horizon), h = 14 + rnd() * 26; x.beginPath(); x.moveTo(px, y - h); x.lineTo(px - h * 0.28, y + 2); x.lineTo(px + h * 0.28, y + 2); x.fill(); }
// lake: mirrored sky
const lake = x.createLinearGradient(0, horizon, 0, H);
lake.addColorStop(0, '#f0a070'); lake.addColorStop(0.35, '#8d4a8a'); lake.addColorStop(1, '#1d1a45');
x.fillStyle = lake; x.fillRect(0, horizon, W, H - horizon);
x.globalAlpha = 0.35; x.drawImage(c, 0, 0, W, horizon, 0, horizon, W, H - horizon); x.globalAlpha = 1;
const refl = x.createRadialGradient(W * 0.68, horizon + 30, 4, W * 0.68, horizon + 30, 220);
refl.addColorStop(0, 'rgba(255,230,170,.85)'); refl.addColorStop(1, 'rgba(255,170,110,0)'); x.fillStyle = refl; x.fillRect(0, horizon, W, H - horizon);
// ripples
for (let i = 0; i < 520; i++) { const y = horizon + 6 + Math.pow(rnd(), 1.6) * (H - horizon - 8), w = 20 + rnd() * 140; x.fillStyle = `rgba(255,${200 + (rnd() * 40) | 0},${150 + (rnd() * 60) | 0},${0.05 + rnd() * 0.12})`; x.fillRect(rnd() * W - w / 2, y, w, 1 + rnd() * 2); }
// birds
x.strokeStyle = '#2a1d4a'; x.lineWidth = 2;
for (const [bx, by] of [[300, 190], [350, 170], [410, 205], [520, 150]]) { x.beginPath(); x.moveTo(bx - 12, by); x.quadraticCurveTo(bx - 5, by - 9, bx, by); x.quadraticCurveTo(bx + 5, by - 9, bx + 12, by); x.stroke(); }
// film grain for photographic detail
const img = x.getImageData(0, 0, W, H), d = img.data;
for (let i = 0; i < d.length; i += 4) { const n = (rnd() - 0.5) * 34; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
x.putImageData(img, 0, 0);

const main = async () => {
  const before = await c.encode('jpeg', 92);
  writeFileSync('public/img/before.jpg', before);
  const out: any = { before: { bytes: before.length, width: W, height: H }, after: {} };
  for (const kb of [20, 50, 100, 200]) {
    const r = await fitToTarget<{ buf: Buffer; width: number; height: number }>({
      targetBytes: kbToBytes(kb), lossy: true, minQuality: 0.1, minScale: 24 / H,
      async encode(s, q) {
        const d2 = fitDimensions(W, H, undefined, undefined, s), cc = createCanvas(d2.width, d2.height), cx = cc.getContext('2d');
        cx.imageSmoothingQuality = 'high'; cx.drawImage(c, 0, 0, d2.width, d2.height);
        const buf = await cc.encode('jpeg', Math.round(q * 100));
        return { size: buf.length, data: { buf, ...d2 } };
      },
    });
    const { buf, width, height } = r.probe.data;
    writeFileSync(`public/img/after-${kb}kb.jpg`, buf);
    out.after[kb] = { bytes: buf.length, width, height, achieved: r.achieved, quality: Math.round(r.quality * 100) };
  }
  writeFileSync('src/data/ba.json', JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 1));
};
main();
