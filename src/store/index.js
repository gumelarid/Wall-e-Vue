import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import User from './modules/user'
import Navigation from './modules/navigation'
import Transfer from './modules/transfer'
import Payment from './modules/payment'
import Notification from './modules/notification'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    User,
    Navigation,
    Transfer,
    Payment,
    Notification
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
