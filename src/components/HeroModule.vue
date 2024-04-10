<template>
  <div :class="classes">
    {{ console.log('classes', classes) }}
    <div class="content-container">
      <h1 v-if="headline.length > 0">{{ headline }}</h1>
      <template v-if="body.length > 0">
        <p v-for="(p, index) in body" :key="index">{{ p }}</p>
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
        return ['hero', 'columnOne', 'columnTwo'].indexOf(value) !== -1
      }
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'content-container': true,
        [`container--${props.moduleType || 'columnOne'}`]: true
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
.container--hero {
  background-color: #000001;
  padding: 20px 100px;
  max-width: 800px;
}
.content-container h1 {
  text-transform: none;
}
.container--hero h1,
.content-container p {
  color: #fdfeff;
  margin-bottom: 20px;
}
.container--hero p {
  font-size: 27px;
  font-weight: 600;
  line-height: 32px;
}
.container--hero button {
  background-color: #fdfeff;
  color: #000001;
}
</style>
