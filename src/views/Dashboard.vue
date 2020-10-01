<template>
  <div>
    <Navbar />
    <div class="whale-body">
      <b-container>
        <b-row>
          <b-col md="3">
            <Sidemenu />
          </b-col>
          <b-col md="9">
            <div class="card-balance">
              <b-row>
                <b-col md="9">
                  <div class="title">
                    <span>Balance</span>
                  </div>
                  <div class="card-amount">
                    <span>Rp120.000</span>
                  </div>
                  <div class="card-phone">
                    <span>+62 813-9387-7946</span>
                  </div>
                </b-col>
                <b-col md="3" class="action-section">
                  <router-link to="/transfer" class="card-btn">
                    <b-icon icon="arrow-up"></b-icon>
                    <span>Transfer</span>
                  </router-link>
                  <router-link to="/top-up" class="card-btn">
                    <b-icon icon="plus"></b-icon>
                    <span>Top Up</span>
                  </router-link>
                </b-col>
              </b-row>
            </div>
            <DashboardCard />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/_base/Navbar.vue'
import Sidemenu from '../components/_base/Sidemenu.vue'
import Footer from '../components/_base/Footer.vue'
import DashboardCard from '../components/_base/DashboardCard.vue'

export default {
  title: 'Dashboard | Wall-e',
  name: 'Template',
  components: {
    Navbar,
    Sidemenu,
    Footer,
    DashboardCard
  }
}

</script>
<style src="../assets/style/dashboard.css" scoped></style>
