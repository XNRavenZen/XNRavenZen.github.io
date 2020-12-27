<template>
  <main
    ref="container"
    :style="computedStyle"
    class="homepage better-scrollbar"
    @scroll="scrolling"
  >
    <!-- <DataLoading ref="allLoading" :showLoading="isLoading"></DataLoading> -->
    <!-- <BaseButton fillText="点击加载" @click="showLoadingComp"></BaseButton> -->
    <BlogPostList :list="$site.pages" />
    <!-- v-on="{ ...scrollbarMethod }" -->
    <!-- {{ getLayout() }} -->
    <!-- <component class="content" :is="getLayout()" /> -->
    <!-- <backtotop></backtotop> -->
  </main>
</template>
<script>
import { defineComponent, ref, reactive, toRefs, computed, onMounted, watch, createApp, nextTick } from '@vue/composition-api'
// import blogPostList from "$comp/BlogPostList"
// import DataLoading from "$comp/DataLoading"
import scrollbarMethod from '$utils/generateScrollWidth';
import { setGlobalInfo } from '@app/util'

export default defineComponent({
  name: "HomePage",
  // components: { BlogPostList: blogPostList },
  setup(props, context) {
    // console.error(props, context);
    // console.error("查看导入的参数", scrollbarMethod);


    // TODO 这里用 this 或 context 都访问不到全局计算属性,于是前往 root 访问
    const $site = context.root.$site;
    const $localeConfig = context.root.$localeConfig;
    const $page = context.root.$page;
    const $vuepress = context.root.$vuepress;
    const getFixedTitle = computed(() => {
      return $localeConfig.title || $site.title;
    });
    const container = ref(null);
    const allLoading = ref(null);
    let isLoading = ref(false);
    const showLoadingComp = () => {
      // console.error("显示loading", isLoading.value);
      isLoading.value = !isLoading.value;
    }
    onMounted(() => {
      // console.error(container.value.style, container.value.scrollTop);
      // container.value.style = {}
    })
    const isScrollbarShow = ref("none");
    const computedStyle = computed(() => {
      return {
        "--container-scrollbar-display": isScrollbarShow.value
      }
    })
    const scrolling = () => {
      console.error("滑动", container.value.scrollTop)
      const scrollTop = container.value.scrollTop;
      isScrollbarShow.value = scrollTop > 0 ? "block" : "none";
    }
    return {
      container,
      allLoading,
      isLoading,
      showLoadingComp,
      computedStyle,
      scrolling,
    }
  },
})
</script>