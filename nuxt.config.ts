// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image'],
  css: [
      '@/assets/css/global.css',
  ],
  tailwindcss: {
      cssPath: '~/assets/css/input.css'
  },
  app: {
      head: {
          link: []
      }
  },
  plugins: [ '~/plugins/jquery.client.js' ],
})