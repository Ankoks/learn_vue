<template>
  <div class="div__black">
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-layout>
        <v-flex xs6 d-flex class="scale">
          <v-img src="https://avatars1.githubusercontent.com/u/13216857?s=460&v=4"></v-img>
        </v-flex>
        <v-flex xs6>
          <v-container grid-list-md pa-0 pl-2 style="margin: -4px 0">
            <v-layout wrap>
              <v-flex xs7 d-flex class="scale">
                <v-img src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"></v-img>
              </v-flex>
              <v-flex xs5 d-flex class="scale">
                <v-img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/1200px-Java_logo.svg.png"></v-img>
              </v-flex>
              <v-flex xs5 d-flex class="scale">
                <v-img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/1200px-Java_logo.svg.png"></v-img>
              </v-flex>
              <v-flex xs7 d-flex class="scale">
                <v-img src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-card-title class="align-start">
        <div>
          <span class="headline">Ankoks</span>
          <div class="grey--text font-weight-light">Anton Koksharov</div>
        </div>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="pl-2 grey--text text--darken-2 font-weight-light caption">{{getAge()}} years old</span>
        <v-spacer></v-spacer>
        <v-rating length="10" hover dense>
        </v-rating>
      </v-card-actions>
      <div class="pa-3 pt-0 caption">
        <em>Skills: Java, Spring Framework, SQL, JSP, Apache Maven, Apache Tomcat,
          Liquibase, FlyWay, Oracle Database, PostgreSQL, jOOQ, Hibernate</em>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods: {
      getAge() {
        let today = new Date();
        let birthDate = new Date(1992, 5, 14);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    }
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