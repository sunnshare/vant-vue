const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("@vant/auto-import-resolver");
const ComponentsPlugin = require("unplugin-vue-components/webpack");

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-plugin-px2rem")({
              rootValue: 37.5,
              exclude: /node_module/,
            }),
          ],
        },
      },
    },
  },

  pluginOptions: {
    // 自动引入 scss 变量
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/assets/var.scss")],
    },
  },

  configureWebpack: {
    plugins: [
      ComponentsPlugin.default({ resolvers: [VantResolver()] }), //当 unplugin-vue-components 版本大于等于 0.26.0
    ],
  },
});
