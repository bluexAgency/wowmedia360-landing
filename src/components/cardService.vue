<script lang="ts" setup>

const props = defineProps<{
    title: string,
    description: string,
    icon: string
}>()

</script>

<template>
    <article class="bg-white pb-10 px-10 rounded-3xl shadow-2xl border text-center translate-y-[-50%]">
        <font-awesome-icon :icon="icon" class="bg-[#F37659] text-white p-5 rounded-full block mx-auto -translate-y-[50%] scale-[1.5]"/>
        <h2 class="font-bold text-xl my-4 md:text-2xl">{{ title }}</h2>
        <p class="text-md font-medium">{{ description }}</p>
    </article>
</template>