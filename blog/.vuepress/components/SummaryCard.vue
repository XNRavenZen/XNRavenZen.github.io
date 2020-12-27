<template>
  <div class="summary-card">
    <div class="summary-title">
      {{ title }}
    </div>
    <div class="summary-bar">
      <span class="zen zen-author">{{
        post.author || $themeConfig.author || "noName"
      }}</span>
      <span class="zen zen-calendar">{{
        post.lastUpdateDate || $moment().format("YYYY-MM-DD")
      }}</span>
      <span class="zen zen-tag">{{ tags }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const title = props.post.title;
    const tag = props.post.frontmatter.tag;
    const tags = tag && tag.join(",");
    return {
      title,
      tags,
      ...props.post
    }
  },
})
</script>