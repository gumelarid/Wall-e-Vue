<template>
  <div class="walle-sidemenu">
    <div class="sidemenu-collections">
      <router-link to="/dashboard">
        <div class="sidemenu-item active">
          <b-icon icon="grid" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Dashboard</span>
        </div>
      </router-link>
      <router-link to="/transfer">
        <div class="sidemenu-item">
          <b-icon icon="arrow-up" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Transfer</span>
        </div>
      </router-link>
      <router-link to="/top-up">
        <div class="sidemenu-item">
          <b-icon icon="plus" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Top Up</span>
        </div>
      </router-link>
      <router-link to="/profile">
        <div class="sidemenu-item">
          <b-icon icon="person" class="sidemenu-icon"></b-icon>
          <span class="sidemenu-title">Profile</span>
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

<style src="../../assets/style/walle_style.css" scoped></style>
