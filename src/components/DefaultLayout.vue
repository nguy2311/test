<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import HeaderComponent from "@/components/ui/HeaderComponent.vue";
import { useRouter } from "vue-router";



const router = useRouter();
console.log(router.currentRoute.value.fullPath);
</script>

<template>
  <div class=" w-full ">
    <header class="flex w-full flex-col overflow-hidden">
      <HeaderComponent></HeaderComponent>
    </header>
    
  </div>
  <Toaster />
</template>
