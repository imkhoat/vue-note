<template>
  <div class="entries-page">
    <b-container>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <note-card
          v-for="(item, index) in notes"
          :key="index + '__note-item'"
          :item="item"
          class="w-full"
          @remove="onRemoveNote(index)"
        ></note-card>
      </div>
    </b-container>
    <new-note-card @create="onCreateNewNote"></new-note-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Note } from '@/modules/notes/types/note';
import NoteCard from '@/modules/notes/_partials/note-card.vue';
import BContainer from '@/core/components/bases/b-container/b-container.vue';
import dayjs from 'dayjs';
import NewNoteCard from '@/modules/notes/_partials/new-note-card.vue';
const notes = ref<Note[]>([
  {
    title: 'Title 01',
    uuid: 'ogogsomgomeg',
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  },
  {
    title: 'Title 01',
    uuid: 'ogogsomgomeg',
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  },
  {
    title: 'Title 01',
    uuid: 'ogogsomgomeg',
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  },
  {
    title: 'Title 01',
    uuid: 'ogogsomgomeg',
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  },
  {
    title: 'Title 01',
    uuid: 'ogogsomgomeg',
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  },
]);

function onCreateNewNote(title: string) {
  const newNote: Note = {
    uuid: _generateUUID(),
    title: title,
    createDate: _formatedCurentDate(),
    color: _generateColor(),
  };
  notes.value.push(newNote);
}

function onRemoveNote(index: number) {
  notes.value.splice(index, 1);
}

function _generateColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function _generateUUID() {
  var d = new Date().getTime();
  var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function _formatedCurentDate() {
  return dayjs().format('ddd MMM D YYYY');
}
</script>
