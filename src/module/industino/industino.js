// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueTouch from 'vue-touch-easyhi'
import store from './store'

// 引入共用js
// import axios from '@/config/axios.js'
Vue.config.productionTip = false
Vue.use(VueTouch)
  .use(Vuex)

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
