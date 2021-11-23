<template>
  <Header/>
  <Container>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </Container>
  <Footer/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer";
import Container from './components/Container.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Container
  }

}
</script>

<style>

</style>
