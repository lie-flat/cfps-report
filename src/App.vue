<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <begining/>
        <education-section/>
        <career-section/>
        <life-section/>
        <economy-section/>
      </sections>
      <table-of-contents class="column"/>
    </div>
  </div>
  <Footer/>
</template>
<script>
import Header from './components/Header.vue'
import Footer from "@/components/Footer";
import Sections from './components/Sections.vue';
import TableOfContents from "@/components/TableOfContents";
import EducationSection from "@/components/contents/EducationSection";
import CareerSection from "@/components/contents/CareerSection";
import Begining from './components/contents/begining.vue';
import LifeSection from "@/components/contents/LifeSection";
import EconomySection from "@/components/contents/EconomySection";

export default {
  name: 'App',
  components: {
    EconomySection,
    LifeSection,
    CareerSection,
    EducationSection,
    Header,
    Footer,
    Sections,
    TableOfContents,
    Begining,
  },
}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
