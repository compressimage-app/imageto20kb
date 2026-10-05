import { describe, it, expect } from 'vitest';
import { validateContact, buildMailto, TOPICS } from '../src/lib/contact';
const ok = { name: 'Asha K', email: 'asha@example.com', topic: TOPICS[0], message: 'The 20KB tool failed on my JPG photo in Chrome.' };
describe('contact form validation', () => {
  it('accepts a valid message', () => expect(validateContact(ok).ok).toBe(true));
  it('rejects missing/short fields with messages', () => {
    const r = validateContact({ name: '', email: 'nope', topic: '', message: 'short' });
    expect(r.ok).toBe(false); expect(Object.keys(r.errors).sort()).toEqual(['email', 'message', 'name', 'topic']);
  });
  it('rejects bad emails', () => { for (const e of ['a@b', 'a b@c.com', '@x.com', 'a@@x.com']) expect(validateContact({ ...ok, email: e }).errors.email).toBeTruthy(); });
  it('rejects unknown topics and over-long messages', () => {
    expect(validateContact({ ...ok, topic: 'Hacked' }).errors.topic).toBeTruthy();
    expect(validateContact({ ...ok, message: 'x'.repeat(1501) }).errors.message).toBeTruthy();
  });
  it('flags honeypot spam', () => { const r = validateContact({ ...ok, website: 'http://spam' }); expect(r.spam).toBe(true); expect(r.ok).toBe(false); });
});
describe('mailto builder', () => {
  it('encodes subject and body safely', () => {
    const u = buildMailto('me@example.com', { ...ok, message: 'Line 1\nLine 2 & more? 100% sure' });
    expect(u.startsWith('mailto:me@example.com?subject=')).toBe(true);
    expect(u).toContain(encodeURIComponent('[ImageTo20KB] Problem with the tool'));
    expect(u).toContain('%26'); expect(u).toContain('%25'); expect(u).not.toContain(' '); expect(u).not.toMatch(/[\r\n]/);
  });
});
