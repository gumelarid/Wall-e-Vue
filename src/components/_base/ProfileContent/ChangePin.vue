<template>
  <div class="personal-info">
    <p class="personal-title">Change Pin</p>
    <div class="back" @click="isBack()">
      <b-icon icon="arrow-left"></b-icon> Back
    </div>
    <div class="personal-describ" v-show="isSuccess">
      Type your new 6 digits security PIN to use in Wall-E
    </div>
    <div class="personal-describ" v-show="!isSuccess">
      Enter your current 6 digits Wall-E PIN below to continue to the next
      steps.
    </div>
    <b-container
      fluid
      class="bv-example-row"
      style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 150px"
    >
      <b-row>
        <b-col md="6" offset-md="3">
          <b-form @submit.prevent="onCheckPin()">
            <b-alert
              style="font-size: 13px"
              variant="warning"
              :show="isAlert"
              >{{ isMsg }}</b-alert
            >
            <div class="input-wrapper">
              <PincodeInput
                v-model="codePin"
                placeholder="0"
                :length="6"
                :autofocus="true"
                required
              />
            </div>
            <br />
            <b-button
              class="right-login-btn"
              v-show="!isSuccess"
              type="submit"
              variant="primary"
              >continue</b-button
            >
            <b-button
              class="right-login-btn"
              v-show="isSuccess"
              @click="onNewPin()"
              variant="primary"
              >Change Pin</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ChangePin',
  components: {
    PincodeInput
  },
  data() {
    return {
      isSuccess: false,
      isAlert: false,
      isMsg: '',
      codePin: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      userData: 'getUserData'
    })
  },
  methods: {
    ...mapActions(['check', 'getUserById', 'patchPin']),
    onCheckPin() {
      if (this.codePin === this.userData.user_pin) {
        this.isSuccess = true
        this.codePin = ''
        this.isAlert = false
        this.isMsg = ''
      } else {
        this.isAlert = true
        this.isMsg = 'Oops!, is not your pin, Please input your valid Pin'
      }
    },
    onNewPin() {
      const payload = {
        user_id: this.user.user_id,
        user_pin: this.codePin
      }
      this.patchPin(payload)
        .then((response) => {
          this.isAlert = false
          this.isSuccess = false
          this.isMsg = ''
          this.codePin = ''
          this.makeToast('success', 'Success', response.msg)
        })
        .catch((err) => {
          this.isAlert = true
          this.isSuccess = true
          this.isMsg = err.data.msg
        })
    },
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    },
    ...mapMutations([
      'setChangePassNav',
      'setPersonalInfoNav',
      'setPinNav',
      'setProfileNav'
    ]),
    isBack() {
      this.setChangePassNav(false)
      this.setPersonalInfoNav(false)
      this.setPinNav(false)
      this.setProfileNav(true)
    }
  }
}
</script>

<style>
.input-wrapper div.vue-pincode-input-wrapper input.vue-pincode-input {
  max-width: 53px !important;
}

.personal-info {
  margin: 25px 30px;
}
.personal-info .personal-title {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 25px;
  color: #3a3d42;
}
.personal-info .personal-describ {
  width: 55%;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 28px;
  color: #7a7886;
}

.back {
  margin-top: -45px;
  float: right;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #6379f4;
}

.bv-example-row {
  margin-top: 80px;
  margin-bottom: 80px;
}

@media screen and (max-width: 768px) {
  .personal-info .personal-describ {
    width: 100%;
  }
}
</style>
