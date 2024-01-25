<script setup lang="ts">
const emit = defineEmits(['querySelect']) 

const chooseWords = (query: string) => {
  emit('querySelect', query)
}
</script>

<template>
  <div class="query">
    <button @click="chooseWords('20')">
      30
    </button>
    <button @click="chooseWords('40')">
      40
    </button>
    <button @click="chooseWords('80')">
      80
    </button>
  </div>
</template>

<style lang="scss">
.query {
  display: flex;
  border: solid 1px $gray;
  width: 80%;
  border-radius: 20px;
  padding: 15px;
  justify-content: space-between;
}
</style>