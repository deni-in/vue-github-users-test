import Main from '../pages/Main';
import { createRouter, createWebHistory } from "vue-router"
import About from '../pages/About';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router