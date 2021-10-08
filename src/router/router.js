import Main from '../pages/Main';
import { createRouter, createWebHistory } from "vue-router"
import About from '../pages/About';
import UserPage from '../pages/UserPage';

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
    path: '/user/:login',
    component: UserPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router