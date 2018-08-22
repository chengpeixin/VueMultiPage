<template>
  <div>
    <Scroll class="listview" :data="data" ref="listview" :listenScroll="listenScroll" @scroll="scroll" :probeType="probeType">
      <ul>
        <li v-for="(GroupIndex,group) in data" class="list-group" ref="listGroup" :key="GroupIndex">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="(itemIndex,item) in group.items" class="list-group-item" :key="itemIndex">
              <img class="avatar" v-lazy="item.avatar" />
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-shortcut">
        <ul>
          <li v-for="(item,index) in shortcutList" class="item" :data-index="index" @touchstart.stop="onShortcut" @touchmove="onShortcuttouchmove" :class="{'current':currentIndex==index}" :key="item">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="list-fixed" v-show="fixedTitle" ref="fixed">
        <h1 class="fixed-title">
          {{fixedTitle}}
        </h1>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
import getData from '@/common/js/dom.js'
const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 30
export default {
  data () {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onShortcut (e) {
      const TouchIndex = parseInt(getData(e.target, 'index'))
      let firstTouch = e.touches[0]
      this.touch.anchorIndex = TouchIndex
      this.touch.y1 = firstTouch.pageY
      this._scrollTo(TouchIndex)
    },
    onShortcuttouchmove (e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
      let anchorIndex = this.touch.anchorIndex + delta
      this._scrollTo(anchorIndex)
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    _scrollTo (index) {
      if (!index && index !== 0) return
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scrollY = -this.listHeight[index]
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 100)
    },
    _calculateHeight () {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data: {
      immediate: true,
      handler: function () {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      }
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      // 最开始滚动
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      // 滚动到底部且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    },
    diff (newVal) {
      let fixedTop =
        newVal > 0 && newVal < TITLE_HEIGHT ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) return
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
    }
  },
  created () {
    this.touch = {}
    this.listenScroll = true
    this.listHeight = []
    this.probeType = 3
  },
  computed: {
    shortcutList () {
      return this.data.map(group => {
        return group.title.substr(0, 1)
      })
    },
    fixedTitle () {
      if (this.scrollY > 0) {
        return ''
      }
      return this.data[this.currentIndex]
        ? this.data[this.currentIndex].title
        : '没有'
    }
  },
  components: { Scroll }
}
</script>

<style lang="stylus" scoped>
// 颜色定义规范
$color-background = #222;
$color-background-d = rgba(0, 0, 0, 0.3);
$color-highlight-background = #333;
$color-dialog-background = #666;
$color-theme = #ffcd32;
$color-theme-d = rgba(255, 205, 49, 0.5);
$color-sub-theme = #d93f30;
$color-text = #fff;
$color-text-d = rgba(255, 255, 255, 0.3);
$color-text-l = rgba(255, 255, 255, 0.5);
$color-text-ll = rgba(255, 255, 255, 0.8);
// 字体定义规范
$font-size-small-s = 10px;
$font-size-small = 12px;
$font-size-medium = 14px;
$font-size-medium-x = 16px;
$font-size-large = 18px;
$font-size-large-x = 22px;

.listview {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: $color-background;

  .list-group {
    padding-bottom: 20px;

    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }

    .list-group-item {
      display: flex;
      align-items: center;
      padding: 10px 0 0 30px;

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }

  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;

    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;

      &.current {
        color: $color-theme;
      }
    }
  }

  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }

  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
