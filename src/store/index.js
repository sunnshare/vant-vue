import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules/index";
import * as Types from "@/store/action-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tokens: [], // 取消请求 token 数组
  },
  mutations: {
    [Types.SET_TOKEN](state, token) {
      // 记录取消请求的 token
      state.tokens = [...state.tokens, token];
    },
    [Types.CLEAR_TOKEN](state) {
      // 页面切换时依次执行取消请求
      state.tokens.forEach((token) => token());
      state.tokens = [];
    },
  },
  modules: {
    ...modules,
  },
});
window.store = store;
export default store;
