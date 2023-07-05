/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
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

