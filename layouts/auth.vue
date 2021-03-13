<template>
  <v-app>
  	<app-header/>
  	<app-navbar/>
  	<v-content class="white" >
	    	<nuxt/>
	  </v-content>
  </v-app>
</template>

<script>
	import AppHeader from '~/components/base/header'
	import AppFooter from '~/components/base/footer'
	import AppNavbar from '~/components/base/navbar'

	export default {
		components: {AppFooter, AppHeader, AppNavbar }
	}
</script>