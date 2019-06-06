<template>
  <div>
    <v-snackbar color="cyan darken-2"
                v-model="snackbar"
                :auto-height="true"
                :right="true"
                :top="true"
                :timeout=0>
      {{ snackBarMessage }}
      <v-btn flat
             @click="snackbar = false">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-snackbar>
    <h1>Welcome {{ usr }} <!--({{ usr2 }})--> to Axios demonstrating page</h1>
    <div v-for="(currency, index) in info" :key="index" class="currency">{{ currency.description }}:
      <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
    </div>

    <div>
      <h1>Axios request from back-end: </h1>
      <v-text-field v-model="inputValue"
                    label="Enter some text"></v-text-field>
      <v-btn @click="getInfo">Get</v-btn>
      <span>{{ backEndInfo }}</span>
    </div>
  </div>
</template>

<script>
  // import {eventEmitter} from '../main'
  import axios from 'axios';

  export default {
    name: "ActionsPage",
    data() {
      return {
        info: null,
        loading: true,
        backEndInfo: null,
        inputValue: '',
        snackbar: false,
        snackBarMessage: ''
        // usr2: this.$router.currentRoute.query['name']
      }
    },
    methods: {
      getInfo() {
        this.loading = true;
        this.snackbar = false;
        console.log(this.inputValue);
        const arithmeticURL = 'http://localhost:8090/arithmetic/'
        axios
            .get(arithmeticURL + this.inputValue)
            .then(response => {
              if (!isNaN(response.data)) {
                this.backEndInfo = response.data
              } else {
                this.backEndInfo = ''
                this.snackbar = true;
                // this.snackBarMessage = response.data.backEndMessage
                this.snackBarMessage = response.data.frontEndMessage
              }
            })
            .catch(error => {
              // console.log(error);
              this.snackbar = true;
              this.snackBarMessage = error
            })
            .finally(() => (this.loading = false))
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
          .then(response => {
            this.info = response.data.bpi
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => (this.loading = false))
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