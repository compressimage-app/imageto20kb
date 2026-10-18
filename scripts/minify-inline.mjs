// Astro does not minify `is:inline` scripts. This post-build step minifies every inline <script> (not JSON-LD) and inlined <style> with esbuild.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { transformSync } from 'esbuild';
const DIST = 'dist'; let before = 0, after = 0, files = 0, cssBefore = 0, cssAfter = 0;
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) {
  const html = readFileSync(p, 'utf8');
  let out = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (m, attrs, code) => {
    if (/\bsrc=/.test(attrs) || /application\/ld\+json/.test(attrs) || !code.trim()) return m;
    const min = transformSync(code, { minify: true, target: 'es2019' }).code.trim();
    before += code.length; after += min.length; return `<script${attrs}>${min}</script>`;
  });
  out = out.replace(/<style\b([^>]*)>([\s\S]*?)<\/style>/g, (m, attrs, code) => {
    if (!code.trim()) return m;
    const min = transformSync(code, { loader: 'css', minify: true }).code.trim();
    cssBefore += code.length; cssAfter += min.length; return `<style${attrs}>${min}</style>`;
  });
  if (out !== html) { writeFileSync(p, out); files++; }
} } })(DIST);
console.log(`Minified inline scripts (${before} -> ${after} bytes) and styles (${cssBefore} -> ${cssAfter} bytes) in ${files} files.`);
