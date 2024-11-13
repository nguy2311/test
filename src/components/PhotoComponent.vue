<script setup lang="ts">
import ContentBody from "@/components/photo/ContentBody.vue";
import ContentHeader from "@/components/photo/ContentHeader.vue";
import { Topic } from "@/model/topic";
import { useSearchStore } from "@/store/searchStore";
import { defineProps } from "vue";
const searchStore = useSearchStore();

const props = defineProps<{
  topic: Topic | null;
}>();
</script>

<template>
  <div class="gap-[24px]">
    <ContentHeader
      :topic="props.topic"
      v-if="searchStore.searchQuery === ''"
    ></ContentHeader>
    <ContentBody></ContentBody>
  </div>
</template>
