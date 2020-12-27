/* module.exports = {
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ]
} */
module.exports = (themeConfig, ctx) => {
  return {
    // ...
    name: "vuepress-theme-zenith",
    extend: "@vuepress/theme-default",
    globalLayout: "@/theme/layouts/GlobalLayout",
    plugins: ["@vuepress/blog"],
  };
};
