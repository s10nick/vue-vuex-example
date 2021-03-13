<template>
	<v-layout row wrap align-center column justify-center fill-height>
		<v-flex class="text-xs-center title mt-5">TWITAP</v-flex>
		<v-flex class="text-xs-center title mt-5">
			<v-btn flat to="/login" large>LOGIN</v-btn>
			<v-btn flat to="/register" large>REGISTER</v-btn>	
		</v-flex>
	</v-layout>
</template>

<script>
	import * as API from '~/api'
	export default {
		layout: 'default',
		middleware: ['authDashboardRedirect','authLoginRedirect'],
		// asyncData ({ store, params }) {
	  //   return API.testcors().then(res => {
		// 		console.log('res' + res.mes)
		// 		// this.$router.push('/')
    //   }).catch(err => {
    //   	console.log('err' + err)
    //   })
	  // }
	}
</script>
