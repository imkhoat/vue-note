<template>
  <div class="entries-page">
    <b-container>
      <div
        v-if="notes.length > 0"
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
      <empty-card v-else> </empty-card>
    </b-container>
    <new-note-form @create="onCreateNewNote"></new-note-form>
  </div>
</template>
<script lang="ts" setup>
import NoteCard from '@/modules/notes/_partials/note-card.vue';
import BContainer from '@/core/components/bases/b-container/b-container.vue';
import NewNoteForm from '@/modules/notes/_partials/new-note-form.vue';
import EmptyCard from '@/modules/notes/_partials/empty-card.vue';
import { useNote } from '@/modules/notes/composable/useNote';

const { notes, handleCreateNewNote, handleRemoveNote } = useNote();

function onCreateNewNote(title: string) {
  handleCreateNewNote(title);
}

function onRemoveNote(index: number) {
  handleRemoveNote(index);
}
</script>
