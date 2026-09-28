// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Canonical production origin — every canonical URL, OG tag and sitemap entry is built from this.
  site: 'https://civoraxgroup.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://civoraxgroup.com/' || item.url === 'https://civoraxgroup.com') item.priority = 1.0;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
