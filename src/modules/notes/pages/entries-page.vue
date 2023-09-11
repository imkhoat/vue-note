<template>
  <div class="entries-page">
    <b-container>
      <div v-if="total > 0" class="flex flex-col justify-start items-stretch gap-y-4">
        <div class="entries-page__filter flex justify-end items-center w-full">
          <filter-box
            v-model="filter.search"
            v-model:sort-model-value="filter.sort"
            class="w-full sm:w-fit"
          ></filter-box>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <note-card
            v-for="(item, index) in paginationNotes"
            :key="index + '__note-item'"
            :item="item"
            class="w-full"
            @remove="onRemoveNote(index)"
          ></note-card>
        </div>
        <div class="entries-page__pagination flex justify-end items-center">
          <b-pagination
            v-model="filter.page"
            v-model:page-size="filter.pageSize"
            :total="totalFiltedNotes"
          ></b-pagination>
        </div>
      </div>
      <empty-card v-else> </empty-card>
    </b-container>
    <new-note-form @create="onCreateNewNote"></new-note-form>
  </div>
</template>
<script lang="ts" setup>
import { useNote } from '@/modules/notes/composable/useNote';
import NoteCard from '@/modules/notes/_partials/note-card.vue';
import EmptyCard from '@/modules/notes/_partials/empty-card.vue';
import FilterBox from '@/modules/notes/_partials/filter-box.vue';
import NewNoteForm from '@/modules/notes/_partials/new-note-form.vue';
import BContainer from '@/core/components/bases/b-container/b-container.vue';
import BPagination from '@/core/components/bases/b-pagination/b-pagination.vue';

const { total, filter, paginationNotes, totalFiltedNotes, handleRemoveNote, handleCreateNewNote } =
  useNote();

function onCreateNewNote(title: string) {
  handleCreateNewNote(title);
}

function onRemoveNote(index: number) {
  handleRemoveNote(index);
}
</script>
