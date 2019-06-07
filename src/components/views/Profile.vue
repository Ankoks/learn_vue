<template>
  <div class="div__black">
    <h1>Profile</h1>
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-layout>
        <v-flex xs6 d-flex class="scale">
          <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"></v-img>
        </v-flex>
        <v-flex xs6>
          <v-container grid-list-md pa-0 pl-2 style="margin: -4px 0">
            <v-layout wrap>
              <v-flex xs7 d-flex class="scale">
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"></v-img>
              </v-flex>
              <v-flex xs5 d-flex class="scale">
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"></v-img>
              </v-flex>
              <v-flex xs5 d-flex class="scale">
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"></v-img>
              </v-flex>
              <v-flex xs7 d-flex class="scale">
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-card-title class="align-start">
        <div>
          <span class="headline">FORTNITE</span>
          <div class="grey--text font-weight-light">Video game</div>
        </div>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
        <v-spacer></v-spacer>
        <v-rating length="10" hover dense>
        </v-rating>
      </v-card-actions>
      <div class="pa-3 pt-0 caption">
        <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights
          reserved by Epic. This material is not official and is not endorsed by Epic.</em>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>
  .div__black {
    color: white;
  }
  .scale {
    z-index: 1;
    transition: 0.2s; /* Время эффекта */
  }
  .scale:hover {
    z-index: 2;
    transform: scale(1.5); /* Увеличиваем масштаб */
  }
</style>