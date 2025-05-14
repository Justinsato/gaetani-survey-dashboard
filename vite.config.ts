import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The base URL for the site (no need to change for Azure Static Web Apps)
  base: '/',
  // Define aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Ensure both index.js and src/main.tsx are recognized as entry points
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});