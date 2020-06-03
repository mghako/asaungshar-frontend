<template>
  <div id="app" class="container w-10/12 mx-auto">
    <div id="nav">
      <router-link to="/" class="text-5xl">Find Hostels</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
      return {

      }
  },
  
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
