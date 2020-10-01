<template>
  <div class="walle-sidemenu">
    <div class="sidemenu-collections">
      <router-link v-for="(v, i) in navData" :key="i" :to="v.to">
        <div :class="[currentPage === v.to ? 'active' : '','sidemenu-item']">
          <b-icon :icon="v.icon" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">{{v.name}}</span>
        </div>
      </router-link>
      <router-link to="#">
        <div class="sidemenu-item item-logout">
          <b-icon icon="box-arrow-right" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Logout</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navData: [
        { to: '/dashboard', name: 'Dashboard', icon: 'grid' },
        { to: '/transfer', name: 'Transfer', icon: 'arrow-up' },
        { to: '/top-up', name: 'Top Up', icon: 'plus' },
        { to: '/profile', name: 'Profile', icon: 'person' }
      ],
      currentPage: this.$route.path
    }
  }
}

</script>
<style src="../../assets/style/walle_style.css" scoped></style>
