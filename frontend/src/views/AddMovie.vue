<template>
    <Header />
    <div class="container">
      <div id="details">
        <form @submit.prevent="submitMovieId">
          <label class="itemForm" for="idMovie">Digite o ID do filme</label>
          <input class="itemForm" type="number" v-model="movieId">
          <input class="itemForm" type="submit" value="Enviar ID">
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
    justify-content: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    text-align: center;
    justify-content:center;
  }
  .itemForm {
    margin-top: 4%;
  }
  </style>
  