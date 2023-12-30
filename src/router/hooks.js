import store from "@/store";
import * as Types from "@/store/action-types";

export default {
  // 路由切换清空取消请求的token
  "clear-token": (to, from, next) => {
    // whiteList
    store.commit(Types.CLEAR_TOKEN);
    next();
  },
  // 路由权限-登录状态
  "login-permission": async (to, from, next) => {
    let needPermission = to.matched.some((item) => item.meta.needPermission);

    if (!store.state.user.hasPermission) {
      // store没有权限，先尝试根据本地token校验token合法性
      let isValidated =
        !!localStorage.getItem("token") &&
        (await store.dispatch(`user/${Types.VALIDATE}`));

      if (needPermission) {
        // 访问需要权限的路由，token校验成功 => next()，失败 => 去登录页
        isValidated ? next() : next("/login");
      } else {
        // 访问不需要权限的路由
        if (to.name === "login" && isValidated) {
          next("/profile"); // 是登录页且拉取有token有效 => 跳转到个人中心
        } else {
          next();
        }
      }
    } else {
      // store有权限且是登录页 => 跳转到个人中心
      to.name === "login" ? next("/profile") : next();
    }
  },
  // 路由权限-动态添加路由
  "menu-permission": async (to, from, next) => {
    if (store.state.user.hasPermission && !store.state.user.menuPermission) {
      // 用户有权限，但没菜单权限 => 去拉取菜单权限
      await store.dispatch(`user/${Types.ADD_ROUTE}`);
      next({ ...to, replace: true });
    } else {
      next();
    }
  },
};
