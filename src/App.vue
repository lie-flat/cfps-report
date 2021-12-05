<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <begining/>
        <education-section/>
        <career-section/>
        <child-happiness-chart/>
        <child-happiness-rural-urban-plot/>
      </sections>
      <table-of-contents class="column"/>
    </div>
  </div>
  <Footer/>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer";
import Sections from './components/Sections.vue';
import TableOfContents from "@/components/TableOfContents";
import EducationSection from "@/components/contents/EducationSection";
import ChildHappinessChart from "@/components/charts/ChildHappinessChart";
import ChildHappinessRuralUrbanPlot from "@/components/charts/ChildHappinessRuralUrbanPlot";
import CareerSection from "@/components/contents/CareerSection";
import Begining from './components/contents/begining.vue';

export default {
  name: 'App',
  components: {
    CareerSection,
    ChildHappinessRuralUrbanPlot,
    ChildHappinessChart,
    EducationSection,
    Header,
    Footer,
    Sections,
    TableOfContents,
    Begining,
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
