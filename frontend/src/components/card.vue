<template>
  <div>
    <MoviePoster :movieTitle="movieTitle" @image-loaded="displayImage" />
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
    movieTitle: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const image = ref(null);

    const displayImage = (imageUrl) => {
      console.log('Image received:', imageUrl);
      image.value = imageUrl;
    };

    return {
      image,
      displayImage
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
