import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import User from './modules/user'
import Navigation from './modules/navigation'
import Payment from './modules/payment'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    User,
    Navigation,
    Payment
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user'],
      storage: window.sessionStorage
    })
  ]
})
