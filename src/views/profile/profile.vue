<template>
  <div class="profile">
    <van-nav-bar title="个人中心"></van-nav-bar>
    <div class="profile-info">
      <template v-if="!$store.state.user.hasPermission">
        <img src="@/assets/logo.png" />
        <van-button size="small" to="/login"> 登录 </van-button>
      </template>
      <template v-else>
        <img src="@/assets/logo.png" />
        <span>{{ $store.state.user.username }}</span>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile {
  &-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 15px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
