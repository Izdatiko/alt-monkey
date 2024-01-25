<script setup lang="ts">
import UIIcon from "@/components/UI/Icon.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="header">
      <div class="header__wrapper w-100">
        <RouterLink to="/profile">
          <UIIcon
            width="25"
            icon="profile-user-avatar-man-person-svgrepo-com"
          />
        </RouterLink>
        <RouterLink to="/">
          <UIIcon width="50" icon="keyboard" />
        </RouterLink>
        <RouterLink to="/auth">
          <UIIcon width="25" icon="logout-svgrepo-com" />
        </RouterLink>
      </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

