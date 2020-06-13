<template>
  <div id="app" class="container w-full mx-auto bg-green-200">
    <div id="nav">
        <router-link to="/" class="text-3xl leading-loose md:text-4xl">Find Dormitories</router-link>
    </div>
    <div id="nav-menu">
      <ul class="flex flex-row-reverse align-middle items-center">
        <li v-show="!user"><router-link to="/register" class="bg-green-400 text-white py-2 px-4 cursor-pointer hover:bg-green-600">Register</router-link></li>
        <li v-show="!user"><router-link to="/login" class="bg-yellow-400 text-white py-2 px-4 cursor-pointer hover:bg-yellow-600">Login</router-link></li>
        <li><p class="text-xs ml-2">Login as "{{ user.email }}"</p></li>
        <li><a href="#" class="bg-red-400 text-white rounded py-1 px-2">Log out!</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
      return {

      }
  },
  computed: {
    ...mapGetters(['user'])
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
