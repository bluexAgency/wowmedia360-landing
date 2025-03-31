<script setup lang="ts">
import Info1 from '../components/about/info1.vue';
import MisionVis from '../components/about/MisionVis.vue';
import Why from '../components/about/why.vue';
import Contact from '../components/contact.vue';
import Footer from '../layouts/footer.vue';

</script>

<template>
    <main class="h-screen mt-[8vh] overflow-auto bg-[#F9F9FA]">
        <Info1 />
        <MisionVis />
        <Contact />
        <Why/>
        <Footer />
    </main>
</template>