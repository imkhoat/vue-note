<template>
  <b-card class="relative" :title="item.title">
    <b-button class="absolute top-3 right-3" size="xs" rounded square>
      <i-plus class="w-4 h-4"></i-plus>
    </b-button>
    <template #footer>
      <span>{{ item.createDate }}</span>
    </template>
  </b-card>
</template>
<script lang="ts" setup>
import BButton from '@/core/components/bases/b-button/b-button.vue';
import BCard from '@/core/components/bases/b-card/b-card.vue';
import IPlus from '@/core/components/icons/i-plus.vue';
import type { Note } from '@/modules/notes/types/note';

defineProps<{
  item: Note;
}>();
</script>
