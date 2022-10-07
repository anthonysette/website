<script setup>
import { formatStrapiBlogs } from "../utils/helpers";

const { find } = useStrapi();

const getAllBlogs = async () => {
  const response = await find("blogs", {
    pagination: {
      page: 1,
      pageSize: 1,
    },
    filters: {
      featured: false,
    },
    populate: ["thumbnail", "categories"],
    sort: "releaseDate:desc",
  });
  return formatStrapiBlogs(response);
};
const { data: blogs } = await useAsyncData("blogs", () => getAllBlogs());
</script>


<template>
  <div id="popular-articles" class="max-w-7xl px-4 mx-auto pb-16 pt-12">
    <h2
      class="
        pb-6
        text-xl text-[#271A17]
        sm:text-2xl
        md:text-4xl
        max-w-4xl
        mx-auto
        text-center
        font-bold
      "
    >
      All Articles
    </h2>

    <div class="gap-4 grid grid-cols-1">
      <BlogCardLarge
        v-for="blog in blogs"
        :key="blog.id"
        :title="blog.title"
        :preview="blog.preview"
        :image="blog.image"
        :imageAlt="blog.imageAlt"
        :date="blog.date"
        :uid="blog.uid"
        :tags="blog.tags"
        :readTime="blog.readTime"
      ></BlogCardLarge>
    </div>
  </div>
</template>

<style scoped>
</style>
