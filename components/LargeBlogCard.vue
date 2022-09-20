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
})
</script>

<template>
  <!-- border-[#CFD6E5] -->
  <div class="bg-white drop-shadow-xl rounded-lg flex">
    <img :src="image" alt="imageAlt" class="flex-none h-[200px] aspect-[3/2] rounded-lg object-cover">
    <div class="flex-1 py-8 px-10">
      <p class="text-sm text-[#FF0096] font-semibold">{{category}}</p>
      <h4 class="text-lg font-display text-[#3B248B] pb-3">{{title}}</h4>
      <p class="text-base text-gray-500">{{description}}</p>
    </div>
  </div>
</template>

<style scoped></style>
