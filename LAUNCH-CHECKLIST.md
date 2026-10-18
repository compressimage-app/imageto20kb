# Launch checklist
- [x] `CONTACT_EMAIL` and `OPERATOR_NAME` are set in `src/config.ts`
- [ ] Set `JURISDICTION` (and a postal address if the lawyer advises) in `src/config.ts`
- [ ] Before each exam season, re-check size ranges on `src/data/exams.ts` against the official notifications and update `UPDATED`
- [ ] Have a lawyer review privacy, terms, cookie, disclaimer, copyright pages (marked DRAFT) and add takedown wording
- [ ] Confirm Cloudflare cookies/analytics, then update the cookie and privacy policies
- [ ] Test in real browsers: Chrome, Safari (iOS), Firefox; large (20+ MP) photos, PNG with transparency, WebP, batch + ZIP
- [ ] Confirm each output file size is <= target when the UI says "reached"
- [ ] Add apex-to-www redirect; verify headers (CSP) don't block the tool
- [ ] Run Lighthouse for LCP/INP/CLS on mobile
- [ ] Add an Open Graph image if desired
- [ ] Submit sitemap in Search Console

## Analytics, contact form and images
- [ ] Google Analytics (G-YNJS39ZTBL) loads in production builds only. Check GA4 > Realtime after deploying
- [ ] In GA4 settings review data retention, Google signals and enhanced measurement; do not enable anything that captures file names
- [ ] Decide whether a cookie consent banner is required for your visitors (e.g. EU/UK) and have the privacy/cookie pages reviewed
- [ ] Verify the site in Bing Webmaster Tools (the `msvalidate.01` tag is already in the head)
- [ ] Contact form uses `mailto:` by default. To post to a form service instead, set `CONTACT_FORM_ENDPOINT` in `src/config.ts`, add its origin to `connect-src` in `public/_headers`, and update the privacy policy
- [ ] The before/after sample is an original generated illustration (`public/img/`). To use your own photo, replace `before.jpg` in `scripts/make-before-after.ts` or edit the script, then run `npx vite-node scripts/make-before-after.ts`

## Search Console fixes
- [ ] Add the apex -> www Redirect Rule (see README), remove any slash-removal rules, SSL mode Full (strict)
- [ ] Run `npm run check:redirects` and confirm every URL ends at one 200 on `https://www.imageto20kb.in/...`
- [ ] Validate the "Redirect error" fix in Search Console; submit only the www sitemap; request indexing for `/`
- [ ] Compare live `/robots.txt` with `public` output (no Cloudflare-injected rules blocking Googlebot)

## Keyword targets
- [ ] `npm run report:keywords` prints how often each target keyword appears per page; `npm run check:seo` fails if fewer than 10 pages have the primary keyword in the H1 or 10+ uses, or if any page exceeds 20 uses
- [ ] Primary keyword URLs: `/compress-image-to-20kb/` and `/blog/how-to-compress-image-to-20kb/`; secondary: `/compress-image-to-100kb/` and `/blog/how-to-compress-image-to-100kb/`
- [ ] After deploying, request indexing for these URLs in Search Console and watch Performance > Queries for the target phrases
