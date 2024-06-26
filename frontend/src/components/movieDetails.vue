<template>
  <div class="movie-details">
    <h2>{{ movieDetails.title }}</h2>
    <p>{{ movieDetails.plot }}</p>
    <p>Released: {{ movieDetails.released }}</p>
    <p>Runtime: {{ movieDetails.runtime }} minutes</p>
    <p>Genre: {{ movieDetails.genre }}</p>
    <p>Director: {{ movieDetails.director }}</p>
    <p>Writer: {{ movieDetails.writer }}</p>
    <p>Country: {{ movieDetails.country }}</p>
    <p>Awards: {{ movieDetails.awards }}</p>
    <p>IMDB Rating: {{ movieDetails.imdbRating }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MovieDetails',
  props: {
    movieId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movieDetails: {
        title: '',
        plot: '',
        released: '',
        runtime: '',
        genre: '',
        director: '',
        writer: '',
        country: '',
        awards: '',
        imdbRating: ''
      }
    };
  },
  methods: {
    async fetchMovieDetails() {
      const accessToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTcwNzliOWVkYWEwMzMyMGZmYjEwZGIwNDc3YzAyNiIsIm5iZiI6MTcxOTQwNzI3OS43OTM2NTcsInN1YiI6IjY2NzgwNmQzYmY4YjVmZmI0MmZjMjYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQ9kyGPn4CWGg0AUNIv04LUqI1O0Ai_lUjlwnxHwW3Y'; // Substitua pelo seu token de acesso válido
      const movieUrl = `https://api.themoviedb.org/3/movie/${this.movieId}?language=pt-BR`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${this.movieId}/credits`;

      const options = {
        method: 'GET',
        headers: {
          'Authorization': accessToken,
          'Accept': 'application/json',
        }
      };

      try {
        const [movieResponse, creditsResponse] = await Promise.all([
          fetch(movieUrl, options),
          fetch(creditsUrl, options)
        ]);

        if (!movieResponse.ok || !creditsResponse.ok) {
          throw new Error('Failed to fetch movie details or credits');
        }

        const movieData = await movieResponse.json();
        const creditsData = await creditsResponse.json();

        this.movieDetails = {
          title: movieData.title || '',
          plot: movieData.overview || '',
          released: movieData.release_date || '',
          runtime: movieData.runtime || '',
          genre: movieData.genres ? movieData.genres.map(genre => genre.name).join(', ') : '',
          director: this.getDirector(creditsData.crew) || 'Unknown',
          writer: this.getWriter(creditsData.crew) || 'Unknown',
          country: movieData.production_countries ? movieData.production_countries.map(country => country.name).join(', ') : '',
          awards: movieData.awards || '',
          imdbRating: movieData.vote_average || ''
        };
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
    getDirector(crew) {
      const directors = crew.filter(member => member.job === 'Director');
      return directors.map(director => director.name).join(', ');
    },
    getWriter(crew) {
      const writers = crew.filter(member => member.job === 'Writer' || member.job === 'Screenplay' || member.job === 'Story');
      return writers.map(writer => writer.name).join(', ');
    }
  },
  mounted() {
    this.fetchMovieDetails();
  }
};
</script>

<style scoped>
.movie-details {
  color: white;
}
</style>
