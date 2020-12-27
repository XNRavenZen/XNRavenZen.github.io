<template>
  <div class="global-layout">
    <header>
      <BaseIcon suffix="menu" @click.native="toggleMenuBar" />
      <router-link to="/">{{ getFixedTitle }}</router-link>
      &emsp;
      <router-link to="/tag/">Tag</router-link>
      &emsp;
      <!-- $router.push('github/') -->
      <!-- <BaseIcon suffix="github"/>-->
      <router-link
        to="/github/"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <!-- <BaseIcon
          class="github-icon-cat"
          suffix="github"
          @click.native="navigate"
        /> -->
        <SvgIcon
          iconClass="github"
          class="github-icon-cat"
          suffix="github"
          @click.native="navigate"
        ></SvgIcon>
      </router-link>
    </header>
    <aside :class="['menu-bar', showMenuBar ? 'menu-bar-open' : '']">
      <div class="portrait">
        <img :src="$withBase($themeConfig.avatar)" alt="" class="portrait-avatar" />
      </div>
    </aside>
    <div v-if="showMenuBar" @click="toggleMenuBar" class="menu-bar-mask" />
    <div class="container">
      <!-- 展示内容 -->
      <DefaultGlobalLayout />
    </div>
    <!-- <BackToTop listenElement="better-scrollbar" :scrollValue="10"></BackToTop> -->
    <footer><RecordInfo /><!-- 备案信息 --></footer>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide, inject, onMounted, nextTick, getCurrentInstance } from '@vue/composition-api'
// import from 'vue-router'
import scrollbarMethod from '$utils/generateScrollWidth';
import GlobalLayout from '@app/components/GlobalLayout.vue';
import moment from "moment";
import { provideStore } from '$plugins/loading';

export default defineComponent({
  name: "ZenithGlobalLayout",
  components: { DefaultGlobalLayout: GlobalLayout },
  setup(props, context) {
    provide("moment", moment);// TODO enhanceApp里无法注入
    // console.error("查看导入的参数");
    const showMenuBar = ref(false);
    const toggleMenuBar = () => {// 切换菜单状态
      showMenuBar.value = !showMenuBar.value;
    }

    const startTouching = (event) => {
      // console.error("事件参数", event)
    }
    const store = context.root.$store;
    // TODO 这里用 this 或 context 都访问不到全局计算属性,于是前往 root 访问
    const $site = context.root.$site;
    const $localeConfig = context.root.$localeConfig;
    const $page = context.root.$page;
    const $vuepress = context.root.$vuepress;
    const getFixedTitle = computed(() => {
      return $localeConfig.title || $site.title;
    });
    const isScrollbarShow = ref("none");
    const computedStyle = computed(() => {
      return {
        "--container-scrollbar-display": isScrollbarShow.value
      }
    })
    const scrolling = () => {
      // console.error("滑动", container.value.scrollTop)
      const scrollTop = container.value.scrollTop;
      isScrollbarShow.value = scrollTop > 0 ? "block" : "none";
    }
    const goPage = (path) => {
      console.error(context)
    }
    onMounted(() => {
    })
    return {
      scrollbarMethod,// 导入的处理方法
      showMenuBar,
      toggleMenuBar,
      getFixedTitle,
      goPage,
    }
  },
})
</script>