<template>
	
	<div>
		
		<top-bar>
			
			<div class="flex-item" :class="{active:navIndex == index}" v-for="(item,index) in nav" :key='index' @click="navIndex=index">
				
				<span v-text="item.title"></span>
				
			</div>
			
			
		</top-bar>
		
		<bottom-bar>
			
			
		</bottom-bar>
		
		<div style="background-color: burlywood; height: 1000px;"></div>
		
		<product-sku></product-sku>
		
	</div>
	
</template>

<script>
	
	import TopBar from "@/components/TopBar.vue";
	import BottomBar from "@/components/BottomBar.vue";
	import ProductSku from "@/components/ProductSku";
	
	export default {
		data: function() {
			return {
				navIndex: 0,
				nav: [{
					title: '商品'
				}, {
					title: '评价'
				}, {
					title: '详情'
				}, {
					title: '推荐'
				}],
			};
		},
		methods: {},
		props: [],
		watch: {},
		computed: {},
		components: {
			TopBar,
			BottomBar,
			ProductSku
		},
	}
	
</script>

<style>
</style>