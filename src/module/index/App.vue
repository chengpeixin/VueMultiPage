<template>
  <div id="app">
    首页
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log(process.env)
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
