<script setup>
import { formatDate } from "../utils/helpers";
const props = defineProps({
  image: {
    type: String,
    default: "https://via.placeholder.com/1200x800.png",
  },
  imageAlt: {
    type: String,
    default: "Image Placeholder",
  },
  tags: {
    type: Array,
    default: [{ name: "Category", slug: "category" }],
  },
  title: {
    type: String,
    default: "Title",
  },
  preview: {
    type: String,
    default:
      "Lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit",
  },
  uid: {
    type: String,
    default: "slug",
  },
  date: {
    type: String,
    default: "02-02-2021",
  },
  readTime: {
    type: Number,
    default: 5,
  },
});

const formattedDate = computed(() => formatDate(props.date));
</script>

<template>
  <!-- border-[#CFD6E5] -->
  <nuxt-link
    :to="`/blog/${uid}`"
    class="
      flex flex-col
      sm:flex-row
      bg-white
      rounded-lg
      flex
      drop-shadow-md
      hover:drop-shadow-xl
      transition
      ease-in-out
      duration-300
    "
  >
    <img
      :src="image"
      alt="imageAlt"
      class="
        object-cover
        w-full
        sm:w-[30%]
        aspect-[5/3]
        md:aspect-[3/2]
        rounded-lg
      "
    />
    <div class="flex flex-col pt-5 p-7 sm:py-8 sm:px-10">
      <div class="block">
        <span
          v-for="tag in tags"
          :key="tag.slug"
          class="
            rounded
            bg-indigo-100
            text-indigo-600 text-xs
            font-medium
            px-2.5
            py-0.5
            mr-2
          "
        >
          {{ tag.name }}
        </span>
      </div>
      <h4 class="text-lg font-black text-stone-900 pb-3 pt-2">{{ title }}</h4>
      <p class="text-base text-gray-500 line-clamp-3">{{ preview }}</p>
      <div class="flex items-center space-x-4 pt-6">
        <img
          class="w-10 h-10 rounded-full"
          src="~assets/images/anthony.jpeg"
          alt=""
        />
        <div class="dark:text-white">
          <div class="text-sm font-medium text-stone-900">Anthony Sette</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ formattedDate }} • {{ readTime }} min read
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
