import MainPage from "../pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import UserPage from "../pages/UserPage";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/user/:login",
    component: UserPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
