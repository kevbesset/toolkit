import { createRouter, createWebHistory } from "vue-router";
import RouteName from "../config/RouteName";

import Home from "../views/Home.vue";

const routes = [{ path: "/", name: RouteName.HOME, component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
