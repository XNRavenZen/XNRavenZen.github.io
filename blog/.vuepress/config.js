const path = require("path");
const timestamp = new Date().getTime();
process.env.VUE_APP_VERSION = require("../../package.json").version;
const appVersion = process.env.VUE_APP_VERSION;
const headConf = require("./config/head.ts");
const themeConf = require("./config/themeConfig.ts");
const pluginsConfig = require("./config/plugins.ts");
module.exports = {
  base: "/",
  // assetsPublicPath:"/",
  dest: "./dist",
  cache: false,
  head: headConf,
  plugins: pluginsConfig,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "zen's blog",
      description: "Coding & Sleeping",
    },
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "zen's blog",
      description: "Coding & Sleeping",
    },
  },
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
    includePaths: ["./styles/scss/index.scss", "./styles/scss/_variable.scss"],
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
    // config.resolve.alias.set('$theme', path.resolve(__dirname, 'theme'))
    config.resolve.alias.set("$plugins", path.resolve(__dirname, "plugins"));
    config.resolve.alias.set(
      "$svgIcon",
      path.resolve(__dirname, "public/image/icon/svg")
    );
    config.resolve.alias.set("$comp", path.resolve(__dirname, "components"));
    config.resolve.alias.set("$utils", path.resolve(__dirname, "utils"));

    // config.optimization.delete('splitChunks');// 去掉分块
    const splitChunksObj = config.optimization.get("splitChunks");
    console.dir("查看chunk", splitChunksObj); // 去掉分块
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
