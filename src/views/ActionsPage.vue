<template>
  <v-app>
    <h1>Welcome {{ usr }} <!--({{ usr2 }})--> to Axios demonstrating page</h1>
    <div v-for="(currency, index) in info" :key="index" class="currency">{{ currency.description }}:
      <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
    </div>
  </v-app>
</template>

<script>
  // import {eventEmitter} from '../main'
  import axios from 'axios';

  export default {
    name: "ActionsPage",
    data() {
      return {
        info: null
        // usr2: this.$router.currentRoute.query['name']
      }
    },
    computed: {
      usr() {
        return this.$router.currentRoute.params['name']
      }
    },
    mounted() {
      axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response.data.bpi));
    },
    filters: {
      currencydecimal(value) {
        return value.toFixed(2)
      }
    }

  }
</script>

<style scoped>

</style>