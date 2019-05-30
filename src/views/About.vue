<template>
  <a-app>
    <MyDrawer/>
    <v-container class="about">
      <h1>This is an about page</h1>
    </v-container>
  </a-app>
</template>

<script>
  import MyDrawer from '../components/common/MyDrawer'

  export default {
    name: "about",
    components: {
      MyDrawer
    }
  }
</script>
