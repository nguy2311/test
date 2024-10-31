<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<template>
  <RouterView class="bg-background-main h-full w-full" />
  
  <Toaster />
</template>