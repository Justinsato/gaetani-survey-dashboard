import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base path - use your repository name if deploying to GitHub Pages
  base: '/gaetani-survey-dashboard/',
});
