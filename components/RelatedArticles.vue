<script setup>
const { client, asText, predicate } = usePrismic();

const props = defineProps({
  tags: {
    type: Array,
    default: [],
  },
  id: {
    type: String,
    default: "",
  },
});

const getBlogs = async () => {
  const response = await client.getAllByType("blog_post", {
    orderings: {
      field: "document.data.release_date",
      direction: "desc",
    },
    predicates: [
      predicate.any("document.tags", props.tags),
      predicate.not("document.id", props.id),
    ],
    pageSize: 3,
  });
  return response.map((doc) => {
    return {
      id: doc.id,
      uid: doc.uid,
      title: asText(doc.data.title),
      preview: asText(doc.data.body).substring(0, 250),
      tags: doc.tags.slice(0, 2),
      image: doc.data.featured_image.url,
      imageAlt: doc.data.featured_image.alt,
      date: doc.data.release_date,
    };
  });
};
const { data: blogs } = await useAsyncData("blogs", () => getBlogs());
</script>

<template>
  <div id="popular-articles" class="max-w-7xl px-4 mx-auto pb-16 pt-12">
    <h2
      class="
        pb-6
        text-2xl text-[#271A17]
        md:text-4xl
        max-w-4xl
        mx-auto
        text-center
        font-black
      "
    >
      Popular Articles
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
      ></BlogCard>
    </div>
  </div>
</template>

<style scoped>
</style>
