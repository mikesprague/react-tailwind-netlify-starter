import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../build',
  },
  publicDir: '../public',
  base: './',
  outDir: './',
  server: {
    strictPort: true,
    port: 3000,
  },
  appType: 'spa',
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
  ],
});
