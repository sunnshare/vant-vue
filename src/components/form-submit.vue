<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-if="isRegister"
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        label="确认密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请重新填写密码' }]"
      />
      <div style="margin: 16px" v-if="isLogin">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
        <br />
        <van-button round block type="primary" to="/register">
          去注册
        </van-button>
      </div>
      <div style="margin: 16px" v-if="isRegister">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.$emit("submit", values);
    },
  },
  computed: {
    isLogin() {
      return this.$route.path == "/login";
    },
    isRegister() {
      return this.$route.path == "/register";
    },
  },
};
</script>
