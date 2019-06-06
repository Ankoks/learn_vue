<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-tile @click="routeToLogin">
          <v-list-tile-action>
            <v-icon small>launch</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="routeToMenu">
          <v-list-tile-action>
            <v-icon>toc</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Menu</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="routeToHome">
          <v-list-tile-action>
            <v-icon small>location_city</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home (Vuetify)</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="routeToElements">
          <v-list-tile-action>
            <v-icon small>camera</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Start testing Vue elements</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="routeToAbout">
          <v-list-tile-action>
            <v-icon small>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/login" flat>
          <v-icon small>launch</v-icon>
          <!-- only for example (router links may be in v-btn) -->
          <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn to="/menu" flat>
          <v-icon>toc</v-icon>Menu</v-btn>
        <v-btn to="/" flat>
          <v-icon small>location_city</v-icon>Home (Vuetify)</v-btn>
        <v-btn to="/elements" flat>
          <v-icon small>camera</v-icon>Start testing Vue elements</v-btn>
        <v-btn to="/about" flat>
          <v-icon small>help</v-icon>About</v-btn>
      </v-toolbar-items>
      <v-btn flat
             href="https://www.google.ru/?hl=ru"
             target="_blank">
        <v-icon small>public</v-icon>
        <span class="mr-2">Google</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        drawer: false
      }
    },
    methods: {
      routeToLogin() {
        this.$router.push({name: 'login'});
      },
      routeToMenu() {
        this.$router.push({name: 'menu'});
      },
      routeToHome() {
        this.$router.push({name: 'home'});
      },
      routeToElements() {
        this.$router.push({name: 'elements'});
      },
      routeToAbout() {
        this.$router.push({name: 'about'});
      },
    }
  }
</script>

<style scoped>

</style>