<template>
  <div class="new-note-form">
    <teleport v-if="isMounted" to="#teleport-header-actions">
      <b-button rounded square @click="onToggleNewDialog">
        <i-plus></i-plus>
      </b-button>
    </teleport>
    <b-dialog v-model="isOpenNewModal">
      <b-card
        title="New Note"
        sub-title="Please fill you notes title and click Add a Note"
        class="w-[500px]"
      >
        <b-input placeholder="Type here..." v-model="title"></b-input>
        <template #footer>
          <div class="flex justify-end items-center gap-x-2">
            <b-button @click="onCreateNewNote">Add a Note</b-button>
            <b-button variant="secondary" @click="onToggleNewDialog">Cancel</b-button>
          </div>
        </template>
      </b-card>
    </b-dialog>
  </div>
</template>
<script setup lang="ts">
import BButton from '@/core/components/bases/b-button/b-button.vue';
import BCard from '@/core/components/bases/b-card/b-card.vue';
import BInput from '@/core/components/bases/b-input/b-input.vue';
import BDialog from '@/core/components/bases/b-dialog/b-dialog.vue';
import IPlus from '@/core/components/icons/i-plus.vue';
import { onMounted, reactive, ref } from 'vue';

const emits = defineEmits(['create']);

const isMounted = ref(false);
const isOpenNewModal = ref(false);
const title = ref('');

function onToggleNewDialog() {
  isOpenNewModal.value = !isOpenNewModal.value;
}

function onCreateNewNote() {
  emits('create', title.value);
  onToggleNewDialog();
}

onMounted(() => {
  isMounted.value = true;
});
</script>
