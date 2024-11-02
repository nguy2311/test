<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import HeaderComponent from "@/components/ui/HeaderComponent.vue";
import { useRouter } from "vue-router";
import HomeLinkComponent from "@/components/ui/HomeLinkComponent.vue";



const router = useRouter();
console.log(router.currentRoute.value.fullPath);
</script>

<template>
  <div class=" w-full ">
    <header class="flex w-full flex-col overflow-hidden">
      <HeaderComponent></HeaderComponent>
    </header>
    <div class="flex w-full flex-col">
      <HomeLinkComponent></HomeLinkComponent>
    </div>
    
    
  </div>
  <Toaster />
</template>
