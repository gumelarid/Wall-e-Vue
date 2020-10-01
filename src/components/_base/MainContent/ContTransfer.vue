<template>
  <div class="walle-transfer">
    <b-row class="heading">
      <b-col md="12">
        <p>Transfer Money</p>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item>
            <b-row>
              <b-col md="2">
                <b-img :src="require('../../../assets/selena-gomez.jpg')" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">Samuel Suhi</p>
                <p class="phone">+628888888</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
      <b-col md="6">
        <p>
          Type the amount you want to transfer and then press continue to the
          next steps.
        </p>
      </b-col>
    </b-row>
    <b-row class="content text-center" align-h="center">
      <b-col md="12" align-self="center">
        <b-form-input placeholder="0.00"></b-form-input>
      </b-col>
      <b-col md="12"><p>Rp. 120.000 Available</p></b-col>
      <b-col md="7">
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text><b-icon icon="pencil" /></b-input-group-text>
          </template>
          <b-form-input placeholder="Add some notes"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="4" offset="8" class="text-right">
        <b-button>Continue</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<style src="../../../assets/style/transfer_style.css" scoped></style>

<script>
export default {
  data() {
    return {}
  }
}
</script>
