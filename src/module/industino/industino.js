// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch-easyhi'
// 引入共用js
import {
  axios
} from '@/common/js/common.js'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueTouch)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
