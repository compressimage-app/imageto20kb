# Launch checklist
- [ ] Set `CONTACT_EMAIL`, `OPERATOR_NAME`, `JURISDICTION` in `src/config.ts` (currently placeholders shown on the site)
- [ ] Have a lawyer review privacy, terms, cookie, disclaimer, copyright pages (marked DRAFT) and add takedown wording
- [ ] Confirm Cloudflare cookies/analytics, then update the cookie and privacy policies
- [ ] Test in real browsers: Chrome, Safari (iOS), Firefox; large (20+ MP) photos, PNG with transparency, WebP, batch + ZIP
- [ ] Confirm each output file size is <= target when the UI says "reached"
- [ ] Add apex-to-www redirect; verify headers (CSP) don't block the tool
- [ ] Run Lighthouse for LCP/INP/CLS on mobile
- [ ] Add an Open Graph image if desired
- [ ] Submit sitemap in Search Console
