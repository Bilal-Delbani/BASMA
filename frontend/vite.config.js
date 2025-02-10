import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Ensure Vite knows where to look for index.html
  build: {
    outDir: 'dist',
  },
});
