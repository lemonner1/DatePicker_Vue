<template>
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <input datepicker type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
            placeholder="Выберите дату">
    </div>
    <div
        id="userDropdown2"
        ref="bodyDrop"
        class="hidden flex bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        aria-labelledby="avatarButton2"
    >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li v-for="(item, idx) of values" :key="idx" @click="clickItem(item,idx)">
                <p class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-yellow-400">
                    {{ item.title }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { Dropdown } from 'flowbite'

    const props = defineProps({
        label: {
            type: [String],
            default: "",
        },
        values: {
            type: [Array],
            default: () => []
        }
    })

    const emit = defineEmits(['input']);

    const bodyDrop = ref();
    const triger = ref();

    const dropdown = ref()
    const closeDropdown = ref(() => {})

    onMounted(() => {
        createDB();
    })

    function createDB(){
        const $targetEl = bodyDrop.value; // document.getElementById('userDropdown2')
        const $triggerEl = triger.value;//document.getElementById('avatarButton2')
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

    function clickItem(item,idx){
        emit('input', item, idx);
        closeDropdown.value();
}

</script>