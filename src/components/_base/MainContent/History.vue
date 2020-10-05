<template>
  <div class="walle-history">
    <b-row class="heading">
      <b-col md="12" align-self="center">
        <p>Transaction History</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item v-for="(v, index) in transactionList " :key="index">
            <b-row>
              <b-col cols="2" align-self="center">
                <b-img :src="url + v.user_picture_b" />
              </b-col>
              <b-col cols="7" align-self="center">
                <p class="name">{{ v.user_name_b }}</p>
                <p class="note">{{ v.transfer_note }}</p>
              </b-col>
              <b-col cols="3" v-if="v.user_role === '2'" align-self="center">
                <p class="nominal In">+ Rp {{ v.transfer_amount }}</p>
              </b-col>
              <b-col md="2" v-if="v.user_role === '1'">
                <p class="nominal Out">- Rp {{ v.transfer_amount }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-pagination centered v-model="page" :total-rows="totalData" :per-page="limit" aria-controls="my-table" align="center" @change="paginationSetup"></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL + '/'
    }
  },
  computed: {
    ...mapGetters({
      transactionList: 'getTransactionList',
      user: 'getUser',
      userData: 'getUserData',
      page: 'getHistoryPage',
      limit: 'getHistoryLimit',
      totalData: 'getHistoryTotal'
    })
  },
  created() {
    this.getUserHistory_Transaction({ user_id: this.user.user_id })
  },
  methods: {
    ...mapActions(['getUserHistory_Transaction']),
    ...mapMutations(['setHistoryPage']),
    paginationSetup(data) {
      this.setHistoryPage(data)
      this.getUserHistory_Transaction({ user_id: this.user.user_id })
    }
  }
}

</script>
<style src="../../../assets/style/history_style.css" scoped></style>
