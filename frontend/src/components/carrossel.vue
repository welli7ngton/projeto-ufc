<template>
  <h2>Recomendações Para Você</h2>
  <div class="main">
    <button class="nav left" @click="scrollLeft">&#9664;</button>
    <div id="slider" ref="slider">
      <Card :movieId="527774" class="Card"/> <!-- ID do filme "Raya e o Último Dragão" -->
      <Card :movieId="13403" class="Card"/> <!-- ID do filme "Hedwig" -->
      <Card :movieId="569094" class="Card"/> <!-- ID do filme "aranhaverso" -->
      <Card :movieId="603692" class="Card"/> <!-- ID do filme "John Wick 4" -->
      <Card :movieId="675353" class="Card"/> <!-- ID do filme "Sonic 2" -->
      <Card :movieId="467244" class="Card"/> <!-- ID do filme "The Zone of Interest" -->
      <Card :movieId="872585" class="Card"/> <!-- ID do filme "Oppenheimer" -->
      <Card :movieId="619264" class="Card"/> <!-- ID do filme "O Poço" -->
      <Card :movieId="1022789" class="Card"/> <!-- ID do filme "Divertidamente 2" -->
      <Card :movieId="315162" class="Card"/> <!-- ID do filme "Gato de Botas 2" -->
      <Card :movieId="786892" class="Card"/> <!-- ID do filme "Furiosa" -->
      <Card :movieId="238" class="Card"/> <!-- ID do filme "The Godfather" -->
      <Card :movieId="693134" class="Card"/> <!-- ID do filme "Dune 2" -->
      
    </div>
    <button class="nav right" @click="scrollRight">&#9654;</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import Card from "./card.vue";

export default {
  name: 'Carrossel',
  components: {
    Card
  },
  setup() {
    const slider = ref(null);

    const scrollLeft = () => {
      slider.value.scrollBy({
        left: -900,
        behavior: 'smooth'
      });
    };

    const scrollRight = () => {
      slider.value.scrollBy({
        left: 900,
        behavior: 'smooth'
      });
    };

    return {
      slider,
      scrollLeft,
      scrollRight
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: auto;
  background: #070707;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

#slider {
  display: flex;
  width: 90%;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

#slider::-webkit-scrollbar {
  display: none;
}
#slider a:not(:last-child) {
  margin-right: 10px;
}

.Card {
  padding: 10px;
  flex: 0 0 auto;
  scroll-snap-align: start;
  transition: transform 450ms;
}

.Card:hover {
  transform: scale(1.08);
}

.nav {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

.nav:focus {
  outline: none;
}

.Card :deep(img) {
  min-width: 200px;
  width: 15vw;
  height: auto;
  object-fit: cover;
  margin: 12px 0;
  margin-right: 0px;
  border-radius: 3%;

}
.Card:last-child :deep(img) {
  margin-right: 0px; 
}
h2{
  color: white;
  font-family: "Coolvetica";
  font-weight: 200;
  margin-left: 5%;
  padding-top: 20px;
}
</style>
