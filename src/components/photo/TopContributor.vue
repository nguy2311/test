<script setup lang="ts">
import { Contributor, Topic } from '@/model/topic';


const props = defineProps<{
    data: Contributor
}>()


</script>

<template>
    <img :src="props.data.profile_image.large" :alt="props.data.bio" class="w-10 h-10 rounded-md">
        <div>
            <p>{{ props.data.name }}</p>
            <p class="text-gray-500 text-sm">{{ props.data.instagram_username }}</p>
        </div>
</template>