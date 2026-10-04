import { landing } from '../data/landing';
import { legal } from '../data/legal';
import { posts } from '../data/posts';
import { abs } from '../config';
export const indexablePaths = () => ['/', ...landing.map((l) => `/${l.slug}/`), '/faqs/', '/how-it-works/', '/blog/', ...posts.map((p) => `/blog/${p.slug}/`), '/about/', '/contact/', ...legal.map((l) => `/${l.slug}/`)];
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexablePaths().map((p) => `  <url><loc>${abs(p)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
