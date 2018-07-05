<template>
  <div>
    <div v-touch:tap="opendialog" class="shuai">
      {{count}}
      <p>{{json.id}}</p>
      <p>{{json.name}}</p>
      <p>{{json.text}}</p>
    </div>

    <input type="text" v-model="ipt">
    <button v-touch:tap="commit">提交</button>
  </div>
</template>

<script>
import { getData } from './../service/getData';

export default {
  name: 'one',
  data () {
    return {
      json: '',
      name: '',
      ipt: ''
    }
  },
  methods: {
    async opendialog () {
      var { data } = await getData()
      this.json = data
    },
    async commit () {
      this.$util
        .commit('isemail', this.ipt)
        .then(function () {
          console.log('1')
        })
        .catch(function () {
          console.log('2')
        })
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="stylus" scoped>
.shuai {
  font-size: 20px;

  p {
    color: red;
  }
}

.btn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  color: #fff;
  background: #019ddd;
}
</style>
