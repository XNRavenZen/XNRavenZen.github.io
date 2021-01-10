import { showLoading } from "../utils/allLoading";

const state = {
  loadingFunc: showLoading, // 加载动画控制方法
  isAsiderMenuShow: false, // 侧边菜单显示状态
};

const getters = {
  getMenuState: (state, getters) => {
    return state.isAsiderMenuShow
  }
}

const mutations = {
  toggleAsiderMenu(staticState, showState) {
    if (showState !== undefined) {
      staticState.isAsiderMenuShow = showState.value;
    } else {
      staticState.isAsiderMenuShow = !staticState.isAsiderMenuShow; // 变更状态
    }
  },
};

const actions = {};

const modules = {};

export default {
  state,
  getters,
  mutations,
  actions,
  modules,
};
