<template>
  <div class="flex flex-row p-2">
    <div class="flex-grow"></div>
    <div class="flex flex-row gap-4">
      <div class="text-text-secondary">Copyright © 2024</div>
      <div class="text-text-secondary">|</div>
      <div class="text-text-secondary">{{ t("company") }}</div>
      <div class="text-text-secondary">|</div>
      <div class="text-text-secondary">Hotline: (+84) 24 7300 6066</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style scoped></style>
