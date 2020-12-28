<template>
  <div class="summary-card">
    <div class="summary-title">
      {{ title }}
    </div>
    <div class="summary-bar">
      <BaseIcon
        suffix="author"
        :text="author || $themeConfig.author || 'noName'"
      ></BaseIcon>
      <BaseIcon
        suffix="calendar"
        :text="lastUpdateDate || $moment().format('YYYY-MM-DD')"
      ></BaseIcon>
      <BaseIcon v-if="tags" suffix="tag" :text="tags || ''"></BaseIcon>
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
  setup (props, context) {
    const { title, author, lastUpdateDate, frontmatter } = toRefs(props.post);
    const tag = frontmatter.tag || frontmatter.tags;
    const tags = tag && tag.join(",");
    return {
      title,
      author,
      lastUpdateDate,
      tags,
    }
  }
})
</script>