<script setup lang="ts">
import TextInformative1 from '../components/textInformative1.vue';
import TextInformative2 from '../components/textInformative2.vue';

</script>

<template>
    <main>
        <section class="w-full grid place-items-center text-center relative bg-grid h-screen">
            <div class="absolute inset-0 object-fill w-full h-full bg-image-icons opacity-[.5]"></div>
            <div class="relative grid place-items-center gap-6 fontCool md:w-[40%]">
                <TextInformative1 text="Somos" />
                <TextInformative2 text="Una Creativa" class="rotate-12" />
                <TextInformative1 text="Agencia" />
                <TextInformative2 text="Marketing" class="-rotate-12" />
            </div>
            <img src="/icons/mega.png"
                class="absolute transition-all cursor-pointer hover:scale-[1.2] left-[6%] top-[65%] w-[15vh] md:w-[25vh] md:left-[30%] md:top-[60%] -rotate-[30deg]" />

            <div class="absolute bottom-0 z-[1]">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </section>
        <section class="bg-white">

        </section>
    </main>
</template>


<style scoped>
.fontCool {
    font-family: sans-serif;
    text-transform: uppercase;
}
</style>