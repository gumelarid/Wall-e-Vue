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
                <div class="profile-image">
                  <img src="../../assets/selena-gomez.jpg" alt="">
                </div>
                <div class="profile-info">
                  <div class="profile-name">
                    <span>Selena Gomez</span>
                  </div>
                  <div class="profile-phone">
                    <span>+62 8139 3877 7946</span>
                  </div>
                </div>
                <div class="notification">
                 <div class="notif-icon">
                   <b-icon icon="bell"></b-icon>
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

<style src="../../assets/style/walle_style.css" scoped></style>
