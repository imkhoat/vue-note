import { computed, reactive, ref } from 'vue';
import dayjs from 'dayjs';
import type { Note } from '../types/note';
import { useStorage } from '@vueuse/core';

export function useNote() {
  // data
  const _notes = useStorage('vue3-notes__notes', [] as Note[]);
  const filter = reactive({
    search: '',
    sort: 'DATE',
    page: 1,
    pageSize: 10,
  });

  // computed
  const filtedNotes = computed(() => {
    const items = _notes.value.filter((item: Note) => {
      return item.title.toLowerCase().includes(filter.search.toLowerCase());
    });
    if (filter.sort === 'DATE') {
      return items.sort((a: Note, b: Note) => {
        return dayjs(a.createDate).isBefore(dayjs(b.createDate)) ? 0 : 1;
      });
    } else if (filter.sort === 'NAME') {
      return items.sort((a: Note, b: Note) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      return items;
    }
  });

  const total = computed(() => {
    return _notes.value?.length;
  });

  const totalFiltedNotes = computed(() => {
    return filtedNotes.value?.length;
  });
  const paginationNotes = computed(() => {
    const firstIndex = (filter.page - 1) * filter.pageSize;
    const lastIndex = filter.page * filter.pageSize;
    return filtedNotes.value.slice(firstIndex, lastIndex);
  });

  // methods
  function _generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function _generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
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
    const date = dayjs();
    return {
      date: date.toDate(),
      formatedDate: date.format('ddd MMM D YYYY hh:mm'),
    };
  }

  function handleCreateNewNote(title: string) {
    const { date: createDate, formatedDate: formatedCreateDate } = _formatedCurentDate();
    const newNote: Note = {
      uuid: _generateUUID(),
      title: title,
      createDate,
      formatedCreateDate,
      color: _generateColor(),
    };
    _notes.value.push(newNote);
  }

  function handleRemoveNote(index: number) {
    _notes.value.splice(index, 1);
  }

  return {
    filter,
    total,
    filtedNotes,
    paginationNotes,
    totalFiltedNotes,
    handleCreateNewNote,
    handleRemoveNote,
  };
}
