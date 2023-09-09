import { createRouter, createWebHistory } from 'vue-router';
import { noteRoutes, NOTE_ROUTE_NAMES } from '@/modules/notes/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...noteRoutes],
});

export const ROUTE_NAMES = {
  NOTE_ROUTE_NAMES,
};
export default router;
