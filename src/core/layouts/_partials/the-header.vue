<template>
  <header class="bg-white">
    <nav class="flex items-center justify-between p-6 lg:px-8 shadow-sm" aria-label="Global">
      <h1 class="flex lg:flex-1 text-3xl font-bold">
        <router-link :to="{ name: ROUTE_NAMES.HOME_ROUTE_NAMES.ENTRIES }" class="-m-1.5 p-1.5">
          Notes
        </router-link>
      </h1>
      <div class="flex flex-row justify-end items-center" id="teleport-header-actions"></div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ROUTE_NAMES } from '@/core/router';
</script>
