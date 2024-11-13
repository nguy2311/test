import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('searchQuery', () => {
  const searchQuery = ref<string>('');
  
  const setSearchQuery = (newQuery: string) => {
    searchQuery.value = newQuery;
  };

  return {
    searchQuery,
    setSearchQuery,
  };
});