<template>
  <v-app>
    <MyToolbar/>
<!--    <MyDrawer/>-->
  </v-app>
</template>

<script>
  import MyToolbar from './components/common/MyToolbar'
  // import MyDrawer from './components/common/MyDrawer'

  export default {
    name: "App",
    components: {
      MyToolbar,
      // MyDrawer
    }
  }
</script>
<style>

</style>