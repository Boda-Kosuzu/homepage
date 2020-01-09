<template>
  <div id="app">
    <header-area />
    <router-view />
  </div>
</template>

<script>
import HeaderArea from './components/Header'

export default {
  name: 'App',
  components: {
    HeaderArea
  }
}
</script>

<style scoped>
#app {
  background: #eceeef;
  min-height: 100vh;
}
</style>

<style>
body {
  margin: 0;
  font-family: りいポップ角;
}
</style>
