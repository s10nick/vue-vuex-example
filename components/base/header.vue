<template>
  <v-toolbar fixed app height="50" class="pa-0 elevation-5 color-primary">
    <v-toolbar-side-icon 
      class="ml-3" 
      @click="$store.commit('TOGGLE_VISSIBLE_NAVBAR')"
    />
    <v-toolbar-title class="white--text">Twitap</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon large @click="logout">
      <v-icon class="shell--text">fa-sign-out-alt</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import * as API from '~/api'
  export default {
    methods: {
      logout () {
        $nuxt.$loading.start()
        API.logout().then(res => {
          $nuxt.$loading.finish() 
          if (res.data.success) this.$router.push('/login')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>