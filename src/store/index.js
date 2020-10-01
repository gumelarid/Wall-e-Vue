import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user.user_id'],
      storage: window.sessionStorage
    })
  ]
})
