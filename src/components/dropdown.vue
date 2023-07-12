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
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute text-white" xmlns="http://www.w3.org/2000/svg"
                    width="40" height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor"
                        d="M17 2h2v2h4v14H5V4h4V2h2v2h6V2zm-6 4H7v2h14V6H11zm-4 4v6h14v-6H7zM3 20h16v2H1V8h2v12z" />

                </svg>
            </span>
            <span v-else class="px-5 py-2 h-full w-full">
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute text-white" xmlns="http://www.w3.org/2000/svg"
                    width="40" height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z" />
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

const props = defineProps({
    currentDate: {
        type: String,
        default: "",
    },
    isRanged: {
        type: Boolean,
        default: false,
    },
})

const slots = useSlots();
const emit = defineEmits('input', 'update:currentDate')

let firstElement = ""
let secondElement = "0"
let isRange = props.isRanged;
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
    valueDeclarator()
}

function hasSlot(name) {
    return !!slots[name]
}

function valueDeclarator() {
    let newDate = props.currentDate
    let today = new Date()
    if (!isEmpty(newDate) && dateVeritable(newDate)) {
        newDate = 1611176400000
        //newDate = parseInt((new Date(newDate).getTime()).toFixed(0)).toString
        calendarDrop.value.datepicker.dates = newDate
        console.log(calendarDrop.value.datepicker.dates)
        dateInput.value = props.currentDate

        return
    }
    else {
        if (!isRange) {
            dateInput.value = today.toLocaleDateString("ru-RU")
        }
        else {
            let localToday = new Date()
            let defaultRangeThirtyMonthAgo = new Date(today.setDate(today.getDate() - 30))
            dateInput.value = defaultRangeThirtyMonthAgo.toLocaleDateString("ru-RU") + "-" + localToday.toLocaleDateString("ru-RU")
        }
    }
}

function clickItem() {
    if (isRange) {
        secondElement = new Date(firstElement)
        firstElement = new Date(calendarDrop.value.datepicker.dates[0])
        let newFirstElement = new Date(firstElement.getTime() - (firstElement.getTimezoneOffset() * 60000)).toISOString()
        let newSecondElement = new Date(secondElement.getTime() - (secondElement.getTimezoneOffset() * 60000)).toISOString()
        if (firstElement.getTime() > secondElement.getTime()) {
            dateInput.value = secondElement.toLocaleDateString("ru-RU") + "-" + firstElement.toLocaleDateString("ru-RU")
            let dates = [newSecondElement, newFirstElement]
            emit('input', dates)
        }
        else {
            dateInput.value = firstElement.toLocaleDateString("ru-RU") + "-" + secondElement.toLocaleDateString("ru-RU")
            let dates = [newFirstElement, newSecondElement]
            emit('input', dates)
        }
    }
    else {
        let tempDate = new Date(calendarDrop.value.datepicker.dates[0])
        let newDate = new Date(tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000)).toISOString()
        let newDateInside = new Date(calendarDrop.value.datepicker.dates[0])
        dateInput.value = newDateInside.toLocaleDateString("ru-RU")
        emit('input', newDate)
    }
}

function rangeSwitcher() {
    isRange = isRange ? false : true
    dateInput.value += " "
    dateInput.value = dateInput.value.pop
}

function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}

function dateVeritable(value) {
    if (!isRange) {
        let arrDate = value.split(".")
        arrDate[1] -= 1
        let date = new Date(arrDate[2], arrDate[1], arrDate[0])

        if ((date.getFullYear() == arrDate[2]) && (date.getMonth() == arrDate[1]) && (date.getDate() == arrDate[0]))
            return true
        else
            return false
    }
    else {
        let arrDate = value.split("-")
        let firstDate = arrDate[0]
        let secondDate = arrDate[1]

        let fArrDate = firstDate.split("."); let sArrDate = secondDate.split(".")
        fArrDate[1] = -1; sArrDate[1] = -1

        let fDate = new Date(fArrDate[2], fArrDate[1], fArrDate[0]); let sDate = new Date(sArrDate[2], sArrDate[1], sArrDate[0])
        if (fDate.getTime() < sDate.getTime()) {
            if ((fDate.getFullYear() == fArrDate[2]) && (fDate.getMonth() == fArrDate[1]) && (fDate.getDate() == fArrDate[0]))
                {firstDate = true}
            else
                {firstDate = false}

            if ((sDate.getFullYear() == sArrDate[2]) && (sDate.getMonth() == sArrDate[1]) && (sDate.getDate() == sArrDate[0]))
                {secondDate = true}
            else
                {secondDate = false}

            if (firstDate == secondDate)
                return true
            else
                return false
        }
        else
            return false
    }
}
</script>