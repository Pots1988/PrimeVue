import { type RouteRecordRaw } from 'vue-router';

type AppRouteRecord = RouteRecordRaw & {
  title: string;
};

export const routes: AppRouteRecord[] = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/buttons',
    name: 'buttons',
    title: 'Buttons',
    component: () => import('../views/ButtonsView.vue'),
  },
  {
    path: '/speed-dial',
    name: 'speed-dial',
    title: 'Speed Dial',
    component: () => import('../views/SpeedDial.vue'),
  },
];
