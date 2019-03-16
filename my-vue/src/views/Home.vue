<template>

	<div id="index">
			<search-bar></search-bar>
		<!--<h1>京东首页</h1>-->
		
			<swiper></swiper>
			
			<quick-nav></quick-nav>
			
			<nav-bar></nav-bar>
	</div>

</template>

<script>
	
	import SearchBar from "@/components/Search.vue";
	import NavBar from "@/components/Nav.vue";
	import Swiper from "@/components/Swiper.vue";
	import QuickNav from "@/components/QuickNav.vue";

	export default {
		data: function() {
			return {};
		},
		methods: {},
		props: [],
		watch: {},
		computed: {},
		components: {
			SearchBar,
			NavBar,
			Swiper,
			QuickNav
		}
	}
</script>

<style>

</style>