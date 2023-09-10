<template>
  <div class="flex flex-row justify-between items-center">
    <b-input size="sm" v-model="search">
      <template #suffix>
        <i-search></i-search>
      </template>
    </b-input>
  </div>
</template>
<script lang="ts" setup>
import BInput from '@/core/components/bases/b-input/b-input.vue';
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
</script>
