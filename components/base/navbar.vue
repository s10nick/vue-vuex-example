<template>
  <v-navigation-drawer 
    app 
    clipped
    statelesss
    width="200"
    class="color-secondary elevation-5"
    style="margin-top: 50px" 
    :value="navbarVissible"
  >   
    <v-list>
      <v-list-tile 
          avatar 
          v-for="item in menuItems" 
          :key="item.name"
          :to="item.path"
          active-class="color-secondary-hover"
      >
        <v-list-tile-avatar>
            <v-icon style="width: 20px">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'navbarVissible'
      ]),
    },
    data () {
      return {
        menuItems: [
          { title: 'Dashboard', icon: 'fas fa-chart-line', path: '/dashboard' },
          { title: 'Campaigns', icon: 'fas fa-bullhorn', path: '/campaigns' },
          { title: 'Bundles', icon: 'fas fa-images', path: '/bundles' },
          { title: 'Сhannels', icon: 'fas fa-tv', path: '/channels' },
          { title: 'Assets', icon: 'fas fa-upload', path: '/assets' }
        ]
      }
    }
  }
</script>