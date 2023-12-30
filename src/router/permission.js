export default [
  {
    path: "auth1",
    component: () => import("@/views/other/auth1"),
    meta: {
      auth: "auth1",
    },
  },
  {
    path: "auth2",
    component: () => import("@/views/other/auth2"),
    meta: {
      auth: "auth2",
    },
  },
  {
    path: "auth3",
    component: () => import("@/views/other/auth3"),
    meta: {
      auth: "auth3",
    },
  },
];
