import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rollupOptions: {
      input: './index.html',
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  logLevel: 'info',
});
