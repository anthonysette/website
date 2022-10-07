/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans'],
      display: ['Dela Gothic One', 'sans']
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.75rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      'full': '9999px',
    },
    extend: {},
  },
  // Due to issue of class-detection not auto-refreshing
  // Disable this to build for production
  // safelist: [
  //   {
  //     pattern: /.*/,
  //   },
  // ],
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
