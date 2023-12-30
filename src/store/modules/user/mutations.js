import * as Types from "@/store/action-types";

const userMutations = {
  [Types.SET_USER](state, payload) {
    const { token, username, authList } = payload;
    state.token = token;
    state.username = username;
    state.authList = authList;

    if (token) {
      localStorage.setItem("token", token);
    }
  },
  [Types.SET_PERMISSION](state, payload) {
    state.hasPermission = payload;
  },
  [Types.SET_MENU_PERMISSION](state, payload) {
    state.menuPermission = payload;
  },
};

export default userMutations;
