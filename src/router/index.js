import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: () => import("@/views/home/home.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      name: " ",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/city/city.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("@/views/detail/detail.vue"),
    },
  ],
});

export default router;
