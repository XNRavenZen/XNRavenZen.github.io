// import './styles/index.scss';
import "./styles/index.ts";
import Vuex from "vuex";
import moment from "moment";
import { default as VueCompositionApi } from "@vue/composition-api";
import storeOption from "./store";
import importAll from "./utils/importAll";

const testArgs = importAll(
  require.context("./public/image/icon/svg", true, /\.svg$/),
  /\.svg$/,
  "g"
);

const enhanceApp = ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer,
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueCompositionApi); // Vue3 组合式API
  Vue.use(Vuex);
  const store = new Vuex.Store(storeOption);
  Vue.mixin({ store: store });
  Vue.prototype.$store = store;
  Vue.prototype.$moment = moment;
  Object.keys(testArgs).forEach((fe) => Vue.component(fe, testArgs[fe]));
};
export default enhanceApp;
