<template>
  <div class="tag">
    <template v-if="$frontmatterKey && $frontmatterKey.list">
      <BaseButton
        v-for="tag in $frontmatterKey.list"
        :fillText="tag.name"
        @click="showContentByTag(tag.pages)"
        style:
      />
       <BlogPostList :list="filtedPages" />
    </template>
  </div>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup(props, context) {
    const tagData = context.parent.$tag;
    console.error("页面数据", context.parent, tagData.list);
    const filtedPages = ref([]);
    filtedPages.value = tagData.list[0] ? tagData.list[0].pages : [];
    const doNothing = (thing) => {
      console.error("看看是啥", thing);
      return thing;
    };
    const showContentByTag = (pages) => {
      console.error("展示tag内容", pages);
      filtedPages.value = pages;
    };
    return {
      doNothing,
      showContentByTag,
      filtedPages,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  padding: 8px 0;
}
</style>