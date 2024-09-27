<template>
  <div id="home">
    <div>
      <!-- Main content over the background image -->
      <div class="hello" style="margin-top: 250px;">
        <h1>Data Analysis Platform</h1> <!-- 这里的 msg 是父组件传递过来的 -->
      </div>

      <div class="login_type">
        <div class="login-buttons">
          <!-- 跳转按钮，使用 goToPage 方法实现路由跳转 -->
          <button @click="goToPage('/developer')">Developer</button>
          <router-link to="/developer"><button>DeVELOPER</button></router-link>
          <button @click="goToPage('/manager')">Manager</button>
          <button @click="goToPage('/user')">User</button>
        </div>

        <div v-if="selectedLoginType">
          <h4>You selected: {{ selectedLoginType }} login</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String // 接收父组件传递的标题信息
  },
  data() {
    return {
      selectedLoginType: '' // 存储选择的登录类型
    };
  },
  methods: {
    goToPage(route) {
      // 使用 Vue Router 的 push 方法跳转到指定路由
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
/* 样式部分可以保持不变 */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#home {
  width: 100%;
  height: 100%;
  background-image: url('../assets/login_jpg.jpg'); /* 使用 @ 符号指向 src 目录 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
}


.hello, .login_type {
  position: relative;
  z-index: 1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  color: white;
}

.login-buttons {
  margin: 10px 0;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #2e854b;
}

h1 {
  font-size: 60px;
}

h4 {
  margin-top: 20px;
  color: white;
}
</style>
