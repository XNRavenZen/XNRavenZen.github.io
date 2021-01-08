<template>
  <div>
    <div class="post-main-title">{{ pageData.title }}</div>
    <div class="post-container">
      <Content />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  setup(props, context) {
    const pageData = context.parent.$page;
    // console.error(pageData)
    return {
      pageData
    }
  }
})
</script>