import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  root: 'src',
  publicDir: 'fixtures',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    copyPublicDir: false
  },
  plugins: [svelte()]
})
