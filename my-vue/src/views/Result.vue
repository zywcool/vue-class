<template>

	<div id="searchResult">

		<top-bar shortcut>

			<div class="search-form">
				<i class="search-icon"></i>
				<input type="text" v-model="search" placeholder="请输入搜索内容" @focus="$router.push({path:'/search',query:{search:search}});" />
			</div>

		</top-bar>

		<div class="sort-option flex">
			<div class="sort-item flex-item">
				<span :style="{color:sortIndex>-1?'#e93b3d':'#333'}" @click="optionShow=1">{{sort[sortIndex<0?0:sortIndex]}}<i class="arrow"></i></span>
				<div class="item-options" v-if="optionShow == 1">
					<ul>
						<li v-for="(item,index) in sort" v-text="item" :key="index" :class="{active:index==sortIndex}" @click="sortIndex=index;optionShow=0"></li>
					</ul>
				</div>
			</div>
			<div class="sort-item  flex-item">
				<span>销量</span>
			</div>
			<div class="sort-item  flex-item">
				<span>服务<i class="arrow"></i></span>
			</div>
			<div class="sort-item  flex-item">
				<span @click="optionShow=4">筛选<i class="filter"></i></span>
				<div class="filter-box" :class="{active:optionShow==4}">

				</div>
				<div class="mask-dark" v-if="optionShow==4" @click="optionShow=0"></div>
			</div>
		</div>

		<div class="mask" v-if="optionShow>0&&optionShow!=4" @click="optionShow=0"></div>

		<search-product v-for="(item,index) in products" :price="item.product_price" :id="item.id" :image="'http://api.niyinlong.com'+item.product_thumb" :title="item.product_title"></search-product>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import SearchProduct from "@/components/SearchProduct";
	import axios from "axios";
	import qs from "qs";

	export default {
		data() {
			return {
				search: '',
				sortIndex: -1,
				sort: ['综合', '最新上架', '价格最低', '价格最高', '评价最多'],
				optionShow: 0,
				products: [],
			}
		},
		components: {
			TopBar,
			SearchProduct
		},
		methods:{
			searchProduct(){
				axios
				.post('http://api.niyinlong.com/api/product/searchProduct',qs.stringify({keyword:this.search}))
				.then(res=>{
					this.products = res.data;
				})
				.catch();
			}
		},
		created() {
			this.search = this.$route.query.search ? this.$route.query.search : '';
			// 通过ajax请求获取的数据
			this.searchProduct();
		}
	}
</script>

<style lang="less">
	#searchResult {
		padding-top: 1.7rem;
		.search-form {
			position: relative;
			padding: 0.15rem 0.2rem 0 0.2rem;
			/* 搜索图标 */
			.search-icon {
				display: block;
				position: absolute;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFNjQ1RDY1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFNjQ1RDc1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NEU2NDVENDVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NEU2NDVENTVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pku4YgYAAAJ4SURBVHjavJa/axRREMdfTokaSJOrRBtB/AmmUAhCNGqh13nGX2Ab0IAWSREUNeRCAmIQf3bmDxBM1FgYTougJNioRRo9JYWFQUGuiyhCOD8DszKu7273bpcMfLi3w3vvu3Nv9s00VSoVVywWXYRtgTwchh2QVX8Z3sMLmMrlcp9cTGuKEO6CEdgXc79ZGOQFXjUqvBZuw1mZ4+qzCtyHPl7gV7VJGY+vDWbgnBH9DQ/hDGyCNdAK29U3oXOcrpG1MwTUFle4BaZhr/E9gZ1wGh7AZxVZgpL4iOyUznls1ske04i3xBG+Ax06XoaL0A0LUf8v4gtwXNcsq7tD96wpLInUY54vw1id5ysvMKZrA+sh6q5awqPmTCcbEQ2JT5ozH60m3A6dJpH6XXLrMwnXSdTtPuFu45MM/ZJUlagX9UtwHo2/wvaCmHLpmd1rv094m/G9SVH4rRlv9Qlnje9bisJfzTgbdXM1uxWwjKkyga1PcX+7V9knXDK+XSkK7zHjjz7hWePLpyicD5XM/4Tt5X4SNiZV5MLYoHsF9sgnPA9zJrluphDtLS2fYnNcKPPVsvqqFvEg6oEE0Q6YaGXPwVpFQtqVcfN8DS40IHpe1wY2TrQvw/NWh577tWBIHV0F9+AAXIqqyQhuVsETxi13/ve4PZfcMM9MQxBUrAntRt7BovolgXbDMf1rm0OiQZIWiHo4TrO3TpMjSbNXDjUE/4hnqiz+Cb1wEF7XISpzDyHQC1cY2ygLBDgUt692pnodhSPaWdqG/gM8h6eIlTxnX+BnyBzZDXmpuMJRRT8q0wv6uUrCLjG/NbMSlQghEb4OP+Cu+P4IMADW+r7MRJXyTAAAAABJRU5ErkJggg==);
				background-repeat: no-repeat;
				background-size: contain;
				width: 0.3rem;
				height: 0.28rem;
				top: 0.3rem;
				left: 0.5rem;
			}
			/* 搜索框 */
			input {
				border-radius: 0.3rem;
				height: 0.6rem;
				padding-left: 0.9rem;
				font-size: 0.24rem;
				color: #232326;
				background: #f7f7f7;
				outline: none;
				border: none;
				width: 100%;
				box-sizing: border-box;
			}
		}
		.sort-option {
			width: 100%;
			position: fixed;
			top: 0.9rem;
			left: 0;
			height: 0.8rem;
			border-top: solid 1px #e5e5e5;
			border-bottom: solid 1px #e5e5e5;
			background-color: #fff;
			z-index: 9999;
			.sort-item {
				text-align: center;
				span {
					color: #333333;
					line-height: 0.8rem;
					position: relative;
					.arrow {
						position: absolute;
						right: -0.2rem;
						top: 50%;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKBAMAAABPkMOvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTMzMzMzMzMzMzMzMzM3NzdLS0svLy6qqqszMzMzMzMzMzGC86tIAAAALdFJOUwDl9UGdJhG9A2jOR0lNjwAAAEdJREFUCNdj8N4NBlsYVkMYuxgCIQxRBmZtEL3JgIFhNoixk4GBgQXEcAAyOKp3797eAGQwJO7eLQaiGVi1NwWAGQyGwkACAKGfIfA79uAMAAAAAElFTkSuQmCC) no-repeat;
						background-size: contain;
						margin-top: -1px;
						width: 0.16rem;
						height: 0.1rem;
					}
					.filter {
						position: absolute;
						top: 50%;
						right: -0.3rem;
						margin-top: -0.13rem;
						display: inline-block;
						width: 0.26rem;
						height: 0.26rem;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTMzMzM7OzszMzNDQ0MfHx8zMzDEar9oAAAAGdFJOUwDTFcQWF87ZqzkAAABeSURBVBjTYzBLQ4BkBlSeYmIAAwSwigkxMImJQnmBiQoMcEmQFANQUgQhBZJ0AJIsYCmYpCNECiIJkwJJGjAww6QYGNQSGNiSYBwGtgQQoi6P2QCZB5GmMQ9oJRAAANAtGtSzNppcAAAAAElFTkSuQmCC) no-repeat;
						background-size: contain;
					}
				}
				.item-options {
					position: absolute;
					width: 100%;
					color: #333;
					background-color: #fff;
					overflow: hidden;
					overflow-y: auto;
					z-index: 1;
					margin-top: 1px;
					ul {
						position: relative;
						li {
							text-align: left;
							padding: 0 .7rem 0 .2rem;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							position: relative;
							box-sizing: border-box;
							height: .9rem;
							line-height: .9rem;
							font-size: .28rem;
							color: #333;
							&:before {
								content: "";
								position: absolute;
								z-index: 1;
								pointer-events: none;
								background-color: #e5e5e5;
								height: 1px;
								left: 0;
								right: 0;
								bottom: 0;
							}
							&.active {
								color: #e93b3d;
							}
						}
					}
				}
				.filter-box {
					position: fixed;
					top: 0;
					right: -85%;
					bottom: 0;
					background-color: red;
					width: 85%;
					transition: right 0.3s linear;
					z-index: 9;
					&.active {
						right: 0;
					}
				}
			}
		}
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 98;
			background: rgba(0, 0, 0, .3);
		}
		.mask-dark {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 8;
			background: rgba(0, 0, 0, .7);
		}
	}
</style>