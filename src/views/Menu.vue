<template>
  <v-container>
    <v-btn v-on:click="debug">BTN</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        items: [
          {title: 'Dashboard', icon: 'dashboard'},
          {title: 'Account', icon: 'account_box'},
          {title: 'Admin', icon: 'gavel'}
        ]
      }
    },
    methods: {
      debug (event) {
        // eslint-disable-next-line
        console.log(event)
      }
    }
  }
</script>

<style scoped>

</style>