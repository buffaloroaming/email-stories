<template>
  <div class="module-container">
    <div
      class="flex-row gap_20"
      :class="{
        flexReverse: styles.reverse,
        border: styles.border,
        interiorPadding: styles.border,
        alignItemsCenter: styles.imgAlignCenter
      }"
    >
      <div class="image-container">
        <img :src="getImageURL(image)" :style="{ width: styles.imgWidth }" alt="" />
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
  styles: Object
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
.flexReverse {
  flex-direction: row-reverse;
}
.border {
  border: 1px solid;
  border-color: var(--color-primary);
  border-radius: 16px;
}
.interiorPadding {
  padding: var(--spacing-unit-x2);
}
.alignItemsCenter {
  align-items: center;
}
p {
  margin-bottom: 20px;
}
</style>
