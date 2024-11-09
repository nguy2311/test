<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import HeaderComponent from "@/components/headerComponent/HeaderComponent.vue";
import { useRouter } from "vue-router";
import HomeLinkComponent from "@/components/homelinkComponent/HomeLinkComponent.vue";
import { ref } from 'vue';

const searchQuery = ref(''); 
const type = ref('photo')

const handleSearch = (value: string) => {
  searchQuery.value = value; 
};

const handleChoose = (value: string) => {
  type.value = value;
}

const router = useRouter();
console.log(router.currentRoute.value.fullPath);
</script>

<template>
  <div class=" w-full ">
    <header class="flex w-full flex-col overflow-hidden">
      <HeaderComponent @search="handleSearch"></HeaderComponent>
    </header>
    <div class="flex w-full flex-col">
      <HomeLinkComponent @choose="handleChoose"></HomeLinkComponent>
    </div>

    <div class="flex w-full flex-col">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :search-query="searchQuery" />
      </RouterView>
    </div>


    
    
  </div>
  <Toaster />
</template>
