<script setup lang="ts">
import ContentHeader from "@/components/photo/ContentHeader.vue";
import ContentBody from "@/components/photo/ContentBody.vue";
import {  defineProps, ref, watch } from 'vue';
import { Topic } from "@/model/topic";


const query = ref('');
const props = defineProps<{
  searchQuery: string;
  type: string;
  topic: Topic;
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
        <ContentHeader :type="props.type" :topic="props.topic" v-if="props.searchQuery ===''" @search="handleSearch"></ContentHeader>
    </div>
    <ContentBody v-if="props.type == 'photo'" :type="props.type"  :searchQuery="query"></ContentBody>
    <ContentBody v-else-if="props.type != 'photo' && props.topic?.slug "  :searchQuery="query" :type="props.type" :topic="props.topic.slug"></ContentBody>
</template>