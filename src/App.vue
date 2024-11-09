<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import DefaultLayout from "./components/DefaultLayout.vue";
</script>

<template>
  <div class="bg-background-main h-full w-full">
    <DefaultLayout></DefaultLayout>
  </div>
  
  <Toaster />
</template>