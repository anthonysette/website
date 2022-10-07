<script setup>
const { $hljs } = useNuxtApp();
const { client, asText } = usePrismic();
const route = useRoute();

definePageMeta({
  layout: "default",
});

onMounted(() => {
  $hljs.highlightAll();
});

const getBlog = async () => {
  return await client.getByUID("blog_post", route.params.id);
};

const { data: blog } = await useAsyncData("blog", () => getBlog());

const readTime = computed(() => {
  const wordsPerMinute = 250;
  const bodyText = asText(blog.value.data.body);
  const noOfWords = bodyText.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
});

const formattedDate = computed(() => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(blog?.value?.data?.release_date).toLocaleDateString(
    "en-US",
    options
  );
});
</script>

<template>
  <main>
    <div class="absolute top-0 w-full h-[80%] -z-10"></div>
    <!-- bg-gradient-to-b
        from-[#E9DEFA]/30
        to-white -->
    <div class="max-w-4xl mx-auto px-4 py-14">
      <span class="text-base text-medium text-gray-600">
        {{ formattedDate }}
      </span>
      <h1 class="text-4xl md:text-5xl font-semibold pt-3 text-[#3B248B]">
        {{ asText(blog.data.title) }}
      </h1>
      <!-- • Read in <strong>6 min</strong> -->

      <div class="flex items-center space-x-4 pt-6">
        <img
          class="w-16 h-16 rounded-full"
          src="~assets/images/anthony.jpeg"
          alt=""
        />
        <div>
          <div class="text-lg font-medium text-stone-900">Anthony Sette</div>
          <div class="text-base text-gray-600">
            Read in <strong>{{ readTime }} min</strong>
          </div>
        </div>
      </div>

      <prismic-rich-text class="mt-10" :field="blog.data.body" />
    </div>
    <related-articles :tags="blog.tags" :id="blog.id" />
  </main>
</template>


<style>
.hljs {
  border-radius: 8px;
}
</style>