<template>
  <section id="education-section" class="section is-medium">
    <h1 class="title">教育</h1>
    <h2 class="subtitle">教育小节子标题</h2>
  </section>
  <div class="content">
    <education/>
    <education-compare/>
    <use-phone/>
    <child-education-yard/>
    <child-expected-education-stack-chart/>
    <child-expected-score-map/>
    <child-education-cost-map/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import EducationCompare from "@/components/charts/EducationCompare";
import UsePhone from "@/components/charts/UsePhone";
import ChildEducationYard from "@/components/charts/ChildEducationYard";
import ChildExpectedEducationStackChart from "@/components/charts/ChildExpectedEducationStackChart";
import ChildExpectedScoreMap from "@/components/charts/ChildExpectedScoreMap";
import Education from "@/components/charts/Education";
import ChildEducationCostMap from "@/components/charts/ChildEducationCostMap";

export default defineComponent({
  name: "EducationSection",
  components: {
    ChildEducationCostMap,
    Education,
    ChildEducationYard, UsePhone, EducationCompare, ChildExpectedEducationStackChart,
    ChildExpectedScoreMap
  },
});
</script>

<style lang="scss" scoped>
#education-section {
  background-image: url("../../assets/edu-bg.jpg");
}
</style>