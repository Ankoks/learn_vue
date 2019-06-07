<template>
  <div class="div__black">
    <h1>Profile</h1>
    <v-card class="mx-auto hide-overflow" style="max-width: 600px;">
      <v-layout>
        <v-flex xs6 d-flex>
          <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"></v-img>
        </v-flex>
        <v-flex xs6>
          <v-container grid-list-md pa-0 pl-2 style="margin: -4px 0">
            <v-layout wrap>
              <v-flex xs7 d-flex>
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"></v-img>
              </v-flex>
              <v-flex xs5 d-flex>
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"></v-img>
              </v-flex>
              <v-flex xs5 d-flex>
                <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"></v-img>
              </v-flex>
              <v-flex xs7 d-flex>
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
        <v-dialog width="400">
          <template>
            <v-icon>mdi-share-variant</v-icon>
          </template>
          <v-card>
            <v-card-title>
              <span class="title font-weight-bold">Share</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">mdi-facebook-box</v-icon>
                </v-list-tile-action>
                <v-card-title>Facebook</v-card-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="cyan">mdi-twitter-box</v-icon>
                </v-list-tile-action>
                <v-card-title>Twitter</v-card-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-tile-action>
                <v-card-title>Email</v-card-title>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
        <v-spacer></v-spacer>
        <v-rating length="10" hover>
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
</style>