import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.imageto20kb.in',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: { format: 'directory', inlineStylesheets: 'always' }, // no render-blocking stylesheet request
});
