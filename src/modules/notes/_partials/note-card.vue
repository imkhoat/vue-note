<template>
  <b-card :class="`relative ${noteBackgroundClass}`" :title="item.title">
    <b-button
      class="absolute top-3 right-3"
      size="xs"
      rounded
      square
      variant="secondary"
      @click="onRemoveNote"
    >
      <i-close class="w-4 h-4"></i-close>
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
import { computed } from 'vue';

const props = defineProps<{
  item: Note;
}>();
const emits = defineEmits(['remove']);
const noteBackgroundClass = computed(() => {
  return `bg-[${props.item.color}]`;
});

function onRemoveNote() {
  emits('remove');
}
</script>
