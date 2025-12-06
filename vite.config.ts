import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure base URL for GitHub Pages deployment
  // Use '/' for local development, '/portfolio/' for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})
