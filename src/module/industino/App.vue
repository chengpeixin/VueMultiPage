<template>
  <div id="app">
    <div v-touch:tap="opendialog" class="shuai">
      行业数据
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    async opendialog () {
      // 没辙呀
      console.log(this.$http)
    }
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
.shuai {
  font-size: 20px;
}
</style>
