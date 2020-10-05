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
              <b-col cols="2">
                <b-img :src="url + transferData.user_b_picture " />
              </b-col>
              <b-col cols="10" align-self="center">
                <p class="name">{{ transferData.user_b_name }}</p>
                <p class="phone">{{ transferData.user_b_phone }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row class="heading">
      <b-col md="12">
        <p>Details</p>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item>
            <b-col md="10" align-self="start">
              <p class="title">Amount</p>
              <p class="value">Rp {{ transferData.transfer_amount ? formatN(transferData.transfer_amount) : transferData.transfer_amount }}</p>
            </b-col>
          </b-list-group-item>
          <b-list-group-item>
            <b-col md="10" align-self="start">
              <p class="title">Balance Left</p>
              <p class="value">Rp {{ transferData.balance_left ? formatN(transferData.balance_left) : transferData.balance_left }}</p>
            </b-col>
          </b-list-group-item>
          <b-list-group-item>
            <b-col md="10" align-self="start">
              <p class="title">Date &#38; Time</p>
              <p class="value">{{ new Date() }}</p>
            </b-col>
          </b-list-group-item>
          <b-list-group-item>
            <b-col md="10" align-self="start">
              <p class="title">Notes</p>
              <p class="value">{{ transferData.transfer_note }}</p>
            </b-col>
          </b-list-group-item>
        </div>
      </b-col>
      <b-col md="4" offset="8" class="btn-continue text-right">
        <b-button v-b-modal.enter-pin>Continue</b-button>
        <b-modal id="enter-pin" centered hide-footer hide-header content-class="enter-pin">
          <div>
            <b-alert show variant="danger" v-if="isAlert">
              {{ this.alertMsg }}
            </b-alert>
          </div>
          <b-row>
            <b-col md="10" align-self="center" style="margin: 0">
              <h1>Enter PIN to Transfer</h1>
            </b-col>
            <b-col md="2">
              <b-button style="background-color: transparent; border: transparent" @click="closeModal">
                <b-icon icon="x" variant="dark" />
              </b-button>
            </b-col>
            <b-col md="10">
              <p>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </p>
            </b-col>
            <b-col md="12" class="text-center">
              <b-alert variant="warning">Incorrect PIN</b-alert>
              <b-form @submit.prevent="onSubmit()">
                <div class="input-pin">
                  <PincodeInput v-model="pin" placeholder="_" :autofocus="false" :length="6" required />
                </div>
                <div class="btn-submit float-right mt-5">
                  <b-button type="submit">
                    continue
                    <b-spinner small variant="light" type="grow" v-if="spinner"></b-spinner>
                  </b-button>
                </div>
              </b-form>
            </b-col>
          </b-row>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>
<style src="../../../assets/style/transfer_style.css"></style>
<script>
import PincodeInput from 'vue-pincode-input'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    PincodeInput
  },
  data() {
    return {
      pin: '',
      isAlert: false,
      alertMsg: '',
      url: process.env.VUE_APP_URL + '/',
      spinner: false
    }
  },
  created() {
    if (!this.transferData.user_id_a) {
      window.history.go(-1)
    }
  },
  computed: {
    ...mapGetters({
      transferData: 'getTransferData',
      userData: 'getUserData'
    })
  },
  methods: {
    ...mapActions(['postTransfer']),
    closeModal() {
      this.$bvModal.hide('enter-pin')
      this.isAlert = false
    },
    formatN(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    onSubmit() {
      this.spinner = true
      const setData = {
        user_id_a: this.transferData.user_id_a,
        user_id_b: this.transferData.user_id_b,
        user_pin: this.pin,
        transfer_note: this.transferData.transfer_note,
        transfer_amount: this.transferData.transfer_amount
      }
      if (this.pin !== this.userData.user_pin) {
        console.log(false)
        this.isAlert = true
        this.alertMsg = 'Your PIN is Wrong'
        this.spinner = false
        this.pin = ''
      } else {
        this.isAlert = false
        this.postTransfer(setData)
          .then(res => {
            this.$router.push('transfer-status')
            this.spinner = false
          }).catch(err => {
            this.spinner = false
            this.isAlert = true
            this.alertMsg = err.data.msg
          })
      }
    }
  }
}

</script>
