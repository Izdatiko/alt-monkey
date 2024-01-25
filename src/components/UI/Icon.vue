<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  deg?: string;
  width?: string;
}>();

const styleObject = computed(() => {
  return {
    "-webkit-mask-image": `url(/icons/${props.icon}.svg)`,
    "mask-image": `url(/icons/${props.icon}.svg)`,
    width: `${props.width}px`,
    height: `${props.width}px`,
  };
});
</script>

<template>
  <i
    :class="[icon, deg]"
    class="icon"
    :style="styleObject"
    v-if="!icon.includes('.')"
  />
  <img
    :class="[deg]"
    class="icon img"
    :src="`/images/${icon}`"
    :alt="icon"
    v-else
  />
</template>

<style scoped lang="scss">
i.icon,
img.icon {
  display: inline-block;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  transition: 0.2s;

  &.up {
    transform: rotate(180deg);
  }

  &.down {
    transform: rotate(-180deg);
  }

  &.left {
    transform: rotate(-90deg);
  }

  &.right {
    transform: rotate(90deg);
  }
}
i.icon {
  background: currentColor;
}

.icon {
  height: 20px;
  width: 20px;
}
</style>
