<script setup lang="ts">
import Header from "@/components/Header.vue";
import UIContainer from "@/components/UI/Container.vue";
import "./composables/http";
</script>

<template>
  <UIContainer>
    <Header />
    <router-view />
  </UIContainer>
</template>

<style scoped>
</style>
