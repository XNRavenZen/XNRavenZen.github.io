<template>
  <span :class="iconClass" @click="$emit('click', $event)">{{ text }}</span>
</template>
<script lang="ts">
import { defineComponent, ref, computed, toRefs } from "@vue/composition-api";

const Component = defineComponent({
  name: "BaseIcon",
  // 已启用类型推断
  props: {
    fontFamily: {
      type: String,
      default: "zen",
    },
    fontClass: {
      type: String,
      default: "zen-",
    },
    suffix: {
      type: String,
      // required: true
    },
    text: {
      type: String || Number,
    },
  },
  setup(props) {
    const { fontFamily, fontClass, suffix } = toRefs(props);
    // console.error(fontFamily, fontClass, suffix);
    const iconClass = computed(
      () => `base-icon ${fontFamily.value} ${fontClass.value}${suffix.value}`
    );
    return Object.assign(
      {
        iconClass,
      },
      props.text
    );
  },
});
export default Component;
</script>
