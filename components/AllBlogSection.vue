<script lang="ts" setup>
</script>

<template>
  <div id="popular-articles" class="max-w-7xl px-4 mx-auto pb-16 pt-12">
    <h2
      class="
        pb-6
        text-xl
        text-[#271A17]
        sm:text-2xl
        md:text-4xl
        max-w-4xl
        mx-auto
        text-center
        font-display
      "
    >
      All Articles
    </h2>

    <div class="gap-4 grid grid-cols-1">
      <LargeBlogCard />
      <LargeBlogCard />
      <LargeBlogCard />
    </div>
  </div>
</template>

<style scoped>
</style>
