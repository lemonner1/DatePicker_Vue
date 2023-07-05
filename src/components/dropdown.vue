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
        <input id="dropdownDatePicker" ref="triger" v-model="dateInput" autocomplete="off" data-dropdown-toggle="dropdown" type="text"
            class="shadow-lg bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-lg focus:border-cyan-500 block w-full pl-10 p-2.5 datepicker-input"
            placeholder="Выберите дату">
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
    <div id="userDropdown" ref="calendarDrop" class="absolute fixed hidden bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700">
        <div inline-datepicker data-date="02/25/2022" @click="clickItem()"></div>
    </div>
</template>

<script setup>
import 'flowbite';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { Dropdown } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker';

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

    const $targetEl = calendarDrop.value; // document.getElementById('userDropdown2')
    const $triggerEl = triger.value;  // document.getElementById('avatarButton2')
    /* newStartTextValue() */

    new Datepicker($targetEl, {
        // options
    });

    if ($targetEl) {
        dropdown.value = new Dropdown($targetEl, $triggerEl)
    };
    closeDropdown.value = () => {
        dropdown.value.hide()
    }
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
</script>