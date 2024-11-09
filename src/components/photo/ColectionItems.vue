
<script setup lang="ts">
import { fetchColections } from '@/api/collection';
import CardItem from './ColectionItem.vue';
import type { Collection } from '@/model/colection';
import { onMounted, ref } from 'vue';

const isFetching = ref(false)
const collection = ref<Array<Collection>>([])
const fetchData = async () => {
  if (isFetching.value) return;
  isFetching.value = true;

  try {
    const response =   await fetchColections({ page: 1, size: 4 })
    collection.value = response
  } catch (error) {
    console.error('Error fetching photos:', error);
  } finally {
    isFetching.value = false;
  }
};

onMounted(() => {
  fetchData();
})
</script>

<template>
    <ul class="space-y-2">
        <li v-for="data in collection" class="flex items-center space-x-2">
            <CardItem :data="data"></CardItem>
        </li>
    </ul>
</template>