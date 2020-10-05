<template>
  <div class="walle-transfer">
    <b-row class="heading">
      <b-col md="12">
        <b-alert show variant="success" v-if="isSuccess" dismissible @dismissed="closeAlert">{{ this.resMsg }}</b-alert>
        <p>Top Up</p>
      </b-col>
      <b-col md="6">
        <p>
          Type the amount you want to topup and then press continue to the next
          steps.
        </p>
      </b-col>
      <b-col md="4" offset="8" class="btn-continue text-right"> </b-col>
    </b-row>
    <div class="link-midtrans col-md-12" align="center" v-if="link">
      <a :href="link" target="_blank" class="mt-3 mb-3" style="background: aqua; padding: 20px 40px; border-radius: 50px; border: 0; outline: 0 ">Paid Now</a>
    </div>
    <b-row class="content text-center" align-h="center">
      <b-col md="12" align-self="center">
        <b-form-input placeholder="0.00" v-model="nominal" style="border: transparent"></b-form-input>
      </b-col>
      <b-col md="4" offset="8" class="text-right mt-3">
        <b-button @click="showModal">Continue</b-button>
        <b-modal id="enter-pin" centered hide-footer hide-header content-class="enter-pin">
          <b-row>
            <b-col md="10" align-self="center" style="margin: 0">
              <h1>Enter PIN to Transfer</h1>
            </b-col>
            <b-col md="2">
              <b-button style="background-color: transparent; border: transparent" @click="closeModal">
                <b-icon icon="x" variant="dark" />
              </b-button>
            </b-col>
            <b-col md="12">
              <b-alert show variant="danger" v-if="isError" dismissible @dismissed="closeAlert">{{ this.resMsg }}</b-alert>
            </b-col>
            <b-col md="10">
              <p>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </p>
            </b-col>
            <b-col md="12" class="text-center">
              <b-form @submit.prevent="submitTopup">
                <div class="input-pin">
                  <PincodeInput v-model="pin" placeholder="_" :autofocus="false" :length="6" required />
                </div>
                <div class="btn-submit float-right mt-3">
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
<style src="../../../assets/style/topup_style.css"></style>
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
      nominal: '',
      isSuccess: false,
      isError: false,
      resMsg: '',
      link: false,
      spinner: false
    }
  },
  methods: {
    ...mapActions(['paymentTopupMidtrans', 'checkPin']),
    closeModal() {
      this.$bvModal.hide('enter-pin')
    },
    closeAlert() {
      this.isError = false
      this.pin = ''
    },
    showModal() {
      this.$bvModal.show('enter-pin')
    },
    submitTopup() {
      this.spinner = true
      if (this.pin !== this.user.user_pin) {
        this.isError = true
        this.resMsg = 'Invalid Pin'
        this.spinner = false
      } else if (!this.pin) {
        this.isError = true
        this.resMsg = 'Pin must be filled'
        this.spinner = false
      } else {
        const setData = {
          user_id: this.user.user_id,
          history_nominal: this.nominal
        }

        this.paymentTopupMidtrans(setData)
          .then((response) => {
            this.$bvModal.hide('enter-pin')
            this.nominal = ''
            this.link = response.data
            console.log(response)
            this.spinner = false
            this.makeToast('success', 'Hellow Friend', response.msg)
          })
          .catch((error) => {
            this.isError = true
            this.resMsg = error.msg
            this.$bvModal.hide('enter-pin')
            this.nominal = ''
            console.log(error)
            this.spinner = false
          })
      }
    },
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed: {
    ...mapGetters({ user: 'getUserData' })
  }
}

</script>
