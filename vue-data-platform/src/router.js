// src/router.js (or src/router/index.js)
import { createRouter, createWebHistory } from 'vue-router'

import homepage from './components/HomePage.vue'
import developer from './components/DeveloperPage.vue'
import manager from './components/ManagerPage.vue'
import user from './components/UserPage.vue'


const routes = [
    {
      path: '/',
      name: 'homepage',
      component: homepage
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