<template>
	<div id="app">
		<router-view></router-view>
		<div class="weui-tabbar" id="tabs">
			<router-link to='/mood' class="weui-tabbar__item  tab">
				<span style="display: inline-block;">
					<img src="./images/face1.png" class="weui-tabbar__icon"/>
				</span>
				<p class="weui-tabbar__label">记录心情</p>	
			</router-link>

			<router-link to='/calendar' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/rl1.png" class="weui-tabbar__icon"/>
				</span>
				<p class="weui-tabbar__label">心情日历</p>	
				</router-link>

			<router-link to='/friends' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/friend1.png" class="weui-tabbar__icon"/>
				</span>
				<p class="weui-tabbar__label">朋友心情</p>	
				</router-link>

			<router-link to='/me' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/me1.png" class="weui-tabbar__icon"/>
				</span>
				<p class="weui-tabbar__label">我的</p>	
				</router-link>

		</div>

	</div>
</template>
<script>
	export default {
		name: 'app',
		data() {
			return {

			}
		}
	}
</script>
<style>
	#tabs{
		position: fixed;
	}
	#app{
		height:100%;
	}
</style>
