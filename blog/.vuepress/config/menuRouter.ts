import Vue from 'vue';
/**
 * TODO 以下用到Vue.prototype的待修改
 */
const menuRouter = [
  {
    componentName: "BaseIcon",
    bind: {
      suffix: "menu",
      onObj: [
        {
          type: "click",
          func: () => {
            Vue.prototype.$store.commit("toggleAsiderMenu")
          }
        }
      ]
    },
    role: "menu"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      innerWord: "首页",
      onObj: [
        {
          type: "click",
          func: () => {
            Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/tag",
      innerWord: "tag",
      onObj: [
        {
          type: "click",
          func: () => {
            Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      compName:"GithubCat",
      path: "/github",
      onObj: [
        {
          type: "click",
          func: () => {
            Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "navIcon"
  }
]

export { menuRouter };