<template>
  <div class="max-width_800">
    <HeaderModule v-if="cta" logInButton class="center margin-bottom_20" />
    <HeaderModule v-else class="center Margin-bottom_20" />
    <div
      class="max-width_600 center height_224 background-color_gray margin-bottom_20 border-radius_16"
    ></div>
  </div>
  <FooterModule :language="language" />
</template>

<script setup>
import FooterModule from './FooterModule.vue'
import HeaderModule from './HeaderModule.vue'
defineProps({
  language: String,
  cta: Boolean
})
</script>
