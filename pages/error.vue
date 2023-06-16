<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7x1 font-bold">{{ error.statusCode }}</p>
        <p class="mt-6 text-7x1">Damn.</p>
        <p class="mt-7">{{ error.message }}</p>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>