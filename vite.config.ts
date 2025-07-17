import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ THIS LINE IS IMPORTANT FOR VERCEL
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
