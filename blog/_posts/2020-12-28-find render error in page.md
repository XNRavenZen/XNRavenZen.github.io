---
title: 发现博客页面渲染异常问题
tag:
  - vue
---

tag 页面原先点击不同按钮切换时，下方列表的首个标题固定不变，没有渲染

给组件加上 key 属性,点击按钮时改变 key 值,保证强制渲染

```vue
<template v-for="(tag, index) in filtedPages">
  <SummaryCard
    :key="key + tag.path"// 直接使用path也可以,路径也是唯一
    @click.native="$router.push(tag.path)"
    :post="tag"
  />
</template>
```

```Javascript
const showContentByTag = (pages) => {
  key.value = getUid();
  filtedPages.value = pages;
};
```
