<template>
  <v-app>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occured</h1>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </v-app>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>