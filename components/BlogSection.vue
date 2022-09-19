<script lang="ts" setup>
</script>

<template>
  <div id="popular-articles" class="max-w-7xl px-4 mx-auto mb-16 mt-12">
    <h2 class="pb-6 text-xl
            font-bold
            text-[#271A17]
            sm:text-2xl
            md:text-4xl
            max-w-4xl
            mx-auto text-center">Popular Articles</h2>
            <p
          class="
            text-base text-gray-500
            mx-auto max-w-2xl sm:text-lg md:text-xl text-center pb-9
          "
        >
          Sharing insights about the latest trends in software engineering and the satrtup world.
        </p>
    <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  </div>
</template>

<style scoped></style>
