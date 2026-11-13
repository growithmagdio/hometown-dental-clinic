import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

// Preload the fonts the hero needs so the headline never flashes in a fallback face.
function preloadHeroFonts(): Plugin {
  const want = [/dm-serif-display-latin-400-normal.*\.woff2$/, /dm-serif-display-latin-400-italic.*\.woff2$/, /inter-latin-wght-normal.*\.woff2$/]
  return {
    name: 'preload-hero-fonts',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return []
        return Object.keys(ctx.bundle)
          .filter((f) => want.some((r) => r.test(f)))
          .map((f) => ({ tag: 'link', injectTo: 'head' as const, attrs: { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: './' + f } }))
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadHeroFonts()],
  base: './',
  build: { chunkSizeWarningLimit: 700 },
  ssr: { noExternal: true },
})
