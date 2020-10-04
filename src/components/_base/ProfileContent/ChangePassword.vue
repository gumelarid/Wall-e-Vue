<template>
  <div class="personal-info">
    <p class="personal-title">Change Password</p>
    <div class="back" @click="isBack()">
      <b-icon icon="arrow-left"></b-icon> Back
    </div>
    <div class="personal-describ">
      You must enter your current password and then type your new password
      twice.
    </div>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col md="6" offset-md="3">
          <b-form @submit.prevent="updatePassword()">
            <b-alert
              style="font-size: 13px"
              variant="warning"
              :show="isAlert"
              >{{ isMsg }}</b-alert
            >
            <div class="password">
              <img src="../../../assets/image/lock.png" alt="" />
              <b-form-input
                :type="type1"
                required
                placeholder="Current Password"
                v-model="form.old_password"
              ></b-form-input>
              <b-icon
                @click="showPassword1"
                :icon="btnText1"
                style="cursor: pointer"
              ></b-icon>
            </div>
            <br />
            <div class="password">
              <img src="../../../assets/image/lock.png" alt="" />
              <b-form-input
                :type="type2"
                required
                placeholder="New Password"
                v-model="form.user_password"
              ></b-form-input>
              <b-icon
                @click="showPassword2"
                :icon="btnText2"
                style="cursor: pointer"
              ></b-icon>
            </div>
            <br />
            <div class="password">
              <img src="../../../assets/image/lock.png" alt="" />
              <b-form-input
                :type="type3"
                required
                placeholder="Repeat New Password"
                v-model="form.confirm_password"
              ></b-form-input>
              <b-icon
                @click="showPassword3"
                :icon="btnText3"
                style="cursor: pointer"
              ></b-icon>
            </div>

            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >Change Password</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'ChangePassword',
  data() {
    return {
      form: {},
      isAlert: false,
      isMsg: '',
      type1: 'password',
      btnText1: 'eye-slash',
      type2: 'password',
      btnText2: 'eye-slash',
      type3: 'password',
      btnText3: 'eye-slash'
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions(['patchPassword', 'getUserById']),
    updatePassword() {
      const setData = {
        user_id: this.user.user_id,
        form: this.form
      }
      this.patchPassword(setData)
        .then((response) => {
          this.isAlert = false
          this.isMsg = ''
          this.getUserById(this.user.user_id)
          this.form = {}
          this.makeToast('success', 'Success', response.msg)
          setTimeout(() => {
            this.setChangePassNav(false)
            this.setProfileNav(true)
          })
        })
        .catch((error) => {
          this.isAlert = true
          this.isMsg = error.data.msg
        })
    },
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    },
    showPassword1() {
      if (this.type1 === 'password') {
        this.type1 = 'text'
        this.btnText1 = 'eye'
      } else {
        this.type1 = 'password'
        this.btnText1 = 'eye-slash'
      }
    },
    showPassword2() {
      if (this.type2 === 'password') {
        this.type2 = 'text'
        this.btnText2 = 'eye'
      } else {
        this.type2 = 'password'
        this.btnText2 = 'eye-slash'
      }
    },
    showPassword3() {
      if (this.type3 === 'password') {
        this.type3 = 'text'
        this.btnText3 = 'eye'
      } else {
        this.type3 = 'password'
        this.btnText3 = 'eye-slash'
      }
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

<style scoped>
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

.password {
  width: 350px;
  position: relative;
  border-bottom: 1.5px solid#3a3d426b;
  display: flex;
  flex: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.password img {
  position: absolute;
  top: 5.5px;
  left: 2px;
}
.password input {
  padding-left: 40px;
  border: 1px solid rgba(0, 0, 0, 0);
}
.right-login-btn {
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .personal-info .personal-describ {
    width: 100%;
  }
}
</style>
