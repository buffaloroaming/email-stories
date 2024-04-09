<template>
  <section :class="classes">
    <p>
      <span class="template-width">Full Width: 800px</span><br />
      {{ contentWidth }}<br />
      <template v-for="(colWidth, i) in columnLayout" :key="i">
        <span>{{ `${colWidth}px` }}</span>
        {{ i !== columnLayout.length - 1 ? `| ` : '' }}
      </template>
    </p>
    <hr />
    <section class="grid-container">
      <div v-if="numOfColumns === 0" :class="classes">
        {{ numOfColumns }}
      </div>
      <div v-else class="column-container">
        <template v-if="numOfColumns === 1">
          <div :class="classes">
            {{ numOfColumns }}
          </div>
        </template>
        <template v-if="numOfColumns === 2">
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
        </template>
        <template v-if="numOfColumns === 3">
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
        </template>
        <template v-if="numOfColumns === 4">
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
          <div :class="classes">
            {{ numOfColumns }}
          </div>
          <div class="column-spacer"></div>
        </template>
      </div>
    </section>
  </section>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  props: ['numOfColumns', 'contentWidth', 'columnLayout'],
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        [`column-${props.numOfColumns || 0}`]: true
      }))
    }
  }
}
</script>

<style scoped>
@import './LayoutGridFormat.css';
</style>
