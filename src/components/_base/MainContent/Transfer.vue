<template>
  <div class="walle-history">
    <b-row class="heading">
      <b-col md="12">
        <p>Search Receiver</p>
      </b-col>
      <b-col md="12">
        <b-input-group>
          <b-input-group-append>
            <b-input-group-text>
              <b-icon icon="search" />
            </b-input-group-text> </b-input-group-append
          ><b-input placeholder="Search receiver here"></b-input>
        </b-input-group>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item
            v-for="(item, index) in receiver"
            :key="index"
            @click="continueTransfer(item)"
          >
            <b-row>
              <b-col md="2">
                <b-img :src="require('../../../assets/selena-gomez.jpg')" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">{{ item.name }}</p>
                <p class="phone">{{ item.phone }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style src="../../../assets/style/transfer_style.css" scoped></style>

<script>
export default {
  data() {
    return {
      receiver: [
        {
          name: 'Samuel Suhi',
          phone: '+628888888'
        },
        {
          name: 'Netflix',
          phone: '+628888888'
        }
      ]
    }
  },
  methods: {
    continueTransfer(data) {
      console.log(data)
      this.$router.push('/continue')
    }
  }
}
</script>
