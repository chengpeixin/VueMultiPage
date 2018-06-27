<template>
  <div id="app">
    <div v-touch:tap="opendialog" class="shuai">
      行业数据
    </div>
  </div>
</template>

<script>
import { getData } from './service/getData';
export default {
  name: 'app',
  methods: {
    async opendialog () {
      var { data } = await getData()
      console.log(data)
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
