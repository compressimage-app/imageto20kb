// Follows redirects hop by hop for the URL variants Google may request. Run from your own machine:
//   node scripts/check-redirects.mjs            (default URL list)
//   node scripts/check-redirects.mjs https://www.imageto20kb.in/compress-image-to-100kb
// Expected: at most ONE redirect to the final canonical https://www... URL ending in "/", then HTTP 200.
const defaults = [];
for (const scheme of ['http', 'https']) for (const host of ['imageto20kb.in', 'www.imageto20kb.in']) for (const path of ['/', '/compress-image-to-100kb', '/compress-image-to-100kb/', '/sitemap.xml', '/robots.txt'])
  defaults.push(`${scheme}://${host}${path}`);
const urls = process.argv.slice(2).length ? process.argv.slice(2) : defaults;
let problems = 0;
for (const start of urls) {
  const chain = [], seen = new Set(); let cur = start, verdict = '';
  for (let hop = 0; hop < 10; hop++) {
    let res; try { res = await fetch(cur, { redirect: 'manual', headers: { 'user-agent': 'redirect-check/1.0' } }); } catch (e) { verdict = `NETWORK ERROR: ${e.message}`; break; }
    chain.push(`${res.status} ${cur}`);
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location'); if (!loc) { verdict = 'REDIRECT WITHOUT Location HEADER'; break; }
      const next = new URL(loc, cur).href;
      if (seen.has(next) || next === cur) { verdict = `REDIRECT LOOP -> ${next}`; break; }
      seen.add(cur); cur = next; continue;
    }
    verdict = res.status === 200 ? (chain.length <= 2 ? 'OK' : `OK but ${chain.length - 1} redirects (aim for 1)`) : `FINAL STATUS ${res.status}`; break;
  }
  if (!verdict) verdict = 'TOO MANY REDIRECTS (>10)';
  if (!verdict.startsWith('OK')) problems++;
  console.log(`\n${start}\n  ${chain.join('\n  -> ')}\n  => ${verdict}`);
}
console.log(`\n${problems ? problems + ' URL(s) need attention' : 'All URLs resolve cleanly'}.`);
process.exit(problems ? 1 : 0);
