import * as Types from "@/store/action-types";
import { fetchSlides } from "@/api/home";
const homeActions = {
  async [Types.SET_SLIDES]({ commit }) {
    let slides = await fetchSlides();
    commit(Types.SET_SLIDES, slides);
  },
};

export default homeActions;
