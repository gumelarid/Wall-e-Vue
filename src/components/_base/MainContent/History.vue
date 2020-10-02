<template>
  <div class="walle-history">
    <b-row class="heading">
      <b-col md="5" align-self="center">
        <p>Transaction History</p>
      </b-col>
      <b-col md="3" offset="4" class="text-center">
        <b-dropdown id="dropdown-right" right text="Sort By" variant="primary">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <div class="title">
          <p>This Week</p>
        </div>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item v-for="(item, index) in history" :key="index">
            <b-row>
              <b-col md="1" align-self="center">
                <b-img :src="require('../../../assets/selena-gomez.jpg')" />
              </b-col>
              <b-col md="9" align-self="center">
                <p class="name">{{ item.name }}</p>
                <p class="note">{{ item.note }}</p>
              </b-col>
              <b-col md="2" v-if="item.class === 'In'" align-self="center">
                <p class="nominal" :class="item.class">+ {{ item.nominal }}</p>
              </b-col>
              <b-col md="2" v-if="item.class === 'Out'">
                <p class="nominal" :class="item.class">- {{ item.nominal }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <div class="title">
          <p>This Month</p>
        </div>
      </b-col>
      <b-col md="12">
        <div class="list-group">
          <b-list-group-item v-for="(item, index) in history" :key="index">
            <b-row>
              <b-col md="1" align-self="center">
                <b-img :src="require('../../../assets/selena-gomez.jpg')" />
              </b-col>
              <b-col md="9" align-self="center">
                <p class="name">{{ item.name }}</p>
                <p class="note">{{ item.note }}</p>
              </b-col>
              <b-col md="2" v-if="item.class === 'In'" align-self="center">
                <p class="nominal" :class="item.class">+ {{ item.nominal }}</p>
              </b-col>
              <b-col md="2" v-if="item.class === 'Out'">
                <p class="nominal" :class="item.class">- {{ item.nominal }}</p>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          align="center"
        >
          <template v-slot:page="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </template>
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<style src="../../../assets/style/history_style.css" scoped></style>

<script>
export default {
  data() {
    return {
      history: [
        {
          name: 'Samuel Suhi',
          note: 'Transfer',
          class: 'In',
          nominal: '50.000'
        },
        {
          name: 'Netflix',
          note: 'Subscription',
          class: 'Out',
          nominal: '100.000'
        }
      ],
      rows: 5,
      perPage: 1,
      currentPage: 1
    }
  }
}
</script>
