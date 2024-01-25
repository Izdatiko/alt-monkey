<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: [breakout-start] 1fr [content-start] 1230px [content-end] 1fr [breakout-end];
}

.container > * {
  grid-column: content;
}

.container > .breakout {
  grid-column: breakout;
}
</style>