
<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const homelinkItems = ['3D Renders', 'Wallpapers', 'Nature', 'Archival', 'Travel', 'Architecture & Interiors', 
  'Business & Work', 'Experimental', 'Film', 'Street Photography', 'Textures & Patterns', 'Fashion & Beauty',
  'Health & Wellness', 'Animals', 'Food & Drink', 'People', 'Spirituality', 'Business & Work', 'Sports', 'Current Events']

const homelinkUrls= ['/topic/3d-render', '/topic/wallpapers', '/topic/nature', '/topic/archival', '/topic/travel', '/topic/architecture-interiors', 
  '/topic/business-work', '/topic/experimental', '/topic/film', '/topic/street-photography', '/topic/textures-patterns', 
  '/topic/fashion-beauty', '/topic/health-wellness', '/topic/animals', '/topic/food-drink', '/topic/people', '/topic/spirituality', 
  '/topic/business-work', '/topic/sports', '/topic/current-events']

const navScroll = ref<HTMLElement | null>(null);
const type = ref('photo')

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

const emit = defineEmits<{
  (e: 'choose', value: string): void;
}>();

const onChoose = (typeChoosen: string) => {
  type.value = typeChoosen;
  emit('choose', type.value); 
  switch (type.value) {
    case 'photo':
      navigateTo('/');
      break;
    case 'illustration':
      navigateTo('/illustration');
      break;
    default:
      navigateTo('/topic/' + type.value);
  }
};

const router = useRouter()

function navigateTo(url: string) {
  router.push(url)
}

</script>


<template>
  <div class="home-link items-center">
    <div class="w-full px-[20px] flex items-center gap-[24px] border-b border-solid border-[#d1d1d1]">
      <div class="h-[56px] flex  items-center gap-[24px] text-sm text-[#767676]">
        <span class="hover:text-black hover:cursor-pointer h-[56px] flex items-center"
          :class="{ 'shadow-active text-[#111]': type === 'photo' }"
          @click="onChoose('photo')">
          Photos
        </span>
        <span class="hover:text-black hover:cursor-pointer h-[56px] flex items-center"
          :class="{ 'shadow-active text-[#111]': type === 'illustration' }"
          @click="onChoose('illustration')">
          Illustrations
        </span>
        <span class="hover:text-black hover:cursor-pointer h-[56px] flex items-center">Unsplash+</span>
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
            class="cursor-pointer text-gray-600 h-[56px] flex items-center hover:text-black whitespace-nowrap gap-[24px]"
            :class="{ 'shadow-active text-[#111]': type === homelinkUrls[index] }"
            @click="onChoose(homelinkUrls[index])">
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.shadow-active {
  box-shadow: inset 0 -2px #111;
}
</style>