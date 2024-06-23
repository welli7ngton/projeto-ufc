<template>
  <div id="app">
    <Header />
    <Banner />
    <Carrossel />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Banner from './components/banner.vue';
import Carrossel from './components/carrossel.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Banner,
    Carrossel
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background-color: #070707;
}
</style>
