<template>

	<div class="search-product-box">
		<div class="search-product-item" @click="$router.push({path:'/product',query:{id:id}})">
			<div class="search-product-item-pic">
				<img :src="image" width="100%" alt="" />
			</div>
			<div class="search-product-item-info">
				<div class="search-product-item-title" v-text="title"></div>
				<div class="search-product-item-price"><strong>￥<span>{{price}}</span>.00</strong></div>
				<div class="comment" v-text="comment"></div>
				<div class="shop" v-text="shop"></div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			id: {
				type: Number,
				default: 0
			},
			image: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '商品标题'
			},
			price: {
				type: Number,
				default: 0,
			},
			comment: {
				type: String,
				default: '0条评论'
			},
			shop: {
				type: String,
				default: '京东商城'
			}
		},
	}
</script>

<style lang="less">
	.search-product-box {
		padding-top: .1rem;
		.search-product-item {
			position: relative;
			padding-left: 2.4rem;
			.search-product-item-pic {
				position: absolute;
				left: 0;
				top: 0;
				width: 2.4rem;
				height: 2.4rem;
				overflow: hidden;
				background: #f2f2f7 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA3CAMAAADZn0ObAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTNLS29LS3NLS29LS29LS2tLS28/P3dLS2tLS29LS29LS29LS29LS29PT2tLS29LS24j/drAAAAAQdFJOUwCoL8O2RM0QIPHfmHViB4aVtRYOAAAE0UlEQVRo3s2Z17arOAxAce82//+1F/eCIAnJzDp6otlsZEmWxLb9t4L3Q9jVXRbv4jemkUWW00OE8O+RyFHSi910KT4j8iE9bhIJyDon2ZPQfCb2WTSnwb36OrrfCo/PhPtn9s+wsihq5R/EikLc5ZJiditJ2TIeuTiRBR96inUsqL0C8+JO+nMmzvKevb6PdUx54WHobhBpjwkVvSHxaa3Nz7D23fgvsKJ9aV8H0AdY1h1ibTCUL/YrL7CIAwSNWElZdvsGazAIjy0ZF1LCWOCa2BErnijxK6zkR0F1fYlnWF4fJ2H7JdZxowceCmJpBAgfsFJ0IPm6XgaYp1hHdNKVyz0yeX3zjHqOtYlq/Wq9G/ggec/qUjSBx2eiSajhnHyB1bnM4wxi+7Ft5VdWwz97IzaHsBGrXemOE6+4Eatf+QYredbeHWq9g0csedIra4bZtKWmePsUyxe71bAzzovI11eGNnPDMqC9f4rV1HVKwVpQ6lgpIvglAUKzbeGrbPUzLKHgVYzTKzljeTUbv+jn3eR525C+waop32oPodnR4Im2aafFU7J6Iqt54ndYDo5/ukWzYVm8nmIc7euFOjCBV/FDLAwal+uxP36+8v3YjiPN8FLbg475GmsrxjUHTN6jIxpXztQEK9+ox3iMfRaMg59ilRBhF2XpNMIb3Ww/nfOuleN6VrGjs9MgSF2fYtGzKwpds7A0nOBpvyqQZFesZ/Rq+CxPgd3qUyx03hYdpUU/giA7W51ANBEwSuurLTVumt8bar7FMq9361/IQyz0N7H+mrbQ38QiV6lNHu+hkvt/wNIX+fzhbCbuu4qMbRSWqglFu+v52KI6N6K+xPI7FOVjuByKSVOGs15WKDtEeD3pVEI518M9UV4kYiVNxCkcQfU4Pu0R6AdYFs4gShWpKVE18fFlP+CUq6Eex2vthPcfYFGwhE3pjgr5vShX3klXOhsVSzUT903dYZlRXZgweg9L7sBOvUk1NU0cEaWeoGLScmhYXV1s/wEWnMundtoyhC86rY0RvMQ9DmL5ucR6gVVTeX6+is+d7rn6Lqnf4jMX2S6e+wovsAK4hgyokcMp5JasPRUjfXl0PlVwbl4/9h6LwU2IAIRXIEXXqT6LWKGp1yVXPWMVR6zZ9y2W1HBRjYA4ps9NbZoei1jWFv2mcpidsdjSs7rDalSrdVMAC1gYlFSUsDJOLdlOWFItLasbLNYaggx83yfayouXfUWesNqe1TapSyzZW2vNt+uWC9kWPaNmBWasFBdYKXpnrOFNzbMusPCwvRHfu4PmQ0+kDSueaZW9p2N57OjyV+YKSzIz9heJGOOgg5oNc1NijJuuYdVdrByqLRi0NNuH4RXLhCjG1G22CZqXG/X/APLs4tzP6qtR3rZtLFlPwjr3U8euyou/GD2OJhWVdUqmq5sp2YiY4jSRreaqoytW3srddoWlR8u8xxoL0+TcNVTkOGPibeFIVl3IWUW+pvexo2Xrt/DtCgtN1n2HxRfzYcGKtZGjdbdWs14TE1b8LnaBhRYnvsRS6L577NQ5E7WQVXYsr+kGYZHzP1UYixv28re1NEDe3r1du8FFi4XWv80ZSynNqbHgm4QaRXOCgmNvFlTSUq0UR+NvWhyOLFq98Vn/AMVEsylUepBvAAAAAElFTkSuQmCC) 50% no-repeat;
				background-size: 1.5rem auto;
			}
			.search-product-item-info {
				min-height: 2.4rem;
				padding-bottom: .16rem;
				box-sizing: border-box;
				padding: 0 .2rem;
				overflow: hidden;
				line-height: 1;
				.search-product-item-title {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					height: .76rem;
					word-break: break-all;
					margin-top: .16rem;
					color: #333;
					line-height: .38rem;
				}
				.search-product-item-price {
					color: #e93b3d;
					min-width: .8rem;
					margin-top: .18rem;
					display: inline-block;
					height: .36rem;
					strong {
						font-size: .24rem;
						font-weight: 400;
						span {
							font-weight: 400;
							font-size: .36rem;
						}
					}
				}
				.comment {
					font-size: 0.24rem;
					height: 0.4rem;
					padding: 0.1rem 0.6rem 0.04rem 0;
					box-sizing: border-box;
					overflow: hidden;
					line-height: 1.2;
					color: #999;
				}
				.shop {
					position: relative;
					display: inline-block;
					padding-right: 0.28rem;
					line-height: 0.28rem;
					max-width: 100%;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #999;
				}
			}
		}
	}
</style>