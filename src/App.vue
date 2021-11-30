<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <hello-world msg="Welcome to Your Vue.js App"/>
        <example-section/>
        <section-a/>
      </sections>
      <table-of-contents class="column"/>
    </div>
  </div>
  <Footer/>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer";
import Sections from './components/Sections.vue';
import TableOfContents from "@/components/TableOfContents";
import ExampleSection from "@/components/contents/ExampleSection";
import SectionA from "@/components/contents/SectionA";

export default {
  name: 'App',
  components: {
    SectionA,
    HelloWorld,
    Header,
    Footer,
    Sections,
    TableOfContents,
    ExampleSection
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
