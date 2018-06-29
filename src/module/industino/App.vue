<template>
  <div id="app">
    <div v-touch:tap="opendialog" class="shuai">
      {{count}}
      <p>{{json.id}}</p>
      <p>{{json.name}}</p>
      <p>{{json.text}}</p>
    </div>
  </div>
</template>

<script>
import { getData } from './service/getData';
export default {
  name: 'app',
  data () {
    return {
      json: '',
      name: ''
    }
  },
  methods: {
    async opendialog () {
      var { data } = await getData()
      this.json = data
    }
  },
  mounted () {
    let i = 0
    setInterval(() => {
      this.$store.commit('setName', i++)
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.shuai {
  font-size: 20px;

  p {
    color: red;
  }
}
</style>
