export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard.vue')
      },
      {
        
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'queue',
        component: () => import('@/pages/queue.vue'),
      },
      {
        path: 'menu',
        component: () => import('@/pages/menu.vue'),
      },
      {
        path: 'income',
        component: () => import('@/pages/income.vue'),
      },
      {
        path: 'expend',
        component: () => import('@/pages/expend.vue'),
      },
       {
        path: 'stock',
        component: () => import('@/pages/stock.vue'),
      },
      {
        path: 'transaction',
        component: () => import('@/pages/transaction.vue'),
      },
      {
        path: 'users',
        component: () => import('@/pages/users.vue'),
      },
      {
        path: 'setting',
        component: () => import('@/pages/setting.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
