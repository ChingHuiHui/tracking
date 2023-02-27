// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      liffId: process.env.LIFF_ID,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
