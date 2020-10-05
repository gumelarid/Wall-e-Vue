<template>
  <div class="walle-transfer">
    <b-row class="heading text-center">
      <b-col md="12" v-if="isSuccess">
        <b-img :src="require('../../../assets/illustration/success.png')" />
        <h1
          style="
            font-weight: bold;
            font-size: 22px;
            color: #4d4b57;
            margin: 10px;
          "
        >
          Transfer Success
        </h1>
      </b-col>
      <b-col md="12" v-else>
        <b-img :src="require('../../../assets/illustration/failed.png')" />
        <h1
          style="
            font-weight: bold;
            font-size: 22px;
            color: #4d4b57;
            margin: 10px;
          "
        >
          Transfer Failed
        </h1>
      </b-col>
    </b-row>
    <b-row class="heading">
      <b-col md="12">
        <p>Details</p>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Amount</p>
                <p class="phone">Rp {{ transfData.transfer_amount }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Balance Left</p>
                <p class="phone">Rp {{ transfData.balance_left }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Date &#38; Time</p>
                <p class="phone">{{ new Date() }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
              <b-col md="10" align-self="start">
                <p class="name">Notes</p>
                <p class="phone">{{ transfData.transfer_note }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row class="heading">
      <b-col md="12">
        <p>Transfer To</p>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item>
            <b-row>
              <b-col md="2">
                <b-img :src="url + transfData.user_b_picture" />
              </b-col>
              <b-col md="10" align-self="center">
                <p class="name">{{ transfData.user_b_name }}</p>
                <p class="phone">{{ transfData.user_b_phone }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="isSuccess">
      <b-col md="1" offset="4">
        <b-button><b-icon icon="share" variant="dark" /></b-button>
      </b-col>
      <b-col md="4">
        <b-button block>
          Download PDF <b-icon icon="box-arrow-in-down" />
        </b-button>
      </b-col>
      <b-col md="3">
        <router-link to="/dashboard">
          <b-button block>Back to home</b-button>
        </router-link>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col md="3" offset="9">
        <b-button block>Try Again</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isSuccess: true,
      url: process.env.VUE_APP_URL + '/'
    }
  },
  computed: {
    ...mapGetters({ transfData: 'getTransferData' })
  }
}
</script>

<style src="../../../assets/style/transfer_style.css"></style>
<style scoped>
.col-md-1 .btn-secondary {
  background: rgba(99, 121, 244, 0.15);
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  border: transparent;
  padding: 0.8rem;
}

.col-md-4 .btn-secondary {
  background: rgba(99, 121, 244, 0.15);
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  border: transparent;
  color: #6379f4;
  padding: 0.8rem;
}

.col-md-3 .btn-secondary {
  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  color: white;
  border: transparent;
  padding: 0.8rem;
}
</style>
