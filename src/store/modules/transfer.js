import axios from 'axios'

export default {
  state: {
    dailyIncome: {},
    dailyExpense: {},
    weekIncome: {},
    weekExpense: {}
  },
  mutations: {
    setDailyIncome(state, payload) {
      state.dailyIncome = payload
    },
    setDailyExpense(state, payload) {
      state.dailyExpense = payload
    },
    setWeekIncome(state, payload) {
      state.weekIncome = payload
    },
    setWeekExpense(state, payload) {
      state.weekExpense = payload
    }
  },
  actions: {
    getStatistic(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/transfer/balance-statistic/${payload}`)
          .then(res => {
            const rawDailyIncome = []
            res.data.data.dailyIncome.map(v => rawDailyIncome.push([v.day, v.total]))
            context.commit('setDailyIncome', rawDailyIncome)

            const rawDailyExpense = []
            res.data.data.dailyExpense.map(v => rawDailyExpense.push([v.day, v.total]))
            context.commit('setDailyExpense', rawDailyExpense)

            context.commit('setWeekIncome', res.data.data.weekIncome[0].total)
            context.commit('setWeekExpense', res.data.data.weekExpense[0].total)
            resolve(res.data.data)
          })
          .catch(error => {
            reject(error.res)
          })
      })
    }
  },
  getters: {
    getDailyIncome(state) {
      return state.dailyIncome
    },
    getDailyExpense(state) {
      return state.dailyExpense
    },
    getWeekIncome(state) {
      return state.weekIncome
    },
    getweekExpense(state) {
      return state.weekExpense
    }
  }
}
