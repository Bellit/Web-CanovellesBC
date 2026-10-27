// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Per defecte es genera per al domini definitiu. La previsualització de GitHub Pages
// defineix SITE_URL i BASE_PATH (vegeu .github/workflows/pages.yml).
const site = process.env.SITE_URL ?? 'https://canovellesbc.com';
const base = process.env.BASE_PATH ?? '/';

/** Afegeix la ruta base als enllaços interns (/...) escrits en Markdown. */
function rehypeBaseLinks() {
  const prefix = base.replace(/\/$/, '');
  /** @param {any} node */
  const visit = (node) => {
    if (node.type === 'element') {
      for (const attr of ['href', 'src']) {
        const value = node.properties?.[attr];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(prefix + '/')) {
          node.properties[attr] = prefix + value;
        }
      }
    }
    node.children?.forEach(visit);
  };
  return /** @param {any} tree */ (tree) => {
    if (prefix) visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
