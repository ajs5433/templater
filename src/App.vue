<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- <create/> -->
    <!-- <active/> -->
    <!-- <search/> -->
  </div>
</template>

<script>
import create from './components/create'
import active from './components/active'
import search from './components/search'
import home from './components/home'

export default {
  name: 'App',
  components: {
    create,
    active,
    search,
    home
  }
}
</script>

<style>
:root{
  --main-color1: tomato;
  --main-color2: mistyrose;
  --border-color: lightblue;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
