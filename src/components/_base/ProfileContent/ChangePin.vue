<template>
  <div class="personal-info">
    <p class="personal-title">Change Pin</p>
    <div class="back" @click="isBack()">
      <b-icon icon="arrow-left"></b-icon> Back
    </div>
    <div class="personal-describ">
      Enter your current 6 digits Wall-E PIN below to continue to the next
      steps.
    </div>
    <b-container
      fluid
      class="bv-example-row"
      style="padding-top: 40px; padding-bottom: 40px; margin-bottom: 150px"
    >
      <b-row>
        <b-col md="6" offset-md="3">
          <b-form>
            <div class="input-wrapper">
              <PincodeInput
                v-model="code"
                placeholder="0"
                :length="6"
                :autofocus="true"
              />
            </div>
            <br />
            <b-button class="right-login-btn" type="submit" variant="primary"
              >continue</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import { mapMutations } from 'vuex'
export default {
  name: 'ChangePin',
  components: {
    PincodeInput
  },
  data() {
    return {
      code: ''
    }
  },
  methods: {
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
