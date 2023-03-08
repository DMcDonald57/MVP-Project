<template>
  <div id="app">
    <nav>
      <router-link to="/">Home Page</router-link>  |
      <router-link to="/LeagueRules"> League Rules</router-link>  |
      <router-link to="/LeaguePhotos"> Photos Page</router-link>  
    </nav>
    <nav>
      <router-link to="/TeamPage1">Red Team</router-link>  |
      <router-link to="/TeamPage2">Blue Team</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  
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

nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: red;
}
v-btn {
  font-weight: bold;
  color: black;
}
</style>
