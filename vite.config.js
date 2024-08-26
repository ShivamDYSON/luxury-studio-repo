// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/luxury-studio-repo/', // This should match your repo name
  plugins: [react()],
});
