// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.simulatorsenteret.no',
  trailingSlash: 'ignore',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true }
  }
});