// src/router.js (or src/router/index.js)
import { createRouter, createWebHistory } from 'vue-router'

import home_page from './components/home_page.vue'
import Developer from './components/Developer.vue'
import Manager from './components/Manager.vue'
import User from './components/User.vue'

const routes = [
    {
      path: '/',
      name: 'homepage',
      component: home_page
    },
    {
      path: '/developer',
      name: 'Developer',
      component: Developer
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router