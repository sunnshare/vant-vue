import axios from "@/util/axios";

// 登录
export const toLogin = (data) => axios.post("/user/login", data);

// 验证登录
export const validate = () => axios.get("/user/validate");
