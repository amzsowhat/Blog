import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://soundead.com',
  integrations: [react()],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindv4()],
  },
});
