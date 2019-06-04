<template>
  <h1>Welcome {{ usr }} <!--({{ usr2 }})--> to Axios demonstrating page</h1>
</template>

<script>
  // import {eventEmitter} from '../main'

  export default {
    name: "ActionsPage",
    data() {
      return {
        // usr2: this.$router.currentRoute.query['name']
      }
    },
    computed: {
      usr() {
        return this.$router.currentRoute.params['name']
      }
    }
  }
</script>

<style scoped>

</style>