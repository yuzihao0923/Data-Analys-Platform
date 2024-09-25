import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

createApp(App).mount('#app')
App.use(router) // Use the router
