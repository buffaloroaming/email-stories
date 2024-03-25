<script setup>
import IntroPage from './components/IntroPage.vue'
</script>

<template>
  <div id="main">
  <main>
    <IntroPage />
  </main>
  </div>
</template>

<style scoped>
#main {
  background: url(./assets/bg-color-pallette.png) no-repeat center top;
  background-size: contain;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  
}
</style>
