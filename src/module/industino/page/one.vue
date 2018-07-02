<template>
  <div>
    <div v-touch:tap="opendialog" class="shuai">
      {{count}}
      <p>{{json.id}}</p>
      <p>{{json.name}}</p>
      <p>{{json.text}}</p>
    </div>
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
      openSimple: false
    }
  },
  methods: {
    async opendialog () {
      var { data } = await getData()
      this.json = data
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
