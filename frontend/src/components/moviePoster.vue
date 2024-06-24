<template>
    <div>
      <div v-if="image">
        <img :src="getImageUrl(image.file_path)" alt="Movie Poster" @load="onLoad" />
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  
  export default {
    name: 'MoviePoster',
    props: {
      movieTitle: {
        type: String,
        required: true
      }
    },
    setup(props, { emit }) {
      const image = ref(null);
      const imageLoaded = ref(false);
  
      const fetchMovieId = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(props.movieTitle)}&language=en,null`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTcwNzliOWVkYWEwMzMyMGZmYjEwZGIwNDc3YzAyNiIsIm5iZiI6MTcxOTE0MjMxMC44NDU4OTksInN1YiI6IjY2NzgwNmQzYmY4YjVmZmI0MmZjMjYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilXKdJKa_4vGrFtPOeYDm0keDCA1PQgvGBkqzaa0aPY'
          }
        };
  
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          return data.results.length > 0 ? data.results[0].id : null;
        } catch (err) {
          console.error('Error:', err);
          return null;
        }
      };
  
      const fetchImage = async (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/images?language=en,null`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTcwNzliOWVkYWEwMzMyMGZmYjEwZGIwNDc3YzAyNiIsIm5iZiI6MTcxOTE0MjMxMC44NDU4OTksInN1YiI6IjY2NzgwNmQzYmY4YjVmZmI0MmZjMjYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilXKdJKa_4vGrFtPOeYDm0keDCA1PQgvGBkqzaa0aPY'
          }
        };
  
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          image.value = data.posters[0] || null; // Selecionar apenas o primeiro pôster
          if (image.value) {
            console.log('Image path:', image.value.file_path); // Verificação do caminho da imagem
          } else {
            console.log('No image found in API response.');
          }
        } catch (err) {
          console.error('Error:', err);
        }
      };
  
      const getImageUrl = (path) => {
        const url = `https://image.tmdb.org/t/p/w500${path}`;
        console.log('Generated Image URL:', url); // Verificação da URL gerada
        return url;
      };
  
      const onLoad = () => {
        if (image.value && !imageLoaded.value) {
          const imageUrl = getImageUrl(image.value.file_path);
          emit('image-loaded', imageUrl);
          console.log('Emitted Image URL:', imageUrl); // Verificação da emissão da URL da imagem
          imageLoaded.value = true;
        }
      };
  
      const fetchAndSetImage = async () => {
        const movieId = await fetchMovieId();
        if (movieId) {
          fetchImage(movieId);
        } else {
          console.log('Movie ID not found.');
        }
      };
  
      watch(() => props.movieTitle, fetchAndSetImage);
  
      onMounted(() => {
        fetchAndSetImage();
      });
  
      return {
        image,
        getImageUrl,
        onLoad
      };
    }
  };
  </script>
  
  <style scoped>
  img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    margin: 10px 0;
  }
  </style>
  