
<template>
    <div
        class="fixed space-y-4 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl left-48 top-32">
        <h2 class="text-slate-900 dark:text-white mt-2 text-base font-medium tracking-tight">
            Добро пожаловать на следующую страницу
        </h2>
        <p class="text-left text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Я не знаю зачем я создал эту страницу, но возможно она мне пригодится в будущем.
        </p>

        <div class="relative max-w-sm">
            <div id="dropdown" class="z-10 rounded-lg shadow w-44 dark:bg-gray-700">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input datepicker type="text" id="start"
                    class="cursor-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                    placeholder="Выберите дату">
            </div>
        </div>
        <div id="calendarDropdown" ref="bodyDrop"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchTextEdit">
            </ul>
        </div>

    </div>
</template>

<script setup>
import 'flowbite';
import { onMounted } from 'vue';
import { Dropdown } from 'flowbite'

onMounted(() => {
    console.log('myheader mounted');
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 32px;
}</style> 