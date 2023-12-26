<template>
  <div class="home">
    <home-header v-model="category"></home-header>
    {{ category }}
  </div>
</template>
<script>
import HomeHeader from "./homer-header.vue";
export default {
  components: {
    HomeHeader,
  },
  data() {
    return {
      category: "-1",
    };
  },
};
</script>
<style lang="scss" scoped></style>
