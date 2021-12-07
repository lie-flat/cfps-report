<template>
  <Header/>
  <div class="container">
    <div id="columns" class="columns is-desktop">
      <sections class="column is-9-desktop">
        <begining/>
        <education-section/>
        <career-section/>
        <life-section/>
        <question/>
        <End/>
      </sections>
      <table-of-contents class="column is-3"/>
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
import Question from './components/contents/RemainQ.vue'


export default {
  name: 'App',
  components: {
    LifeSection,
    CareerSection,
    EducationSection,
    Header,
    Footer,
    Sections,
    TableOfContents,
    Begining,
    End,
    Question
  },
}
</script>

<style>
#columns {
  margin-top: 10px;
  margin-left: 0;
  margin-right: 0;
}
</style>
