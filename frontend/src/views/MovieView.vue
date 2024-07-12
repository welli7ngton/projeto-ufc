<template>
  <Header />
  <div class="container">
    <div id="details" v-if="movie">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.plot }}</p>
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <p><strong>Country:</strong> {{ movie.country }}</p>
      <p><strong>Released:</strong> {{ movie.released }}</p>
      <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
      <p><strong>IMDB Rating:</strong> {{ movie.imdbRating }}</p>
      <p><strong>Writer:</strong> {{ movie.writer }}</p>
      <p><strong>Price:</strong> R${{ movie.price }}</p>
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
import Card from '@/components/card.vue';

export default {
  name: "MovieView",
  components: {
    Header,
    Footer,
    Card
  },
  data() {
    return {
      movie: null // Inicializa como null
    };
  },
  methods: {
    viewMovie(id) {
      this.axios.get(`http://localhost:3000/movies/viewMovie/${id}`)
        .then(response => {
          this.movie = response.data.movie[0]; // Atribui o objeto do filme à propriedade 'movie'
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    this.viewMovie(this.$route.params.movieId);
  }
}
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

#details p, #details h1 {
  margin: 0 0 10px;
}

#imgDetails {
  margin-left: 11%;
}

.movie-poster-details :deep(img) {
  width: 25vw !important;
  height: auto !important;
  border-radius: 3%;
}
</style>
