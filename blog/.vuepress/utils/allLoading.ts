import Vue from 'vue';
import { default as compositionAPI, createApp, getCurrentInstance } from '@vue/composition-api';
import DataLoading from "../components/DataLoading.vue"

Vue.use(compositionAPI);
const loadingSymbol = Symbol();

const app = createApp(DataLoading);
let appStore = null;
const showLoading = (isShow = true, options = {}) => {
  const findBox = document.getElementById("loading-container");
  if (!findBox) {
    const parent = document.createElement('div')
    console.error("看看loadingSymbol", loadingSymbol);
    parent.id = "loading-container";
    document.getElementsByTagName("body")[0].appendChild(parent);
    console.error("查看额外实例", app, getCurrentInstance());
    const instance = app.mount(parent);
    appStore = instance
  } 
  Vue.nextTick(() => {
    appStore[isShow ? "showLoad" : "hideLoad"]();
  })
}
export {
  showLoading
};