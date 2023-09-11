<template>
  <div
    class="flex flex-col justify-center items-center gap-y-4 w-full h-48 m-auto bg-gray-50 border-dashed border-2 border-gray-100 rounded-xl text-gray-300"
  >
    <i-archive class="!w-16 !h-16"></i-archive>
    <p class="text-center">No notes found</p>
    <p class="text-center">
      Click
      <b-button size="xs" rounded square>
        <i-plus class="w-[16px] h-[16px]"></i-plus>
      </b-button>
      or press
      <b-button size="xs" square variant="secondary" class="text-sm">Ctr/Control</b-button> key to
      create new one!
    </p>
  </div>
</template>
<script lang="ts" setup>
import IPlus from '@/core/components/icons/i-plus.vue';
import IArchive from '@/core/components/icons/i-archive.vue';
import BButton from '@/core/components/bases/b-button/b-button.vue';
</script>
