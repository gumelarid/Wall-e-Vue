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
            <Content />
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
import Content from '../components/_base/MainContent/Status.vue'

export default {
  title: 'Transfer Confirmation | Wall-e',
  name: 'Transfer',
  components: {
    Navbar,
    Sidemenu,
    Footer,
    Content
  }
}
</script>
