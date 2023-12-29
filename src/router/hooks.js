import store from "@/store";
import * as Types from "@/store/action-types";

export default {
  clear_token: (to, from, next) => {
    // whiteList
    store.commit(Types.CLEAR_TOKEN);
    next();
  },
  login_permission: async (to, from, next) => {
    await store.dispatch(`user/${Types.VALIDATE}`);
    next();
  },
};
