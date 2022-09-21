<script setup>
const { client } = usePrismic();
const route = useRoute();

definePageMeta({
  layout: "default",
});

const getBlog = async () => {
  return await client.getByUID("blog_post", route.params.id);
};
const { data: blog } = await useAsyncData("blog", () => getBlog());

const formattedDate = computed(() => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(blog?.data?.release_date).toLocaleDateString(
    "en-US",
    options
  );
});
</script>

<template>
  <main>
    <div
      class="
        absolute
        top-0
        w-full
        h-[80%]
        bg-gradient-to-b
        from-[#E9DEFA]/30
        to-white
        -z-10
      "
    ></div>
    <div class="max-w-3xl mx-auto px-4">
      <h1
        class="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          pt-16
          text-center text-[#3B248B]
        "
      >
        This is my awesome blog
      </h1>
      <p class="text-sm text-gray-600 text-center pt-6">
        {{ formattedDate }} • Read in <strong>6 min</strong>
      </p>
      <prismic-rich-text :field="blog.data.body" />
    </div>
  </main>
</template>

<style scoped></style>
