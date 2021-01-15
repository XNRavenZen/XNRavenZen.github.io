const path = require("path");
const timestamp = new Date().getTime();
process.env.VUE_APP_VERSION = require("../../package.json").version;
const appVersion = process.env.VUE_APP_VERSION;
const headConf = require("./config/head.ts"); // 头部配置
const themeConf = require("./config/themeConfig.ts"); // 主题配置
const pluginsConfig = require("./config/plugins.ts"); // 插件配置
const localeConfig = require("./config/localeConfig.ts"); // 插件配置
module.exports = {
  base: "/",
  // assetsPublicPath:"/",
  dest: "./dist",
  cache: false,
  head: headConf,
  plugins: pluginsConfig,
  locales: localeConfig,
  extraWatchFiles: [
    ".vuepress/config/*.ts", // 监听配置的修改
  ],
  // theme:"zen",
  thme: "zenith",
  themeConfig: themeConf,
  stylus: {},
  css: {
    extract: false,
  },
  sass: { indentedSyntax: true },
  scss: {
  },
  markdown: {
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    },
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set("$theme", path.resolve(__dirname, "theme"));
    config.resolve.alias.set("$config", path.resolve(__dirname, "config"));
    config.resolve.alias.set("$plugins", path.resolve(__dirname, "plugins"));
    config.resolve.alias.set(
      "$svgIcon",
      path.resolve(__dirname, "public/image/icon/svg")
    );
    config.resolve.alias.set("$comp", path.resolve(__dirname, "components"));
    config.resolve.alias.set("$utils", path.resolve(__dirname, "utils"));

    // config.optimization.delete('splitChunks');// 去掉分块
    const splitChunksObj = config.optimization.get("splitChunks");
    // console.error("查看配置", config.module.rule("css").uses);
    config.module.rule("css").uses.clear();

    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("vue-loader")
      .loader("vue-loader");

    config.module
      .rule("ts")
      .exclude.add(path.resolve("/node_modules/"))
      .end()
      .test(/\.tsx?$/)
      .use("ts-loader")
      .loader("ts-loader")
      .options({
        // logLevel: "info",
        appendTsSuffixTo: [/\.vue$/],
      });
    config.output.filename(
      `assets/js/[name].${process.env.VUE_APP_VERSION}.${timestamp}.min.js`
    );
  },
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".vue", ".js"], //可不写的扩展名
    },
    resolveLoader: {
      modules: ["node_modules", "./blog/.vuepress/"],
    },
  },
};
