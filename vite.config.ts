import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path is '/' for Azure Static Web Apps as they serve from the domain root
  base: '/',
});
