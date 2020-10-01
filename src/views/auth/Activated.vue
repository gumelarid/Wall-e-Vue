<template>
  <div class="contain">
    <p>
      Thank you, your account is Activated, please
      <router-link to="/login">click here</router-link> to Login
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  title: 'Activate account | Wall-e',
  name: 'Activated',
  methods: {
    ...mapActions(['activationUser'])
  },
  created() {
    this.activationUser(this.$route.query.keys)
  }
}
</script>

<style scoped>
.contain {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contain p {
  max-width: 50%;
  padding: 15px;
  background-color: #f1f1ff;
}
</style>
