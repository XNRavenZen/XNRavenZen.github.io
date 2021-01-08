<!--
 * @LastEditors: XNRavenZen
-->
<template>
  <div class="global-layout">
    <header>
      <BaseIcon
        suffix="menu"
        @click.native="toggleMenuBar($event, null, true)"
      />
      <router-link
        to="/"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <span @click="toggleMenuBar($event, navigate)">{{
          getFixedTitle
        }}</span>
      </router-link>
      &emsp;
      <router-link
        to="/tag/"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <span @click="toggleMenuBar($event, navigate)">Tag</span>
      </router-link>
      &emsp;
      <router-link
        to="/github/"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <GithubIcon @click="toggleMenuBar($event, navigate)"></GithubIcon>
      </router-link>
    </header>
    <aside :class="['menu-bar', showMenuBar ? 'menu-bar-open' : '']">
      <div class="portrait">
        <img
          :src="$withBase($themeConfig.avatar)"
          alt=""
          class="portrait-avatar"
        />
        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div class="aside-row">
            <span @click="toggleMenuBar($event, navigate)">{{
              getFixedTitle
            }}</span>
          </div>
        </router-link>
        &emsp;
        <router-link
          to="/tag/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div class="aside-row">
            <span @click="toggleMenuBar($event, navigate)">Tag</span>
          </div>
        </router-link>
        &emsp;
        <router-link
          to="/github/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div class="aside-row">
            <GithubIcon @click="toggleMenuBar($event, navigate)"></GithubIcon>
          </div>
        </router-link>
      </div>
    </aside>
    <div
      v-if="showMenuBar"
      @click="toggleMenuBar($event, null)"
      class="menu-bar-mask"
    />
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
import moment from "moment";
import GithubIcon from "$svgIcon/github.svg";

export default defineComponent({
  name: "ZenithGlobalLayout",
  components: { DefaultGlobalLayout: GlobalLayout, GithubIcon },
  setup(props, context) {
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
    const goPage = (path) => {};
    onMounted(() => {
      console.error("查看配置", context.root, $site);
    });
    return {
      scrollbarMethod, // 导入的处理方法
      showMenuBar,
      toggleMenuBar,
      getFixedTitle,
      goPage,
    };
  },
});
</script>
