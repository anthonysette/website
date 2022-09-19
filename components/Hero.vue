<template>
  <div>
    <main
      class="
        mx-auto
        mt-10
        max-w-7xl
        px-4
        sm:mt-12 sm:px-6
        md:mt-16
        lg:mt-20 lg:px-8
        xl:mt-24
        pb-16
      "
    >
        <img class="mx-auto d-block max-w-[160px] max-h-[160px]" src="~assets/images/memoji.png"/>
      <div class="text-center">
        <h1
          class="
            text-2xl
            text-[#3B248B]
            sm:text-4xl
            md:text-5xl
            max-w-5xl
            mx-auto
            font-display
          "
        >
          Chatting about Startups and Software Engineering
        </h1>
        <p
          class="
            mt-3
            text-base text-gray-700
            mx-auto sm:mt-5 max-w-xl sm:text-lg
            md:mt-5 md:text-xl
          "
        >
          Sharing insights about the latest trends in software engineering and the startup world.
        </p>
        <div class="mt-5 sm:mt-8 flex justify-center">
          <div class="">
            <nuxt-link
              :to="{hash: '#popular-articles'}"
              class="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#FF0096]
                px-4
                py-2
                text-sm
              "
              >
              <span>Scroll to read articles</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke="#FF0096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


              </nuxt-link
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>