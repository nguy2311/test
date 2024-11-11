<script setup lang="ts">
import { Image, ImageDetails } from '@/model/image';
import { DialogTitle} from 'radix-vue'
const props = defineProps<{
    detailPhoto: ImageDetails
    data: Image
    topics: string
}>()

const formatDate = (input: string): string => {
  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long', day: 'numeric', year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
</script>

<template >
    <div class="h-full w-full gap-[24px] flex flex-col">
        <div class="m-h-[40px] gap-[8px] flex items-center justify-between">
            <div class="w-3/4 flex items-center space-x-2">
            <div class="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                <img v-if="props.data.user.profile_image.large" :src="props.data.user.profile_image.large" :alt="props.data.user.name">
                <img v-else src="/src/assets/user-circle-stroke-rounded.svg" :alt="props.data.user.name">
            </div>
            <DialogTitle class="text-black text-[15px] font-medium">{{ props.data.user.name }}</DialogTitle>
            </div>
        </div>
        <div class="w-full h-[80vh] flex items-center justify-center">
            <img 
            :src="props.data.urls.regular" 
            :alt="props.data.alt_description" 
            class="w-auto h-full object-contain rounded-md"
            />
        </div>
        <div class="h-[44px] gap-[24px] flex flex-col items-left justify-between ">
            <div class="flex items-center gap-[24px] ">
                <div class="w-[15vh]">
                    <p class="text-[#767676] text-[14px] font-medium">Views</p>
                    <p>{{ props.detailPhoto.views }}</p>
                </div>
                <div class="w-[15vh]">
                    <p class="text-[#767676] text-[14px] font-medium">Download</p>
                    <p>{{ props.detailPhoto.downloads }}</p>
                </div>
                <div v-if="props.topics" class="w-[50vh] m-w[15vh]">
                    <p class="text-[#767676] text-[14px] font-medium">Featured in</p>
                    <p>{{ props.topics }}</p>
                </div>
            </div>
            <div class="text-[#767676] text-[14px]">
                <div v-if="props.detailPhoto.location && props.detailPhoto.location.name" class="flex flex-row items-center gap-[8px]">
                    <img src="/src/assets/location-01-stroke-rounded.svg" class="w-[16px] h-[16px]"/>
                    <p>{{ props.detailPhoto.location.name }}</p>
                </div>
                <div class="flex flex-row items-center gap-[8px]">
                    <img src="/src/assets/calendar-03-stroke-rounded.svg" class="w-[16px] h-[16px]"/>
                    <p>Published on {{ formatDate(props.data.created_at) }}</p>
                </div>
                <div v-if="props.detailPhoto.exif && props.detailPhoto.exif.name" class="flex flex-row items-center gap-[8px]">
                    <img src="/src/assets/camera-01-stroke-rounded.svg" class="w-[16px] h-[16px]"/>
                    <p>{{ props.detailPhoto.exif.name }}</p>
                </div>
            </div>
            <div class="flex flex-row items-left gap-[8px] flex-wrap">
                <div
                    v-for="tag in props.detailPhoto.tags"
                    :key="tag.title"
                    class="bg-[#eee] w-fit px-[10px] py-[4px] text-[#555] text-[14px] rounded-[4px]"
                >
                    <a>{{ tag.title }}</a>
                </div>
            </div>
        </div>
    </div>
    
</template>