<template>
    <div class="flex flex-col space-y-4 fixed bg-white rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl shadow-violet-500/30 left-48 top-32">
        <div class="text-left">
            <span class="inline-flex justify-center p-2 bg-indigo-500 rounded-md shadow-lg shadow-blue-500/30">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
        </div>
        <h2 class="text-slate-900 dark:text-white text-left mt-5 text-2xl font-bold tracking-tight">
            Добро пожаловать
        </h2>
        <p class="text-left text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Как насчет того, чтобы заполнить эту форму? Не ошибитесь
        </p>
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md shadow-indigo-500/50 rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-left font-bold mb-3" for="username">
                        Логин
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="имя пользователя">
                </div>
                <div class="mb-6">
                    <label class="text-left block text-gray-700s font-bold mb-3" for="password">
                        Пароль
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
                </div>
                    <div class="flex items-center justify-between">
                    <button @click="onSubmit" class="bg-blue-500 hover:bg-blue-600 text-dark font-bold py-2 px-0.5 rounded overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white" type="button">
                        <span class="relative px-5 py-2 bg-white transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Войти
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const username = ref({})
    const password = ref({})

    async function onSubmit()
    {
        console.log("body=", username.value, password.value)

        const body = {
            "username": username,
            "password": password 
        }

        const formElement = document.getElementById('logIn')
        const formData = new FormData(formElement)
        body.username = formData.get('username')
        body.password = formData.get('password')

        const response = await $fetch('http://192.108.7.77/api/v1.0/login/access-token', {
            method: 'POST',
            body,
            headers: {'content-type': 'application/x-www-form-urlencoded'}
        })
    }
</script>

<style scoped>
    h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif, Times;
        margin-bottom: 10px;
        font-size: 34px;
    }
</style> 