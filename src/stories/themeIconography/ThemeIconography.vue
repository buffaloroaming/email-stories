<template>
  <section>
    <div>
      <figure v-for="(img, i) in images" :key="i">
        <img :src="getImageURL(img)" />
      </figure>
    </div>
  </section>
</template>

<script setup>
function getImageURL(name) {
  return new URL(`../../assets/images/iconography/${name}`, import.meta.url).href
}
defineProps({
  images: []
})
</script>

<style scoped>
@import './ThemeIconography.css';
</style>
