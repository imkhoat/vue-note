import { createRouter, createWebHistory } from 'vue-router';
import { noteRoutes, NOTE_ROUTE_NAMES } from '@/modules/notes/router';
import { homeRoutes, HOME_ROUTE_NAMES } from '@/modules/home/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...noteRoutes, ...homeRoutes],
});

export const ROUTE_NAMES = {
  NOTE_ROUTE_NAMES,
  HOME_ROUTE_NAMES,
};
export default router;
