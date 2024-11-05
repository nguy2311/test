<template>
    <div class="flex max-w-[1336px] gap-[24px] px-[20px] box-border mx-auto items-start">
      <div v-for="(column, index) in columns" :key="index" class="w-1/3 flex flex-col gap-[24px]">
        <ImageItem v-for="image in column" :key="image.id" :data="image" />
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ImageItem from './ImageItem.vue';
import { PhotoAPI } from '@/api/photo';
import type { Image } from '@/model/image';

const images = ref<Image[]>([]); 
const columns = ref<Image[][]>([[], [], []]); 

const fetchData = async () => {
  try {
    const response = await PhotoAPI.pagination({ page: 1, size: 12, client_id: '1pLUy5DMN19cEHmGfGH_XK13LY_7KDJo_zCz8xGV3G8' });
    console.log(response.data);
    if (response != null) {
      images.value = response; 
      
      columns.value = [[], [], []];
      images.value.forEach((image, index) => {
        columns.value[index % 3].push(image);
      });
    }
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
};

onMounted(() => {
  fetchData();
});

  
</script>