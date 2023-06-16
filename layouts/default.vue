<template>
    <div class="h-screen" style="background-image: url(https://steamcommunity.com/economy/profilebackground/items/447530/836913de4fdeec8f401687c5930fee4a91bf5197.jpg)">
        <header class="shadow-sm">
            <nav class="container mx-auto p-4" style="color: antiquewhite">
                <NuxtLink to="/" class="font-bold">Home Page</NuxtLink>
            </nav>
        </header> 

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">    
            <ul class="flex gap-4 font-bold" style="color: antiquewhite">
                <li><NuxtLink to="/first_page">First</NuxtLink></li>
                <li><NuxtLink to="/second_page">Second</NuxtLink></li>
            </ul>
            <a class="flex gap-4 font-bold" style="color: antiquewhite" href="/about">ok, bro, this move will crash your page</a>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #caff0c;
    }
</style> 