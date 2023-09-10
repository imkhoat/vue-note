<template>
  <div class="b-card shadow sm:rounded-lg">
    <div v-if="$slots.header || title || subTitle" class="px-4 py-5 sm:px-6">
      <slot name="header">
        <h3 v-if="title" class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h3>
        <div v-if="subTitle" class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            {{ subTitle }}
          </p>
        </div>
      </slot>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-4 py-4 sm:px-6">
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: {
    type: string | null;
    default: null;
  };
  subTitle?: {
    type: string | null;
    default: null;
  };
}>();
</script>
