<script setup lang="ts">
import { ref } from 'vue'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu'
const activeTab = ref('activity')
</script>
<template>
    <div class="relative">
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" class=" px-[4px] py-[3px] hover:cursor-pointer hover:bg-white border-none">
                  <div class ="hover:filter hover:brightness-0 hover:contrast-100">
                      <img src="/src/assets/notification-02-stroke-rounded.svg" alt="avatar"  />
                  </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="mt-2 absolute right-0 origin-top-right flex flex-col gap-2 w-[360px]">
            <div class="flex border-b border-gray-200">
              <button
                class="flex-1 p-[14px] pb-[12px] text-center text-sm font-medium hover:text-black"
                :class="{'border-b-2 border-black': activeTab === 'activity'}"
                @click="activeTab = 'activity'"
              >
                Activity
              </button>
              <button
                class="flex-1 p-[14px] pb-[12px]  text-center text-sm font-medium hover:text-black"
                :class="{'border-b-2 border-black': activeTab === 'highlights'}"
                @click="activeTab = 'highlights'"
              >
                Highlights
              </button>
            </div>
            <div class="p-4 text-gray-500 text-center text-sm px-[30px] py-[60px]">
              <p v-if="activeTab === 'activity'">Activity associated with your account will appear here.</p>
              <p v-if="activeTab === 'highlights'">Highlights will appear here.</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  </template>
