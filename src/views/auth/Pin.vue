<template>
  <b-container class="contain">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="7" xl="7" class="left-side">
        <router-link to="/"><h2 class="left-title">Wall-E</h2></router-link>
        <div>
          <div class="img-phone"></div>
          <div class="img-phone2"></div>
        </div>
        <div class="left-text">
          <p>App That Covering Banking Needs</p>
          <span>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </span>
        </div>
      </b-col>
      <b-col
        class="right"
        cols="12"
        sm="12"
        md="12"
        lg="5"
        xl="5"
        v-if="onSuccess === true"
      >
        <b-icon
          class="icon-success"
          icon="check-circle-fill"
          variant="success"
        ></b-icon>
        <h2 class="right-title" style="margin-top: 10px">
          Your PIN Was Successfully Created
        </h2>
        <p>
          Your PIN was successfully created and you can now access all the
          features in Wall-E !
        </p>
        <div class="form">
          <router-link to="/dashboard"
            ><b-button class="right-login-btn" variant="primary"
              >Continue Now</b-button
            ></router-link
          >
        </div>
      </b-col>
      <b-col class="right" cols="12" sm="12" md="12" lg="5" xl="5" v-else>
        <h2 class="right-title" style="width: 300px">
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </h2>
        <p>
          Create 6 digits pin to secure all your money and your data in Wall-E
          app. Keep it secret and don’t tell anyone about your Wall-E account
          password and the PIN.
        </p>
        <div class="form">
          <b-alert
            style="font-size: 13px; width: 350px"
            variant="warning"
            :show="isAlert"
            >{{ isMsg }}</b-alert
          >
          <b-form @submit.prevent="onSubmit()">
            <div class="input-pin">
              <PincodeInput
                v-model="code"
                placeholder="0"
                :autofocus="false"
                :length="6"
                required
              />
            </div>
            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >continue
              <b-spinner
                small
                variant="light"
                type="grow"
                v-if="spinner"
              ></b-spinner
            ></b-button>
            <br />
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PincodeInput from 'vue-pincode-input'
export default {
  title: 'Set Pin | Wall-e',
  name: 'Pin',
  components: {
    PincodeInput
  },
  data() {
    return {
      isAlert: false,
      isMsg: '',
      code: '',
      onSuccess: false,
      spinner: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions(['patchPin']),
    onSubmit() {
      this.spinner = true
      const payload = {
        user_id: this.user.user_id,
        user_pin: this.code
      }
      this.patchPin(payload)
        .then((response) => {
          this.isAlert = false
          this.onSuccess = true
          this.spinner = false
        })
        .catch((err) => {
          this.isAlert = true
          this.onSuccess = false
          this.isMsg = err.data.msg
          this.spinner = false
        })
    }
  }
}
</script>

<style scoped>
.icon-success {
  margin-top: 100px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
}
.form .input-pin {
  margin: 0px 35px;
}
#input-2 {
  margin: 15px 0;
}
</style>
<style src="@/assets/css/auth.css"></style>
