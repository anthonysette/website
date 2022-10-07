<script setup></script>

<template>
  <div
    class="bg-gradient-to-br from-[#934EAE] to-[#F8A2ED] w-full sm:rounded-r-xl"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="max-w-[40rem] py-14 order-2 sm:order-1 pl-4 pr-6 ml-auto">
        <p class="text-md sm:text-lg text-white/90 font-semibold pb-3 sm:pb-5">
          About Me
        </p>
        <h2 class="text-2xl sm:text-4xl text-white font-bold pb-5 sm:pb-7">
          I’m a Software Engineer and Entrepreneur
        </h2>
        <p class="text-md sm:text-lg text-white/75 pb-11">
          I’m passionate about building technology that shapes our future on
          this planet. Currently building next level software at my company,
          <a class="underline" href="https://www.sparc.agency">Sparc Agency</a>.
        </p>
        <nuxt-link
          to="/about"
          class="
            bg-white
            rounded-full
            py-2
            px-3
            sm:py-4 sm:px-5
            text-black text-md
            sm:text-lg
            text-medium
          "
          >Read More</nuxt-link
        >
        <!-- <a href="#" class="border border-white rounded-full py-2 px-3 sm:py-4 sm:px-5 text-md sm:text-lg text-medium text-white">Contact Me</a> -->
      </div>
      <div
        class="
          sm:rounded-l-lg
          aspect-[3/2]
          sm:aspect-auto
          order-1
          sm:order-2
          w-full
          bg-center bg-no-repeat bg-cover bg-[url('@/assets/images/about.jpeg')]
        "
      ></div>
      <!-- <img class="w-full object-cover order-1 sm:order-2" src="https://via.placeholder.com/1200x800.png"> -->
    </div>
  </div>
</template>

<style scoped>
</style>
