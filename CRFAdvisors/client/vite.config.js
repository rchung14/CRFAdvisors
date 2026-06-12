import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
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
