<template>
  <div class="entries-page p-10">
    <div class="flex flex-row flex-wrap justify-start items-start gap-4">
      <note-card
        v-for="(item, index) in notes"
        :key="index + '__note-item'"
        :item="item"
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      ></note-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Note } from '@/modules/notes/types/note';
import NoteCard from '@/modules/notes/_partials/note-card.vue';

const notes = ref<Note[]>([
  { title: 'Title 01', uuid: 'ogogsomgomeg', createDate: '13 Jun, 2023' },
  { title: 'Title 01', uuid: 'ogogsomgomeg', createDate: '13 Jun, 2023' },
  { title: 'Title 01', uuid: 'ogogsomgomeg', createDate: '13 Jun, 2023' },
  { title: 'Title 01', uuid: 'ogogsomgomeg', createDate: '13 Jun, 2023' },
  { title: 'Title 01', uuid: 'ogogsomgomeg', createDate: '13 Jun, 2023' },
]);
</script>
