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
    movieId: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const image = ref(null);
    const imageLoaded = ref(false);

    const fetchImage = async () => {
      const url = `https://api.themoviedb.org/3/movie/${props.movieId}/images?language=en,null`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTcwNzliOWVkYWEwMzMyMGZmYjEwZGIwNDc3YzAyNiIsIm5iZiI6MTcxOTM5OTk3MC40NDEyNDIsInN1YiI6IjY2NzgwNmQzYmY4YjVmZmI0MmZjMjYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDAdQvAnVLUth6NdffHVNqSm1QRNLlM9tETivkYNJLo'
        }
      };

      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        image.value = data.posters[0] || null;
        if (image.value) {
          emit('image-loaded', getImageUrl(image.value.file_path));
          emit('movie-id', props.movieId); // Emitindo o movieId
        } else {
          console.log('No image found in API response.');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    const getImageUrl = (path) => {
      return `https://image.tmdb.org/t/p/w500${path}`;
    };

    const onLoad = () => {
      if (image.value && !imageLoaded.value) {
        const imageUrl = getImageUrl(image.value.file_path);
        emit('image-loaded', imageUrl);
        imageLoaded.value = true;
      }
    };

    watch(() => props.movieId, fetchImage);

    onMounted(() => {
      fetchImage();
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

</style>
