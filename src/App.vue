<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <!--        <hello-world msg="Welcome to Your Vue.js App"/>-->
        <begin/>
        <example-section/>
        <section-a/>
        <child-education-yard/>
        <map-example/>
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
import SectionA from "@/components/contents/SectionA";
import ChildEducationYard from "@/components/contents/ChildEducationYard";
import MapExample from "@/components/MapExample";
import EduCostMapChart from "@/components/EduCostMapChart";
import Begin from "@/components/contents/begining";

export default {
  name: 'App',
  components: {
    // ChildHappinessRuralUrbanPlot,
    EduCostMapChart,
    ChildEducationYard,
    // ChildHappinessChart,
    SectionA,
    // HelloWorld,
    Header,
    Footer,
    Sections,
    TableOfContents,
    ExampleSection,
    MapExample,
    // ChildDreamCareerWordCloud,
    Begin
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
