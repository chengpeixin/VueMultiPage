// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {
  Button,
  Select,
  Dialog
} from 'muse-ui'
import Helpers from 'muse-ui/lib/Helpers'
import 'muse-ui/dist/muse-ui.css'
import VueTouch from 'vue-touch-easyhi'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueTouch)
  .use(Vuex)
  .use(Button)
  .use(Select)
  .use(Dialog)
  .use(Helpers)
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
