<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "https://via.placeholder.com/1200x800.png"
  },
  imageAlt: {
    type: String,
    default: "Image Placeholder"
  },
  category: {
    type: String,
    default: "CATEGORY"
  },
  title: {
    type: String,
    default: "Title"
  },
  description: {
    type: String,
    default: "Lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit"
  },
  date: {
    type: Date,
    default: function () { return new Date() }
  }
})

const formattedDate = computed(() => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(props.date).toLocaleDateString('en-US', options)
});
</script>

<template>
  <!-- border-[#CFD6E5] -->
  <div class="flex flex-col sm:flex-row bg-white drop-shadow-xl rounded-lg flex">
    <img :src="image" alt="imageAlt" class="object-cover w-full sm:w-[30%] aspect-[5/3] md:aspect-[3/2] rounded-lg">
    <div class="flex flex-col pt-5 p-7 sm:py-8 sm:px-10">
      <p class="text-sm text-indigo-600 font-semibold pb-1">{{category}}</p>
      <h4 class="text-lg font-black text-stone-900 pb-3">{{title}}</h4>
      <p class="text-base text-gray-500 line-clamp-3">{{description}} {{description}}</p>
      <div class="flex items-center space-x-4 pt-6">
        <img class="w-10 h-10 rounded-full" src="~assets/images/anthony.jpeg" alt="">
          <div class="dark:text-white">
              <div class="text-sm font-medium text-stone-900">Anthony Sette</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{formattedDate}} • 6 min read</div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
