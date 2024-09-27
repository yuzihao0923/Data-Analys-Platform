import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import DeveloperPage from './components/DeveloperPage.vue'
import ManagerPage from './components/ManagerPage.vue'
import UserPage from './components/UserPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // 设置 HomePage 为根路径的组件
    meta: { title: 'Home - Data Analysis Platform' }
  },
  {
    path: '/developer',
    name: 'Developer',
    component: DeveloperPage,
    meta: { title: 'Developer Page' }
  },
  {
    path: '/manager',
    name: 'Manager',
    component: ManagerPage,
    meta: { title: 'Manager Page' }
  },
  {
    path: '/user',
    name: 'User',
    component: UserPage,
    meta: { title: 'User Page' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 设置文档标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Data Analysis Platform'
  next()
})

export default router
