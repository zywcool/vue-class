<template>

	<div id="index">
			<search-bar></search-bar>
		<!--<h1>京东首页</h1>-->
		
			<swiper></swiper>
			
			<quick-nav></quick-nav>
			
			<div class="clear" style="background-color: #ccc;">
				<product v-for="n in 10" :id="n"></product>
			</div>
			
			
			<nav-bar></nav-bar>
	</div>

</template>

<script>
	
	import SearchBar from "@/components/Search.vue";
	import NavBar from "@/components/Nav.vue";
	import Swiper from "@/components/Swiper.vue";
	import QuickNav from "@/components/QuickNav.vue";
	import Product from "@/components/Product.vue";

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
			QuickNav,
			Product
		}
	}
</script>

<style>

</style>