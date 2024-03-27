<template>
<section>
    <div  backgroundColor="{{backgroundColor}}">
      <figure v-for="(img, i) in images" :key="i">
        <img :src="getImageURL(img)" :style="{width:size,margin:'.5em'}" />
        <figcaption>{{caption}}</figcaption>
      </figure>
      
    </div>
  </section>
</template>

<script setup>
function getImageURL(name) {
  return new URL(`../../assets/images/logos/${name}`, import.meta.url).href
}
defineProps({
    images: [], //defines here that imgPath is a string/array value, you don't need quotations
    size: String,
    caption: String,
    backgroundColor: String
})
</script>




