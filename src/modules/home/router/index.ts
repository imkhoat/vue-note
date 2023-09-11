import type { RouteRecordRaw } from 'vue-router';

export const HOME_ROUTE_NAMES = {
  ENTRIES: 'home-entries',
};

export const homeRoutes: RouteRecordRaw[] = [
  {
    name: HOME_ROUTE_NAMES.ENTRIES,
    path: '/',
    component: () => import('@/modules/home/pages/entries-page.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
];
