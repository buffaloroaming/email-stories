<template>
  <div className="icon-container">
    <figure v-for="(img, i) in images" :key="i">
      <img :src="getImageURL(img)" :style="{ width: `${width}px` }" />
    </figure>
  </div>
</template>

<script setup>
function getImageURL(name) {
  return new URL(`../../assets/images/iconography/${name}`, import.meta.url).href
}
defineProps({
  images: [],
  width: Number
})
</script>

<style scoped>
@import './ThemeIconography.css';
</style>
