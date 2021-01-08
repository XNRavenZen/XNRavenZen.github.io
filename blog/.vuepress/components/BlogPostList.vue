<template>
  <div class="blog-post-list">
    <template v-for="tag in blogList">
      <SummaryCard :key="tag.path" @click.native="$router.push(tag.path)" :post="tag" />
    </template>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  toRefs,
  onUpdated,
} from "@vue/composition-api";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup (props, context) {
    const { list } = toRefs(props);
    onUpdated(()=>{
      // console.error("拿到的", list);
    })
    const blogList = computed(() => {
      return list.value.filter((blog) => /^(\/_posts\/)/.test(blog.regularPath))
    });
    return {
      blogList,
    };
  },
});
</script>
