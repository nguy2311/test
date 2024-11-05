<script setup lang="ts">

import {Image} from '@/model/image'

const props = defineProps<{
  data: Image
}>();

</script>

<template>
  <div class="relative w-full max-w-md group">
    <img
      :src="props.data.urls.regular"
      :alt="props.data.alt_description"
      class="w-full object-cover"
    />

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
            <img v-else src="/src/assets/user-circle-stroke-rounded.svg" :alt="data.user.name">
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
  </div>
</template>