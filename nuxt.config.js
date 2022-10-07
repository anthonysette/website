// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  app: {
    // cdnURL: 'https://anthonysette.s3.us-east-2.amazonaws.com/',
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

  modules: ['@nuxtjs/prismic', '@nuxtjs/strapi'],

  prismic: { endpoint: 'anthonysette' },

  strapi: {
    url: process.env.STRAPI_URL || 'https://localhost:8080',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  css: ["@/assets/css/main.css"],

  plugins: ['~/plugins/ScrollBehavior.js', '~/plugins/CodeHighlight.js'], //'~/plugins/VueHighlight.js'

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
