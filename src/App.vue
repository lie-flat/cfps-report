<template>
  <Header/>
  <div class="container is-desktop">
    <div id="columns" class="columns">
      <sections class="column">
        <hello-world msg="Welcome to Your Vue.js App"/>
        <example-section/>
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

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Sections,
    TableOfContents
  }

}
</script>

<style>
#columns {
  margin-top: 10px;
}
</style>
