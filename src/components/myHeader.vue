<template>
    <div class="h-full w-full absolute">
        <header class="shadow-sm">
            <nav class="container mx-auto p-4 border-b-2 text-left" style="color: antiquewhite">
                <NuxtLink to="/" class="hover:text-lime-300 font-bold text-3xl font-serif">Домашняя страница</NuxtLink>
            </nav>
        </header> 

        <footer class="container mx-auto p-4 flex justify-between">    
            <ul class="flex gap-4 font-bold" style="color: antiquewhite">
                <li><NuxtLink to="/first_page" class="hover:text-lime-300">Войти</NuxtLink></li>
                <li><NuxtLink to="/second_page" class="hover:text-lime-300">Информация</NuxtLink></li>
            </ul>
            <a class="flex gap-4 font-bold hover:text-lime-300" style="color: antiquewhite" href="/about">хм...</a>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #caff0c;
    }
</style> 