import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "lib-flexible";

import Vant from "vant";
import "vant/lib/index.css";
import "@/assets/reset_vant.scss";

import directives from "@/util/directives";

Object.entries(directives).forEach(([id, define]) => {
  Vue.directive(id, define);
});

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
