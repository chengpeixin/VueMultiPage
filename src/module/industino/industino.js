// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import Util from '@/common/js/util'

import Axios from '@/config/axios.js'
import 'muse-ui/dist/muse-ui.css'
import VueTouch from 'vue-touch-easyhi'

import VueLazyLoad from 'vue-lazyload'
import '@/common/css/index.styl'

import '@/mock/'

Vue.prototype.$util = Util
Vue.prototype.$http = Axios
Vue.config.productionTip = false

Vue.use(VueTouch)
  .use(Vuex)
  .use(VueLazyLoad, {
    loading: require('@/common/image/default.png')
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
