<template>
  <div class="flex flex-row justify-end items-center gap-x-1">
    <b-input size="sm" v-model="search" placeholder="Search..." class="w-1/2 sm:w-48">
      <template #suffix>
        <i-search></i-search>
      </template>
    </b-input>
    <b-select
      v-model="sort"
      size="sm"
      :items="sortOptions"
      placeholder="Sort by..."
      class="w-1/2 sm:w-48"
    ></b-select>
  </div>
</template>
<script lang="ts" setup>
import BInput from '@/core/components/bases/b-input/b-input.vue';
import BSelect from '@/core/components/bases/b-select/b-select.vue';
import ISearch from '@/core/components/icons/i-search.vue';
import { useDebounceFn } from '@vueuse/core';
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  sortModelValue: {
    type: String,
    default: '',
  },
});
const debouncedFn = useDebounceFn((newVal) => {
  emit('update:modelValue', newVal);
}, 500);

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'update:sortModelValue', value: string): void;
}>();

const search = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: string) {
    debouncedFn(newVal);
  },
});

const sort = computed({
  get() {
    return props.sortModelValue;
  },
  set(newVal: string) {
    console.log('update:sortModelValue', newVal);
    emit('update:sortModelValue', newVal);
  },
});

const sortOptions = computed(() => {
  return [
    { label: 'By date', value: 'DATE' },
    { label: 'By name', value: 'NAME' },
  ];
});
</script>
