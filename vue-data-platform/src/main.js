import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由器

createApp(App)
  .use(router) // 使用路由器
  .mount('#app'); // 挂载到 #app
