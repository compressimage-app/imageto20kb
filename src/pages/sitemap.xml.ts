import { landing } from '../data/landing';
import { legal } from '../data/legal';
import { posts } from '../data/posts';
import { abs, LAST_UPDATED } from '../config';

export interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod: string;
}

export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // 1. Homepage (Top priority: 1.0, weekly updates)
  entries.push({
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: LAST_UPDATED,
  });

  // 2. Landing / Tool & Exam Pages
  for (const page of landing) {
    let priority = '0.8';
    let changefreq: SitemapEntry['changefreq'] = 'weekly';

    if (page.slug === 'compress-image-to-20kb') {
      // Primary focused keyword page
      priority = '0.9';
    } else if (page.slug === 'compress-image-to-200kb' || page.slug === 'compress-image-to-500kb') {
      priority = '0.7';
    }

    entries.push({
      path: `/${page.slug}/`,
      priority,
      changefreq,
      lastmod: page.updated ?? LAST_UPDATED,
    });
  }

  // 3. Information & Resource Hubs
  entries.push({
    path: '/faqs/',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: LAST_UPDATED,
  });
  entries.push({
    path: '/how-it-works/',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: LAST_UPDATED,
  });
  entries.push({
    path: '/blog/',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: LAST_UPDATED,
  });

  // 4. Blog Posts
  for (const post of posts) {
    const priority = post.slug === 'how-to-compress-image-to-20kb' ? '0.8' : '0.7';
    entries.push({
      path: `/blog/${post.slug}/`,
      priority,
      changefreq: 'monthly',
      lastmod: post.date,
    });
  }

  // 5. Utility / Company Pages
  entries.push({
    path: '/about/',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: LAST_UPDATED,
  });
  entries.push({
    path: '/contact/',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: LAST_UPDATED,
  });

  // 6. Legal / Policy Pages
  for (const doc of legal) {
    entries.push({
      path: `/${doc.slug}/`,
      priority: '0.3',
      changefreq: 'yearly',
      lastmod: LAST_UPDATED,
    });
  }

  return entries;
}

export const indexablePaths = () => getSitemapEntries().map((e) => e.path);

export function GET() {
  const entries = getSitemapEntries();
  const xmlUrls = entries
    .map(
      (e) => `  <url>
    <loc>${abs(e.path)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
