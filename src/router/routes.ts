import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'products', component: () => import('pages/MyProducts.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'access', component: () => import('pages/LoginPage.vue') },
      { path: 'create', component: () => import('pages/CreateAccountPage.vue') },
      { path: 'rescue', component: () => import('pages/RescuePasswordPage.vue') },
      { path: 'change-password/:emailToken', component: () => import('pages/ChangePasswordPage.vue') },
      { path: 'congratulations', component: () => import('pages/CongratulationsPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
