<template>
  <div :class="classes">
    {{ console.log('classes', classes) }}
    <div class="content-container">
      <h1 v-if="headline.length > 0">{{ headline }}</h1>
      <template v-if="body.length > 0">
        <p v-for="(paragraph, index) in body" :key="index">{{ paragraph }}</p>
      </template>
      <template v-if="listItems.length > 0">
        <ul>
          <li v-for="(item, index) in listItems" :key="index + item">{{ item }}</li>
        </ul>
      </template>
      <template v-if="CTALabel">
        <ButtonComponent :label="CTALabel" buttonType="primary" />
      </template>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './Button.vue'
import { reactive, computed } from 'vue'

export default {
  name: 'HeroModule',
  components: {
    ButtonComponent
  },
  props: {
    headline: {
      type: String
    },
    body: {
      type: []
    },
    CTALabel: {
      type: String
    },
    moduleType: {
      type: String,
      validator: function (value) {
        return ['hero', 'oneColumn', 'twoColumn'].indexOf(value) !== -1
      }
    },
    listItems: {
      type: []
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        container: true,
        [`container--${props.moduleType || 'oneColumn'}`]: true
      }))
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/email.css';
.container--ColumnOne {
  border: 10px solid pink;
}
.container {
  max-width: 800px;
  padding: 20px 100px;
}
.container--hero {
  background-color: #000001;
}
.content-container h1 {
  text-transform: none;
}
.container--hero h1,
.container--hero p {
  color: #fdfeff;
}
.content-container h1,
.content-container p {
  margin-bottom: 20px;
}
.container--hero p {
  font-size: 27px;
  font-weight: 600;
  line-height: 32px;
}
.container--oneColumn h1 {
  margin-bottom: 40px;
}
.container--oneColumn p {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.container--oneColumn p:nth-last-child() {
  margin-bottom: 40px;
}
.container--hero button {
  background-color: #fdfeff;
  color: #000001;
}
ul {
  margin-left: 1em;
  margin-bottom: 40px;
}
li {
  padding: 0;
}
</style>
