import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.imageto20kb.in',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
