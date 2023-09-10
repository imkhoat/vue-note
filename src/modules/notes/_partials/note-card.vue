<template>
  <b-card class="relative h-48" :style="{ backgroundColor: item.color }" :title="item.title">
    <b-button
      class="absolute top-3 right-3 !ring-white hover:!bg-transparent"
      size="xs"
      rounded
      square
      variant="secondary"
      @click="onRemoveNote"
    >
      <i-close class="w-2.5 h-2.5 text-gray-200"></i-close>
    </b-button>
    <template #footer>
      <div class="text-sm text-right">{{ item.createDate }}</div>
    </template>
  </b-card>
</template>
<script lang="ts" setup>
import BButton from '@/core/components/bases/b-button/b-button.vue';
import BCard from '@/core/components/bases/b-card/b-card.vue';
import IClose from '@/core/components/icons/i-close.vue';
import type { Note } from '@/modules/notes/types/note';

// props & emits
defineProps<{
  item: Note;
}>();
const emits = defineEmits(['remove']);

// methods
function onRemoveNote() {
  emits('remove');
}
</script>
