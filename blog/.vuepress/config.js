const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const timestamp = new Date().getTime();
process.env.VUE_APP_VERSION = require('../../package.json').version;
const appVersion = process.env.VUE_APP_VERSION;
module.exports = {
  base: '/',
  // assetsPublicPath:"/",
  dest: './dist',
  cache: false,
  head: [
    ['link', { rel: 'icon', href: '/image/icon/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/image/icon/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/image/icon/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/image/icon/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    ...new VueLoaderPlugin(),
    '@vuepress/blog': {
      directories: [{
        id: 'post',
        dirname: '_posts',
        path: '/post/',
        itemPermalink: '/post/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tag',
          // frontmatter: { title: 'Tag' },
          // itemlayout: 'Post',
          // itemlayout:"Layout",
          // scopeLayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },],
      sitemap: {
        hostname: 'https://not-me.fun'
      },
    },
    'vuepress-plugin-typescript': {
      tsLoaderOptions: {
        // ts-loader 的所有配置项
      },
    },
    '@vuepress/last-updated': true,
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        '/en/': {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      popupComponent: "ZenUpdatePopup"
    },
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: "zen's blog",
      description: 'Coding & Sleeping'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: "zen's blog",
      description: 'Coding & Sleeping'
    }
  },
  // theme:"zen",
  thme: "zenith",
  themeConfig: {
    avatar: "/image/avatar/husky_stuck-out_tongue.jpg",// 头像放在public/image/avatar下
    hasBeenRecorded: true,
    ICPNum: "闽ICP备2020022217号-1",// ICP备案号
    NISMNum: "闽公网安备 35020602001871号",// 公安联网备案号
    iconSrc: '/image/icon/national_emblem.png',// 备案所需国徽图案文件路径(相对于base路径)
    // $showloading: showLoading,
  },
  stylus: {},
  sass: { indentedSyntax: true },
  scss: {
    includePaths: ["./styles/scss/index.scss", "./styles/scss/_variable.scss"]
  },
  markdown: {
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },
  chainWebpack: (config, isServer) => {
    // config.resolve.alias.set('$theme', path.resolve(__dirname, 'theme'))
    config.resolve.alias.set('$plugins', path.resolve(__dirname, 'plugins'));
    config.resolve.alias.set('$comp', path.resolve(__dirname, 'components'))
    config.resolve.alias.set('$utils', path.resolve(__dirname, 'utils'))
    /*  config.module.rules("css")
       .test(/\.css$/).use('vue-style-loader').loader('vue-style-loader').end()
       .use('css-loader') */
    config.module.rule("vue").test(/\.vue$/).use('vue-loader').loader('vue-loader');

    config.module.rule("ts")
      .exclude.add(path.resolve("/node_modules/")).end()
      .test(/\.tsx?$/).use('ts-loader').loader('ts-loader').options({
        // logLevel: "info",
        appendTsSuffixTo: [/\.vue$/],
      });
    config.output.filename(`assets/js/[name].${process.env.VUE_APP_VERSION}.${timestamp}.min.js`)
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.vue', '.js'],//可不写的扩展名
    },
    resolveLoader: {
      modules: ["node_modules", "./blog/.vuepress/"]
    }
  }
}