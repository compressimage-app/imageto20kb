export const SITE = 'https://www.imageto20kb.in';
export const SITE_NAME = 'ImageTo20KB';
// ---- LAUNCH PLACEHOLDERS: owner must confirm before production (see LAUNCH-CHECKLIST.md) ----
export const CONTACT_EMAIL = 'compressimageto@gmail.com';
export const OPERATOR_NAME = '[OPERATOR NAME – TO BE CONFIRMED]';
export const JURISDICTION = '[GOVERNING JURISDICTION – TO BE CONFIRMED]';
export const LAST_UPDATED = '2026-10-03';
export const abs = (path: string) => new URL(path, SITE + '/').toString();
