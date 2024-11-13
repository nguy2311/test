import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTypeStore = defineStore('type', () => {
  const type = ref<string>('photo');
  
  const setTypeStore = (newQuery: string) => {
    type.value = newQuery;
  };

  return {
    type,
    setTypeStore,
  };
});