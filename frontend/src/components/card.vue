<template>
  <div id="img-movie">
    <router-link :to="'/MovieView/' + movieId">
      <MoviePoster :movieId="movieId" @image-loaded="displayImage" @movie-id="saveMovieId" id="img"/>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import MoviePoster from "./moviePoster.vue";

export default {
  name: 'Card',
  components: {
    MoviePoster
  },
  props: {
    movieId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const image = ref(null);
    const movieId = ref(props.movieId);

    const displayImage = (imageUrl) => {
      console.log('Image received:', imageUrl);
      image.value = imageUrl;
    };

    const saveMovieId = (id) => {
      console.log('Movie ID received:', id);
      movieId.value = id;
    };

    return {
      image,
      movieId,
      displayImage,
      saveMovieId
    };
  }
};
</script>

<style scoped>

</style>
