import axios from 'axios'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setUserLogin(state, payload) {
      state.user = payload
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/users/register`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/users/login`, payload)
          .then(response => {
            context.commit('setUserLogin', response.data.data)
            localStorage.setItem('token', response.data.data.token)
            // router.push('/')
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    activationEmail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/users/email`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    activationUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}/users/activate?keys=${payload}`)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    forgotPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/users/forgot`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    resetPassword(context, payload) {
      const data = {
        user_password: payload.user_password,
        confirm_password: payload.confirm_password
      }
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}/users/change?keys=${payload.key}`,
            data
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUserData(state) {
      return state.user
    }
  }
}
