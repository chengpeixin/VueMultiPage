import Vuex from 'vuex'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import createPersistedState from 'vuex-persistedstate'

const plugins = [createPersistedState()]

export default () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    plugins
  })
}
