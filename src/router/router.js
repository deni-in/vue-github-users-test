import Main from '../pages/Main';
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    component: Main
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