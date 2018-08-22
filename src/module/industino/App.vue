<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import util from '%/js/util.js'
export default {
  name: 'app',
  created () {
    this.$http.get('/data/json').then(res => {
      util.isemail('213213').then(() => {
        console.log('帅死了')
      }).catch((err) => {
        console.log(err)
      })
      console.log(res)
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
