<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <router-view/>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppHeader from './components/common/AppHeader'
  import AppFooter from './components/common/AppFooter'

  export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
<style>

</style>