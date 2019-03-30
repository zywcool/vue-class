<template>
	<div id="shopping-cart">

		<div>

			<div>爱好：{{hobby}}</div>

			<label> <input type="checkbox"  v-model="hobby" value="钓鱼" /> 钓鱼</label>
			<label> <input type="checkbox"  v-model="hobby" value="跑步" /> 跑步</label>
			<label> <input type="checkbox"  v-model="hobby" value="看电影" /> 看电影</label>
			<label> <input type="checkbox"  v-model="hobby" value="听音乐" /> 听音乐</label>
			<label> <input type="checkbox"  v-model="hobby" value="看书" /> 看书</label>
			<label> <input type="checkbox"  v-model="hobby" value="打游戏" /> 打游戏</label>

		</div>

		<div>
			<div> {{agree}}</div>
			<label>
				<input type="checkbox" v-model="agree" /> 同意注册协议
			</label>
		</div>
		
		<div>
			<div> {{agree}}</div>
			<label>
				<check-box></check-box> 同意注册协议
			</label>
		</div>

	</div>
</template>

<script>
	import CheckBox from "@/components/CheckBox";
	export default {
		data() {
			return {
				hobby: [],
				agree: false
			}

		},

		components: {
			CheckBox
		}
	}
</script>

<style>

</style>