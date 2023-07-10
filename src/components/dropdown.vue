<template>
    <div class="flex dark:bg-gray-900 relative max-w-md">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>
        <input id="dropdownDatePicker" ref="triger" v-model="dateInput" autocomplete="off" data-dropdown-toggle="dropdown"
            type="text"
            class="shadow-lg bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-lg focus:border-cyan-500 w-full pl-10 p-2.5"
            placeholder="Выберите дату">
        <button @click="rangeSwitcher"
            class="top-0 p-2 h-full text-white rounded-r-lg right-32 absolute rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:text-white dark:text-white"
            type="button">
            <span v-if="isRange" class="px-5 py-2 h-full w-full">
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute text-white"
                    xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor"
                        d="M17 2h2v2h4v14H5V4h4V2h2v2h6V2zm-6 4H7v2h14V6H11zm-4 4v6h14v-6H7zM3 20h16v2H1V8h2v12z" />
                        
                </svg>
            </span>
            <span v-else class="px-5 py-2 h-full w-full">
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute text-white"
                    xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor"
                        d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z" />
                </svg>
            </span>
        </button>

        <div class="pl-3 flex items-center justify-between">
            <button @click="sendValue"
                class="bg-blue-500 hover:bg-blue-600 text-dark py-2 px-0.5 rounded overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white"
                type="button">
                <span
                    class="relative px-5 py-2 bg-white transition-all ease-in duration-175 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Отправить
                </span>
            </button>
        </div>
    </div>

    <div id="userDropdown" ref="calendarDrop" datepicker-buttons @click="clickItem()"
        class="hidden bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700">
    </div>
</template>

<script setup>
import 'flowbite';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { Dropdown } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker';
import { locales } from "../../node_modules/flowbite-datepicker/js/i18n/base-locales.js";
import ru from 'flowbite-datepicker/locales/ru';

Datepicker.locales.ru = ru;

const slots = useSlots();
const emit = defineEmits('input')

let firstElement = ""
let secondElement = "0"
let isRange = false;
const calendarDrop = ref();
const triger = ref();

const dropdown = ref()
const closeDropdown = ref(() => { })

const dateInput = ref("")

onMounted(() => { createDB() })

function createDB() {

    const $targetEl = calendarDrop.value; // document.getElementById('userDropdown')
    const $triggerEl = triger.value;  // document.getElementById('dropdownDatePicker')

    if ($triggerEl) {
        dropdown.value = new Dropdown($targetEl, $triggerEl)
        Object.assign(Datepicker.locales, ru);
        new Datepicker($targetEl, {
            todayBtn: true,
            todayBtnMode: 1,
            clearBtn: true,
            language: 'ru',
            locales: ru,
        });
        closeDropdown.value = () => { dropdown.value.hide() }
    };
}

function hasSlot(name) {
    return !!slots[name]
}

function clickItem() {
    if (isRange)
    {
        secondElement = new Date(firstElement)
        firstElement = new Date(calendarDrop.value.datepicker.dates[0])
        let newFirstElement = new Date(firstElement.getTime() - (firstElement.getTimezoneOffset() * 60000)).toISOString()
        let newSecondElement = new Date(secondElement.getTime() - (secondElement.getTimezoneOffset() * 60000)).toISOString()
        if(firstElement.getTime() > secondElement.getTime())
        {
            dateInput.value = secondElement.toLocaleDateString("ru-RU") + "-" + firstElement.toLocaleDateString("ru-RU")
            let dates = [newSecondElement, newFirstElement]
            emit('input', dates)
        }
        else
        {
            secondElement = firstElement
        }
    }
    else   
    {
        let tempDate = new Date(calendarDrop.value.datepicker.dates[0])
        let newDate = new Date(tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000)).toISOString() 
        let newDateInside = new Date(calendarDrop.value.datepicker.dates[0])
        dateInput.value = newDateInside.toLocaleDateString("ru-RU")
        emit('input', newDate)
    }
}

function rangeSwitcher() {
    isRange = isRange ? false : true
    dateInput.value = dateInput.value + " "
    dateInput.value = dateInput.value.pop
}
</script>