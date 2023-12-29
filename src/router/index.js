import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/home.vue";

import Loadable from "@/util/loadable";
import hooks from "./hooks";

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
  {
    path: "/login",
    name: "login",
    component: Loadable(() => import("@/views/login/login.vue")),
  },
  {
    path: "/register",
    name: "register",
    component: Loadable(() => import("@/views/register/register.vue")),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Object.values(hooks).forEach((hook) => {
  router.beforeEach(hook);
});

export default router;
