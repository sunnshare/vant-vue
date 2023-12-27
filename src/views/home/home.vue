<template>
  <div class="home">
    <home-header v-model="currentCategory" />
    {{ category }}
  </div>
</template>
<script>
import HomeHeader from "./homer-header.vue";
import { createNamespacedHelpers } from "vuex";
import * as Types from "@/store/action-types";

let {
  mapState: mapHomeState,
  mapActions,
  mapMutations,
} = createNamespacedHelpers("home");

export default {
  components: {
    HomeHeader,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
  },
  computed: {
    ...mapHomeState(["category"]),
    currentCategory: {
      get() {
        return this.category;
      },
      set(value) {
        this[Types.SET_CATEGORY](value);
      },
    },
  },
};
</script>
<style lang="scss" scoped></style>
