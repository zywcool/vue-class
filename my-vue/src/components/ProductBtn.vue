<template>

	<div class="product-btn flex">

		<div class="icon">
			<span class="fa fa-user"></span>
			<div class="title">联系客服</div>
		</div>
		<div class="icon">
			<span class="fa fa-home"></span>
			<div class="title">进店</div>
		</div>
		<div class="icon">
			<span class="fa fa-shopping-cart"></span>
			<div class="title">购物车</div>
		</div>

		<div class="btn flex-item btn-add-cart" @click="show=true">加入购物车</div>
		<div class="btn flex-item btn-buy" @click="show=true">立即购买</div>

		<!--<product-sku v-model="show"></product-sku>-->
		<product-sku v-model="show" @ok="ok"></product-sku>

	</div>

</template>

<script>
	import ProductSku from "@/components/ProductSku";
	export default {
		data() {
			return {
				show: false,
			};
		},
		methods: {
			ok(color, size, count) {
				this.show = false;
				console.log(color);
				console.log(size);
				console.log(count);
			}
		},
		components: {
			ProductSku
		}
	}
</script>

<style>
	.product-btn {
		height: 1rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		color: #999;
		font-size: 0.24rem;
		text-align: center;
		background-color: #FFFFFF;
	}
	
	.product .icon {
		width: 14%;
		padding-top: 0.1rem;
	}
	
	.product .icon span {
		font-size: 0.4rem;
	}
	
	.product .icon .title {
		line-height: 0.4rem;
	}
	
	.product .btn {
		line-height: 1rem;
		color: #FFFFFF;
		font-size: 0.28rem;
		background-color: #e4393c;
	}
	
	.product .btn-add-cart {
		background-color: #ff9600;
	}
</style>