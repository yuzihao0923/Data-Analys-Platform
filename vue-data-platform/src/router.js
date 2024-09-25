// src/router.js (or src/router/index.js)
import { createRouter, createWebHistory } from 'vue-router'

import home_page from './components/home_page.vue'
import developer from './components/developer_page.vue'
import manager from './components/manager_page.vue'
import user from './components/user_page.vue'


const routes = [
    {
      path: '/',
      name: 'homepage',
      component: home_page
    },
    {
      path: '/developer',
      name: 'Developer',
      component: developer
    },
    {
      path: '/manager',
      name: 'Manager',
      component: manager
    },
    {
      path: '/user',
      name: 'User',
      component: user
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router