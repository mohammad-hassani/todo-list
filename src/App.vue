<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">todo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #00c3ff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ff00d5;

    &.router-link-exact-active {
      color: #1b8d28;
    }
  }
}
</style>
