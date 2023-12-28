import * as Types from "@/store/action-types";
const homeMutations = {
  [Types.SET_CATEGORY](state, payload) {
    state.category = payload;
  },
  [Types.SET_SLIDES](state, payload) {
    state.slides = payload;
  },
};

export default homeMutations;
