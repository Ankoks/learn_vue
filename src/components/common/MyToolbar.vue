<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/login" flat>
          <!-- only for example (router links may be in v-btn) -->
          <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn to="/menu" flat>Menu</v-btn>
        <v-btn to="/" flat>Home (Vuetify)
        </v-btn>
        <v-btn to="/elements" flat>Start testing Vue elements</v-btn>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
      <v-btn flat
             href="https://www.google.ru/?hl=ru"
             target="_blank">
        <span class="mr-2">Google</span>
      </v-btn>
    </v-toolbar>
    <div><!-- Need for router -->
      <v-content>
        <router-view/>
      </v-content>
      <!--  end of router  -->
    </div>
  </v-app>
</template>

<script>
  export default {
    name: "MyToolbar"
  }
</script>

<style scoped>

</style>