<template>
    <Header />
    <div class="container">
      <div id="details">
        <form @submit.prevent="submitMovieId">
          <label for="idMovie">Digite o ID do filme</label>
          <input type="number" v-model="movieId">
          <input type="submit" value="Enviar ID">
        </form>
        <MovieDetails :movieId="movieId" id="MovieInfo" />
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';
  import MovieDetails from '@/components/movieDetails.vue';
  
  export default {
    name: "MovieView",
    components: {
      Header,
      Footer,
      MovieDetails
    },
    data() {
      return {
        movieId: ''
      };
    },
    methods: {
      submitMovieId() {
        // This will trigger the MovieDetails component to fetch new data
        this.$forceUpdate();
      }
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
  
  .movie-poster-details :deep(img) {
    width: 25vw!important;
    height: auto !important;
    border-radius: 3%;
  }
  </style>
  