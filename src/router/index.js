import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import authRouter from '@/modules/auth/router'
import daybookRouter from '@/modules/daybook/router'
import errorRouter from '@/modules/error/router'

import { authGuard } from '@/modules/auth/guards/auth-guard'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/daybook',
    beforeEnter: [authGuard],
    ...daybookRouter
  },
  {
    path: '/error',
    ...errorRouter
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'error-404' }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
