import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/members',
      name: 'members',
      // component: () => import('@/views/MembersView.vue'),
      children: [
        {
          path: '',
          name: 'membersOverview',
          component: () => import('@/views/MembersView.vue'),
        },
        {
          path: ':id',
          name: 'member',
          component: () => import('@/views/MemberView.vue'),
        },
      ],
    },
    // {
    //   path: '/members/:id',
    //   name: 'member',
    //   component: () => import('@/views/MemberView.vue'),
    // },
  ],
});

export default router;
