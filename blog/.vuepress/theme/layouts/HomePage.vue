<template>
  <main
    ref="container"
    :style="computedStyle"
    class="homepage better-scrollbar"
    @scroll="scrolling"
  >
    <BlogPostList :list="$site.pages" />
  </main>
</template>
<script>
import {
  defineComponent,
  ref,
  computed,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "HomePage",
  setup (props, context) {
    // TODO 这里用 this 或 context 都访问不到全局计算属性,于是前往 root 访问
    const container = ref(null);
    const allLoading = ref(null);
    let isLoading = ref(false);
    const showLoadingComp = () => {
      // console.error("显示loading", isLoading.value);
      isLoading.value = !isLoading.value;
    };
    onMounted(() => {
      // console.error(container.value.style, container.value.scrollTop);
      // container.value.style = {}
    });
    const isScrollbarShow = ref("none");
    const computedStyle = computed(() => {
      return {
        "--container-scrollbar-display": isScrollbarShow.value,
      };
    });
    const scrolling = () => {
      // console.error("滑动", container.value.scrollTop);
      const scrollTop = container.value.scrollTop;
      isScrollbarShow.value = scrollTop > 0 ? "block" : "none";
    };
    return {
      container,
      allLoading,
      isLoading,
      showLoadingComp,
      computedStyle,
      scrolling,
    };
  },
});
</script>
