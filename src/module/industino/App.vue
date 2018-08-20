<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$http.get('/data/json').then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
