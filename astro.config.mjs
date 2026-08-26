import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://soundead.com',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindv4()],
    optimizeDeps: {
      include: ['react-dom/client'],
    },
  },
});
