import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.simulatorsenteret.no',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
  },
});
