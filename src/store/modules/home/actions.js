import * as Types from "@/store/action-types";
import { fetchSlides } from "@/api/home";
const homeActions = {
  async [Types.SET_SLIDES]({ commit }) {
    try {
      let slides = await fetchSlides();
      commit(Types.SET_SLIDES, slides);
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default homeActions;
