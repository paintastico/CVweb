import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CVweb/', // Nombre exacto de tu repositorio (case-sensitive)
  plugins: [react()],
  build: {
    outDir: 'docs', // Cambia dist → docs para GitHub Pages
  }
})