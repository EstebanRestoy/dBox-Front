<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--text-color-secondary);

    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}

html{
  background-color: var(--gray-900);
}
</style>
