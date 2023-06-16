/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./index.vue",
  ],
  theme: {
    extend: {
      colors: {
    }},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

