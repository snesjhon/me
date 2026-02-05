import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.snesjhon.com',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false, // Don't auto-inject Tailwind into all pages
    }),
  ],
  markdown: {
    syntaxHighlight: false,
  },
});
