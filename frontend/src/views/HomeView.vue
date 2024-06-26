<template>
  <div id="home">
    <Header />
    <Banner />
    <Carrossel />
    <FeaturedMovie />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Banner from '@/components/banner.vue';
import Carrossel from '@/components/carrossel.vue';
import FeaturedMovie from '@/components/featuredMovie.vue';

export default {
  name: 'MovieView',
  components: {
    Header,
    Footer,
    Banner,
    Carrossel,
    FeaturedMovie
  }
};
</script>

<style>
#home {
  background-color: #070707;
}
</style>
