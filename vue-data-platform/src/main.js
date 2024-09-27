import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由器
import Axios from 'axios'

createApp(App)
  .use(router) // 使用路由器
  .mount('#app'); // 挂载到 #app

Vue.prototype.$axios = Axios
