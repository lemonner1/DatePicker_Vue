/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
    "./node_modules/flowbite.{js,ts}",
    "./node_modules/flowbite-vue.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
    }},
  },
  plugins: [
    require('flowbite/plugin'),
    
  ]
}

