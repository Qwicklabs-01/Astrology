import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'vedic-cosmic-theme/assets',
    emptyOutDir: false, // Don't empty so we keep style.css etc
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'index.[ext]', // For CSS
        chunkFileNames: 'chunk-[hash].js',
      }
    }
  }
})
