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
				<check-box v-model="agree"></check-box> 同意注册协议
			</label>
		</div>
		
		<label> <check-box v-model="hobby" value="钓鱼"></check-box> 钓鱼</label>
		<label> <check-box v-model="hobby" value="跑步"></check-box> 跑步</label>
		<label> <check-box v-model="hobby" value="看电影"></check-box> 看电影</label>
		<label> <check-box v-model="hobby" value="听音乐"></check-box> 听音乐</label>
		<label> <check-box v-model="hobby" value="看书"></check-box> 看书</label>
		<label> <check-box v-model="hobby" value="打游戏"></check-box> 打游戏</label>

	</div>
</template>

<script>
	import CheckBox from "@/components/CheckBox";
	export default {
		data() {
			return {
				hobby: [],
				agree: true
			}

		},

		components: {
			CheckBox
		}
	}
</script>

<style>

</style>