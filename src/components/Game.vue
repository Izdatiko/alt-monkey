<script setup lang="ts">
import UIIcon from "@/components/UI/Icon.vue";
import UIQuerySelect from "@/components/UI/QuerySelect.vue";
import IconLoading from "@/components/Icon/Loading.vue";

import { useAxios } from "@/composables/useAxios";

import { ref } from "vue";

const isColumn = ref(false);
const query = ref<string>('10');

const chooseWords = (e: string) => {
  query.value = e;
  console.log(query.value);
  fetchData();
}

const { data: words, error, isLoading, fetchData } = useAxios(
  `/word`,
  "get",
  {
    number: query.value
  }
);
</script>

<template>
  <div class="game w-100">
      <div class="game__wrapper w-100">
        <div v-if="isLoading">
          <IconLoading />
        </div>
        <!-- <UIQuerySelect @query-select="setQuery" v-if="!isLoading" /> -->
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
        <button
          v-if="!isLoading"
          @click="isColumn = !isColumn"
          class="game__wrapper-toggle"
        >
          <UIIcon :icon="isColumn ? 'row-vertical-svgrepo-com' : 'row-horizontal-svgrepo-com'"></UIIcon>
        </button>
        <div v-if="error">
          {{ error }}
        </div>
        <div :class="isColumn ? 'game__wrapper-grid' : 'game__wrapper-flex'">
          <div
            class="flex none-select j-center"
            v-for="(word, index) in words"
            :key="index"
          >
            <div v-for="(letter, letterIndex) in word" :key="letterIndex">
              <p>{{ letter }}</p>
            </div>
          </div>
        </div>
        <button
          v-if="!isLoading"
          class="game__wrapper-reload"
          @click="fetchData()"
        >
          <UIIcon icon="refresh-cw-svgrepo-com" />
        </button>
      </div>
  </div>
</template>

<style scoped lang="scss">
.game {
  p {
    color: $gray;
  }
  &__wrapper {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    &-flex {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    &-grid {
      display: grid;
      gap: 20px;
      align-self: center;
    }
  }
}
</style>