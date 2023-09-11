<template>
  <div class="default-layout font-sans bg-gray-50 w-screen h-screen">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import TheHeader from '@/core/layouts/_partials/the-header.vue';
</script>
