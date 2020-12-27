<template>
  <div class="layout-container">
    <div class="layout" v-if="$pagination">
      <!-- <li v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">{{
          page.title
        }}</router-link>
      </li> -->
      <BlogPostList :list="$pagination.pages" />
    </div>
    <Content />
    <div id="pagination" v-if="$pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink"
        >Prev</router-link
      >
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink"
        >Next</router-link
      >
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
.layout-container {
  width: 100%;
}
</style>