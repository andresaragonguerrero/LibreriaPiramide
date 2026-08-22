import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/search',
    name: 'book-search',
    component: () => import('../views/BookSearchView.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});