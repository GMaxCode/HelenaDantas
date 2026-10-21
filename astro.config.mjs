// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://helenadantas.com.br',
  locale: 'pt-BR',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
