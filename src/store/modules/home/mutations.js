import * as Types from "@/store/action-types";
const homeMutations = {
  [Types.SET_CATEGORY](state, payload) {
    state.category = payload;
  },
};

export default homeMutations;
