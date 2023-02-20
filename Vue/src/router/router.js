import { createRouter, createWebHistory } from "vue-router";
import MyHome from "../views/MyHome.vue"
import About from "../views/About.vue";
import Products from "../views/Products.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MyHome,
    },
    {
      path: "/About",
      component: About,
    },
    {
      path: "/products",
      component: Products,
    },
  ],
});

export default router;