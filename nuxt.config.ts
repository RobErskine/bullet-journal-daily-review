// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    manifest: {
      name: 'Daily'
    }
  }
  // pwa: {
  //   workbox: {
  //     enabled: true
  //   }
  // }
})
