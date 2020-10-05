<template>
  <b-container class="contain">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="7" xl="7" class="left-side">
        <router-link to="/"><h2 class="left-title">Wall-E</h2></router-link>
        <div style="margin-top: 50px">
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
      <b-col class="right" cols="12" sm="12" md="12" lg="5" xl="5">
        <h2 class="right-title">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h2>
        <p>
          Transfering money is eassier than ever, you can access Wall-E wherever
          you are. Desktop, laptop, mobile phone? we cover all of that for you!
        </p>
        <div class="form">
          <b-alert
            style="font-size: 13px; width: 350px"
            variant="warning"
            :show="isAlert"
            >{{ isMsg }}</b-alert
          >
          <b-alert
            style="font-size: 13px; width: 350px"
            variant="success"
            :show="isSuccess"
            >{{ isMsg }}</b-alert
          >
          <b-form @submit.prevent="onSubmit()">
            <div class="email" style="margin-bottom: 15px">
              <img src="../../assets/image/person.png" alt="" />
              <b-form-input
                type="text"
                required
                placeholder="First Name"
                v-model="form.user_first_name"
              ></b-form-input>
              <img src="../../assets/image/person.png" alt="" />
              <b-form-input
                type="text"
                required
                placeholder="Last Name"
                v-model="form.user_last_name"
              ></b-form-input>
            </div>
            <div class="email" style="margin-bottom: 15px">
              <img src="../../assets/image/mail.png" alt="" />
              <b-form-input
                type="email"
                required
                placeholder="Enter your email"
                v-model="form.user_email"
              ></b-form-input>
            </div>
            <div class="email" style="margin-bottom: 15px">
              <!-- <b-icon icon=""></b-icon> -->
              <img
                src="../../assets/image/phone.png"
                width="30px"
                alt=""
                style="opacity: 30%"
              />
              <b-form-input
                type="number"
                required
                placeholder="Enter your Phone"
                v-model="form.user_phone"
              ></b-form-input>
            </div>
            <div class="password" style="margin-bottom: 15px">
              <img src="../../assets/image/lock.png" alt="" />
              <b-form-input
                type="password"
                required
                placeholder="Enter your password"
                v-model="form.user_password"
              ></b-form-input>
            </div>
            <div class="password">
              <img src="../../assets/image/lock.png" alt="" />
              <b-form-input
                type="password"
                required
                placeholder="confirm password"
                v-model="form.confirm_password"
              ></b-form-input>
            </div>
            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >Sign Up
              <b-spinner
                small
                variant="light"
                type="grow"
                v-if="spinner"
              ></b-spinner
            ></b-button>
            <br />
            <div class="right-register">
              <p>
                Already have an account? Let's
                <router-link to="/login">Login</router-link>
              </p>
            </div>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  title: 'Register | Wall-e',
  name: 'Register',
  data() {
    return {
      isActivate: true,
      isAlert: false,
      isSuccess: false,
      isMsg: '',
      form: {},
      spinner: false
    }
  },
  methods: {
    ...mapActions(['register', 'activationEmail']),
    onSubmit() {
      // console.log(this.form)
      this.spinner = true
      this.register(this.form)
        .then((response) => {
          const payload = {
            user_email: this.form.user_email
          }
          this.activationEmail(payload)
            .then((result) => {
              this.form = {
                user_email: '',
                user_first_name: '',
                user_last_name: '',
                user_phone: '',
                user_password: '',
                confirm_password: ''
              }
              this.isSuccess = true
              this.isAlert = false
              this.isMsg =
                'Email has been sent !, please check your email, to activation your account'
              this.spinner = false
            })
            .catch((error) => {
              this.isSuccess = false
              this.isAlert = true
              this.isMsg = error.data.msg
              this.spinner = false
            })
        })
        .catch((err) => {
          this.isSuccess = false
          this.isAlert = true
          this.isMsg = err.data.msg
          this.spinner = false
        })
    }
  }
}
</script>

<style src="@/assets/css/auth.css"></style>
