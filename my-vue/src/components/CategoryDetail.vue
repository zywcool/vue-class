<template>

	<div class="category-content" ref="category-content" @touchstart="touchstartHandler" @touchmove="touchmoveHandler" @touchend="touchendHandler">

		<div class="scroll" :class="{transition:transition}" :style="{top:topOffset+'px'}" ref="content-scoll">
			<div style="background-color: red;"></div>
			<div style="background-color: blue;"></div>
			<div style="background-color: green;"></div>
			<div style="background-color: yellow;"></div>
		</div>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				start: 0,
				topOffset: 0,
				top: 0,
				limitTop: 0,
				transition: false
			};
		},
		methods: {
			// 开始滑动
			touchstartHandler(e) {
				this.start = e.changedTouches[0].clientY;
				this.limitTop = this.$refs['category-content'].offsetHeight - 150 - this.$refs['content-scoll'].offsetHeight;
				this.transition = false;
			},
			// 滑动中
			touchmoveHandler(e) {
				var y = e.changedTouches[0].clientY;
				var tmp = this.top + y - this.start;
				tmp = tmp > 150 ? 150 : tmp;
				tmp = tmp < this.limitTop ? this.limitTop : tmp;
				this.topOffset = tmp;

			},
			// 滑动结束
			touchendHandler(e) {
				var y = e.changedTouches[0].clientY;
				var tmp = this.top + y - this.start;
				tmp = tmp > 0 ? 0 : tmp;
				tmp = tmp < (this.limitTop + 150) ? (this.limitTop + 150) : tmp;
				this.top = tmp;
				this.topOffset = this.top;
				this.transition = true;
			}
		}
	}
</script>

<style>
	.category-content {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.category-content .scroll {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: red;
	}
	
	.category-content .scroll > div {
		height: 500px;
	}
	
	.category-content .transition {
		transition: top 0.3s linear;
		-webkit-transition: top 0.3s linear;
	}
</style>