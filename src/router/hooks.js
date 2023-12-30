import store from "@/store";
import * as Types from "@/store/action-types";

export default {
  clear_token: (to, from, next) => {
    // whiteList
    store.commit(Types.CLEAR_TOKEN);
    next();
  },
  login_permission: async (to, from, next) => {
    let needLogin = to.matched.some((item) => item.meta.needLogin);

    if (!store.state.user.hasPermission) {
      let isLogin = await store.dispatch(`user/${Types.VALIDATE}`);

      if (needLogin) {
        if (!isLogin) {
          next("/login");
        } else {
          next();
        }
      } else {
        if (to.name === "login") {
          if (!isLogin) {
            next();
          } else {
            next("/profile");
          }
        } else {
          next();
        }
      }
    } else {
      if (to.name === "login") {
        next("/profile");
      } else {
        next();
      }
    }

    next();
  },
};
