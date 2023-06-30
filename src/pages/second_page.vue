<template>
    <div class="fixed space-y-4 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 shadow-xl left-48 top-32">
        <h2 class="text-slate-900 dark:text-white mt-2 text-base font-medium tracking-tight">
            Добро пожаловать на следующую страницу
        </h2>
        <p class="text-left text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Я не знаю зачем я создал эту страницу, но возможно она мне пригодится в будущем.
        </p>

        <div class="flex dark:bg-gray-900 relative max-w-md">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input id="dropdownDatePicker" ref="triger" v-model="dateInput" data-dropdown-toggle="dropdown"
                datepicker="" datepicker-title="Flowbite datepicker" type="text"
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

    </div>
    <!-- Тело выпадающего списка (dropdown) -->
    <div id="userDropdown" ref="calendarDrop" class="absolute fixed hidden bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700">
        <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
            <div class="datepicker-header">
                <div
                    class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold">
                    Календарь</div>
                <div class="datepicker-controls flex justify-between mb-2"><button type="button"
                        class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"><svg
                            class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clip-rule="evenodd"></path>
                        </svg></button><button type="button"
                        class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch">Июнь
                        2023</button><button type="button"
                        class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"><svg
                            class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg></button></div>
            </div>
            <div class="datepicker-main p-1">
                <div class="datepicker-view flex">
                    <div class="days">
                        <div class="days-of-week grid grid-cols-7 mb-1"><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Вс</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Пн</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Вт</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Ср</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Чт</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Пт</span><span
                                class="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Сб</span>
                        </div>
                        <div class="datepicker-grid w-64 grid grid-cols-7"><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                                data-date="1685221200000">28</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                                data-date="1685307600000">29</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                                data-date="1685394000000">30</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500"
                                data-date="1685480400000">31</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685566800000">1</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685653200000">2</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685739600000">3</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685826000000">4</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685912400000">5</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1685998800000">6</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686085200000">7</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686171600000">8</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686258000000">9</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686344400000">10</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686430800000">11</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686517200000">12</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686603600000">13</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686690000000">14</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686776400000">15</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686862800000">16</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1686949200000">17</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687035600000">18</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687122000000">19</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687208400000">20</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687294800000">21</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687381200000">22</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687467600000">23</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687554000000">24</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687640400000">25</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687726800000">26</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1687813200000">27</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day dark:text-white"
                                data-date="1687899600000">28</span><span
                                class="datepicker-cell block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm day selected bg-blue-700 text-white dark:bg-blue-600 focused"
                                data-date="1687986000000">29</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
                                data-date="1688072400000">30</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688158800000">1</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688245200000">2</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688331600000">3</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688418000000">4</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688504400000">5</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688590800000">6</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688677200000">7</span><span
                                class="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500"
                                data-date="1688763600000">8</span></div>
                    </div>
                </div>
            </div>
            <div class="datepicker-footer">
                <div class="datepicker-controls flex space-x-2 mt-2"><button type="button"
                        class="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                        style="display: none;">Сегодня</button><button type="button"
                        class="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                        style="display: none;">Очистить</button></div>
            </div>
        </div>
    </div>
</template>


<script setup>
import 'flowbite';
import Datepicker from 'flowbite-datepicker/Datepicker';
import { onMounted } from 'vue';
import { Dropdown } from 'flowbite'
import { useSlots } from '~~/.nuxt/imports';

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

const workArray = ref(props.values)
const dateInput = ref("")

onMounted(() => {
    const datepickerEl = document.getElementById('datepickerId');
    new Datepicker(datepickerEl, {
        
    }); 
    createDB()
})

function createDB() {
    const $targetEl = calendarDrop.value; // document.getElementById('userDropdown2')
    const $triggerEl = triger.value;  // document.getElementById('avatarButton2')
    newStartTextValue()
    const options = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
    }
    if ($targetEl) {
        dropdown.value = new Dropdown($targetEl, $triggerEl, options)
        closeDropdown.value = () => {
            dropdown.value.hide()
        }
    }
}

function clickItem(item, index, keylabel) {
    emit('input', item, index);
    closeDropdown.value();

    if (keylabel) {
        dateInput.value = item[keylabel]
    }
    else {
        dateInput.value = item
    }

    emit('update:currentItem', item)
}

function hasSlot(name) {
    return !!slots[name]
}

function clearTextEdit() {
    dateInput.value = ""
    workArray.value = props.values

    let textEdit = document.querySelector('#dropdownSearchTextEdit')
    let focusOnTextEdit = document.querySelector('#clearTextEditIcon')

    focusOnTextEdit.addEventListener('click', function () { textEdit.focus() })
}

function newStartTextValue() {
    for (let item of props.values) {
        if (isObjectsEqual(item, props.currentItem)) {
            if (props.keylabel) {
                console.log("keylabel is: ", props.keylabel)
                dateInput.value = props.currentItem[props.keylabel]
            }
            else {
                console.log("keylabel12354 is: ", props.keylabel)
                dateInput.value = props.currentItem
            }
            return
        }
    }
}

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 32px;
}
</style> 