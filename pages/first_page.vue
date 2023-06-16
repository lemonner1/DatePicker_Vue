<template>
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
        </div>
        <h2 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Hello, guys
        </h2>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Do you know that this page appeared the latest, although it is the first?.
        </p>
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        login
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 32px;
    }
</style> 