<template>
  <div class="row transaction-info">
    <b-col md="7">
      <div class="walle-card chart-info">
        <b-row class="header walle-card-header">
          <b-col cols="8" class="income">
            <b-icon icon="arrow-down"></b-icon><br>
            <span class="text-semi">Income</span><br>
            <span class="chart-amount">Rp2.120.000</span>
          </b-col>
          <b-col cols="4" class="expense">
            <b-icon icon="arrow-up"></b-icon><br>
            <span class="text-semi">Expense</span><br>
            <span class="chart-amount">Rp1.560.000</span>
          </b-col>
          <b-col></b-col>
        </b-row>
        <div class="chart">
          <column-chart :dataset="{borderWidth: 0}" :data="historyChart"></column-chart>
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
                <img src="../../assets/selena-gomez.jpg" alt="">
              </b-col>
              <b-col cols="5" class="history-info">
                <span class="history-name">Samuel Suhi</span><br>
                <span class="history-status">Transfer</span>
              </b-col>
              <b-col cols="5" class="history-amount">
                <span>+ Rp. 100.0000</span>
              </b-col>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      historyChart: [
        ['Sun', 12],
        ['Mon', 46],
        ['Tue', 28],
        ['Wed', 8],
        ['Thu', 44],
        ['Fri', 30],
        ['Sat', 18]
      ],
      transactionList: [1, 2, 3, 4, 5]
    }
  }
}

</script>
<style src="../../assets/style/dashboard.css" scoped></style>
