<template>
  <div
    class="flex flex-col justify-center items-center gap-y-4 w-full h-48 m-auto bg-gray-50 border-dashed border-2 border-gray-100 rounded-xl text-gray-300"
  >
    <i-archive class="w-12 h-12"></i-archive>
    <p>
      No notes found, click
      <b-button size="xs" rounded square>
        <i-plus class="w-2 h-2"></i-plus>
      </b-button>
      to create new one!
    </p>
  </div>
</template>
<script lang="ts" setup>
import IPlus from '@/core/components/icons/i-plus.vue';
import IArchive from '@/core/components/icons/i-archive.vue';
import BButton from '@/core/components/bases/b-button/b-button.vue';
</script>
