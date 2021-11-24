<template>
  <Header/>
  <div class="container is-desktop">
    <div class="columns">
      <Sections class="column">
        <button class="button is-primary">Button</button>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </Sections>
      <TableOfContents class="column"/>
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

</style>
