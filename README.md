# ImageTo20KB.in

Browser-only image compressor (Astro + TypeScript, static output) for https://www.imageto20kb.in/.
Images are decoded, resized and encoded locally with Canvas; there is no upload endpoint and no image API.

## Develop
```
npm install
npm run dev        # http://localhost:4321
npm run verify     # build + unit tests + SEO/link/sitemap check
```

## Structure
- `src/lib/image/` engine: `compress-image.ts` (bounded quality search, then gradual resize), `target-size.ts`, `file-validation.ts` (magic-byte checks), `image-loader.ts`, `format-support.ts`
- `src/components/Tool.astro` UI (the engine and JSZip are dynamically imported on first use)
- `src/data/landing.ts` content for the 11 tool pages; `legal.ts`, `faqs.ts`
- `src/pages/` home, `[slug].astro` (tool + legal pages), FAQs, how-it-works, about, contact, 404, `sitemap.xml`, `robots.txt`, `llms.txt`
- `public/_headers` security headers and caching

## Deploy to Cloudflare
**Pages (Git):** Create a project from the repo, framework preset Astro, build command `npm run build`, output directory `dist`.
**Workers static assets:** `npm run deploy` (uses `wrangler.jsonc`, serves `dist`, custom 404 via `404.html`).
Then in the Cloudflare dashboard:
1. Add custom domain `www.imageto20kb.in`; HTTPS is automatic. Turn on "Always Use HTTPS".
2. Add a Redirect Rule: `imageto20kb.in/*` -> `https://www.imageto20kb.in/${1}` (301), with a proxied DNS record for the apex.
3. Verify `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and submit the sitemap in Google Search Console.

## Known limits (honest status)
- Compression runs on the main thread (OffscreenCanvas when available); no Web Worker yet.
- Analytics are not implemented. If added, update the privacy and cookie policies.
- No browser E2E or real-image tests have been run yet (see LAUNCH-CHECKLIST.md).
- Icons are plain text/inline glyphs, not Lucide.

## Before/after sample images
`npx vite-node scripts/make-before-after.ts` regenerates `public/img/before.jpg`, the `after-*kb.jpg` files and `src/data/ba.json` (real sizes shown on the site) using the same search as the tool.
