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
    component: () => import('../views/SpeedDialView.vue'),
  },
  {
    path: '/split-button',
    name: 'split-button',
    title: 'Split Button',
    component: () => import('../views/SplitButtonView.vue'),
  },
  {
    path: '/data-table',
    name: 'data-table',
    title: 'Data Table',
    component: () => import('../views/DataTableView.vue'),
  },
  {
    path: '/stepper',
    name: 'stepper',
    title: 'Stepper',
    component: () => import('../views/StepperView.vue'),
  },
  {
    path: '/drawer',
    name: 'drawer',
    title: 'Drawer',
    component: () => import('../views/DrawerView.vue'),
  },
];
