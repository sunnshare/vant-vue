const files = require.context(".", true, /\.js$/);

const modules = {};
files.keys().forEach((key) => {
  const path = key.replace(/\.\/|\.js/g, "");
  if (path === "index") return;
  let [namespaced, type] = path.split("/");
  if (!modules[namespaced]) {
    modules[namespaced] = {
      namespaced: true,
    };
  }
  modules[namespaced][type] = files(key).default;
});

export default modules;
