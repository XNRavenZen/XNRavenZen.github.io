import { ThemeConfig } from "vuepress-types";
const themeConfig: ThemeConfig = {
  'zh-CN': {

  },
  'en-US': {

  },
  nav: [
    {
      text: 'Languages',
      ariaLabel: 'Language Menu',
      items: [
        { text: 'Chinese', link: '/language/chinese/' },
        { text: 'Japanese', link: '/language/japanese/' }
      ]
    }
  ],
}
module.exports = themeConfig;