import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/eslint'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: { head: { htmlAttrs: { lang: 'ru' } } },

  ssr: false,

  dir: {
    pages: '_routes',
    middleware: '_middleware',
  },

  css: ['./app/shared/assets/css/main.css'],
  fonts: {
    families: [
      {
        name: "Golos Text",
        weights: [400, 500, 600, 700],
      },
      {
        name: 'Montserrat',
        weights: [400, 500, 600, 700],
      }
    ]
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})