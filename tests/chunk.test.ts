import { describe, it, expect } from 'vitest';
// @ts-ignore
import { chunkHtml, splitInner, MAX_WORDS } from '../scripts/chunk-paragraphs.mjs';
const long = Array.from({ length: 9 }, (_, i) => `Sentence number ${i + 1} explains one focused idea about the tool in plain words.`).join(' ');
describe('paragraph chunker', () => {
  it('leaves short paragraphs alone', () => expect(chunkHtml('<p>Short one. Another short one.</p>')).toBe('<p>Short one. Another short one.</p>'));
  it('splits a long paragraph into focused chunks and keeps attributes and all text', () => {
    const out = chunkHtml(`<p class="x">${long}</p>`); const ps = out.match(/<p class="x">[\s\S]*?<\/p>/g)!;
    expect(ps.length).toBeGreaterThan(1);
    for (const p of ps) expect(p.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length).toBeLessThanOrEqual(MAX_WORDS + 14);
    expect(out.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).toBe(long);
  });
  it('never splits inside inline tags or links', () => {
    const inner = `Read <a href="/faqs/">the FAQs. They help.</a> ${long}`;
    for (const part of splitInner(inner)) { expect((part.match(/<a\b/g) || []).length).toBe((part.match(/<\/a>/g) || []).length); }
  });
  it('does not split after abbreviations like e.g.', () => {
    const parts = splitInner(`Use JPEG for photos, e.g. a passport picture, and keep it small. ${long}`);
    expect(parts[0]).toContain('e.g. a passport picture');
  });
});
