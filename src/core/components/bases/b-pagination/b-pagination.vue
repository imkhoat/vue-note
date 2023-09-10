<template>
  <div class="flex flex-row justify-between items-center gap-x-2">
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          :disabled="isFirstPage"
          @click="prev"
        >
          <span class="sr-only">Previous</span>
          <i-left class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          v-for="(page, index) in pageCount"
          :key="index"
          :class="{
            'bg-primary-600 text-white ring-1 ring-inset ring-primary-600 hover:bg-primary-700':
              modelValue === page,
          }"
          class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          :disabled="isLastPage"
          @click="next"
        >
          <span class="sr-only">Next</span>
          <i-right class="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
    <div class="min-w-[70px] w-fit">
      <b-input v-model="currentPageSize">
        <template #suffix
          ><span class="flex-nowrap whitespace-nowrap"> / {{ total }}</span>
        </template>
      </b-input>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ILeft from '@/core/components/icons/i-left.vue';
import IRight from '@/core/components/icons/i-right.vue';
import BInput from '@/core/components/bases/b-input/b-input.vue';
import { toValue } from '@vueuse/core';
import { computed, ref, watch } from 'vue';

// props & emits
const props = defineProps<{
  modelValue: number;
  pageSize: number;
  total: number;
}>();
const emits = defineEmits(['change', 'update:modelValue', 'update:pageSize']);

// data
const currentPage = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emits('update:modelValue', newVal);
    emits('change', newVal);
  },
});

// computed
const currentPageSize = computed({
  get() {
    return Math.max(1, props.pageSize);
  },
  set(newVal: boolean) {
    emits('update:pageSize', newVal);
  },
});
const pageCount = computed(() => {
  return Math.max(1, Math.ceil(toValue(Number(props.total)) / toValue(Number(props.pageSize))));
});
const isFirstPage = computed(() => Number(currentPage.value) === 1);
const isLastPage = computed(() => Number(currentPage.value) === pageCount.value);

// methods
function prev() {
  currentPage.value--;
}

function next() {
  currentPage.value++;
}

function changePage(page: number) {
  currentPage.value = page;
}

watch(
  () => props.total,
  () => {
    if (props.total <= Number(currentPage.value) * Number(currentPageSize.value)) {
      currentPage.value = Math.ceil(props.total / Number(currentPageSize.value));
    }
  }
);
watch(currentPageSize, () => {
  if (props.total <= Number(currentPage.value) * Number(currentPageSize.value)) {
    currentPage.value = Math.ceil(props.total / Number(currentPageSize.value));
  }
});
</script>
