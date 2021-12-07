<template>
  <div id="sections">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent, provide} from "vue";
import {THEME_KEY} from 'vue-echarts';

provide(THEME_KEY, 'light');
export default defineComponent({
  name: "Sections",
});
</script>

<style lang="scss" scoped>
#sections {
  padding: 0;
}
</style>