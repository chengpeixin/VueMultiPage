<template>
  <div>
    <ListView :data="list"></ListView>
  </div>
</template>

<script>
import { getData } from './../service/getData';
import { getPeople } from './../service/getData';
import Singer from '@/common/js/singer.js';
import ListView from '@/module/industino/component/singer';
const HOT_NAME = '热门';
const HOT_SINGE_LEN = 10
const list = getPeople().data.list
export default {
  name: 'one',
  data () {
    return {
      list: list
    }
  },
  created () {
    let map = {
      hot: {
        title: HOT_NAME,
        items: []
      }
    }
    list.forEach(function (item, index) {
      if (index < HOT_SINGE_LEN) {
        map.hot.items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fother_name
          })
        )
      }
      const key = item.Findex
      if (!map[key]) {
        map[key] = {
          title: key,
          items: []
        }
      }
      map[key].items.push(
        new Singer({
          id: item.Fsinger_mid,
          name: item.Fother_name
        })
      )
    }, this)
    // 为了得到有序列表，我们需要处理 map
    let hot = []
    let ret = []
    for (let key in map) {
      let val = map[key]
      if (val.title.match(/[a-zA-Z]/)) {
        ret.push(val)
      } else if (val.title === HOT_NAME) {
        hot.push(val)
      }
    }
    ret.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    this.list = hot.concat(ret)
  },
  components: { ListView }
}
</script>

<style lang="stylus" scoped>
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
