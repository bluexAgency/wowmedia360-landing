import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index.vue';
import AboutUs from '../views/aboutUs.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;