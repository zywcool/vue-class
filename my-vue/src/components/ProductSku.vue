<template>
	<div class="sku mask" v-show="value" @click="close">
		<transition name="slide">
			<div class="main" v-show="value" @click.stop>

				<span class="close-btn" @click="close"></span>

				<div class="header">
					<img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/22674/37/11177/192926/5c8cdd05E09a553f4/877b6f05c03f2a60.jpg" alt="" />
					<p class="price"> ￥<em>128.25</em> </p>
					<p class="selected"><span>已选:</span> {{color[colorIndex]}} {{size[sizeIndex]}} {{count}}件</p>
				</div>
				<div class="body">

					<div class="sku-kind">
						颜色:
					</div>

					<div class="sku-choose">
						<span :class="{active:colorIndex==index}" @click="colorIndex=index;" v-for="(item,index) in color" :key="index" v-text="item"></span>
					</div>

					<div class="sku-kind">
						尺码:
					</div>
					<div class="sku-choose">
						<span :class="{active:sizeIndex==index}" @click="sizeIndex=index;" v-for="(item,index) in size" :key="index" v-text="item"></span>
					</div>
					<div class="sku-kind">
						数量:

						<div class="choose-count right">
							<span class="minus" @click="count=count==1?1:--count;">-</span>
							<span class="count" v-text="count"></span>
							<span class="plus" @click="count++;">+</span>
						</div>
					</div>

				</div>

				<div class="btn-ok" @click="ok">确定</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color: ['红色', '黑色', '白色', '绿色', '灰色'],
				colorIndex: 0,
				size: ['37', '38', '39', '40', '41', '42'],
				sizeIndex: 0,
				count: 1
			};
		},
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			close() {
				this.$emit('input', false);
			},
			ok() {
				this.$emit('ok', this.color[this.colorIndex], this.size[this.sizeIndex], this.count);
			}
		}
	}
</script>

<style>
	.sku {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .7);
		z-index: 999999;
	}
	
	.sku .close-btn {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 0.3rem;
		height: 0.3rem;
		padding: 0.2rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaAgMAAADUJKRdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURQAAAAAAAEdwTAAAAA+kCggAAAAEdFJOUyoFADPFB4o9AAAAbklEQVQI11WPoRXAIAxET1VVVLMFe8R1gWrWyQKIGJiiin26Qa88ThTz3yM/yQVb52tA/hg3rJB+wBNpF2KwnCsahRgVnYInkoIVMgZLZMtUyW5nmvS9TMbTf9T/8tSnOZq79mivciiXcir3uuMFX3BjVwgV70oAAAAASUVORK5CYII=) 50% no-repeat;
		background-size: 0.22rem auto;
	}
	
	.sku .header {
		text-align: left;
		height: 1.4rem;
		padding: 0 0 0.2rem 2.2rem;
	}
	
	.sku .header img {
		position: absolute;
		left: 0.2rem;
		top: -0.4rem;
		border-radius: 0.04rem;
		width: 1.8rem;
		height: 1.8rem;
	}
	
	.sku .header .price {
		margin: 0;
		display: inline-block;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #e4393c;
		font-size: 0.2rem;
	}
	
	.sku .header .price em {
		font-size: 0.32rem;
	}
	
	.sku .header .selected {
		word-break: break-all;
		font-size: 0.24rem;
		color: #333;
		line-height: 1.4em;
		padding-right: 0.2rem;
	}
	
	.sku .header .selected span {
		color: #999;
	}
	
	.mask .main {
		width: 100%;
		height: 9.2rem;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.sku .body {
		overflow-y: auto;
	}
	
	.mask .sku-kind {
		text-align: left;
		font-size: 0.24rem;
		color: #999;
		margin: 0 0.2rem;
		height: 0.8rem;
		line-height: 0.8rem;
	}
	
	.sku .sku-choose {
		overflow: hidden;
		margin-bottom: 0.06rem;
	}
	
	.sku .sku-choose span {
		display: inline-block;
		padding: 0 0.2rem;
		min-width: 0.4rem;
		max-width: 5.4rem;
		overflow: hidden;
		height: 0.6rem;
		line-height: 0.6rem;
		float: left;
		text-align: center;
		margin-left: 0.2rem;
		margin-bottom: 0.2rem;
		border-radius: 0.08rem;
		color: #333;
		background-color: #f7f7f7;
		font-size: 0.3rem;
	}
	
	.sku .sku-choose span.active {
		background-color: #e4393c;
		color: #fff;
	}
	
	.sku .choose-count span {
		display: inline-block;
		position: relative;
		max-width: 0.6rem;
		min-width: 0.6rem;
		height: 0.6rem;
		line-height: 0.6rem;
		background: #f7f7f7;
		text-align: center;
	}
	
	.sku .btn-ok {
		height: 1rem;
		line-height: 1rem;
		color: #fff;
		font-size: 0.32rem;
		text-align: center;
		background-color: #e4393c;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.sku .slide-enter {
		bottom: -9.2rem;
	}
	
	.sku .slide-enter-active {
		transition: bottom 0.3s;
	}
	
	.sku .slide-enter-to {
		bottom: 0;
	}
	
	.sku .slide-leave {}
	
	.sku .slide-leave-active {}
	
	.sku .slide-leave-to {}
</style>