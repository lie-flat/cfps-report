<template>
  <div>
    Container
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Sections",
});
</script>

<style scoped>

</style>