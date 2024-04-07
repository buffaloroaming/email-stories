<template>
  <div class="hero-component">
    <img :src="getImageURL(fileName, dir)" alt="" class="full-width-image" />
    <div v-for="(image, index) in images" :key="index" class="image-details">
      <h3>{{ image.screen }}</h3>
      <p>{{ image.path }}</p>
    </div>
  </div>
</template>

<script setup>
function getImageURL(name, dir) {
  console.log(`../assets/images/${dir}/${name}`)
  return new URL(`../assets/images/${dir}/${name}`, import.meta.url).href
}
defineProps({
  fileName: String,
  dir: String,
  width: Number,
  images: []
})
</script>

<style scoped>
.full-width-image {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
}
.image-details p {
  margin: 0;
}
</style>
