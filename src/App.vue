<template>
  <Header/>
  <div class="columns is-desktop">
    <Container class="column">
      <button class="button is-primary">Button</button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </Container>
    <TableOfContents class="column"/>
  </div>
  <Footer/>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer";
import Container from './components/Container.vue';
import TableOfContents from "@/components/TableOfContents";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Container,
    TableOfContents
  }

}
</script>

<style>

</style>
