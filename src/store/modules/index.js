const files = require.context(".", true, /\.js$/);

const modules = {};
files.keys().forEach((key) => {
  const path = key.replace(/\.\/|\.js/g, "");
  if (path === "index") return;
  let [namespace, type] = path.split("/");
  if (!modules[namespace]) {
    modules[namespace] = {
      namespace: true,
    };
  }
  modules[namespace][type] = files(key).default;
});

export default modules;
