<script setup>
const { client, asText } = usePrismic();

const getBlogs = async () => {
  const response = await client.getAllByType("blog_post", {
    orderings: {
      field: "document.data.release_date",
      direction: "desc",
    },
    pageSize: 10,
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
        text-xl text-[#271A17]
        sm:text-2xl
        md:text-4xl
        max-w-4xl
        mx-auto
        text-center
        font-black
      "
    >
      All Articles
    </h2>

    <div class="gap-4 grid grid-cols-1">
      <LargeBlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :title="blog.title"
        :preview="blog.preview"
        :image="blog.image"
        :imageAlt="blog.imageAlt"
        :date="blog.date"
        :uid="blog.uid"
        :tags="blog.tags"
      ></LargeBlogCard>
    </div>
  </div>
</template>

<style scoped>
</style>
