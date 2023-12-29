import * as Types from "@/store/action-types";
import { toLogin, validate } from "@/api/user";

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
    if (!localStorage.getItem("token")) return false;
    try {
      let userInfo = await validate();
      dispatch(Types.SET_USER, { userInfo, has: true });
    } catch (e) {
      dispatch(Types.SET_USER, { userInfo: {}, has: false });
      return false;
    }
  },
};

export default userActions;
