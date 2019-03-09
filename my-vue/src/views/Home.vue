<template>

	<div id="index">
			<search-bar></search-bar>
		<!--<h1>京东首页</h1>-->
			<div style="height: 20rem; background-color: cornflowerblue;"></div>
			
			<nav-bar></nav-bar>
	</div>

</template>

<script>
	
	import SearchBar from "@/components/Search.vue";
	import NavBar from "@/components/Nav.vue";

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
			NavBar
		}
	}
</script>

<style>

</style>