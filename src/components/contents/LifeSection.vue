<template>
  <section id="life-section" class="section is-medium">
    <h1 class="title">生活</h1>
    <h2 class="subtitle">只要你关爱生活，做生活的有心人，你就能在生活中发现美，善……但你必须要善于观察，勤于思考，乐于积累。你将会感到生活很简单、很情趣，明天永远是美好神圣的，光明和希望与你措手可及。</h2>
  </section>
  <div class="content">
    <insurance/>
    <child-happiness-chart/>
    <child-happiness-rural-urban-plot/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ChildHappinessChart from "@/components/charts/ChildHappinessChart";
import ChildHappinessRuralUrbanPlot from "@/components/charts/ChildHappinessRuralUrbanPlot";
import Insurance from "@/components/charts/Insurance";

export default defineComponent({
  name: "LifeSection",
  components: {ChildHappinessRuralUrbanPlot, ChildHappinessChart, Insurance},
});
</script>

<style lang="scss" scoped>
#life-section {
  background-image: url("../../assets/life-bg.jpg");
}
</style>