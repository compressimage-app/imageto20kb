import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.imageto20kb.in',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false }, // the dev toolbar injects generic-text links (e.g. 'Learn more') that skew Lighthouse runs on `astro dev`
  build: { format: 'directory', inlineStylesheets: 'always' }, // no render-blocking stylesheet request
});
