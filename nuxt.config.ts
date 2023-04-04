// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      liffId: ''
      apiBaseUrl: ''
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
})
