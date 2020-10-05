<template>
  <div class="walle-history">
    <Personal v-show="isPersonalInfo" />
    <ChangePassword v-show="isChangePassword" />
    <ChangePin v-show="isChangePin" />
    <div v-show="isProfile">
      <div class="profile-img">
        <img :src="url + '/' + userData.user_picture" alt="" />
        <input
          type="file"
          ref="file"
          @change="editProfile"
          style="display: none"
        />
        <div
          class="edit-picture"
          @click="$refs.file.click()"
          style="cursor: pointer"
        >
          <b-icon icon="pencil"></b-icon>
          <span>Edit</span>
        </div>
        <div class="profile-info">
          <p class="name">
            {{ userData.user_first_name }} {{ userData.user_last_name }}
          </p>
          <span class="phone">{{ userData.user_phone }}</span>
        </div>
      </div>
      <div class="navigation">
        <b-button class="mb-2 button-navigation" @click="onPersonal()">
          <span class="nav-text">Personal Information</span>
          <b-icon
            class="nav-icon"
            icon="arrow-right"
            aria-hidden="true"
            style="width: 25px; height: 25px"
          ></b-icon>
        </b-button>
        <b-button class="mb-2 button-navigation" @click="onChangePassword()">
          <span class="nav-text">Change Password</span>
          <b-icon
            class="nav-icon"
            icon="arrow-right"
            aria-hidden="true"
            style="width: 25px; height: 25px"
          ></b-icon>
        </b-button>
        <b-button class="mb-2 button-navigation" @click="onChangePin()">
          <span class="nav-text">Change Pin</span>
          <b-icon
            class="nav-icon"
            icon="arrow-right"
            aria-hidden="true"
            style="width: 25px; height: 25px"
          ></b-icon>
        </b-button>
        <b-button class="mb-2 button-navigation" @click="LogoutNow()">
          <span class="nav-text">Logout</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from '../ProfileContent/Personal'
import ChangePassword from '../ProfileContent/ChangePassword'
import ChangePin from '../ProfileContent/ChangePin'

import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Profile',
  data() {
    return {
      url: process.env.VUE_APP_URL,
      formProfile: {},
      isLogout: false
    }
  },
  components: {
    ChangePin,
    Personal,
    ChangePassword
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      userData: 'getUserData',
      isChangePassword: 'getChangePassNav',
      isChangePin: 'getPinNav',
      isProfile: 'getProfileNav',
      isPersonalInfo: 'getPersonalInfoNav'
    })
  },
  created() {},
  methods: {
    ...mapActions(['getUserById', 'patchProfile', 'logout']),
    editProfile(event) {
      this.formProfile.user_picture = event.target.files[0]
      const data = new FormData()
      data.append('user_picture', this.formProfile.user_picture)
      const payload = {
        user_id: this.user.user_id,
        formData: data
      }
      this.patchProfile(payload)
        .then((response) => {
          this.getUserById(this.user.user_id)
          this.makeToast('success', 'Success', response.msg)
          this.formProfile = {}
        })
        .catch((error) => {
          this.makeToast('danger', 'Error', error.data.msg)
        })
    },
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    },
    LogoutNow() {
      this.$confirm({
        title: 'Hello Friend',
        message: 'Are you sure want to logout?',
        button: {
          no: 'Cancel',
          yes: 'Yes'
        },
        callback: (confirm) => {
          if (confirm) {
            this.isLogout = confirm
            if (this.isLogout) {
              this.logout()
            }
          }
        }
      })
    },

    ...mapMutations([
      'setChangePassNav',
      'setPersonalInfoNav',
      'setPinNav',
      'setProfileNav'
    ]),
    onPersonal() {
      this.setChangePassNav(false)
      this.setPersonalInfoNav(true)
      this.setPinNav(false)
      this.setProfileNav(false)
    },
    onChangePassword() {
      this.setChangePassNav(true)
      this.setPersonalInfoNav(false)
      this.setPinNav(false)
      this.setProfileNav(false)
    },
    onChangePin() {
      this.setChangePassNav(false)
      this.setPersonalInfoNav(false)
      this.setPinNav(true)
      this.setProfileNav(false)
    }
  }
}
</script>

<style scoped>
.walle-history {
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px 0;
}
.profile-img {
  margin-top: 15px;
  text-align: center;
}

.profile-img img {
  height: 80px;
  width: 80px;
  border-radius: 30px;
}

.edit-picture {
  margin-top: 5px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #7a7886;
}

.edit-picture span {
  margin-left: 10px;
}
.profile-info {
  margin-top: 20px;
}

.profile-info .name {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 32px;
  color: #4d4b57;
  margin-bottom: 5px;
}
.profile-info .phone {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 27px;
  color: #7a7886;
}

.navigation {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
}

.button-navigation {
  border: none;
  width: 433px;
  height: 64px;
  background: #e5e8ed;
  border-radius: 10px;
}
.nav-text {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #4d4b57;
  float: left;
}
.nav-icon {
  float: right;
  color: #4d4b57;
}

.navigation .button-navigation:hover {
  background-color: #6379f4;
}

.button-navigation:hover > .nav-icon {
  color: white;
}
.button-navigation:hover > .nav-text {
  color: white;
}
</style>
