<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <begining/>
        <education-section/>
        <career-section/>
        <life-section/>
<<<<<<< HEAD
        <End/>
=======
        <economy-section/>
>>>>>>> 75dc6aead306b5113447ca5a3e051b4d07f19385
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
import End from './components/contents/End.vue'
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
    End
  },
}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
