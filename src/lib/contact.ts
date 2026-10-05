export const TOPICS = ['Problem with the tool', 'Exam photo or signature size question', 'Correction or feedback on a guide', 'Accessibility barrier', 'Copyright notice', 'Security report', 'Something else'] as const;
export interface ContactInput { name: string; email: string; topic: string; message: string; website?: string }
export const LIMITS = { nameMin: 2, nameMax: 80, msgMin: 20, msgMax: 1500 };

export function validateContact(i: ContactInput): { ok: boolean; errors: Partial<Record<'name' | 'email' | 'topic' | 'message', string>>; spam: boolean } {
  const errors: Partial<Record<'name' | 'email' | 'topic' | 'message', string>> = {};
  const name = i.name.trim(), email = i.email.trim(), message = i.message.trim();
  if (name.length < LIMITS.nameMin) errors.name = 'Please enter your name.';
  else if (name.length > LIMITS.nameMax) errors.name = `Please keep your name under ${LIMITS.nameMax} characters.`;
  if (!/^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]{2,}$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (!(TOPICS as readonly string[]).includes(i.topic)) errors.topic = 'Please choose a topic.';
  if (message.length < LIMITS.msgMin) errors.message = `Please write at least ${LIMITS.msgMin} characters so we can help.`;
  else if (message.length > LIMITS.msgMax) errors.message = `Please keep your message under ${LIMITS.msgMax} characters.`;
  const spam = !!(i.website && i.website.trim()); // honeypot field filled in
  return { ok: Object.keys(errors).length === 0 && !spam, errors, spam };
}

/** Builds a mailto: link. Newlines use CRLF as mail clients expect. */
export function buildMailto(to: string, i: ContactInput): string {
  const subject = `[ImageTo20KB] ${i.topic}`;
  const body = `${i.message.trim()}\r\n\r\n--\r\n${i.name.trim()}\r\n${i.email.trim()}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
