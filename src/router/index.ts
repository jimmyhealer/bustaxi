import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layouts/Layout.vue'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Reservation from '../views/Reservation.vue'
import Login from '../views/Login.vue'

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
          },
        },
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
          meta: {
            title: '我的預約',
          },
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: {
            title: '登入帳號',
          },
        },
      ],
    },
  ],
})

export default router
