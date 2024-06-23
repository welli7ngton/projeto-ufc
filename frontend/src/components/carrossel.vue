<template>
    <h2>Recomendações Para Você</h2>
    <div class="main">
      <button class="nav left" @click="scrollLeft">&#9664;</button>
      <div id="slider" ref="slider">
        <a href="#"><Card movieTitle="Raya e o Último Dragão " /></a>
        <a href="#"><Card movieTitle="Homem-Aranha: Através do Aranhaverso " /></a>
        <a href="#"><Card movieTitle="John Wick 4" /></a>
        <a href="#"><Card movieTitle="Ultimo Samurai" /></a>
        <a href="#"><Card movieTitle="Piratas do caribe a vingança de salazar" /></a>
        <a href="#"><Card movieTitle="The Zone of Interest" /></a>
        <a href="#"><Card movieTitle="Oppenheimer" /></a>
        <a href="#"><Card movieTitle="Sonic 2" /></a>
        <a href="#"><Card movieTitle="Divertidamente 2" /></a>
        <a href="#"><Card movieTitle="Gato de botas 2" /></a>
        <a href="#"><Card movieTitle="Furiosa" /></a>
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
  
  a {
    padding: 5px;
    flex: 0 0 auto;
    scroll-snap-align: start;
    transition: transform 450ms;
  }
  
  a:hover {
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
  </style>
  