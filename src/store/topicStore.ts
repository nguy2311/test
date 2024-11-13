import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTopicStore = defineStore('topic', () => {
  const type = ref<string>('photo');
  
  const setType = (newType: string) => {
    type.value = newType;
  };

  return {
    type,
    setType,
  };
});