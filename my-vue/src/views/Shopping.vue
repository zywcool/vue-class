<template>
	<div id="shopping-cart">

		<top-bar>
			<div class="title">购物车</div>
		</top-bar>

		<div style="height: 1rem;"></div>
		<div class="empty" v-if="products.length==0">
			<img src="../assets/images/shoppingCartEmpty.png">
			<p>登录后可同步购物车中商品</p>
		</div>

		<Product v-if="products.length>0" 
			v-for="(item,index) in products" 
			:key="index" :id="item.id" 
			:image="item.image" 
			:title="item.title" 
			:price="item.price" 
			:count="item.count" 
			v-model="select"
			@countChange='countChange'></Product>

		<div v-text="select"></div>
		<div v-text="all"></div>

		<submit :totalPrice="totalPrice" :totalNum="totalNum" v-model='all'></submit>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar";
	import Product from "@/components/ShoppingCartProduct";
	import Submit from "@/components/ShoppingCartSubmit";
	import axios from "axios";
	import qs from "qs";

	export default {
		data() {
			return {
				select: [],
				products: [{
					id: 1,
					title: 'x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金',
					image: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg',
					kind: '套餐1',
					price: 9,
					count: 1
				}, {
					id: 2,
					title: 'x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金',
					image: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg',
					kind: '套餐1',
					price: 99,
					count: 2
				}, {
					id: 3,
					title: 'x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金',
					image: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg',
					kind: '套餐1',
					price: 999,
					count: 3
				}, {
					id: 4,
					title: 'x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金',
					image: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg',
					kind: '套餐1',
					price: 9999,
					count: 4
				}],
				all: false,
			}
		},

		computed: {
			totalNum() {
				let n = 0;
				this.select.forEach(item => {
					this.products.forEach(product => {
						if(product.id == item) {
							n += product.count;
						}
					});
				});
				return n;
			},
			totalPrice() {
				let n = 0;
				this.select.forEach(item => {
					this.products.forEach(product => {
						if(product.id == item) {
							n += product.count * product.price;
						}
					});
				});
				return n;
			}
		},
		
		watch:{
			select(val){
				if(val.length == this.products.length){
					this.all = true;
				}else{
					this.all = false;
				}
			},
			all(val){
				if(val){
					this.products.forEach(item => {
						this.select.push(item.id);
					})
				}else if(this.select.length==this.products.length){
					this.select = [];
				}
			}
		},

		methods:{
			countChange(id,n){
				// + - 改变数量的
				this.products.forEach((item,index)=>{
					if(item.id==id){
						this.products[index].count = n;
					}
				});
			}
		},

		components: {
			TopBar,
			Product,
			Submit
		},
	}
</script>

<style>
	#shopping-cart .title {
		line-height: 0.9rem;
		text-align: center;
		font-size: 0.34rem;
		color: #222;
	}
	
	#shopping-cart .empty {
		padding: 0.6rem 0 0.3rem;
		text-align: center;
	}
	
	#shopping-cart .empty img {
		width: 1.8rem;
		height: 1.8rem;
	}
	
	#shopping-cart .empty p {
		font-size: 0.32rem;
		color: rgba(51, 51, 51, .66);
		line-height: 0.48rem;
		margin: 0.22rem 0;
	}
</style>