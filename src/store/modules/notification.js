import axios from 'axios'

export default {
  state: {
    userNotif: {}
  },
  mutations: {
    setUserNotif(state, payload) {
      state.userNotif = payload
    }
  },
  actions: {
    getUserNotification(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/notification/${payload}?limit=10`)
          .then(res => {
            context.commit('setUserNotif', res.data.data)
            resolve(res.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getUserNotif(state) {
      return state.userNotif
    }
  }
}
