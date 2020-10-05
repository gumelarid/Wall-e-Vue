<template>
  <div class="personal-info">
    <p class="personal-title">Personal Information</p>
    <div class="back" @click="isBack()">
      <b-icon icon="arrow-left"></b-icon> Back
    </div>
    <div class="personal-describ">
      We got your personal information from the sign up proccess. If you want to
      make changes on your information, contact our support.
    </div>
    <div class="info">
      <p class="label">First Name</p>
      <p class="info-detail">
        <strong>{{ user.user_first_name }}</strong>
      </p>
    </div>
    <div class="info">
      <p class="label">Last Name</p>
      <p class="info-detail">
        <strong>{{ user.user_last_name }}</strong>
      </p>
    </div>
    <div class="info">
      <p class="label">Verified Email</p>
      <p class="info-detail">
        <strong>{{ user.user_email }}</strong>
      </p>
    </div>
    <div class="info">
      <p class="label">Phone Number</p>
      <p class="info-detail">
        <strong>{{ user.user_phone }}</strong>
      </p>
      <div class="button-manage" @click="editUser()">Manage</div>
    </div>
    <!-- modal -->
    <b-modal id="edit-profile" centered title="Edit Profile" hide-footer>
      <b-form @submit.prevent="updateData()">
        <div style="padding-right: 30px; padding-left: 30px">
          <b-alert style="font-size: 13px" variant="warning" :show="isAlert">{{
            isMsg
          }}</b-alert>
          <label>First Name</label>
          <b-input
            style="border: none; border-bottom: 1px solid black"
            type="text"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="First Name"
            v-model="form.user_first_name"
            required
          ></b-input>
          <br />
          <label>Last Name</label>
          <b-input
            style="border: none; border-bottom: 1px solid black"
            type="text"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Last Name"
            v-model="form.user_last_name"
            required
          ></b-input>
          <br />
          <label>Phone</label>
          <b-input
            style="border: none; border-bottom: 1px solid black"
            type="number"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Phone"
            v-model="form.user_phone"
            required
          ></b-input>
          <br />
          <b-button type="submit" variant="primary" style="border-radius: 10px"
            >Update
            <b-spinner
              small
              variant="light"
              type="grow"
              v-if="spinner"
            ></b-spinner
          ></b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- end modal -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Personal',
  data() {
    return {
      spinner: false,
      isAlert: false,
      isMsg: '',
      form: {}
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUserData'
    })
  },
  methods: {
    ...mapActions(['patchDataUser', 'getUserById']),
    editUser() {
      this.form = {
        user_first_name: this.user.user_first_name,
        user_last_name: this.user.user_last_name,
        user_phone: this.user.user_phone
      }
      this.$bvModal.show('edit-profile')
    },
    updateData() {
      this.spinner = true
      const data = {
        user_id: this.user.user_id,
        form: this.form
      }
      this.patchDataUser(data)
        .then((response) => {
          this.getUserById(this.user.user_id)
          this.isAlert = false
          this.isMsg = ''
          this.spinner = false
          this.makeToast('success', 'Success', response.msg)
          this.$bvModal.hide('edit-profile')
        })
        .catch((error) => {
          this.spinner = false
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
.info {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.info .label {
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 22px;
  color: #7a7886;
}
.info .info-detail {
  margin-bottom: 0;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 30px;
  color: #514f5b;
}
.button-manage {
  margin-top: -45px;
  float: right;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #6379f4;
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
</style>
