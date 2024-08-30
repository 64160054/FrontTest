import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: HomeView,
        header: () => import('@/headers/MainHeader.vue'),
      },
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/AboutView.vue'),
        header: () => import('@/headers/MainHeader.vue'),
      },
      meta: {
        layout: 'FullLayout'
      }
    },
    {
      path: '/',
      name: 'Employee',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/employee/EmployeeView.vue'),
      },
      meta: {
        layout: 'MainLayout'
      }
    }
  ]
})

export default router
