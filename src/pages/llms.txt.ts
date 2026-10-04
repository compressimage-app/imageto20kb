import { landing } from '../data/landing';
import { SITE, CONTACT_EMAIL, abs } from '../config';
export function GET() {
  const tools = landing.map((l) => `- [${l.h1}](${abs(`/${l.slug}/`)})`).join('\n');
  const body = `# ImageTo20KB

> ImageTo20KB (${SITE}/) is a free browser-based image compressor. Users choose a target size in KB (for example 20KB or 100KB); compression runs locally in the user's browser and images are not uploaded for compression.

## Tools
${tools}

## Supported formats
- Input: JPG/JPEG, PNG, WebP. Output: JPEG, WebP or PNG depending on the browser.
- Not supported: animated GIF/WebP/APNG, SVG, HEIC/HEIF.
- 1 KB = 1,024 bytes. Targets are not always achievable; the tool reports when a result is above target.

## Help
- [FAQs](${abs('/faqs/')})
- [How it works](${abs('/how-it-works/')})
- [Privacy policy](${abs('/privacy-policy/')})
- [Contact](${abs('/contact/')})
- Email: ${CONTACT_EMAIL}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
