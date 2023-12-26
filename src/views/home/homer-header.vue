<template>
  <div class="wrapper">
    <div class="header">
      <img src="@/assets/logo.png" alt="logo" />
      <van-dropdown-menu>
        <van-dropdown-item
          :value="value"
          :options="optionList"
          @change="handleChange"
        />
      </van-dropdown-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      optionList: [
        { text: "全部商品", value: "-1" },
        { text: "新款商品", value: "1" },
        { text: "活动商品", value: "2" },
        { text: "打折商品", value: "3" },
      ],
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 48px;
}
.header {
  width: 100%;
  height: 48px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: $background;
  position: fixed;
  top: 0;
  left: 0;
  img {
    width: 30px;
    height: 30px;
  }
  ::v-deep(.van-dropdown-menu) {
    width: 100px;
  }
}
</style>
