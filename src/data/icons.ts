// Simple inline SVG glyphs (24x24, currentColor). Own simplified drawings, no external assets or fonts.
export const icons: Record<string, string> = {
  x: '<path d="M5 4.5l14 15M19 4.5l-14 15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  facebook: '<path fill="currentColor" d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.6 3 10.5 4.6 10.5 6.9v1.6H8V12h2.5v9H14v-9h2.6l.4-3.5z"/>',
  linkedin: '<circle cx="6" cy="6.2" r="2" fill="currentColor"/><rect x="4" y="9.5" width="4" height="10.5" fill="currentColor"/><path fill="currentColor" d="M10.5 9.5h3.8v1.6c.6-1.2 1.9-1.9 3.5-1.9 3 0 4.2 1.9 4.2 4.9V20h-4v-5.2c0-1.3-.5-2.2-1.7-2.2-1.2 0-2 .9-2 2.2V20h-3.8z"/>',
  whatsapp: '<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path fill="currentColor" d="M9 8c.3 3 3 6 6.2 6.9.8-.1 1.5-.8 1.3-1.5l-1.8-.9-1 .9c-1-.5-1.9-1.4-2.4-2.4l.9-1-.9-1.8C10.6 7.6 9.2 7.5 9 8z"/>',
  telegram: '<path fill="currentColor" d="M20.7 4.2L3.4 10.9c-.9.4-.9 1 0 1.2l4.3 1.4 1.7 5.2c.2.5.4.7.8.7.4 0 .6-.2.8-.4l2.1-2 4.4 3.3c.8.4 1.4.2 1.6-.8l2.9-13.6c.3-1.2-.4-1.7-1.3-1.2zM9.1 13.2l9-5.7c.4-.3.8-.1.5.2l-7.4 6.7-.3 3.2z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/>',
  youtube: '<rect x="2.5" y="6" width="19" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
};
