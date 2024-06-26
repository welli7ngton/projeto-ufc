<template>
  <Header />
  <div class="container">
    <div id="details">
      <MovieDetails :movieId="String($route.params.movieId)" id="MovieInfo" />
    </div>
    <div id="imgDetails">
      <Card :movieId="String($route.params.movieId)" class="movie-poster-details" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import MovieDetails from '@/components/movieDetails.vue';
import Card from '@/components/card.vue';

export default {
  name: "MovieView",
  components: {
    Header,
    Footer,
    MovieDetails,
    Card
  }
};
</script>

<style scoped>
* {
  color: white;
  background-color: #070707;
}

.container {
  display: flex;
  padding-top: 70px;
  margin-left: 10%;
  margin-right: 10%;
}

#details {
  width: 50%;
  height: auto;
}
#MovieInfo {
  text-align: justify;
}

#imgDetails {
  margin-left: 11%;
}

.movie-poster-details :deep(img)  {
  width: 25vw!important;
  height: auto !important;
  border-radius: 3%;
}
</style>
