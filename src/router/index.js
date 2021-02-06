import { createRouter, createWebHashHistory } from "vue-router";
import RouteName from "../config/RouteName";

import Home from "../views/Home.vue";
import PxConverter from "../views/PxConverter.vue";

const routes = [
  { path: "/", name: RouteName.HOME, component: Home },
  {
    path: "/px-converter",
    name: RouteName.PIXEL_CONVERTER,
    component: PxConverter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
