<template>
  <section id="career-section" class="section is-medium">
    <h1 class="title">工作</h1>
    <h2 class="subtitle">工作小节子标题</h2>
  </section>
  <div class="content">
    <child-dream-career-word-cloud/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ChildDreamCareerWordCloud from "@/components/charts/ChildDreamCareerWordCloud";

export default defineComponent({
  name: "CareerSection",
  components: {
    ChildDreamCareerWordCloud
  },
});
</script>

<style lang="scss" scoped>
#career-section {
  background-image: url("../../assets/career-bg.jpg");
}
</style>