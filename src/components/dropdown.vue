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
            class="shadow-lg bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-lg focus:border-cyan-500 block w-full pl-10 p-2.5"
            placeholder="Выберите дату">
            
        <button @click="onSubmit"
            class="inset-y-0.5 right-32 absolute bg-blue-500 hover:bg-blue-600 hover:text-white rounded rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white"
            type="button">
            <span
                class="relative px-5 py-2 hover:text-white bg-white transition-all ease-in duration-75 dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                <svg id="clearTextEditIcon" class="inset-y-0 text-black absolute hover:text-white" @click="clearTextEdit"
                    xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="2 -7.5 20 40">
                    <path fill="currentColor"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
                </svg>
            </span>
        </button>

        <div class="pl-3 flex items-center justify-between">
            <button @click="sendValue"
                class="bg-blue-500 hover:bg-blue-600 text-dark font-bold py-2 px-0.5 rounded overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white"
                type="button">
                <span
                    class="relative px-5 py-2 bg-white transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Отправить
                </span>
            </button>
        </div>
    </div>

    <!-- Тело выпадающего списка (dropdown) -->
    <div id="userDropdown" ref="calendarDrop" datepicker-buttons data-date="" inline-datepicker @click="clickItem()"
        class="absolute fixed hidden bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700">
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

const props = defineProps({
    label: {
        type: [String],
        default: "",
    },
    values: {
        type: [Array],
        default: () => []
    },
    keylabel: {
        type: [String],
        default: "",
    },
    currentItem: {
        type: [String, Object],
        default: () => null,
    }
})

const slots = useSlots();

const emit = defineEmits(['input', 'update:currentItem']);

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
        const datePicker = new Datepicker($targetEl, {
            language: 'ru',
            locales: ru
        });
        closeDropdown.value = () => { dropdown.value.hide() }
    };
}

function hasSlot(name) {
    return !!slots[name]
}

function clickItem(item, index, keylabel) {
    emit('input', item, index);
    if (keylabel) {
        dateInput.value = item[keylabel]
    }
    else {
        dateInput.value = item
    }

    emit('update:currentItem', item)
}

function clearTextEdit() {
    dateInput.value = ""
}
</script>