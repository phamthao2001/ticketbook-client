import LayoutView from '@/layouts/LayoutView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: HomeView,
        name: 'home',
      },
      {
        path: 'film/:id',
        component: () => import('@/views/FilmView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
