<template>
  <div>
    <aside :class="['menu-bar', showMenuBar ? 'menu-bar-open' : '']">
      <div class="portrait">
        <img
          :src="$withBase($themeConfig.avatar)"
          alt=""
          class="portrait-avatar"
        />
      </div>
      <div class="nav-container">
        <template v-for="(info, index) in filtedMenu">
          <component
            :is="info.componentName"
            :key="`${info.role}${index}`"
            class="aside-row"
            v-bind="info.bind"
            v-on="info.on"
          />
        </template>
      </div>
    </aside>
    <div
      v-if="showMenuBar"
      @click="toggleMenuBar($event, null)"
      class="menu-bar-mask"
    />
  </div>
</template>
<script>
import { defineComponent, computed } from "@vue/composition-api";
import { menuRouter } from "$config/menuRouter.ts"

export default defineComponent({
  name: "AsiderMenu",
  setup (props, context) {
    const store = context.root.$store;
    const showMenuBar = computed(() => store.getters.getMenuState);
    const $localeConfig = context.root.$localeConfig;
    const getFixedTitle = computed(() => {
      return $localeConfig.title || $site.title;
    });
    const toggleMenuBar = (event, next = null, root = false) => {
      store.commit("toggleAsiderMenu");
      next && next(event);
    };
    const filtedMenu = computed(() => menuRouter.filter(fl => fl.role !== "menu").map(mr => {
      return Object.assign({}, mr, {
        bind: Object.assign({}, mr.bind, mr.role === "nav" ? {
          compName: "div"
        } : {}),
        on: Object.assign({}, mr.on, {
          "click": () => {
            console.error("点击了事件");
            store.commit("toggleAsiderMenu");
          }
        })
      })
    }))
    return {
      getFixedTitle,
      showMenuBar,
      toggleMenuBar,
      filtedMenu
    }
  }
})
</script>
<style lang="scss">
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .aside-row {
    flex: 1;
    margin: 4px 0 ;
  }
}
</style>