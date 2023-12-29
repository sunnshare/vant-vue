<template>
  <div class="home">
    <home-header v-model="currentCategory" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in slides" :key="item.key">
        {{ item.title }}
      </van-swipe-item>
    </van-swipe>
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
  async mounted() {
    if (this.slides.length === 0) {
      try {
        await this[Types.SET_SLIDES]();
      } catch (e) {
        console.log(e);
      }
    }
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES]),
  },
  computed: {
    ...mapHomeState(["category", "slides"]),
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
