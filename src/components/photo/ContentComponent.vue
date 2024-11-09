<script setup lang="ts">
import ContentHeader from "./ContentHeader.vue";
import ContentBody from "./ContentBody.vue";
import { ref, defineProps } from 'vue';

const props = defineProps<{
  searchQuery: string;
}>();

</script>

<template>
    <div class="py-[56px]">
        <ContentHeader></ContentHeader>
    </div>
    <ContentBody :search-query="props.searchQuery"></ContentBody>
</template>