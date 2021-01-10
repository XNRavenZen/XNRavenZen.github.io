<template>
  <div class="global-layout">
    <header>
      <!-- 菜单迁移到配置中 -->
      <template v-for="(info, index) in filtedMenu">
        <component
          :is="info.componentName"
          :key="`${info.role}${index}`"
          v-bind="info.bind"
          v-on="info.on"
        />
      </template>
    </header>
    <AsiderMenu></AsiderMenu>
    <div class="container">
      <!-- 展示内容 -->
      <DefaultGlobalLayout />
    </div>
    <!-- <BackToTop listenElement="better-scrollbar" :scrollValue="10"></BackToTop> -->
    <footer><RecordInfo /><!-- 备案信息 --></footer>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  provide,
  onMounted,
} from "@vue/composition-api";
// import from 'vue-router'
import scrollbarMethod from "$utils/generateScrollWidth";
import GlobalLayout from "@app/components/GlobalLayout.vue";
import AsiderMenu from "$theme/components/AsiderMenu.vue";
import moment from "moment";
import { menuRouter } from "$config/menuRouter.ts"

export default defineComponent({
  name: "ZenithGlobalLayout",
  components: { DefaultGlobalLayout: GlobalLayout, AsiderMenu },
  setup (props, context) {
    provide("moment", moment); // TODO enhanceApp里无法注入
    const showMenuBar = ref(false);
    const fixedPin = ref(false);
    /**
     * @param {Event} event 点击事件参数
     * @param {Function} next 跳转函数
     * @param {Boolean} root 是否为菜单开启按钮
     */
    const toggleMenuBar = (event, next = null, root = false) => {
      // 切换菜单状态
      // showMenuBar.value = state ? false : !showMenuBar.value;
      showMenuBar.value = root && fixedPin.value ^ !showMenuBar.value;
      next && next(event);
    };
    const $themeConfig = context.root.$themeConfig;

    // TODO 这里用 this 或 context 都访问不到全局计算属性,于是前往 root 访问
    const $site = context.root.$site;
    const $localeConfig = context.root.$localeConfig;
    const getFixedTitle = computed(() => {
      return $localeConfig.title || $site.title;
    });
    const goPage = (path) => { };
    onMounted(() => {
      console.error("查看配置", menuRouter);
    });
    const store = context.root.$store;
    const filtedMenu = computed(() => menuRouter.map(mr => {
      return Object.assign({}, mr, {
        on: Object.assign({}, mr.on, {
          "click": () => {
            console.error("点击了事件");
            store.commit("toggleAsiderMenu");
          }
        })
      })
    }))
    console.error("查看菜单", filtedMenu);
    return {
      scrollbarMethod, // 导入的处理方法
      showMenuBar,
      toggleMenuBar,
      getFixedTitle,
      goPage,
      // menuRouter
      filtedMenu,
    };
  },
});
</script>
