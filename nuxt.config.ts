// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss'],
    srcDir: "src/",
    postcss: {
        plugins: 
            {
                tailwindcss: {},
                autoprefixer: {},
            },
    },
})
