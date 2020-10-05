<template>
  <div class="walle-transfer">
    <b-row class="heading">
      <b-col md="12">
        <b-alert
          show
          variant="success"
          v-if="isSuccess"
          dismissible
          @dismissed="closeAlert"
          >{{ this.resMsg }}</b-alert
        >
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
    <b-row class="content text-center" align-h="center">
      <b-col md="12" align-self="center">
        <b-form-input
          placeholder="0.00"
          v-model="nominal"
          style="border: transparent"
        ></b-form-input>
      </b-col>
      <b-col md="4" offset="8" class="text-right mt-3">
        <b-button @click="showModal">Continue</b-button>
        <b-modal
          id="enter-pin"
          centered
          hide-footer
          hide-header
          content-class="enter-pin"
        >
          <b-row>
            <b-col md="10" align-self="center" style="margin: 0"
              ><h1>Enter PIN to Transfer</h1></b-col
            >
            <b-col md="2">
              <b-button
                style="background-color: transparent; border: transparent"
                @click="closeModal"
              >
                <b-icon icon="x" variant="dark" />
              </b-button>
            </b-col>
            <b-col md="12">
              <b-alert
                show
                variant="danger"
                v-if="isError"
                dismissible
                @dismissed="closeAlert"
                >{{ this.resMsg }}</b-alert
              >
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
                  <PincodeInput
                    v-model="pin"
                    placeholder="_"
                    :autofocus="false"
                    :length="6"
                    required
                  />
                </div>
                <div class="btn-submit float-right mt-3">
                  <b-button type="submit">continue</b-button>
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
      resMsg: ''
    }
  },
  methods: {
    ...mapActions(['paymentTopup', 'checkPin']),
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
      if (this.pin !== this.user.user_pin) {
        this.isError = true
        this.resMsg = 'Invalid Pin'
      } else if (!this.pin) {
        this.isError = true
        this.resMsg = 'Pin must be filled'
      } else {
        const setData = {
          user_id: this.user.user_id,
          history_nominal: this.nominal
        }

        this.paymentTopup(setData)
          .then((response) => {
            this.isSuccess = true
            this.resMsg = response.msg
            this.$bvModal.hide('enter-pin')
            this.nominal = ''
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            this.isError = true
            this.resMsg = error.msg
            this.$bvModal.hide('enter-pin')
            this.nominal = ''
          })
      }
    }
  },
  computed: {
    ...mapGetters({ user: 'getUserData' })
  }
}
</script>
