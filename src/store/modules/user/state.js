const userState = {
  username: "",
  hasPermission: false, // 登录权限
  token: "",
  authList: [], // 菜单权限列表
  menuPermission: false,
  btnPermission: ["edit"], // 按钮权限列表
};

export default userState;
