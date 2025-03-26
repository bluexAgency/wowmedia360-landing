<template>
    <footer class="bg-[#FFF] text-[#F37659]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div class="md:col-span-4 space-y-4">
                    <div class="flex items-center">
                        <h2 class="text-2xl font-semibold tracking-tight">WOWMEDIA</h2>
                    </div>
                    <p class="text-[#f36140] max-w-xs">
                        Estabas buscando una agencia de marketing digital en Venezuela
                    </p>
                    <div class="flex flex-col space-y-2 pt-2">
                        <div
                            class="flex items-center space-x-2 text-[#f36140] hover:text-[#F37659] transition-colors">
                            <MapPin size={18} />
                            <span>Av. Sucre, parque miranda. Los Dos Caminos, Caracas, Venezuela</span>
                        </div>
                        <div
                            class="flex items-center space-x-2 text-[#f36140] hover:text-[#F37659] transition-colors">
                            <Phone size={18} />
                            <span>0424-0000000</span>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3 md:col-start-7">
                    <h3 class="text-lg font-medium mb-4">Links</h3>
                    <nav class="flex flex-col space-y-3">
                        <a class="text-[#f36140] hover:text-[#F37659] transition-colors" href="#">Servicios</a>
                        <a class="text-[#f36140] hover:text-[#F37659] transition-colors" href="#">Blog</a>
                        <a class="text-[#f36140] hover:text-[#F37659] transition-colors" href="#">Nosotros</a>
                        <a class="text-[#f36140] hover:text-[#F37659] transition-colors" href="#">Contacto</a>
                    </nav>
                </div>
                <div class="md:col-span-3">
                    <img src="/logo.png" class="w-full h-full px-10 rounded-2xl object-contain" alt="logo wowmedia">
                </div>
            </div>
        </div>
    </footer>
</template>