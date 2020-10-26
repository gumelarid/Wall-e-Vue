import axios from 'axios'

export default {
  state: {
    userNotif: {},
    notifCount: ''
  },
  mutations: {
    setUserNotif(state, payload) {
      state.userNotif = payload
    },
    setNotifCount(state, payload) {
      state.notifCount = payload
    }
  },
  actions: {
    getUserNotification(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/notification/${payload}?limit=7`)
          .then(res => {
            context.commit('setUserNotif', res.data.data)
            resolve(res.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    },
    getUserNotifCount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/notification/count-unread/${payload}`)
          .then(res => {
            context.commit('setNotifCount', res.data.data[0].total)
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
    },
    getNotifCount(state) {
      return state.notifCount
    }
  }
}
