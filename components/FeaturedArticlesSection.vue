<script setup>
import { formatStrapiBlogs } from "../utils/helpers";

const { find } = useStrapi();

const getBlogs = async () => {
  const response = await find("blogs", {
    pagination: {
      page: 1,
      pageSize: 3,
    },
    filters: {
      featured: true,
    },
    populate: ["thumbnail", "categories"],
    sort: "releaseDate:desc",
  });

  return formatStrapiBlogs(response);
};
const { data: blogs } = await useAsyncData("blogs", () => getBlogs());
</script>

<template>
  <div id="articles" class="max-w-7xl px-4 mx-auto pb-16 pt-12">
    <h2
      class="
        pb-6
        text-2xl text-[#271A17]
        md:text-4xl
        max-w-4xl
        mx-auto
        text-center
        font-bold
      "
    >
      Featured Posts
    </h2>
    <p
      class="
        text-base text-gray-500
        mx-auto
        max-w-2xl
        sm:text-lg
        md:text-xl
        text-center
        pb-9
      "
    >
      Sharing insights about the latest trends in software engineering and the
      startup world.
    </p>
    <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard
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
      ></BlogCard>
    </div>
  </div>
</template>

<style scoped>
</style>
