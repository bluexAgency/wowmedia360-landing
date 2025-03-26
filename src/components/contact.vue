<template>
    <section class="bg-[#015D70] py-20">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contacto</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Déjanos saber que deseas, obtén información detallada sobre nuestros servicios digitales y cómo podemos ayudarte.</p>
      <form action="#" class="space-y-8 p-10 border-[1px] border-gray-200 bg-white rounded-2xl">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tu email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="name@example.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 " placeholder="Digame un asunto" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Deja un comentario..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 mx-auto block text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300">Enviar correo</button>
      </form>
  </div>
</section>
</template>