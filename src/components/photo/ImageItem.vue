<script setup lang="ts">
import { Image, ImageDetails } from '@/model/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ref, watch } from 'vue';
import { fetchDetail } from '@/api/photo';
import DetailsComponent from './DetailsComponent.vue';

const isDialogOpen = ref(false);

const props = defineProps<{
  data: Image
}>();

const detailPhoto = ref<ImageDetails>({} as ImageDetails);
const topics = ref('')

const fetchData = async () => {
  try {
    const response =   await fetchDetail(props.data.slug)
    detailPhoto.value = response
    for (let i = 0; i < response.topics.length; i++) {
      topics.value = response.topics.map((topic) => topic.title).join(', ');
    }
    

  } catch (error) {
    console.error('Error fetching photos:', error);
  } 
};



watch(isDialogOpen, (newVal) => {
  if (newVal) {
    fetchData();
  }
});
</script>

<template>
  <div class="relative w-full max-w-md group">
    <Dialog v-model:open="isDialogOpen">
      <DialogTrigger as="button" class="w-full">
        <img
          :src="props.data.urls.regular"
          :alt="props.data.alt_description"
          class="w-full object-cover cursor-pointer"
        />
      </DialogTrigger>

      <div class="flex items-center absolute top-[20px] right-[20px] space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button class="inline-flex items-center justify-center w-[40px] h-8 bg-white rounded-md shadow-lg">
          <img src="/src/assets/favourite-stroke-rounded.svg"/>
        </button>
        <button class="inline-flex items-center justify-center w-[40px] h-8 bg-white rounded-md shadow-lg">
          <img src="/src/assets/plus-sign-stroke-rounded.svg"/>
        </button>
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img v-if="props.data.user.profile_image.large" :src="props.data.user.profile_image.large" :alt="props.data.user.name">
              <img v-else src="/src/assets/user-circle-stroke-rounded.svg" :alt="props.data.user.name">
            </div>
            <div class="text-white">
              <p class="font-medium">{{ props.data.user.name }}</p>
            </div>
          </div>
          <button class="inline-flex items-center justify-center w-[40px] h-8 bg-white rounded-md shadow-lg">
            <img src="/src/assets/download-05-stroke-rounded.svg" />
          </button>
        </div>
      </div>

      <DialogContent
          class="custom-dialog-content p-6 h-[98%] bg-white rounded-lg overflow-y-auto">
        <DetailsComponent :isOpen="isDialogOpen" :data="props.data" :detailPhoto="detailPhoto" :topics="topics" />
      </DialogContent>
    </Dialog>
  </div>
</template>

<style>
.custom-dialog-content {
  width: 80vw !important;
  max-width: none !important;
}

</style>