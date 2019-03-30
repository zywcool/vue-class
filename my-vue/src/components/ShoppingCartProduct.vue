<template>
	
	<div class="shoppiong-cart-product flex">
		
		<check-box :arr="value" :value="id" @input="onSelect"></check-box>
		
		<img :src="image" alt="" />
		
		<div class="product-info flex-item">
			<div class="pro-title" v-text="title"></div>
			<div class="clear">
				<div class="price left">￥<span v-text="price"></span></div>
				<div class="product-count right">
					<span class="minus" @click="n=n<2?1:--n;$emit('countChange',id,n);">-</span>
					<span class="count" v-text="n"></span>
					<span class="plus" @click="n+=1;$emit('countChange',id,n);">+</span>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import CheckBox from "@/components/CheckBox";
	
	export default {
		data() {
			return {
				n: 0,
				arr: []
			}
		},
		components: {
			CheckBox,
		},
		props: {
			id: {
				type: [String, Number],
				default: 0,
				required: true
			},
			image: {
				type: String,
				default: require("@/assets/images/default.png")
			},
			title: {
				type: String,
				default: '商品标题'
			},
			price: {
				type: Number,
				default: 0
			},
			count: {
				type: Number,
				default: 1
			},
			value: {
				type: Array,
				default: []
			}
		},
		methods: {
			onSelect(val) {
				this.$emit('input', val);
			}
		},
		created() {
			this.n = this.count;
			this.arr = this.value;
		},
	}
	
</script>

<style lang="less">
	
	.shoppiong-cart-product {
		padding: .2rem;
		align-items: center;
	}
	
	.shoppiong-cart-product > img {
	    display: block;
	    width: 1.5rem;
	    height: 1.5rem;
	    margin-right: .2rem;
	}
	
	.shoppiong-cart-product .check-box {
		margin-right: 0.2rem;
	}
	
	.shoppiong-cart-product .product-info .pro-title{
		font-size: .28rem;
		line-height: inherit;
	    margin-bottom: .1rem;
	    word-break: break-all;
	    position: relative;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	
	.shoppiong-cart-product .product-info .price {
		color: #e93b3d;
		font-size: .2rem;
	}
	
	.shoppiong-cart-product .product-info .price > span {
		font-size: .32rem;
	}
	
	.product-count {
		display: block;
		width: 1.8rem;
		border-radius: 0.08rem;
		overflow: hidden;
		background-color: #f7f7f7;
		span {
			display: block;
			float: left;
			width: 0.6rem;
			height: 0.6rem;
			line-height: 0.6rem;
			text-align: center;
			font-size: 0.4rem;
			&.count {
				font-size: 0.28rem;
			}
		}
	}
	
</style>