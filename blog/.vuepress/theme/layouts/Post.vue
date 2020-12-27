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
    return {
      pageData
    }
  }
})
</script>
<style lang="scss">
.post-main-title {
  padding: 0 16px;
  text-align: center;
  font-size: 1.5rem;
}
.post-container {
  margin-left: 16px;
}
</style>