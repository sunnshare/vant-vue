import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/home.vue";

import Loadable from "@/util/loadable";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/lesson",
    name: "lesson",
    component: Loadable(() => import("@/views/lesson/lesson.vue")),
  },
  {
    path: "/profile",
    name: "profile",
    component: Loadable(() => import("@/views/profile/profile.vue")),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
