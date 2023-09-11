<template>
  <div class="home-page w-screen h-screen flex justify-center items-center">
    <router-link :to="{ name: ROUTE_NAMES.NOTE_ROUTE_NAMES.ENTRIES }">
      <b-button size="lg">
        <template #prefix>
          <i-note></i-note>
        </template>
        Try Note modules
      </b-button>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { ROUTE_NAMES } from '@/core/router';
import BButton from '@/core/components/bases/b-button/b-button.vue';
import INote from '@/core/components/icons/i-note.vue';
</script>
