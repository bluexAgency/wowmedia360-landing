<script lang="ts" setup>

const props = defineProps<{
    title: string,
    subtitle: string,
    icon: string
}>()

</script>

<template>
    <article class="bg-white py-10 px-10 rounded-3xl shadow-2xl border">
        <font-awesome-icon :icon="icon" class="bg-[#016074] text-white p-5 rounded-full"/>
        <h2 class="font-bold text-xl my-4 md:text-2xl">{{ title }}</h2>
        <p class="text-md font-medium">{{ subtitle }}</p>
    </article>
</template>