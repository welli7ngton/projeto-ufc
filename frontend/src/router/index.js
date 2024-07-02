import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieView from '../views/MovieView.vue';
import AddMovie from '../views/AddMovie.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MovieView/:movieId',
    name: 'Movie',
    component: MovieView,
    props: true
  },{
    path: '/AddMovie',
    name: 'AddMovie',
    component: AddMovie
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
