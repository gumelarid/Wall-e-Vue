<template>
  <div class="walle-history">
    <b-row class="heading">
      <b-col md="12">
        <p>Search Receiver</p>
      </b-col>
      <b-col md="12">
        <b-form @submit.prevent="search">
          <b-input-group>
            <b-input-group-append>
              <b-input-group-text>
                <b-icon icon="search" />
              </b-input-group-text>
            </b-input-group-append>
            <b-input type="search" placeholder="Search receiver here" v-model="targetName"></b-input>
          </b-input-group>
        </b-form>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item v-for="(v, i) in userList" :key="i" @click="continueTransfer(v)">
            <b-row>
              <b-col md="2">
                <b-img :src="url + v.user_picture" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">{{ v.user_first_name }} {{ v.user_last_name }}</p>
                <p class="phone">{{ v.user_phone }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
      <div class="pagination col-md-12" align="center">
        <b-pagination centered v-model="page" :total-rows="totalData" :per-page="limit" aria-controls="my-table" align="center" @change="paginationSetup"></b-pagination>
      </div>
    </b-row>
  </div>
</template>
<style src="../../../assets/style/transfer_style.css" scoped></style>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL + '/',
      targetName: ''
    }
  },
  computed: {
    ...mapGetters({
      userList: 'getUserList',
      page: 'getUserPage',
      sort: 'getUserSort',
      limit: 'getUserLimit',
      totalData: 'getTotalData',
      userTargetId: 'getUserTargetId'
    })
  },
  created() {
    this.setSearchName('')
    this.getAllUsers()
  },
  methods: {
    ...mapActions(['getAllUsers']),
    ...mapMutations(['setUserPage', 'setUserTargetId', 'setSearchName']),
    async continueTransfer(e) {
      await this.setUserTargetId(e.user_id)
      this.$router.push(`/transfer-set?to=${e.user_id}&n=${e.user_first_name}+${e.user_last_name}`)
    },
    paginationSetup(data) {
      console.log(data)
      this.setUserPage(data)
      this.getAllUsers()
    },
    search() {
      console.log(this.targetName)
      this.setSearchName(this.targetName)
      this.getAllUsers()
    }
  }
}

</script>
