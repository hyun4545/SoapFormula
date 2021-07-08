import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/Formula",
    name: "Formula",
    component: function () {
      return import("@/views/Formula.vue");
    },
  },
  {
    path: "/OilList",
    name: "OilList",
    component: function () {
      return import("@/views/OilList.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
