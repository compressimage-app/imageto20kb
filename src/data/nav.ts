import { bySlug } from './landing';
const L = (slugs: string[]): [string, string][] => slugs.map((s) => [bySlug(s).nav, `/${s}/`]);
export const toolGroups: { title: string; links: [string, string][] }[] = [
  { title: 'By size', links: L(['compress-image-to-20kb', 'compress-image-to-50kb', 'compress-image-to-100kb', 'compress-image-to-200kb', 'compress-image-to-500kb']) },
  { title: 'By format', links: L(['compress-jpg-to-20kb', 'compress-jpg-to-100kb', 'compress-png-to-20kb']) },
  { title: 'Exam forms', links: L(['government-exam-photo-signature-size', 'ssc-photo-signature-size', 'rrb-photo-signature-size', 'upsc-photo-signature-size', 'image-compressor-for-online-forms']) },
  { title: 'General', links: L(['image-compressor', 'image-resizer']) },
];
export const toolPaths = new Set(toolGroups.flatMap((g) => g.links.map((l) => l[1])));
export const footer: { title: string; links: [string, string][] }[] = [
  { title: 'Tools', links: [...L(['compress-image-to-20kb', 'compress-image-to-50kb', 'compress-image-to-100kb', 'compress-image-to-200kb', 'compress-image-to-500kb', 'image-compressor', 'image-resizer'])] },
  { title: 'Exam forms', links: [...L(['government-exam-photo-signature-size', 'ssc-photo-signature-size', 'rrb-photo-signature-size', 'upsc-photo-signature-size', 'image-compressor-for-online-forms'])] },
  { title: 'Site', links: [['Home', '/'], ['About', '/about/'], ['Contact', '/contact/'], ['Blog', '/blog/'], ['FAQs', '/faqs/'], ['How It Works', '/how-it-works/']] },
  { title: 'Legal', links: [['Privacy Policy', '/privacy-policy/'], ['Terms and Conditions', '/terms-and-conditions/'], ['Cookie Policy', '/cookie-policy/'], ['Disclaimer', '/disclaimer/'], ['Copyright Policy', '/copyright-policy/'], ['Security', '/security/'], ['Accessibility', '/accessibility/']] },
];
