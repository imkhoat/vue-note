import { ref } from 'vue';
import dayjs from 'dayjs';
import type { Note } from '../types/note';

export function useNote() {
  const notes = ref<Note[]>([]);

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
    return dayjs().format('ddd MMM D YYYY');
  }

  function handleCreateNewNote(title: string) {
    const newNote: Note = {
      uuid: _generateUUID(),
      title: title,
      createDate: _formatedCurentDate(),
      color: _generateColor(),
    };
    notes.value.push(newNote);
  }

  function handleRemoveNote(index: number) {
    notes.value.splice(index, 1);
  }

  return { notes, handleCreateNewNote, handleRemoveNote };
}
