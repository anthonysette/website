<script lang="ts" setup></script>

<template>
  <div>
    <div class="w-full bg-gradient-to-br from-[#E9DEFA] to-[#FBFCDB]">
      <Header :white="false" />
      <Hero />
    </div>
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>