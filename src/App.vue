<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <education-section/>
        <edu-cost-map-chart/>
        <child-happiness-chart/>
        <child-happiness-rural-urban-plot/>
        <child-dream-career-word-cloud/>
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
import EduCostMapChart from "@/components/EduCostMapChart";
import ChildHappinessChart from "@/components/charts/ChildHappinessChart";
import ChildHappinessRuralUrbanPlot from "@/components/charts/ChildHappinessRuralUrbanPlot";
import ChildDreamCareerWordCloud from "@/components/charts/ChildDreamCareerWordCloud";

export default {
  name: 'App',
  components: {
    ChildHappinessRuralUrbanPlot,
    EduCostMapChart,
    ChildHappinessChart,
    EducationSection,
    Header,
    Footer,
    Sections,
    TableOfContents,
    ChildDreamCareerWordCloud
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
