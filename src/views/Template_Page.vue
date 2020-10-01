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
            <span>content</span>
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

export default {
  title: 'Page Name | Wall-e',
  name: 'Template',
  components: {
    Navbar,
    Sidemenu,
    Footer
  }
}

</script>
