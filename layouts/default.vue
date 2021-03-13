<template>
    <v-app>
    	<v-content>
			<nuxt/>	
	  	</v-content>
	  	<app-footer app/>
    </v-app>
</template>

<script>
	import AppFooter from '~/components/base/footer'

	export default {
		components: {AppFooter}
	}
</script>