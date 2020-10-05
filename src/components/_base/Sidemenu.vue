<template>
  <div class="walle-sidemenu">
    <div class="sidemenu-collections">
      <router-link v-for="(v, i) in navData" :key="i" :to="v.to">
        <div :class="[currentPage === v.to ? 'active' : '', 'sidemenu-item']">
          <b-icon :icon="v.icon" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">{{ v.name }}</span>
        </div>
      </router-link>
      <router-link to="#" @click="logout">
        <div class="sidemenu-item item-logout" @click="LogoutNow()">
          <b-icon icon="box-arrow-right" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Logout</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isLogout: false,
      navData: [
        { to: '/dashboard', name: 'Dashboard', icon: 'grid' },
        { to: '/transfer', name: 'Transfer', icon: 'arrow-up' },
        { to: '/topup', name: 'Top Up', icon: 'plus' },
        { to: '/profile', name: 'Profile', icon: 'person' }
      ],
      currentPage: this.$route.path
    }
  },
  methods: {
    ...mapActions(['logout']),
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
    }
  }
}
</script>
<style src="../../assets/style/walle_style.css" scoped></style>
