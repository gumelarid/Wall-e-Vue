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
          <b-form @submit.prevent="onSubmit">
            <div class="email" style="margin-bottom: 15px">
              <img src="../../assets/image/mail.png" alt="" />
              <b-form-input
                id="input-2"
                type="email"
                required
                placeholder="Enter your email"
                v-model="form.user_email"
              ></b-form-input>
            </div>
            <div class="password">
              <img src="../../assets/image/lock.png" alt="" />
              <b-form-input
                id="input-3"
                type="password"
                required
                placeholder="Enter your password"
                v-model="form.user_password"
              ></b-form-input>
            </div>
            <div class="forgot">
              <router-link to="/forgot">Forgot password?</router-link>
            </div>
            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >Login</b-button
            >
            <br />
            <div class="right-register">
              <p>
                Don't have an account? Let's
                <router-link to="/register">Sign Up</router-link>
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
  title: 'Login | Wall-e',
  name: 'Login',
  data() {
    return {
      isAlert: false,
      isMsg: '',
      form: {}
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then((response) => {
          this.makeToast('success', 'Success', response.msg)
          this.form = {
            user_email: '',
            user_password: ''
          }
          if (response.data.user_pin.length === 0) {
            this.$router.push('/pin')
          } else {
            setTimeout(() => {
              this.$router.push('/dashboard')
            }, 2000)
          }
        })
        .catch((err) => {
          console.log(err)
          this.isAlert = true
          this.isMsg = err.data.msg
        })
    },
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>

<style scoped src="@/assets/css/auth.css"></style>
