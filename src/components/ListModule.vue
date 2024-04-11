<template>
  <div class="container">
    <div class="content-container">
      <h2 v-if="headline.length > 0">{{ headline }}</h2>
      <div class="flex-row margin-bottom_20" v-for="(item, index) in listItems" :key="index + item">
        <div>
          <img :src="getImageURL(item.img)" alt="" />
        </div>
        <div>
          <p class="body-subheadline">{{ item.subHeadline }}</p>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function getImageURL(name) {
  console.log(`../assets/images/icons/${name}`)
  return new URL(`../assets/images/icons/${name}`, import.meta.url).href
}
defineProps({
  headline: String,
  listItems: []
})
</script>

<style scoped>
@import '@/assets/styles/email.css';
.container {
  max-width: 800px;
  padding: 20px 100px;
}
.content-container p,
.body-subheadline {
  font-size: 16px;
}
.body-subheadline {
  font-weight: 600;
}
img {
  width: 50px;
  height: 50px;
}
.flex-row > div:nth-child(1) {
  flex-basis: 50px;
  margin-right: 20px;
}
.flex-row > div:nth-child(2) {
  flex-basis: calc(100% - 70px);
}
h2 {
  margin-bottom: 20px;
}
</style>
