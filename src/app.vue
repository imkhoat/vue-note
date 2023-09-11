<script setup lang="ts">
import BCard from '@/core/components/bases/b-card/b-card.vue';
import layouts from '@/core/layouts/layout';
import { shallowRef } from 'vue';
import router from './core/router';

const layout = shallowRef('div');

router.afterEach((to) => {
  layout.value = layouts[to?.meta?.layout] || 'div';
});
</script>

<template>
  <component :is="layout"></component>
</template>
