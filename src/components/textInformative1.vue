<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>


<template>
    <article class="font-bold text-white bg-[#016074] mx-auto min-w-[30vh] py-[2vh] px-[4vh] shadow-2xl text-4xl md:text-6xl">
        {{text}}
    </article>
</template>