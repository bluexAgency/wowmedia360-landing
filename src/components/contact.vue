<script setup lang="ts">
import Redes from './redes.vue';

</script>

<template>
    <section class="bg-[#FFF] py-20 md:px-20">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <form action="#" class="space-y-8 p-10 border-[1px] border-gray-200 bg-white rounded-2xl">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tu email</label>
                        <input type="email" id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F37659] focus:border-[#F37659] block w-full p-2.5 "
                            placeholder="name@example.com" required>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
                        <input type="text" id="subject"
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#F37659] focus:border-[#F37659] "
                            placeholder="Digame un asunto" required>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
                        <textarea id="message" rows="6"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#F37659] focus:border-[#F37659]"
                            placeholder="Deja un comentario..."></textarea>
                    </div>
                    <button type="submit"
                        class="py-3 px-5 mx-auto block text-sm font-medium text-center text-white rounded-lg bg-[#F37659] sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300">Enviar
                        correo</button>
                </form>

                <div class="w-full lg:pl-8 mx-auto md:w-[80%]">
                    <div class="space-y-8 ">
                        <div class="text-[#F37659] w-full">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Contacto</h2>
                            <p class="mb-8 lg:mb-16 font-md text-center sm:text-xl">Déjanos saber que
                                deseas, obtén información detallada sobre nuestros servicios digitales y cómo podemos
                                ayudarte.</p>

                        </div>

                        <div class="space-y-5">
                            <div class="flex items-center animate-slide-in">
                                <div
                                    class="w-12 h-12 rounded-full bg-genical-gold flex items-center justify-center mr-4 bg-[#F37659]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scale-[.5] fill-white"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                </div>
                                <div>
                                    <h3 class="font-medium text-genical-navy">Telefono</h3>
                                    <p class="text-gray-600">0424-0000000</p>
                                </div>
                            </div>

                            <div class="flex items-center animate-slide-in">
                                <div
                                    class="w-12 h-12 rounded-full bg-genical-gold flex items-center justify-center mr-4 bg-[#F37659]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scale-[.5] fill-white"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                </div>
                                <div>
                                    <h3 class="font-medium text-genical-navy">Email</h3>
                                    <p class="text-gray-600">contact@email.com</p>
                                </div>
                            </div>

                            <div class="flex items-center animate-slide-in">
                                <div
                                    class="w-12 h-12 rounded-full bg-genical-gold flex items-center justify-center mr-4 bg-[#F37659]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scale-[.5] fill-white"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                                </div>
                                <div>
                                    <h3 class="font-medium text-genical-navy">Sitio web</h3>
                                    <p class="text-gray-600">www.woomedia.com</p>
                                </div>
                            </div>

                            <div class="flex items-center animate-slide-in">
                                <div
                                    class="w-12 h-12 rounded-full bg-genical-gold flex items-center justify-center mr-4 bg-[#F37659]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="scale-[.5] fill-white"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                </div>
                                <div>
                                    <h3 class="font-medium text-genical-navy">Dirección</h3>
                                    <p class="text-gray-600">Av. Sucre, parque miranda.<br />Los Dos Caminos, Caracas, Venezuela</p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <h3 class="font-medium text-gray-700 mb-4">Siguenos</h3>
                            <Redes/>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>