<template>
  <div style="background: black; height: 100%">
    <v-btn v-on:click="debug">BTN</v-btn>
    <Profile/>
  </div>
</template>

<script>
  import Profile from './Profile'

  export default {
    name: "Menu",
    components: {
      Profile
    },
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
      debug(event) {
        // eslint-disable-next-line
        console.log(event)
      }
    }
  }
</script>

<style scoped>

</style>