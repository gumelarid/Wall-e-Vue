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
        <h2 class="right-title" style="width: 300px">
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h2>
        <p>
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </p>
        <div class="form" style="margin-top: 20px">
          <b-alert
            style="font-size: 13px; width: 350px"
            variant="warning"
            :show="isAlert"
            >{{ isMsg }}</b-alert
          >
          <b-form @submit.prevent="onSubmit()">
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
            <div class="password">
              <img src="../../assets/image/lock.png" alt="" />
              <b-form-input
                id="input-3"
                type="password"
                required
                placeholder="Enter your password"
                v-model="form.confirm_password"
              ></b-form-input>
            </div>

            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >Reset Password</b-button
            >
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  title: 'Reset Password | Wall-e',
  name: 'SetPassword',
  data() {
    return {
      isAlert: false,
      isMsg: '',
      form: {}
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    onSubmit() {
      const payload = {
        key: this.$route.query.keys,
        user_password: this.form.user_password,
        confirm_password: this.form.confirm_password
      }
      this.resetPassword(payload)
        .then((result) => {
          this.form = {
            user_password: '',
            confirm_password: ''
          }
          this.$router.push('/login')
        })
        .catch((error) => {
          this.isAlert = true
          this.isMsg = error.data.msg
        })
    }
  }
}
</script>

<style scoped src="@/assets/css/auth.css"></style>
