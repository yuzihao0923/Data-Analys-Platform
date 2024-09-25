import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

createApp(App).mount('#app')
app.use(router) // Use the router
