<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <!--        <hello-world msg="Welcome to Your Vue.js App"/>-->
        <example-section/>
        <section-education/>
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
import ExampleSection from "@/components/contents/ExampleSection";
import SectionEducation from "@/components/contents/SectionEducation";
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
    SectionEducation,
    // HelloWorld,
    Header,
    Footer,
    Sections,
    TableOfContents,
    ExampleSection,
    ChildDreamCareerWordCloud
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
