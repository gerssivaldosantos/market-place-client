import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }]
  },
  {
    path: '/create-account',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/CreateAccountPage.vue') }]
  },
  {
    path: '/rescue-password',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/RescuePasswordPage.vue') }]
  },
  {
    path: '/my-products',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MyProducts.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
