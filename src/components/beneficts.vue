<script setup lang="ts">
import MiniTitle from './miniTitle.vue';



</script>

<template>
    <section id="benefits" class="bg-[#F4F4F5] gap-10 py-20 px-10 w-full md:flex md:h-screen justify-center md:px-0 md:pb-[20vh]">

        <img src="/image-landing.jpg" class="h-[100%] shadow-xl md:w-[50%] 2xl:w-[30%] object-cover bg-center rounded-3xl"
            alt="image of habi">

        <div class=" bg-white shadow-xl rounded-3xl my-2 mt-4 md:px-10 w-full md:w-[50%] md:py-10 2xl:w-[40%]">
            <MiniTitle text="Beneficios" class="text-center mx-auto md:mx-0 md:px-4 md:min-w-[40%]" />
            <h2
                class="font-extrabold w-[100%] text-[#016074] mx-auto mt-5 text-2xl md:font-bold md:text-4xl 2xl:text-5xl">
                Impulsando el crecimiento de tu marca</h2>
            <p class="font-medium mt-4 text-md text-[#444a55] md:text-lg">Nuestra agencia de marketing no solo optimiza
                la visibilidad de tu negocio, sino que también transforma la conexión con tus clientes, elevando la
                experiencia de marca a un nuevo nivel.</p>
            <ul class="mt-10">
                <li class="flex items-center gap-1 mt-4">
                    <div class="rounded-full p-2 px-3 scale-[.8] bg-[#FDEDEF] text-[#F37659] font-semibold">
                        <font-awesome-icon icon="check" />
                    </div>
                    <p class="text-gray-700 text-lg">Estrategias de Marketing Digital</p>
                </li>
                <li class="flex items-center gap-1 mt-4">
                    <div class="rounded-full p-2 px-3 scale-[.8] bg-[#FDEDEF] text-[#F37659] font-semibold">
                        <font-awesome-icon icon="check" />
                    </div>
                    <p class="text-gray-700 text-lg">Diseño de Campañas Publicitarias</p>
                </li>
                <li class="flex items-center gap-1 mt-4">
                    <div class="rounded-full p-2 px-3 scale-[.8] bg-[#FDEDEF] text-[#F37659] font-semibold">
                        <font-awesome-icon icon="check" />
                    </div>
                    <p class="text-gray-700 text-lg">Gestión de Redes Sociales</p>
                </li>
                <li class="flex items-center gap-1 mt-4">
                    <div class="rounded-full p-2 px-3 scale-[.8] bg-[#FDEDEF] text-[#F37659] font-semibold">
                        <font-awesome-icon icon="check" />
                    </div>
                    <p class="text-gray-700 text-lg">Aumento de Ventas y Conversión</p>
                </li>
            </ul>
        </div>
    </section>
</template>