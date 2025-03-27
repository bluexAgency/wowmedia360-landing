<script setup lang="ts">
import Beneficts from '../components/beneficts.vue';
import CardService from '../components/cardService.vue';
import Contact from '../components/contact.vue';
import Note from '../components/note.vue';
import TextInformative1 from '../components/textInformative1.vue';
import TextInformative2 from '../components/textInformative2.vue';
import Footer from '../layouts/footer.vue';

</script>

<template>
    <main>
        <section class="w-full grid place-items-center text-center relative bg-grid h-screen py-[10vh]">
            <div class="absolute inset-0 object-fill w-full h-full bg-image-icons opacity-[.5]"></div>
            <!--div class="absolute inset-0 w-full bg-center bg-no-repeat h-full bg-image-icons md:bg-[auto_100%]"></div-->

            <Note title="Estrategia Digital" subtitle="Contamos la historia que tu marca necesita"
    class="absolute left-[20%] -rotate-12 top-[50%] bg-blue-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="SEO Optimizado" subtitle="Aparece en los primeros lugares de Google"
    class="absolute left-[5%] rotate-6 top-[55%] bg-green-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Gestión de Redes" subtitle="Aumenta tu engagement con contenido atractivo"
    class="absolute right-[30%] -rotate-3 top-32 bg-red-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Publicidad Pagada" subtitle="Anuncios optimizados en Google y Meta Ads"
    class="absolute right-[5%] rotate-2 top-[50%] bg-yellow-500 text-black p-4 rounded-lg shadow-lg" />
<Note title="Diseño Gráfico" subtitle="Impacta con logotipos, banners y más"
    class="absolute right-[30%] -rotate-8 top-[72%] bg-purple-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Email Marketing" subtitle="Llega directamente a tus clientes"
    class="absolute left-40 rotate-4 top-[76%] bg-indigo-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Análisis de Datos" subtitle="Toma decisiones estratégicas basadas en datos"
    class="absolute right-40 -rotate-10 top-24 bg-gray-700 text-white p-4 rounded-lg shadow-lg" />
<Note title="Contenido Creativo" subtitle="Textos, imágenes y videos que conectan"
    class="absolute left-[20%] rotate-8 top-[20%] bg-pink-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Automatización" subtitle="Optimiza procesos y ahorra tiempo"
    class="absolute right-96 -rotate-6 top-[35%] bg-teal-500 text-white p-4 rounded-lg shadow-lg" />
<Note title="Marca Personal" subtitle="Construye tu identidad digital"
    class="absolute left-32 rotate-5 top-64 bg-orange-500 text-white p-4 rounded-lg shadow-lg" />



            <div class="relative grid place-items-center gap-6 fontCool md:w-[40%] md:scale-[.8] 2xl:scale-1">
                <TextInformative1 text="Somos" />
                <TextInformative2 text="Una Creativa" class="rotate-12" />
                <TextInformative1 text="Agencia" />
                <TextInformative2 text="Marketing" class="-rotate-12" />
            </div>
            <img src="/icons/mega.png"
                class="absolute transition-all cursor-pointer hover:scale-[1.2] left-[6%] top-[65%] w-[15vh] md:w-[25vh] md:left-[30%] md:top-[60%] -rotate-[30deg]" />

            <!--div class="absolute bottom-0 z-[1]">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div-->
        </section>
        <section class="bg-[#016074] py-20 px-2 md:py-0 md:px-0">
            <div class="grid grid-cols-1 gap-5 md:px-10 md:grid-cols-4 md:translate-y-[-25%]">
                <CardService title="Branding" subtitle="Contamos la historia que tu marca necesita"
                    icon="clock-rotate-left" />
                <CardService title="Impulsar" subtitle="Impulsa tu marca en redes sociales" icon="thumbs-up" />
                <CardService title="Potencial"
                    subtitle="No solo hacemos marketing, desatamos el potencial de tu negocio. " icon="rocket" />
                <CardService title="Creatividad" subtitle="En un mundo digital, la creatividad es tu mayor ventaja. "
                    icon="web-awesome" />
            </div>

        </section>
        <Beneficts />

        <Contact />

        <Footer />
    </main>
</template>


<style scoped>
.fontCool {
    font-family: sans-serif;
    text-transform: uppercase;
}
</style>