<template>
  <div class="walle-transfer">
    <b-row class="heading">
      <b-col md="12">
        <p>Transfer Money</p>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item>
            <b-row>
              <b-col md="2">
                <b-img :src="url + userTarget.user_picture" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">{{userTarget.user_first_name}} {{userTarget.user_last_name}}</p>
                <p class="phone">{{userTarget.user_phone}}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
      <b-col md="6">
        <p>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>
      </b-col>
    </b-row>
    <b-row class="content text-center" align-h="center">
      <b-col md="12" align-self="center">
        <b-form-input placeholder="0.00" autofocus type="number" min="1" v-model="transfer_amount"></b-form-input>
      </b-col>
      <b-col md="12" class="mt-3"><p>Rp. {{ userData.user_balance ? formatN(userData.user_balance) : userData.user_balance }} Available</p></b-col>
      <b-col md="7">
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text><b-icon icon="pencil" /></b-input-group-text >
          </template>
          <b-form-input placeholder="Add some notes" v-model="transfer_note"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="4" offset="8" class="text-right mt-5">
        <b-button @click="onSubmit">Continue</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<style src="../../../assets/style/transfer_style.css" scoped></style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL + '/',
      transfer_amount: '',
      transfer_note: ''
    }
  },
  created() {
    const id = this.$route.query.to
    this.getUserTarget(id)
  },
  computed: {
    ...mapGetters({
      userTarget: 'getUserTarget',
      userData: 'getUserData'
    })
  },
  methods: {
    ...mapActions(['getUserTarget']),
    ...mapMutations(['setTransferData']),
    formatN(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async onSubmit() {
      const setData = {
        transfer_amount: this.transfer_amount,
        balance_left: this.userData.user_balance - this.transfer_amount,
        transfer_note: this.transfer_note,
        user_id_a: this.userData.user_id,
        user_id_b: this.userTarget.user_id,
        user_pin: '',
        user_b_picture: this.userTarget.user_picture,
        user_b_phone: this.userTarget.user_phone,
        user_b_name: this.userTarget.user_first_name + ' ' + this.userTarget.user_last_name
      }
      await this.setTransferData(setData)
      this.$router.push('/transfer-confirmation')
    }
  }
}
</script>
