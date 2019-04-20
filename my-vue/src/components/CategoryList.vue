<template>
	
	<div id="categoryList">
		
		<div class="aside" @touchstart="touchstartHandler" @touchmove="touchmoveHandler" @touchend="touchendHandler" ref="aside">
			<ul :class="{transition:transition}" :style="{top:topOffset+'px'}" ref="ul">
				<li :class="{active:categoryIndex == index}" v-for="(item,index) in categoryList" :key="index" @click="liClickFun(index,$event)" rel="li">{{item.title}}</li>
			</ul>
		</div>
		
	</div>
	
</template>

<script>
	
	export default {
		data(){
			return{
				categoryIndex: 0,
				start: 0,
				topOffset: 0,
				top: 0,
				threshold: 150,
				minTop: 0,
				liHeight: 0,
				transition: false
			}
		},
		mounted() {
			let asideHeight = this.$refs.aside.offsetHeight;
			let ulHeight = this.$refs.ul.offsetHeight;
			let liHeight = ulHeight / this.categoryList.length;
			var minTop = asideHeight - ulHeight;
			this.minTop = minTop;
			this.liHeight = liHeight;
		},
		methods: {
			liClickFun(index,e) {
				this.categoryIndex = index;
				var tmp = this.liHeight*index*-1;
				tmp = tmp < this.minTop ? this.minTop : tmp;
				this.top = tmp;
				this.topOffset = this.top;
				this.transition = true;
			},
			
			// 开始滑动
			touchstartHandler(e) {
				this.start = e.changedTouches[0].clientY;
			},
			// 滑动中
			touchmoveHandler(e) {
				var y = e.changedTouches[0].clientY;
				var tmp = this.top + y - this.start;
				tmp = tmp > this.threshold ? this.threshold : tmp;
				tmp = tmp < this.minTop - this.threshold ? this.minTop - this.threshold : tmp;
				this.topOffset = tmp;
				this.transition = false;
			},
			// 滑动结束
			touchendHandler(e) {
				var y = e.changedTouches[0].clientY;
				var tmp = this.top + y - this.start;
				tmp = tmp > 0 ? 0 : tmp;
				tmp = tmp < this.minTop ? this.minTop : tmp;
				this.top = tmp;
				this.topOffset = this.top;
				this.transition = true;
			},
		},
		props: {
			categoryList: {
				type: Object,
				default: []
			}
		}
	}
	
</script>

<style lang="less">
	
	#categoryList {
		.aside {
			width: 1.7rem;
			line-height: 0.92rem;
			background: #f8f8f8;
			text-align: center;
			font-size: 0.28rem;
			overflow: hidden;
			position: relative;
			ul {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
			}
			li.active {
				background-color: #fff;
				color: #e93b3d;
			}
		}
		.transition {
			transition: all .3s;
		}
	}
	
</style>