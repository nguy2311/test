<template>
    <div class="h-[62px] flex gap-[16px] px-5 py-3">
        <div class="flex items-center m-w-32px"> 
            <img src="/src/assets/development.png" alt="logo" class="h-auto w-[32px]" />
        </div>
        <div class ="w-3/4">
            <InputSearch />
        </div>
        <div class="flex items-center w-[130px]">
            <a class=" text-black hover:cursor-pointer min-w-[120px] font-medium text-sm px-[10px]">
                Get Unsplash+
            </a>
        </div>
        <div class="flex items-center m-w-[130px]">
            <Button class="cursor-pointer px-[11px] h-[32px] bg-white text-[#767676] border border-[#d1d1d1] hover:bg-white hover:border-black hover:text-black">
                Submit an image
            </Button>
        </div>
        <div class="flex items-center w-[32px]">
            <button class=" px-[4px] py-[3px] hover:cursor-pointer hover:filter hover:brightness-0 hover:contrast-100" >
                <img src="/src/assets/notification-02-stroke-rounded.svg" alt="logo"  />
            </button>
            
        </div>
        <div class="flex items-center min-w-[32px]">
            <button>
                <img src="/src/assets/user-circle-stroke-rounded.svg" alt="avatar"  />
            </button>
        </div>
        <div class="flex items-center min-w-[46px]"> 
            <MenuDropdown />
        </div>
    </div>
</template>

<script setup lang="ts">
import InputSearch from './input/InputSearch.vue';
import { Button } from '@/components/ui/button'
import MenuDropdown from '@/components/ui/menuDropdown.vue'
</script>
