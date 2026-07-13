import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // One CSS file for the whole app: scripts/prerender.mjs inlines it into
    // every prerendered page (no render-blocking request), and lazy route
    // chunks then never wait on their own stylesheets (no FOUC).
    cssCodeSplit: false,
    // Never inline images as base64 data URIs — small assets (e.g. the team
    // photo placeholder) must be emitted as cacheable files, not bloat the
    // prerendered HTML of every page that renders them.
    assetsInlineLimit: 0,
    // Manifest lets scripts/prerender.mjs emit per-route modulepreload hints
    // so each page's lazy chunk downloads in parallel with the entry script.
    manifest: !isSsrBuild,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            // React libs change rarely; a separate chunk + immutable caching
            // means app updates don't re-download the framework.
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
            },
          },
    },
  },
}))
