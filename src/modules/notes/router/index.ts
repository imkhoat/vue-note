import type { RouteRecordRaw } from 'vue-router';

export const NOTE_ROUTE_NAMES = {
  ENTRIES: 'note-entries',
};

export const noteRoutes: RouteRecordRaw[] = [
  {
    name: NOTE_ROUTE_NAMES.ENTRIES,
    path: '/notes',
    component: () => import('@/modules/notes/pages/entries-page.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
];
