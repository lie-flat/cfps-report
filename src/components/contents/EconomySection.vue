<template>
  <section id="economy-section" class="section is-medium">
    <h1 class="title">经济</h1>
    <h2 class="subtitle">经济小节子标题</h2>
  </section>
  <div class="content">
    <urban-rural-income-expense/>
    <urban-rural-family-consume/>
    <plant-animal-expense/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import PlantAnimalExpense from "../charts/PlantAnimalExpense.vue";
import UrbanRuralFamilyConsume from "../charts/UrbanRuralFamilyConsume.vue";
import UrbanRuralIncomeExpense from "../charts/UrbanRuralIncomeExpense.vue";

export default defineComponent({
  name: "EconomySection",
  components: {
    UrbanRuralIncomeExpense,
    UrbanRuralFamilyConsume,
    PlantAnimalExpense
  },
});
</script>

<style lang="scss" scoped>
#economy-section {
  background-image: url("../../assets/economy-bg.webp");
}
</style>