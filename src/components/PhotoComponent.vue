<script setup lang="ts">
import ContentHeader from "@/components/photo/ContentHeader.vue";
import ContentBody from "@/components/photo/ContentBody.vue";
import { defineProps, ref, watch } from "vue";
import { Topic } from "@/model/topic";

const query = ref("");
const props = defineProps<{
  searchQuery: string;
  // cái này là cái type ở trên header
  type: string;
  // cái này là cái feature của cái type ở trên
  topic: Topic;
}>();

const handleSearch = (value: string) => {
  query.value = value;
};

watch(
  () => props.searchQuery,
  (newSearchQuery) => {
    query.value = newSearchQuery;
  },
  { immediate: true }
);
</script>

<template>
  <ContentHeader
    :type="props.type"
    :topic="props.topic"
    v-if="props.searchQuery === ''"
    @search="handleSearch"
  ></ContentHeader>
  <ContentBody
    :type="props.type"
    :searchQuery="query"
    :topic="props.topic.slug"
  ></ContentBody>
</template>
