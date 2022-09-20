// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Anthony Sette - Chatting about Startups and Software Engineering',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: "https://fonts.gstatic.com" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900|Dela+Gothic+One' }
      ]
    },
  },

  modules: ['@nuxtjs/prismic'],

  prismic: { endpoint: 'anthonysette' },

  css: ["@/assets/css/main.css"],

  plugins: ['~/plugins/ScrollBehavior.js'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
