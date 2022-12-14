<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const props = defineProps({
  white: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <Popover class="relative" :class="{ 'bg-white': white }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="
          flex
          items-center
          justify-between
          py-6
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/" class="text-base font-semibold">Anthony Sette</a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-black
              hover:bg-gray-100 hover:text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-300
            "
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </PopoverButton>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <a href="/" class="text-base text-gray-600 hover:text-gray-900"
            >Home</a
          >
          <a href="/about" class="text-base text-gray-600 hover:text-gray-900"
            >About</a
          >
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="https://twitter.com/sette_anthony"
            target="_blank"
            class="
              text-white
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-3 focus:outline-none focus:ring-indigo-300
              font-medium
              rounded-full
              text-sm
              p-2
              text-center
              inline-flex
              items-center
              mr-2
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                fill="#ffffff"
              />
            </svg>
            <span class="sr-only">Twitter</span>
          </a>
          <a
            href="https://github.com/anthonysette"
            target="_blank"
            class="
              text-white
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-3 focus:outline-none focus:ring-indigo-300
              font-medium
              rounded-full
              text-sm
              p-2
              text-center
              inline-flex
              items-center
              mr-2
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z"
                fill="#fff"
              />
            </svg>

            <span class="sr-only">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/anthonysette"
            target="_blank"
            class="
              text-white
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-3 focus:outline-none focus:ring-indigo-300
              font-medium
              rounded-full
              text-sm
              p-2
              text-center
              inline-flex
              items-center
              mr-2
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z"
                fill="#fff"
              />
            </svg>

            <span class="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://medium.com/@anthonysette"
            target="_blank"
            class="
              text-white
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-3 focus:outline-none focus:ring-indigo-300
              font-medium
              rounded-full
              text-sm
              p-2
              text-center
              inline-flex
              items-center
              mr-2
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z"
                fill="#fff"
              />
            </svg>
            <span class="sr-only">Medium</span>
          </a>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          inset-x-0
          top-0
          origin-top-right
          transform
          p-2
          transition
          md:hidden
        "
      >
        <div
          class="
            divide-y-2 divide-gray-50
            rounded-lg
            bg-white
            shadow-lg
            ring-1 ring-black ring-opacity-5
          "
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Anthony Sette"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-white
                    p-2
                    text-gray-600
                    hover:bg-gray-100 hover:text-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-300
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  href="/"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span class="ml-3 text-base font-medium text-gray-900"
                    >Home</span
                  >
                </a>
                <a
                  href="/"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <span class="ml-3 text-base font-medium text-gray-900"
                    >About</span
                  >
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 justify-evenly flex">
            <a
              href="https://twitter.com/sette_anthony"
              target="_blank"
              class="
                text-white
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-3 focus:outline-none focus:ring-indigo-300
                font-medium
                rounded-full
                text-sm
                p-2
                text-center
                inline-flex
                items-center
                mr-2
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                  fill="#ffffff"
                />
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/anthonysette"
              target="_blank"
              class="
                text-white
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-3 focus:outline-none focus:ring-indigo-300
                font-medium
                rounded-full
                text-sm
                p-2
                text-center
                inline-flex
                items-center
                mr-2
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z"
                  fill="#fff"
                />
              </svg>

              <span class="sr-only">Github</span>
            </a>
            <a
              href="https://linkedin.com/in/anthonysette"
              target="_blank"
              class="
                text-white
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-3 focus:outline-none focus:ring-indigo-300
                font-medium
                rounded-full
                text-sm
                p-2
                text-center
                inline-flex
                items-center
                mr-2
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z"
                  fill="#fff"
                />
              </svg>

              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://medium.com/@anthonysette"
              target="_blank"
              class="
                text-white
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-3 focus:outline-none focus:ring-indigo-300
                font-medium
                rounded-full
                text-sm
                p-2
                text-center
                inline-flex
                items-center
                mr-2
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.846 6.887C2.876 6.592 2.763 6.301 2.543 6.103L0.303 3.403V3H7.261L12.639 14.795L17.367 3H24V3.403L22.084 5.24C21.919 5.366 21.837 5.573 21.871 5.778V19.276C21.837 19.48 21.919 19.687 22.084 19.813L23.955 21.65V22.053H14.543V21.65L16.482 19.768C16.672 19.578 16.672 19.522 16.672 19.231V8.321L11.283 22.009H10.555L4.28 8.321V17.495C4.228 17.88 4.356 18.269 4.627 18.547L7.148 21.605V22.009H0V21.605L2.521 18.547C2.791 18.268 2.911 17.877 2.846 17.495V6.887Z"
                  fill="#fff"
                />
              </svg>
              <span class="sr-only">Medium</span>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
