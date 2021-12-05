<template>
  <section id="economy-section" class="section is-medium">
    <h1 class="title">经济</h1>
    <h2 class="subtitle">经济小节子标题</h2>
  </section>
  <div class="content">
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "EconomySection",
  components: {},
});
</script>

<style lang="scss" scoped>
#economy-section {
  background-image: url("../../assets/economy-bg.jpg");
}
</style>