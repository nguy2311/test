
<script setup lang="ts">
import type { Topic } from '@/model/topic';
import TopContributor from './TopContributor.vue';

const props = defineProps<{
  topic: Topic ;
}>();


</script>

<template>
    <ul class="space-y-2">
        <li v-for="data in props.topic.top_contributors" class="flex items-center space-x-2">
            <TopContributor :data="data"></TopContributor>
        </li>
    </ul>
</template>