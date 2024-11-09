<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
  (e: 'enter'): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const inputRef = ref<HTMLInputElement | null>(null);

const onKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    emits('enter');
    inputRef.value?.blur(); 
  }
};
</script>

<template>
  <input
    ref="inputRef" 
    v-model="modelValue"
    :class="cn('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    @keyup="onKeyUp"
  />
</template>
