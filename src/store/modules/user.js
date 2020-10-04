import axios from 'axios'

export default {
  state: {
    userData: {},
    pin: ''
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload
    },
    setPin(state, payload) {
      state.pin = payload
    }
  },
  actions: {
    patchPin(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}/users/patch/pin/${payload.user_id}`,
            payload
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}/users/patch/image/${payload.user_id}`,
            payload.formData
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/users/${payload}`)
          .then(response => {
            context.commit('setUserData', response.data.data[0])
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getUserData(state) {
      return state.userData
    }
  }
}
