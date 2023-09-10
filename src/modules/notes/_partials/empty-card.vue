<template>
  <div
    class="flex flex-col justify-center items-center gap-y-4 w-full max-w-3xl h-48 m-auto bg-gray-50 border-dashed border-2 border-gray-100 rounded-xl text-gray-300"
  >
    <i-archive class="w-12 h-12"></i-archive>
    <p>No notes found, click <span class="text-primary-500">Add</span> to create new one!</p>
  </div>
</template>
<script lang="ts" setup>
import IArchive from '@/core/components/icons/i-archive.vue';
</script>
