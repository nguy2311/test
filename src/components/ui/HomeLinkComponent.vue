
<script setup lang="ts">

import { ref } from 'vue'

const homelinkItems = ['3D Renders', 'Wallpapers', 'Nature', 'Archival', 'Travel', 'Architecture & Interiors', 
  'Business & Work', 'Experimental', 'Film', 'Street Photography', 'Textures & Patterns', 'Fashion & Beauty',
  'Health & Wellness', 'Animals', 'Food & Drink', 'People', 'Spirituality', 'Business & Work', 'Sports', 'Current Events']

const navScroll = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (navScroll.value) {
    navScroll.value.scrollBy({
      left: -300, 
      behavior: "smooth"
    });
  }
};

const scrollRight = () => {
  if (navScroll.value) {
    navScroll.value.scrollBy({
      left: 300, 
      behavior: "smooth"
    });
  }
};

</script>


<template>
  <div class="home-link items-center">
    <div class="w-full px-[20px] flex items-center gap-[24px] border-b border-solid border-[#d1d1d1]">
      <div class="h-[56px] flex  items-center gap-[24px] text-sm text-[#767676]">
        <span class="hover:text-black hover:cursor-pointer">Photos</span>
        <span class="hover:text-black hover:cursor-pointer">Illustrations</span>
        <span class="hover:text-black hover:cursor-pointer">Unsplash+</span>
      </div>
      <div class="h-[32px] w-[1px] bg-[#d1d1d1]">

      </div>
      <div class="h-[56px] flex items-center  text-sm text-[#767676] overflow-hidden">
        <button @click="scrollLeft" class=" h-full z-10 bg-white bg-opacity-80 hover:bg-opacity-100 px-2 ">
          <img src="/src/assets/arrow-left-01-stroke-rounded.svg" alt="arrow-left"
            class="hover:brightness-0 hover:contrast-100" />
        </button>

        <div ref="navScroll" class="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth">
          <span v-for="(link, index) in homelinkItems" :key="index"
            class="cursor-pointer text-gray-600 hover:text-black whitespace-nowrap gap-[24px]"
            @click="">
            {{ link }}
          </span>
        </div>

        <button @click="scrollRight" class="h-full z-10 bg-white bg-opacity-80 hover:bg-opacity-100 px-2">
          <img src="/src/assets/arrow-right-01-stroke-rounded.svg" alt="arrow-right"
            class="hover:brightness-0 hover:contrast-100" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ẩn thanh cuộn trong các trình duyệt */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>