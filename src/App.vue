<template>
  <div id="app">
    <vue-confirm-dialog></vue-confirm-dialog>
    <router-view />
  </div>
</template>
<<<<<<< HEAD

<style>
/*PRIMARY: #6379F4*/
/*DARK: #3A3D42*/
/*WHITE: #FFFFFF*/
/*ERROR: #FF5B37*/
/*SECONDARY: Primary*/

/*#FONT: Nunito Sans*/
/*========================*/

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif !important;
    background: #fbfbfb !important;
}
</style>
<style src="./assets/style/scrollbar.css"></style>
=======
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  },
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  }
}
</script>
>>>>>>> aaa6a9b81996e289e4374aec44ee26730dede384
