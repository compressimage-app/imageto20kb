export const SITE = 'https://www.imageto20kb.in';
export const SITE_NAME = 'ImageTo20KB';
// ---- LAUNCH PLACEHOLDERS: owner must confirm before production (see LAUNCH-CHECKLIST.md) ----
export const CONTACT_EMAIL = 'compressimageto@gmail.com';
export const OPERATOR_NAME = 'Kamlesh Mohabe';
export const OWNER_ROLE = 'Software Engineer';
export const JURISDICTION = '[GOVERNING JURISDICTION – TO BE CONFIRMED]';
export const LAST_UPDATED = '2026-10-14';
export const abs = (path: string) => new URL(path, SITE + '/').toString();
export const GA_ID = 'G-YNJS39ZTBL';
export const BING_VALIDATION = 'B2CC874597C52F944CF785656679176A';
// Optional: a form-handling endpoint (e.g. Formspree / Web3Forms). Leave empty to use the mailto-based form.
export const CONTACT_FORM_ENDPOINT = '';
// Social profiles (shown as footer icons only when a URL is filled in). Use the final, canonical profile URL (no shorteners,
// no http://, no twitter.com: use https://x.com/...) so crawlers never hit a redirect.
export const SOCIAL: { key: 'x' | 'facebook' | 'instagram' | 'youtube' | 'linkedin'; label: string; url: string }[] = [
  { key: 'x', label: 'ImageTo20KB on X', url: '' },
  { key: 'facebook', label: 'ImageTo20KB on Facebook', url: '' },
  { key: 'instagram', label: 'ImageTo20KB on Instagram', url: '' },
  { key: 'youtube', label: 'ImageTo20KB on YouTube', url: '' },
  { key: 'linkedin', label: 'ImageTo20KB on LinkedIn', url: '' },
];
