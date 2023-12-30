import * as Types from "@/store/action-types";
import { toLogin, validate } from "@/api/user";
import permission from "@/router/permission";
import router, { resetRouter } from "@/router";

// 过滤出有权限的路由
const filterRouter = (authList) => {
  authList = authList.map((item) => item.auth);
  function filter(per) {
    let result = per.filter((route) => {
      if (authList.includes(route.meta.auth)) {
        if (route.children) {
          route.children = filter(route.children);
        }
        return route;
      }
    });
    return result;
  }
  return filter(permission);
};

const userActions = {
  async [Types.SET_USER]({ commit }, { userInfo, has }) {
    commit(Types.SET_USER, userInfo);
    commit(Types.SET_PERMISSION, has);
  },

  async [Types.SET_LOGIN]({ dispatch }, payload) {
    let userInfo = await toLogin(payload);
    dispatch(Types.SET_USER, { userInfo, has: true });
  },

  async [Types.VALIDATE]({ dispatch }) {
    try {
      let userInfo = await validate();
      dispatch(Types.SET_USER, { userInfo, has: true });
      return true;
    } catch (e) {
      dispatch(Types.SET_USER, { userInfo: {}, has: false });
      return false;
    }
  },
  async [Types.ADD_ROUTE]({ state, commit, dispatch }, payload) {
    let authList = state.authList;
    let routes = filterRouter(authList);
    let route = router.options.routes.find((item) => item.path === "/profile");
    route.children = routes;

    resetRouter(); // 重置路由 matcher，防止路由重名
    router.addRoute(route);
    console.log(router);
    commit(Types.SET_MENU_PERMISSION, true);
  },
};

export default userActions;
