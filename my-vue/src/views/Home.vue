<template>

	<div id="index">
		<search-bar></search-bar>
		<!--<h1>京东首页</h1>-->

		<swiper></swiper>

		<quick-nav></quick-nav>

		<div class="clear" style="background-color: #ccc;">
			<product v-for="(item,index) in productList"
					:key="index"
					:image="item.image"
					:title="item.title"
					:price="item.price"
					:id="item.id"></product>
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
	import axios from "axios";
	import qs from "qs";

	export default {
		data: function() {
			return {
				productList: []
			};
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
		},
		created() {
			axios.get('/product.json')
				.then(res => {
					console.log(res);
					this.productList = res.data;
				})
				.catch(err => {

				})
				.finally(() => {})
				
				console.log(qs.stringify({
					id: 1,
					user: 'admin'
				}));
		}
	}
</script>

<style>
	#index {
		padding-bottom: 1rem;
	}
</style>