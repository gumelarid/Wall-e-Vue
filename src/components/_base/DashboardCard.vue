<template>
  <div class="row transaction-info">
    <b-col md="7">
      <div class="walle-card chart-info">
        <b-row class="header walle-card-header">
          <b-col cols="8" class="income" @click="changeTab('income')">
            <b-icon icon="arrow-down"></b-icon><br>
            <span class="text-semi">Income</span><br>
            <span class="chart-amount">Rp {{ weekIncome ? formatN(weekIncome) : weekIncome || 0 }}</span>
          </b-col>
          <b-col cols="4" class="expense" @click="changeTab('expense')">
            <b-icon icon="arrow-up"></b-icon><br>
            <span class="text-semi">Expense</span><br>
            <span class="chart-amount">Rp{{ weekExpense ? formatN(weekExpense) : weekExpense || 0 }}</span>
          </b-col>
          <b-col></b-col>
        </b-row>
        <div align="center">
          <span><strong>{{ chartTitle }}</strong></span>
        </div>
        <div class="chart">
          <div class="chart-income" v-if="isDailyIncome">
            <column-chart :dataset="{borderWidth: 0}" thousands="," prefix="Rp " :data="dailyIncome"></column-chart>
          </div>
          <div class="chart-expense" v-else>
            <column-chart :dataset="{borderWidth: 0}" thousands="," prefix="Rp " :data="dailyExpense"></column-chart>
          </div>
        </div>
      </div>
    </b-col>
    <b-col md="5">
      <div class="walle-card transaction-history">
        <div class="walle-card-header">
          <span class="title">Transaction History</span>
          <router-link to="history" class="float-right">See All</router-link>
        </div>
        <div class="walle-card-body">
          <div class="history-collections">
            <div class="history-item row" v-for="(v, i) in transactionList" :key="i">
              <b-col cols="2" class="history-image">
                <img :src="url + v.user_picture_b" alt="">
              </b-col>
              <b-col cols="5" class="history-info">
                <span class="history-name">{{v.user_name_b}}</span><br>
                <span class="history-status">Transfer</span>
              </b-col>
              <b-col cols="5" class="history-amount">
                <span v-if="v.user_role === '1'">- </span>
                <span v-else>+ </span>
                <span>Rp. {{ v.transfer_amount ? formatN(v.transfer_amount) : v.transfer_amount }}</span>
              </b-col>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL + '/',
      isDailyIncome: true,
      chartTitle: 'Income'
    }
  },
  created() {
    this.getStatistic(this.user.user_id)

    const setData = {
      user_id: this.user.user_id,
      page: 1,
      limit: 5
    }
    this.getUserTransaction(setData)
  },
  computed: {
    ...mapGetters({ user: 'getUser', dailyIncome: 'getDailyIncome', dailyExpense: 'getDailyExpense', weekIncome: 'getWeekIncome', weekExpense: 'getweekExpense', transactionList: 'getTransactionList' })
  },
  methods: {
    ...mapActions(['getStatistic', 'getUserTransaction']),
    formatN(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    changeTab(e) {
      if (e === 'expense') {
        this.chartTitle = 'Expense'
        this.isDailyIncome = false
      } else {
        this.chartTitle = 'Income'
        this.isDailyIncome = true
      }
    }
  }
}

</script>
<style src="../../assets/style/dashboard.css" scoped></style>
