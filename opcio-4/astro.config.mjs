// @ts-check
import { defineConfig } from 'astro/config';

// Per defecte es genera per al domini definitiu. Per publicar en una subcarpeta
// (p. ex. GitHub Pages) defineix SITE_URL i BASE_PATH en fer el build.
const site = process.env.SITE_URL ?? 'https://canovellesbc.com';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
});
