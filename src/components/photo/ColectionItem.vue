<script setup lang="ts">
import type { Collection } from '@/model/colection';


const props = defineProps<{
    data: Collection
}>()


</script>

<template>
    <img :src="props.data.cover_photo.urls.raw" :alt="props.data.cover_photo.alt_description" class="w-10 h-10 rounded-md">
        <div>
            <p>{{ props.data.title }}</p>
            <p class="text-gray-500 text-sm">{{ props.data.user.name }}</p>
        </div>
</template>