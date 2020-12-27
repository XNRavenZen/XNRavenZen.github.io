import './styles/index.scss';
import Vuex from 'vuex';
import moment from "moment";
import { default as VueCompositionApi, createApp, ref, h, getCurrentInstance } from '@vue/composition-api';
import storeOption from "./store";

const enhanceApp = ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueCompositionApi); // Vue3 组合式API
  Vue.use(Vuex);
  const store = new Vuex.Store(storeOption)
  Vue.mixin({ store: store })
  // 配合守卫使用loading
  /* router.beforeEach((to, from, next) => {
    // console.error(to, from, next);
    const githubPath = /^\/github\.html(?:\/(?=$))?$/i;
    if (githubPath.test(to.path)) {  //如果未匹配到路由
      from.name ? next() : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    } else {
      next();    //如果匹配到正确跳转
    }
  }) */
  Vue.prototype.$moment = moment;
}
export default enhanceApp;