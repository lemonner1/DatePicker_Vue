<template>
    <div class="flex relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>
        <input id="dropdownDatePicker" ref="triger" v-model="dateInput" autocomplete="off" data-dropdown-toggle="dropdown"
            type="text"
            class="shadow-lg max-w-lg dark:bg-gray-600 border border-gray-300 focus:border-cyan-500 text-gray-900 dark:text-gray-300 text-sm rounded-lg w-full pl-10 p-2.5"
            placeholder="Выберите дату">
        <button @click="rangeSwitcher"
            class="top-0 p-2 h-full rounded-r-lg right-0 absolute bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:text-white dark:text-white"
            type="button">
            <span v-if="isRange" class="px-5 py-2 h-full w-full">
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute" xmlns="http://www.w3.org/2000/svg" width="40"
                    height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor"
                        d="M17 2h2v2h4v14H5V4h4V2h2v2h6V2zm-6 4H7v2h14V6H11zm-4 4v6h14v-6H7zM3 20h16v2H1V8h2v12z" />
                </svg>
            </span>
            <span v-else class="px-5 py-2 h-full w-full">
                <svg id="clearTextEditIcon" class="h-full inset-y-0 absolute" xmlns="http://www.w3.org/2000/svg" width="40"
                    height="60" viewBox="-3 1 30 23">
                    <path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z" />
                </svg>
            </span>
        </button>
    </div>

    <div class="container gap-4 flex p-2 text-sm">
        <button @click="itWeek"
            class="border border-gray-300 focus:border-cyan-500 py-1 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-sky-800 to-cyan-500 dark:text-white hover:shadow-xl hover:shadow-gray-800/30"
            type="button" title="В расчет берутся последние 7 дней, включая сегодня">
            <span
                class=" px-5 py-2 bg-white transition-all ease-in duration-175 dark:bg-gray-700 rounded-md group-hover:text-gray-100 group-hover:bg-opacity-0">
                За неделю
            </span>
        </button>
        <button @click="itMonth"
            class="border border-gray-300 focus:border-blue-500 py-1 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-indigo-800 to-blue-500 dark:text-white hover:shadow-xl hover:shadow-gray-800/30"
            type="button" title="В расчет берутся последние 30 дней, включая сегодня">
            <span
                class="px-5 py-2 bg-white transition-all ease-in duration-175 dark:bg-gray-700 rounded-md group-hover:text-gray-100 group-hover:bg-opacity-0">
                За месяц
            </span>
        </button>
        <button @click="itQuarter"
            class="border border-gray-300 focus:border-violet-500 py-1 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-blue-800 to-violet-500 dark:text-white hover:shadow-xl hover:shadow-gray-800/30"
            type="button" title="В расчет берутся последние 90 дней, включая сегодня">
            <span
                class="px-5 py-2 bg-white transition-all ease-in duration-175 dark:bg-gray-700 rounded-md group-hover:text-gray-100 group-hover:bg-opacity-0">
                За квартал
            </span>
        </button>        
    </div>

    <div id="userDropdown" ref="calendarDrop" datepicker-buttons @click="clickItem()"
        class="hidden bg-white rounded-md mb-5 shadow dark:bg-gray-600">
    </div>
</template>
                    
<script setup> // Если у вас крашится DP, при обновлении, попробуйте добавить <client-only></client-only> в страницу с компонентом
import 'flowbite';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { Dropdown } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker';
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
        valueDeclarator()
    };
}

function hasSlot(name) {
    return !!slots[name]
}

function valueDeclarator() {        // Функция, которая помещает в DP-строку значение, поданное на вход как проперти 
    let newDate = props.currentDate
    let today = new Date()
    if (!isEmpty(newDate) && dateValidator(newDate)) {  // Проверка на пустоту и истинность поданной даты (даже если поданная дата - промежуток)
        let arrDate = newDate.split(".")                // Парсер меняет дату и месяц местами, поэтому тут прибегаем к ручному изменению их положения
        newDate = arrDate[1] + "." + arrDate[0] + "." + arrDate[2]
        newDate = parseInt((new Date(newDate).getTime()).toFixed(0))

        //calendarDrop.value.datepicker.dates = newDate                         //  Может потом пригодиться
        //calendarDrop.value.datepicker.picker.viewDate = newDate
        calendarDrop.value.datepicker.picker.currentView.focused = [newDate]
        calendarDrop.value.datepicker.dates = [newDate]
        calendarDrop.value.datepicker.picker.currentView.selected = [newDate]

        dateInput.value = props.currentDate
    }
    else {
        if (!isRange) {     //  Поданное число на вход неправильно записано  =>  В строку устанавливается дата текущего дня
            dateInput.value = today.toLocaleDateString("ru-RU")

            today = today.toLocaleDateString("ru-RU")
            let arrDate = today.split(".")                // Парсер меняет дату и месяц местами, поэтому тут прибегаем к ручному изменению их положения
            today = arrDate[1] + "." + arrDate[0] + "." + arrDate[2]
            today = parseInt((new Date(today).getTime()).toFixed(0))

            calendarDrop.value.datepicker.picker.currentView.focused = [today]
            calendarDrop.value.datepicker.dates = [today]
            calendarDrop.value.datepicker.picker.currentView.selected = [today]
        }
        else {   //  Если промежуток, то конечным значением является текущий день, а начальным дата за 30 дней до текущего дня
            let localToday = new Date()
            let defaultRangeThirtyMonthAgo = new Date(today.setDate(today.getDate() - 30))
            dateInput.value = defaultRangeThirtyMonthAgo.toLocaleDateString("ru-RU") + "-" + localToday.toLocaleDateString("ru-RU")
        }
    }
}

function clickItem() {      //  Функция для события при клике в область DP
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

function rangeSwitcher() {      //  Переключение режима с одиночной даты на промежуток и обратно
    isRange = !isRange
    dateInput.value += " "
    dateInput.value = dateInput.value.pop
}

function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}

function itWeek() {
    if (isRange) {
        let today = new Date()
        let localToday = new Date()
        let defaultRangeThirtyMonthAgo = new Date(today.setDate(today.getDate() - 7))
        dateInput.value = defaultRangeThirtyMonthAgo.toLocaleDateString("ru-RU") + "-" + localToday.toLocaleDateString("ru-RU")
    }
}

function itMonth() {
    if (isRange) {
        let today = new Date()
        let localToday = new Date()
        let defaultRangeThirtyMonthAgo = new Date(today.setDate(today.getDate() - 30))
        dateInput.value = defaultRangeThirtyMonthAgo.toLocaleDateString("ru-RU") + "-" + localToday.toLocaleDateString("ru-RU")
    }
}

function itQuarter() {
    if (isRange) {
        let today = new Date()
        let localToday = new Date()
        let defaultRangeThirtyMonthAgo = new Date(today.setDate(today.getDate() - 90))
        dateInput.value = defaultRangeThirtyMonthAgo.toLocaleDateString("ru-RU") + "-" + localToday.toLocaleDateString("ru-RU")
    }
}

function dateValidator(value) {
    if (!isRange) {
        let arrDate = value.split(".")
        arrDate[1] -= 1
        let date = new Date(arrDate[2], arrDate[1], arrDate[0])

        if ((date.getFullYear() == arrDate[2]) && (date.getMonth() == arrDate[1]) && (date.getDate() == arrDate[0]))
            return true
        else
            return false
    }
    else if (value.includes('-')) {
        let arrDate = value.split("-")
        let firstDate = arrDate[0]; let secondDate = arrDate[1]

        let fArrDate = firstDate.split("."); let sArrDate = secondDate.split(".")
        fArrDate[1] -= 1; sArrDate[1] -= 1

        let fDate = new Date(fArrDate[2], fArrDate[1], fArrDate[0]); let sDate = new Date(sArrDate[2], sArrDate[1], sArrDate[0])
        if (fDate.getTime() < sDate.getTime()) {
            if ((fDate.getFullYear() == fArrDate[2]) && (fDate.getMonth() == fArrDate[1]) && (fDate.getDate() == fArrDate[0]) && (sDate.getFullYear() == sArrDate[2]) && (sDate.getMonth() == sArrDate[1]) && (sDate.getDate() == sArrDate[0]))
                return true
            else
                return false
        }
        else
            return false
    }
    else
        return false
}
</script>