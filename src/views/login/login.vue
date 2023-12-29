<template>
  <div class="login">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <FormSubmit @submit="submit" />
  </div>
</template>
<script>
import FormSubmit from "@/components/form-submit.vue";
import * as Types from "@/store/action-types";
import { createNamespacedHelpers } from "vuex";
import { Dialog } from "vant";

let { mapActions } = createNamespacedHelpers("user");

export default {
  components: {
    FormSubmit,
  },
  methods: {
    async submit(values) {
      try {
        await this[Types.SET_LOGIN](values);
        this.$router.push("/profile");
      } catch (e) {
        Dialog.alert({
          title: "登录失败",
          message: e.data.message,
        });
      }
    },
    ...mapActions([Types.SET_LOGIN]),
  },
};
</script>
