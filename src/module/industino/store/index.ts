import Vuex from 'vuex'
import state from './state.ts'
import actions from './actions.ts'
import mutations from './mutations.ts'
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
