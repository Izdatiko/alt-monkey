<script setup lang="ts">
import UIIcon from "@/components/UI/Icon.vue";
import UIQuerySelect from "@/components/UI/QuerySelect.vue";
import IconLoading from "@/components/Icon/Loading.vue";

import { useAxios } from "@/composables/useAxios";

import { ref, computed, watch } from "vue";

import { useMagicKeys } from '@vueuse/core'

const keys = useMagicKeys({ reactive: true })



const isColumn = ref(false);
const query = ref<string>('10');

const { data, error, isLoading, fetchData } = useAxios(
  `/word?number=${query.value}`,
  "get",
  );
  
const words = ref<any>(data);

const chooseWords = async(e: string) => {
  const {data, fetchData} = useAxios(`/word?number=${e}`, 'get')
  await fetchData()
  words.value = data;
}

const letter = computed(() => {
  return words.value.some(word => word.some(letters => keys[letters]
  ));
})

watch(letter,
() => {
  console.log(letter.value)
})


fetchData()
</script>

<template>
  <div class="game w-100">
      <div class="game__wrapper w-100">
        <div v-if="isLoading">
          <IconLoading />
        </div>
        <UIQuerySelect @query-select="chooseWords" v-if="!isLoading" />
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
            class="game__word"
            v-for="(word, index) in words"
            :key="index"
          >
          {{ word }}
            <div class="game__letter" v-for="(letter, letterIndex) in word" :key="letterIndex">
              {{ letter }}
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
  &__word {
    display: flex;
    justify-content: center;
    user-select: none;
    color: $gray;
  }
  &__letter {
    &-active {
      border-left: solid 1px $gray;
    }
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