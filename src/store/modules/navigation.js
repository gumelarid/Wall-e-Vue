export default {
  state: {
    isChangePassword: false,
    isPersonalInfo: false,
    isChangePin: false,
    profile: true
  },
  mutations: {
    setChangePassNav(state, payload) {
      state.isChangePassword = payload
      // return state.isChangePassword,
    },
    setPersonalInfoNav(state, payload) {
      state.isPersonalInfo = payload
      // return state.isPersonalInfo,
    },
    setPinNav(state, payload) {
      state.isChangePin = payload
      // return state.isChangePin,
    },
    setProfileNav(state, payload) {
      state.profile = payload
      // return state.profile,
    }
  },
  actions: {},
  getters: {
    getChangePassNav(state) {
      return state.isChangePassword
    },
    getPersonalInfoNav(state) {
      return state.isPersonalInfo
    },
    getPinNav(state) {
      return state.isChangePin
    },
    getProfileNav(state) {
      return state.profile
    }
  }
}
