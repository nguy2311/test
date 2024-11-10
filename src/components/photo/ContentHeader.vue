<script setup lang="ts">
import InputSearch from '@/components/searchComponent/SearchComponent.vue';
import ColectionItems from './ColectionItems.vue';
import { ref, defineEmits, defineProps, watch } from 'vue';
import { Button } from '@/components/ui/button'
import { Topic } from '@/model/topic';
import TopContributors from './TopContributors.vue';

const props = defineProps<{
  type: string;
  topic: Topic | null;
}>();


const emit = defineEmits<{
  (e: 'search', value: string): void;
}>();

const onSearch = (value: string) => {
  emit('search', value); 
}


</script>

<template>
    <div class="flex max-w-[1336px] gap-[24px] px-[20px] box-border mx-auto items-end">
        <div v-if="props.type === 'photo'" class="w-2/4">
            <h1 class="text-4xl font-bold mb-2">Unsplash</h1>
            <p class="text-gray-600">The internet’s source for visuals</p>
            <p class="text-gray-600">Powered by creators everywhere.</p>
            <div  class="mt-4">
                <InputSearch @search="onSearch"/>
            </div>
        </div>

        <div v-else-if="props.topic !== null" class="w-2/4 flex flex-col gap-[24px]">
            <h1 class="text-4xl font-bold mb-2">{{ props.topic.title }}</h1>
            <p class="text-gray-600">{{ props.topic.description }}</p>
            <Button class="w-fit text-[15px] h-[42px] leading-[40px]">
                <p>Submit to</p>
                <p class="font-bold">{{ props.topic.title }}</p>
            </Button>
        </div>

        <div v-if="props.type === 'photo'" class="w-1/4 border border-solid border-[#d1d1d1] rounded-lg">
            <div class="p-[20px]">
                <h2 class="text-lg font-semibold mb-4">Collections</h2>
                <ColectionItems/>
                <a href="#" class="text-sm text-[#767676] mt-4 inline-block hover:text-black">See all</a>
            </div>
        </div>

        <div v-else-if="props.topic !== null" class="w-1/4 border border-solid border-[#d1d1d1] rounded-lg">
            <div class="p-[20px]">
                <h2 class="text-lg font-semibold mb-4">Top contributors</h2>
                <TopContributors :topic="props.topic"/>
                <a href="#" class="text-sm text-[#767676] mt-4 inline-block hover:text-black">See all</a>
            </div>
        </div>

        <div class="w-1/4 flex-grow relative overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1726629597612-a48c0fdd0fe6?fm=jpg&q=60&w=3000&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMwNjAyODgyfA&ixlib=rb-4.0.3" alt="Featured" class="w-full h-full object-cover">
            <div class="absolute bottom-4 left-4 text-white">
                <p class="font-semibold">Featured</p>
                <p>Shubham Dhage</p>
            </div>
        </div>
    </div>
</template>