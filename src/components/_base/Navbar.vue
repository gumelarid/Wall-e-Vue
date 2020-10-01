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
                    <div>
                      <b-dropdown variant="link" right toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                          <b-icon icon="bell"></b-icon>
                        </template>
                        <b-dropdown-item href="#">
                          <b-icon icon="arrow-down"></b-icon>
                          <div class="notif-detail">
                            <span class="notif-subject">Transfered from Joshua Lee</span><br />
                          <span class="notif-pricing">Rp 22.000</span>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          <b-icon icon="arrow-up"></b-icon>
                          <div class="notif-detail">
                            <span class="notif-subject">Transfer to Jessica Lee</span><br />
                          <span class="notif-pricing">Rp 22.000</span>
                          </div>
                        </b-dropdown-item>
                        <div align="center">
                          <router-link to="/transfer">See All</router-link>
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
