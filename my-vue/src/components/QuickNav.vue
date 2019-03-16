<template>
	
	<div class="quick-nav">
		<div v-for='(item,index) in list'>
			<img :src="item.img"/>
			<p v-text="item.name"></p>
		</div>
	</div>
	
</template>

<script>
	
	export default {
		data(){
			return{
				list:[{
					name: '京东超市',
					img: require("@/assets/images/1.png")
				},{
					name: '海囤全球',
					img: require("@/assets/images/2.png")
				},{
					name: '京东服饰',
					img: require("@/assets/images/3.png")
				},{
					name: '京东生鲜',
					img: require("@/assets/images/4.png")
				},{
					name: '京东到家',
					img: require("@/assets/images/5.png")
				},{
					name: '充值缴费',
					img: require("@/assets/images/6.png")
				},{
					name: '9.9元拼',
					img: require("@/assets/images/7.png")
				},{
					name: '领券',
					img: require("@/assets/images/8.png")
				},{
					name: '赚钱',
					img: require("@/assets/images/9.png")
				},{
					name: '全部',
					img: require("@/assets/images/10.png")
				}]
			}
		}
	}
	
</script>

<style>
	
	.quick-nav {width: 100%; display: -webkit-flex; display: flex; flex-wrap: wrap;}
	.quick-nav > div {width: 20%; text-align: center;}
	.quick-nav > div > img {width: .8rem; margin-top: .2rem;}
</style>