import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Output to WordPress theme assets for production deployment
    outDir: 'vedic-cosmic-theme/assets',
    emptyOutDir: false, // Keep style.css, favicon.svg, icons.svg etc.
    rollupOptions: {
      output: {
        // Single flat bundle — no hash chunks so WordPress can load it reliably
        entryFileNames: 'index.js',
        assetFileNames: 'index.[ext]',
        chunkFileNames: 'index-[hash].js',
        // Inline all dynamic imports to avoid WordPress chunk-loading issues
        inlineDynamicImports: false,
      }
    }
  }
})
