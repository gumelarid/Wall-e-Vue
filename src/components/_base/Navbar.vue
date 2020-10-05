<template>
  <div>
    <header>
      <nav class="walle-navbar">
        <b-container>
          <b-row>
            <b-col md="6" class="nav-title">
              <router-link to="/dashboard">
                <span>Wall-e</span>
              </router-link>
            </b-col>
            <b-col md="6" class="nav-profile">
              <div class="profile-wrapper">
                <div class="profile-image" @click="pushToProfile">
                  <img :src="`${url}/${userData.user_picture}`" alt="">
                </div>
                <div class="profile-info" @click="pushToProfile">
                  <div class="profile-name">
                    <span>{{userData.user_first_name}} {{userData.user_last_name}}</span>
                  </div>
                  <div class="profile-phone">
                    <span>{{userData.user_phone}}</span>
                  </div>
                </div>
                <div class="notification">
                  <div class="notif-icon">
                    <div>
                      <b-dropdown variant="link" right toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                          <b-icon icon="bell" @click="showNotif"></b-icon>
                        </template>
                        <b-dropdown-item href="#" v-for="(v, i) in userNotif" :key="i">
                          <b-icon icon="arrow-down"></b-icon>
                          <div class="notif-detail">
                            <span class="notif-subject">{{ v.notif_subject }}</span><br />
                          <span class="notif-pricing">Rp {{ v.transfer_amount ? formatN(v.transfer_amount) : v.transfer_amount }}</span>
                          </div>
                        </b-dropdown-item>
                        <div align="center">
                          <router-link to="/history">See All</router-link>
                        </div>
                      </b-dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </nav>
    </header>
  </div>
</template>
<style src="../../assets/style/walle_style.css"></style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      userData: 'getUserData',
      userNotif: 'getUserNotif'
    })
  },
  created() {
    this.getUserById(this.user.user_id)
  },
  methods: {
    ...mapActions(['getUserById', 'getUserNotification']),
    formatN(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    pushToProfile() {
      this.$router.push('/profile')
    },
    showNotif() {
      this.getUserNotification(this.userData.user_id)
    }
  }
}
</script>
