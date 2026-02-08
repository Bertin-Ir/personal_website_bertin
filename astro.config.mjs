// Astro static export: React islands for interactive demos, Tailwind for styles.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  vite: {
    build: {
      target: 'esnext',
    },
  },
});
