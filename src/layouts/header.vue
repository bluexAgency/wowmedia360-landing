<script lang="ts" setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header
        class="flex h-[10vh] w-full fixed top-0 z-[1000] justify-between items-center gap-10 px-4 bg-[#F37659] border-b-[#F37659] md:justify-center 2xl:h-[8vh]">

        <nav class="gap-4 text-white font-bold hidden md:flex">
            <a class="block text-xl cursor-pointer hover-text-companie" href="#">Servicios</a>
            <a class="block text-xl cursor-pointer hover-text-companie" href="#">Blog</a>
        </nav>
        <img src="/logo.png"
            class="w-[40%] h-[50%] px-10 rounded-2xl border-[#F37659] border-[1px] bg-white object-contain md:h-full md:rounded-3xl md:w-[12%] md:mt-10"
            alt="logo wowmedia">
        <nav class="gap-4 text-white font-bold hidden md:flex">
            <router-link to="/about" class="block text-xl cursor-pointer hover-text-companie">Nosotros</router-link>
            <a class="block text-xl cursor-pointer hover-text-companie" href="#">Contacto</a>
        </nav>

        <button @click="toggleMenu" class="text-[#ffffff] md:hidden focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <div class="fixed inset-0 bg-white grid place-items-center" v-if="isMenuOpen">
            <p class="fixed top-3 right-5 text-4xl cursor-pointer" @click="toggleMenu">x</p>
            <nav class="gap-4 text-[#F37659] font-bold block text-center">
                <a class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie" href="#">Servicios</a>
                <a class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie" href="#">Blog</a>
            <router-link to="/about" class="block text-xl cursor-pointer hover-text-companie">Nosotros</router-link>
                <a class="block text-3xl cursor-pointer mb-[2vh] hover-text-companie" href="#">Contacto</a>
            </nav>
        </div>
    </header>
</template>