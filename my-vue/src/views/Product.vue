<template>

	<div class="product">

		<top-bar>

			<ul class="flex top-nav">
				<li class="flex-item" :class="{active:navIndex==index}" v-for="(item,index) in nav" :key="index" @click="scroll(index)">
					<span v-text="item.title"></span>
				</li>
			</ul>
		</top-bar>

		<div style="height: 0.9rem;"></div>

		<!-- Swiper -->
		<div :class="{preview:preview}">
		<div class="swiper-container"  @click="preview=!preview;">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in images">
					<img :src="item.src" />
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>

		</div>
		<div ref="goods" style="height: 1500px;background-color: red;"></div>
		<div ref="comment" style="height: 1002px;background-color: green;"></div>
		<div ref="detail" style="height: 998px;background-color: blue;"></div>
		<div ref="recommend" style="height: 1000px;background-color: yellow;"></div>

		<product-btn></product-btn>
	</div>

</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css";
	import TopBar from "@/components/TopBar";
	import ProductBtn from "@/components/ProductBtn";

	export default {
		data() {
			return {
				navIndex: 0,
				nav: [{
					title: '商品',
					top: 0
				}, {
					title: '评价',
					top: 0
				}, {
					title: '详情',
					top: 0
				}, {
					title: '推荐',
					top: 0
				}],
				images: [{
						url: '#',
						src: require("@/assets/images/iphone1.jpg")
					},
					{
						url: '#',
						src: require("@/assets/images/iphone2.jpg")
					},
					{
						url: '#',
						src: require("@/assets/images/iphone3.jpg")
					},
					{
						url: '#',
						src: require("@/assets/images/iphone1.jpg")
					}
				],
				imageSwiper: null,
				preview: false
			};
		},
		methods: {
			scroll(index) {
				this.navIndex = index;
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				// 动画次数
				var count = 50;
				// 步进值
				var step = (this.nav[this.navIndex].top - scrollTop) / count;
				// 时间片
				var timeOut = 10;
				// 利用定时器实现一个动画
				var t = setInterval(() => {
					scrollTop += step;
					document.documentElement.scrollTop = scrollTop;
					document.body.scrollTop = scrollTop;
					count--;
					if(count <= 0) {
						clearInterval(t);
						this.navIndex = index;
					}
				}, timeOut);
			}
		},
		created() {
			window.onscroll = (e) => {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				// 判断到底滚动到那一个元素的附近了
				this.nav.forEach((item, index) => {
					if(Math.abs(item.top - scrollTop) < 20) {
						this.navIndex = index;
					}
				});

			}
		},
		watch: {
			preview(val) {
				
			}
		},
		// 整个页面渲染完成
		mounted() {
			this.nav[0].top = this.$refs['goods'].offsetTop;
			this.nav[1].top = this.$refs['comment'].offsetTop;
			this.nav[2].top = this.$refs['detail'].offsetTop;
			this.nav[3].top = this.$refs['recommend'].offsetTop;
			this.imageSwiper = new Swiper('.swiper-container', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		},
		components: {
			TopBar,
			ProductBtn

		}
	}
</script>

<style>
	.product {
		width: 100%;
	}
	
	.top-nav {
		line-height: 0.9rem;
		text-align: center;
		font-size: 0.28rem;
	}
	
	.top-nav .active {
		color: #e4393c;
	}
	
	.top-nav .active span {
		padding-left: 0.26rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 0.16rem;
	}
	
	.swiper-container {}
	
	.swiper-container img {
		width: 100%;
	}
	
	.preview {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding-top: 2rem;
		background-color: #000000;
		z-index: 9999;
	}
</style>