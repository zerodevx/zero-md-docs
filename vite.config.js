import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  publicDir: 'fixtures',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    copyPublicDir: false
  },
  plugins: [
    tailwindcss(),
    svelte({
      compilerOptions: {
        runes: true
      }
    })
  ]
})
