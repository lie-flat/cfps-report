<template>
  <section id="economy-section" class="section is-medium">
    <h1 class="title">经济</h1>
    <h2 class="subtitle">经济基础决定上层建筑。经济建设是国家的中心任务。</h2>
  </section>
  <div class="content">
    <urban-rural-income-expense/>
    <urban-rural-family-consume/>
    <plant-animal-expense/>
    <finance-situation-compare/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import FinanceSituationCompare from "../charts/FinanceSituationCompare.vue";
import PlantAnimalExpense from "../charts/PlantAnimalExpense.vue";
import UrbanRuralFamilyConsume from "../charts/UrbanRuralFamilyConsume.vue";
import UrbanRuralIncomeExpense from "../charts/UrbanRuralIncomeExpense.vue";

export default defineComponent({
  name: "EconomySection",
  components: {
    UrbanRuralIncomeExpense,
    UrbanRuralFamilyConsume,
    PlantAnimalExpense,
    FinanceSituationCompare
  },
});
</script>

<style lang="scss" scoped>
#economy-section {
  background-image: url("../../assets/economy-bg.webp");
}
</style>