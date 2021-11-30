<template>
  <section id="example-section" class="section is-medium">
    <h1 class="title">示例标题</h1>
    <h2 class="subtitle">示例子标题</h2>
  </section>
  <div class="content">
    <Edu/>
    <Edu_compar/>
    <insurance/>
    <use-phone/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Edu from "@/components/edu";
import Edu_compar from "@/components/educompar";
import Insurance from "@/components/insurance";
import UsePhone from "@/components/UsePhone";
export default defineComponent({
  name: "SectionA",
  components: {UsePhone, Insurance, Edu_compar, Edu},
});
</script>

<style lang="scss" scoped>

</style>