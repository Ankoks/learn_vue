<template>
  <a-app>
    <MyDrawer/>
    <div class="col-sm-8">
      <v-container class="about">
        <h1>This is an about page</h1>
      </v-container>
    </div>
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
