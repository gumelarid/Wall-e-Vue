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
                <b-img :src="require('../../../assets/selena-gomez.jpg')" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">Samuel Suhi</p>
                <p class="phone">+628888888</p>
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
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Amount</p>
                <p class="phone">Rp100000</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Balance Left</p>
                <p class="phone">Rp20000</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Date &#38; Time</p>
                <p class="phone">May 11, 2020 - 12.20</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Notes</p>
                <p class="phone">For buying some socks</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
      <b-col md="4" offset="8" class="btn-continue text-right">
        <b-button v-b-modal.enter-pin>Continue</b-button>

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

<style src="../../../assets/style/transfer_style.css"></style>

<script>
import PincodeInput from 'vue-pincode-input'

export default {
  components: {
    PincodeInput
  },
  data() {
    return {
      pin: ''
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('enter-pin')
    }
  }
}
</script>
