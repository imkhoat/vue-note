<script setup lang="ts">
import BCard from '@/core/components/bases/b-card/b-card.vue';
</script>

<template>
  <div class="p-8 flex justify-center items-center">
    <b-card class="bg-gray-100"> Hello boy </b-card>
  </div>
  <div class="p-4">
    <p>
      Please design a user-friendly, single-page note-taking application using Vue 3 Composition
      API. The application should allow users to easily add and remove notes, and the notes should
      be displayed on the main page in a responsive format.
    </p>
    <p>Video: https://rwazi-public.s3.amazonaws.com/interview/vue-notes-interview-project.webm</p>
    <p>Screenshot: https://rwazi-public.s3.amazonaws.com/interview/rwazi-vue-notes-interview.png</p>

    <p class="font-bold p-4">The following requirements should be met:</p>
    <p class="py-2 p-6">
      The layout of the application must be responsive to ensure optimal user experience.
    </p>
    <p class="py-2 p-6">Users should be able to seamlessly add notes to the application.</p>
    <p class="py-2 p-6">The user should be able to sort by date create the notes.</p>
    <p class="py-2 p-6">The user should be able to search for text in the notes.</p>
    <p class="py-2 p-6">If the number of notes is high, pagination should be implemented.</p>
    <p class="py-2 p-6">
      The application should allow users to effortlessly remove notes when necessary.
    </p>
    <p class="py-2 p-6">
      To add an element of visual interest, the background of the application should be randomly
      generated.
    </p>
    <p class="py-2 p-6">
      Finally, each note element should feature a date stamp at the bottom to help users keep track
      of when they made each note.
    </p>
    <p class="py-2 p-6">
      Please ensure that you use Vue 3 Composition API when building the application.
    </p>
  </div>
</template>
