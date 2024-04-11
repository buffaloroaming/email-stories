<template>
  <div class="module-container">
    <div class="flex-row gap_20" :class="{ 'flex-reverse': reverse }">
      <div class="image-container">
        <img :src="getImageURL(image)" alt="" />
      </div>
      <div>
        <h2 v-if="headline.length > 0">{{ headline }}</h2>
        <template v-if="body.length > 0">
          <p v-for="(paragraph, index) in body" :key="index">{{ paragraph }}</p>
        </template>
        <template v-if="listItems.length > 0">
          <ul class="margin-bottom_20">
            <li v-for="(item, index) in listItems" :key="index + item">{{ item }}</li>
          </ul>
        </template>
        <template v-if="CTALabel">
          <ButtonComponent :label="CTALabel" buttonType="primary" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from './Button.vue'

function getImageURL(name) {
  return new URL(`../assets/images/square/${name}`, import.meta.url).href
}

defineProps({
  headline: String,
  body: Array,
  listItems: Array,
  image: String,
  CTALabel: String,
  reverse: Boolean
})
</script>

<style scoped>
h2 {
  margin-bottom: var(--spacing-unit-x2);
}
.image-container {
  flex-basis: 220px;
}
img {
  width: 220px;
  height: auto;
}
.flex-reverse {
  flex-direction: row-reverse;
}
</style>
