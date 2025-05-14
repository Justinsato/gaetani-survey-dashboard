import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The base URL for the site (no need to change for Azure Static Web Apps)
  base: '/',
});