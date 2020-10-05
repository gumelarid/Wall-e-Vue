import axios from 'axios'

export default {
  state: {
    dailyIncome: {},
    dailyExpense: {},
    weekIncome: {},
    weekExpense: {},
    transactionList: {},
    userTargetId: '',
    userTarget: {},
    transferData: {},
    historyPage: 1,
    historyLimit: 6,
    historyTotal: ''
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
    },
    setTransactionList(state, payload) {
      state.transactionList = payload
    },
    setUserTargetId(state, payload) {
      state.userTargetId = payload
    },
    setuserTarget(state, payload) {
      state.userTarget = payload
    },
    setTransferData(state, payload) {
      state.transferData = payload
    },
    setHistoryTotal(state, payload) {
      state.historyTotal = payload
    },
    setHistoryPage(state, payload) {
      state.historyPage = payload
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
            resolve(res.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getUserTransaction(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/transfer/${payload.user_id}?page=${payload.page}&limit=${payload.limit}`)
          .then(res => {
            console.log(res.data.data)
            context.commit('setTransactionList', res.data.data)
            resolve(res.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    },
    getUserHistory_Transaction(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/transfer/${payload.user_id}?page=${context.state.historyPage}&limit=${context.state.historyLimit}`)
          .then(res => {
            console.log(res.data.data)
            context.commit('setTransactionList', res.data.data)
            context.commit('setHistoryTotal', res.data.pagination.totalData)
            resolve(res.data)
          }).catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    getUserTarget(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}/users/${payload}`)
          .then(res => {
            context.commit('setuserTarget', res.data.data[0])
            resolve(res.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    },
    postTransfer(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}/transfer`, payload)
          .then(res => {
            resolve(res.data)
          }).catch(error => {
            reject(error.response)
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
    },
    getTransactionList(state) {
      return state.transactionList
    },
    getUserTargetId(state) {
      return state.userTargetId
    },
    getUserTarget(state) {
      return state.userTarget
    },
    getTransferData(state) {
      return state.transferData
    },
    getHistoryPage(state) {
      return state.historyPage
    },
    getHistoryLimit(state) {
      return state.historyLimit
    },
    getHistoryTotal(state) {
      return state.historyTotal
    }
  }
}
