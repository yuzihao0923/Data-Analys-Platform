<template>
  <div id="home">
      <div>
        <!-- Main content over the background image -->
        <div class="hello" style="margin-top: 250px;">
          <h1>{{ msg }}</h1>
        </div>

        <div class="login_type">
          <div class="login-buttons">
            <button @click="selectLoginType('Developer')">Developer</button>
            <button @click="selectLoginType('Manager')">Manager</button>
            <button @click="selectLoginType('User')">User</button>
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
  name: 'MainTitle',
  props: {
    msg: String
  },
  data() {
    return {
      selectedLoginType: '' // Store the selected login type
    }
  },
  methods: {
    selectLoginType(type) {
      this.selectedLoginType = type;
    }
  }
}
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Apply the background image to the body */
#home {

  width: 100%;
  height: 100%;
  background-image: url('../assets/login_jpg.jpg'); /* Use @ for Vue assets */
  
  background-size: cover; /* Make sure the image covers the entire viewport */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* No repeating */
  background-attachment: fixed; /* The background stays fixed when scrolling */
  position: absolute; /* Ensure content is above the background */

}

/* Style the main content */
.hello, .login_type {
  position: relative;
  z-index: 1; /* Make sure content is above the background */
  padding: 20px;
  /* background: rgba(255, 255, 255, 0.8); Semi-transparent background for readability */
  border-radius: 8px;
  margin: 20px;
  color: white;
}

/* Button styles */
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
