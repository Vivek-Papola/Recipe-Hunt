import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // ✅ Minify build files for speed
    sourcemap: false, // ✅ Disable sourcemaps in production
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
