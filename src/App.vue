<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/">Home (Vuetify)</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/elements">Start testing Vue elements</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
      <v-btn flat
             href="https://www.google.ru/?hl=ru"
             target="_blank">
        <span class="mr-2">Google</span>
      </v-btn>
    </v-toolbar>
    <!-- Need for router -->
    <v-content>
      <router-view/>
    </v-content>
    <!--  end of router  -->
  </v-app>
</template>

<script>

</script>
<style>

</style>