<template>
  <div class="tag">
    <template v-if="$frontmatterKey && $frontmatterKey.list">
      <BaseButton
        v-for="tag in $frontmatterKey.list"
        :fillText="tag.name"
        @click="showContentByTag(tag.pages)"
        style:
      />
      <!-- <BlogPostList v-if="filtedPages.length>0" :list="filtedPages" /> -->
      <template v-for="(tag,index) in filtedPages">
        <SummaryCard :key="key+index" @click.native="$router.push(tag.path)" :post="tag" />
      </template>
    </template>
  </div>
  </ul>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  readonly,
  toRefs,
  ref,
  nextTick,
} from "@vue/composition-api";

export default defineComponent({
  setup(props, context) {
    const tagData = context.parent["$tag"];
    const pocessList = JSON.parse(JSON.stringify(tagData.list));
    const pageData = ref(null);
    const key = ref(0); // key属性值,强制组件刷新
    pageData.value = pocessList[0] ? pocessList[0].pages : [];
    const filtedPages = computed({
      get() {
        return pageData.value;
      },
      set(value) {
        nextTick(() => {
          pageData.value = value;
        });
      },
    });
    const doNothing = (thing) => {
      // console.error("看看是啥", thing);
      return thing;
    };
    const showContentByTag = (pages) => {
      key.value += 1;
      filtedPages.value = pages;
    };
    return {
      key,
      doNothing,
      showContentByTag,
      pageData: readonly(pageData),
      filtedPages,
    };
  },
  mounted() {
    this.$forceUpdate();
  },
});
</script>
<style lang="scss" scoped>
.content {
  padding: 8px 0;
}
</style>