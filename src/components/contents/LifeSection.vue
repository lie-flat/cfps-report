<template>
  <section id="life-section" class="section is-medium">
    <h1 class="title">生活</h1>
    <h2 class="subtitle">生活小节子标题</h2>
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