<template>
  <div class="blog-post-list" v-if="blogList && blogList.length > 0">
    <template v-for="tag in blogList">
      <SummaryCard @click.native="$router.push(tag.path)" :post="tag" />
    </template>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed, provide } from '@vue/composition-api';

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const { list } = toRefs(props)
    const blogList = computed(() => list.value.filter(blog => /^(\/_posts\/)/.test(blog.regularPath)))
    return {
      blogList,
    }
  },
})
</script>