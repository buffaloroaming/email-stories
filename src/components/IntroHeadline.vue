<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <Header>
    {{ msg }} <!-- using js variable-->
    <slot>

    </slot>
  </Header>

</template>


<style scoped>
@import "./IntroHeadline.css";
</style>