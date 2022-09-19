// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  css: ["@/assets/css/main.css"],

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
};
