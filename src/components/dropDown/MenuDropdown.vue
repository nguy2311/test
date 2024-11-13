<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuCompanyItems = [
  "About",
  "History",
  "Join the team",
  "Blog",
  "Press",
  "Contact us",
  "Help Center",
];
const menuCompanyUrls = [
  "/about",
  "/history",
  "/join",
  "/blog",
  "/press",
  "/contact",
  "/help",
];
const menuProductItems = [
  "Devlopers/API",
  "Unsplash Dataset",
  " Unsplash for IOS",
  "Apps & Plugins",
  "Unsplash Studio",
];
const menuProductUrls = ["/", "/", " /", "/", "/"];
const menuCommunityItems = [
  "Become a Contributor",
  "Topics",
  "Collections",
  "Trend",
  "Unsplash Awards",
  "Stats",
];
const menuCommunityUrls = ["/", "/", "/", "/", "/", "/"];
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
          <div class="hover:filter hover:brightness-0 hover:contrast-100">
            <img src="/src/assets/menu-01-stroke-rounded.svg" alt="avatar" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        class="mt-2 absolute right-0 origin-top-right flex flex-col gap-2 w-[660px]"
      >
        <div class="content-body flex gap-2 p-[32px] pt-[24px]">
          <div class="flex-1 w-[40px]">
            <DropdownMenuGroup>
              <DropdownMenuLabel class="flex items-center gap-[12px]">
                <img
                  src="/src/assets/building-03-stroke-rounded.svg"
                  class="w-[24px] h-[24px mr-[8px]"
                />
                Company
              </DropdownMenuLabel>
              <div
                class="pl-[46px] hover-bg-white hover:cursor-pointer text-[#767676]"
              >
                <DropdownMenuItem
                  class="hover:!bg-white hover:cursor-pointer"
                  v-for="(item, index) in menuCompanyItems"
                  :key="index"
                  @click="navigateTo(menuCompanyUrls[index])"
                >
                  <span>{{ item }}</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuGroup>
          </div>
          <div class="flex-1 w-[40px]">
            <DropdownMenuGroup>
              <DropdownMenuLabel class="flex items-center gap-[12px]">
                <img
                  src="/src/assets/game-controller-03-stroke-rounded.svg"
                  class="w-[24px] h-[24px mr-[8px]"
                />
                Product
              </DropdownMenuLabel>
              <div
                class="pl-[46px] hover-bg-white hover:cursor-pointer text-[#767676]"
              >
                <DropdownMenuItem
                  class="hover:!bg-white hover:cursor-pointer"
                  v-for="(item, index) in menuProductItems"
                  :key="index"
                  @click="navigateTo(menuProductUrls[index])"
                >
                  <span>{{ item }}</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuGroup>
          </div>
          <div class="flex-1 w-[40px]">
            <DropdownMenuGroup>
              <DropdownMenuLabel class="flex items-center gap-[12px]">
                <img
                  src="/src/assets/twitter-stroke-rounded.svg"
                  class="w-[24px] h-[24px mr-[8px]"
                />
                Community
              </DropdownMenuLabel>
              <div class="pl-[46px] text-[#767676]">
                <DropdownMenuItem
                  class="hover:!bg-white hover:cursor-pointer"
                  v-for="(item, index) in menuCommunityItems"
                  :key="index"
                  @click="navigateTo(menuCommunityUrls[index])"
                >
                  <span>{{ item }}</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuGroup>
          </div>
        </div>

        <div class="content-footer border-t border-t-solid">
          <span class="DropdownFooter">License</span>
          <span class="DropdownFooter">Privacy Policy</span>
          <span class="DropdownFooter">Terms</span>
          <span class="DropdownFooter">Security</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style>
.content-footer {
  @apply px-[32px] py-[16px] flex gap-[24px] text-[#767676] text-sm;
}
.DropdownFooter {
  @apply hover:text-black hover:cursor-pointer;
}
</style>
