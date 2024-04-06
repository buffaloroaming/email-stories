<template>
  <div class="typography-container">
    <div>
      <span class="text-description">{{
        weight === 500
          ? 'Medium'
          : weight === 600
            ? 'Demi-bold'
            : weight === 700
              ? 'Bold'
              : 'Regular'
      }}</span>
      <span class="text-description">{{ `${size}px/${lineHeight}px` }}</span>
    </div>
    <div>
      <span
        class="tt-commons"
        :style="{
          fontWeight: `${weight}`,
          fontSize: `${size}px`,
          lineHeight: `${lineHeight}px`
        }"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  weight: Number,
  size: Number,
  lineHeight: Number
})
</script>

<style scoped>
@import './TypographyOptions.css';
</style>
