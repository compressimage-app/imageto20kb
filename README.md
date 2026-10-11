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

## Google Search Console troubleshooting
Run `npm run check:redirects` from your own computer (it requests the live site) and keep its output.

**"Redirect error" on `https://www.imageto20kb.in/compress-image-to-100kb` (no trailing slash).** This site uses trailing slashes (`/compress-image-to-100kb/`). The slashless URL must do exactly one redirect to the slash version, then return 200. A redirect error means a loop or more than ~10 hops. Common causes, all in the Cloudflare dashboard (not in this project, which has no redirect files):
1. A Redirect Rule, Page Rule or Transform Rule that **removes** trailing slashes, fighting the host that **adds** them. Delete any slash-removal rule.
2. SSL/TLS mode set to *Flexible*. Use *Full (strict)*.
3. Both an apex->www and a www->apex rule. Keep only apex->www.

**Apex vs www.** Create one Redirect Rule: *If* Hostname equals `imageto20kb.in` *then* Dynamic redirect to `concat("https://www.imageto20kb.in", http.request.uri.path)`, status 301, preserve query string. The apex DNS record (A `192.0.2.1` is fine) must be proxied (orange cloud).

**"Crawled - currently not indexed" for `https://imageto20kb.in/sitemap.xml`.** Sitemap files are not indexable pages, so this status is normal and harmless. It does show the apex host answers directly instead of redirecting; the rule above fixes that. In Search Console, submit the sitemap only for the `https://www.imageto20kb.in/` property: `https://www.imageto20kb.in/sitemap.xml`.

**"Crawled - currently not indexed" for the homepage.** Google fetched the page but chose not to index it yet. This is common for new sites and often follows the redirect problems above. Steps: fix the redirects, confirm `https://www.imageto20kb.in/robots.txt` matches this project's file (Cloudflare's "Managed robots.txt" / AI-bot blocking can prepend extra rules), confirm Security > Bots is not challenging Googlebot, then use URL Inspection > *Request indexing* for `/` and the main tool pages, and build a few genuine links from other sites. Indexing is Google's decision and can take weeks.

## Measuring performance correctly
Run Lighthouse on the **production build**, never on `astro dev` (`localhost:4321` from `npm run dev`): the dev server ships unminified code, a dev toolbar and HMR scripts, which produces false warnings such as "Minify JavaScript 1,370 KiB" and "Duplicated JavaScript".
1. `npm run build && npm run preview`
2. Open the preview URL in an incognito window with extensions disabled and run Lighthouse (mobile).
3. For real-world numbers, test the deployed `https://www.imageto20kb.in/` (not the apex URL, which adds a redirect).

`npm run verify` runs build, unit tests, SEO checks, the render-blocking audit and the performance budget. `npm run audit:browser` (optional, needs `puppeteer-core` and a Chrome binary) checks every page on desktop and mobile for sideways overflow, header regressions and console errors.
