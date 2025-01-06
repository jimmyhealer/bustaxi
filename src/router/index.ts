import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layouts/Layout.vue'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Reservation from '../views/Reservation.vue'
import { useUserStore } from '@/stores/userStore'
import { ElMessage } from 'element-plus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'map',
          name: 'map',
          component: Map,
          meta: {
            title: '地圖',
            requiresAuth: true,
          },
        },
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
          meta: {
            title: '我的預約',
            requiresAuth: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userStore.isAuthenticated) {
      ElMessage.error('請先登入')
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
