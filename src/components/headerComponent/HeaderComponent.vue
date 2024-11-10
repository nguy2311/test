<template>
  <header class="header-container flex w-full flex-col overflow-hidden">
    <div class="h-[62px] flex gap-[16px] px-5 py-3">
      <div class="flex items-center m-w-32px">
        <img
          src="/src/assets/development.png"
          alt="logo"
          class="h-auto w-[32px]"
        />
      </div>
      <div class="w-3/4">
        <SearchComponent @search="onSearch" borderRadius="rounded-3xl" />
      </div>
      <div class="flex items-center w-[130px]">
        <a
          class="text-black hover:cursor-pointer min-w-[120px] font-medium text-sm px-[10px]"
        >
          Get Unsplash+
        </a>
      </div>
      <div class="flex items-center m-w-[130px]">
        <Button
          class="cursor-pointer px-[11px] h-[32px] bg-white text-[#767676] border border-[#d1d1d1] hover:bg-white hover:border-black hover:text-black"
        >
          Submit an image
        </Button>
      </div>
      <div class="flex items-center min-w-[32px]">
        <NotifyDropdown />
      </div>
      <div class="flex items-center min-w-[32px]">
        <UserDropdown />
      </div>
      <div class="flex items-center min-w-[46px]">
        <MenuDropdown />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchComponent from "@/components/searchComponent/SearchComponent.vue";
import { Button } from "@/components/ui/button";
import MenuDropdown from "@/components/dropDown/MenuDropdown.vue";
import UserDropdown from "@/components/dropDown/UserDropdown.vue";
import NotifyDropdown from "@/components/dropDown/NotifyDropdown.vue";

import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "search", value: string): void;
}>();

const onSearch = (value: string) => {
  emit("search", value);
};
</script>
