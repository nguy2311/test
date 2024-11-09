<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import { defineProps, defineEmits, ref, nextTick } from 'vue'

const props = defineProps({
  borderRadius: {
    type: String,
    default: '', 
  }
})

const searchTerm = ref('');
const searchInput = ref<HTMLInputElement | null>(null); 

const emit = defineEmits<{
  (e: 'search', value: string): void;
}>();

const onSearch = async () => {
  emit('search', searchTerm.value);
  await nextTick(); 
  searchInput.value?.blur();
};
</script>

<template>
  <div class="relative w-full flex items-center min-w-72">
    <Input
      id="search"
      type="text"
      placeholder="Search photos and illustrations"
      @keyup.enter="onSearch" 
      v-model="searchTerm" 
      ref="searchInput"
      :class="['pl-10 bg-searchInputBackground focus:bg-white focus:border-searchInputBackground', props.borderRadius]"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2 pl-[14px]">
      <Search class="size-4 hover:cursor-pointer text-[#767676] hover:text-black transition-colors duration-200" />
    </span>
    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2 pr-[14px]">
      <img src="/src/assets/search-visual-stroke-rounded.svg" class="hover:cursor-pointer hover:filter hover:brightness-0 hover:contrast-100 transition-colors duration-200" />
    </span>
  </div>
</template>
