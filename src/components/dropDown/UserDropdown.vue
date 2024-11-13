<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userItems = [
  "View profile",
  "Stats",
  "Download history",
  "Account settings",
];
const userUrls = ["/", "/", "/", "/"];
const router = useRouter();

function navigateTo(url: string) {
  router.push(url);
}
</script>

<template>
  <div class="relative">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="outline"
          class="px-[4px] py-[3px] hover:cursor-pointer hover:bg-white border-none"
        >
          <img src="/src/assets/user-circle-stroke-rounded.svg" alt="avatar" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        class="mt-2 absolute right-0 origin-top-right flex flex-col gap-2 w-[210px]"
      >
        <div class="content-body flex gap-2">
          <DropdownMenuGroup
            class="flex-1 w-[40px] px-[0px] py-[0px] gap-[9px] hover-bg-white hover:cursor-pointer text-[#555]"
          >
            <DropdownMenuItem
              class="hover:cursor-pointer px-[16px] py-[8px]"
              v-for="(item, index) in userItems"
              :key="index"
              @click="navigateTo(userUrls[index])"
            >
              <span>{{ item }}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </div>

        <div class="content-footer px-[16px] py-[8px] border-t border-t-solid">
          <div class="text-[#555] text-sm">
            <span class="hover:text-black hover:cursor-pointer">Logout</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
