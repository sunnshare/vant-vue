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
    <van-tabs type="card" v-if="$store.state.user.menuPermission">
      <van-tab
        :title="item.name"
        v-for="item in $store.state.user.authList"
        :key="item.auth"
        :to="item.path"
      >
      </van-tab>
      <router-view></router-view>
    </van-tabs>
    <van-button v-has="'edit'">编辑</van-button>
    <van-button v-has="'remove'">删除</van-button>
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
