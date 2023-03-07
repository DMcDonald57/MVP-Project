<template>
  <div id="app">
    <nav>
      <router-link to="/">Home Page</router-link>  |
      <router-link to="/TeamPage">Team Page</router-link>  |
      <router-link to="/LeagueRules"> League Rules</router-link>  |
      <router-link to="/LeaguePhotos"> Photos Page</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
};

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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
