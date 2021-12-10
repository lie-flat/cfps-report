<template>
  <section id="career-section" class="section is-medium">
    <h1 class="title">工作</h1>
    <h2 class="subtitle">让我们来欣赏一下有关工作的可视化图表。</h2>
  </section>
  <div class="content">
    <child-dream-career-word-cloud/>
    <agriculture-family-number/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ChildDreamCareerWordCloud from "@/components/charts/ChildDreamCareerWordCloud";
import AgricultureFamilyNumber from "../charts/AgricultureFamilyNumber.vue";

export default defineComponent({
  name: "CareerSection",
  components: {
    ChildDreamCareerWordCloud,
    AgricultureFamilyNumber
  },
});
</script>

<style lang="scss" scoped>
#career-section {
  background-image: url("../../assets/career-bg.jpg");
}
</style>