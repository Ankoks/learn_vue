<template>
  <v-app>
    <TestElements/>
  </v-app>
</template>

<script>
  // @ is an alias to /src
  import TestElements from "@/components/TestElements";

  export default {
    name: "Elements",
    components: {
      TestElements
    }
  }
</script>

<style scoped>

</style>