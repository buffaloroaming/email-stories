<template>
  <div class="square-image-component flex-row">
    <div v-if="fileName.length > 1" class="flex-row dashed-border padding-30">
      <img
        v-for="path in fileName"
        :key="path"
        :src="getImageURL(path, dir)"
        alt=""
        :class="dir === 'square' ? 'square-image' : 'icon-image'"
      />
    </div>
    <div v-else>
      <img
        v-for="path in fileName"
        :key="path"
        :src="getImageURL(path, dir)"
        alt=""
        :class="dir === 'square' ? 'square-image' : 'icon-image'"
      />
    </div>
    <div>
      <div>
        <h3>Title</h3>
        <p>{{ title }}</p>
      </div>
      <div v-for="(image, index) in images" :key="index" class="image-details">
        <h3>{{ image.screen }}</h3>
        <p>{{ image.path }}</p>
      </div>
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
  title: String,
  dir: String,
  width: Number,
  images: []
})
</script>

<style scoped>
.square-image {
  width: 100%;
  max-width: 442px;
  margin-right: 20px;
}
.icon-image {
  width: 100%;
  max-width: 236px;
  margin-right: 20px;
}
.square-image-component p {
  margin-bottom: 20px;
}
.dashed-border {
  margin-right: 40px;
}
</style>
