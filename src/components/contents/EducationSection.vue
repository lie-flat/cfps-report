<template>
  <section id="education-section" class="section is-medium">
    <h1 class="title">教育</h1>
    <h2 class="subtitle">教育小节子标题</h2>
  </section>
  <div class="content">
    <education/>
    <education-compare/>
    <insurance/>
    <use-phone/>
    <child-education-yard/>
    <child-expected-education-stack-chart/>
    <child-expected-score-map/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import EducationCompare from "@/components/charts/EducationCompare";
import Insurance from "@/components/charts/Insurance";
import UsePhone from "@/components/UsePhone";
import ChildEducationYard from "@/components/charts/ChildEducationYard";
import ChildExpectedEducationStackChart from "@/components/charts/ChildExpectedEducationStackChart";
import ChildExpectedScoreMap from "@/components/charts/ChildExpectedScoreMap";
import Education from "@/components/charts/Education";

export default defineComponent({
  name: "EducationSection",
  components: {
    Education,
    ChildEducationYard, UsePhone, Insurance, EducationCompare, ChildExpectedEducationStackChart,
    ChildExpectedScoreMap
  },
});
</script>

<style lang="scss" scoped>
#education-section {
  background-image: url("../../assets/edu-bg.jpg");
}
</style>