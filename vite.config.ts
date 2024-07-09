import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom','react-router-dom','react-icons',],
          'other-vendor': ['html2pdf.js'],
        },
      },
    },
    chunkSizeWarningLimit: 2000, // الحد الأقصى للحجم بالـ kB
  },
});