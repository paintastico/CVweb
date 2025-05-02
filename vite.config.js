import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CVweb/',
  server: {
    host: true, // Permite acceso desde la red local
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets', // Directorio para assets estáticos
    emptyOutDir: true,   // Limpia el directorio en cada build
  }
})