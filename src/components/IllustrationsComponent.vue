<script setup lang="ts">
import ContentHeader from "@/components/Illustrations/ContentHeader.vue";
import ContentBody from "@/components/Illustrations/ContentBody.vue";
import {  defineProps, ref, watch } from 'vue';


const query = ref('');
const props = defineProps<{
  searchQuery: string;
}>();



const handleSearch = (value: string) => {
    query.value = value;
}

watch(
  () => props.searchQuery,
  (newSearchQuery) => {
    query.value = newSearchQuery;
  },
  { immediate: true }
);


</script>

<template>
    <div class="py-[56px]">
        <ContentHeader v-if="props.searchQuery ===''" @search="handleSearch"></ContentHeader>
    </div>
    <ContentBody :search-query="query"></ContentBody>
</template>