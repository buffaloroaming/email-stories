<script setup>
import Header from './IntroHeadline.vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="greetings">
    <Header msg="">
      <h1>This is a <br /> Storybook exercise.</h1>
    </Header>
    <p><mark>This is a case study exercise using Oportun's figma design system and integrating it with Storybook. Storybook is a frontend workshop for building UI components and pages in&nbsp;isolation.</mark></p>
    <h3>
      <a href="" rel="noopener">Check it out</a>
    </h3>
  </div>
</template>

<style scoped>

h3 {
  margin:2em auto;
}
h3 a {
  background-color: green;
  border: 4px solid green;
  border-radius:.4em;
  color:white;
  font-size: 1.2rem;
  font-weight: 700;
  padding:.65em 1em;
  transition: ease all .5s;
}
h3 a:hover {
  background-color: transparent;
  color:green;
  font-size: 1.2rem;
  font-weight: 700;
  padding:.6em .8em;
}
p {
  font-weight: 700;
  line-height: 120%;
}
p mark{
  background: rgba(223, 228, 128, 0.7);
}
.greetings {
  margin:0 auto;
  max-width:642px;
  padding:0 1em;
  width:90%;
}
.greetings h1,
.greetings h3,
.greetings p {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    padding:0 7em;
  }
}
</style>
