<template id="friendIndex">
	<div class="myIndex_box">
		<div class="banner index_banner">
			<img src="../images/banner.jpg"/>
			<router-link to="/me/friendsCount/friendSet" class="userHeaderImg">

				<img src="../images/13.jpg" alt="">
			</router-link>
		</div>
		<!--banner end -->

		<div class="chart_box">
			<v-chart></v-chart>
		</div>


	</div>
</template>

<script type="text/javascript">
	import chart from "./chart.vue"
	var friendIndex={
		template:'#friendIndex'
	}
    export default {
        data() {
            return {

            }
        },
		components:{
            "v-chart":chart
		}
    }
</script>
<style>

	.index_banner{
		position: relative;
	}
	.userHeaderImg{
		height:64px;
		width: 64px;
		position: absolute;
		left: 50%;
		bottom: -32px;
		margin-left: -32px;
		border-radius: 50%;
		background: rgba(255,255,255,0.6);
		padding: 2px;
	}
	.userHeaderImg img{
		height: 64px;
		width:64px;
		border-radius: 50%;
		margin: auto;
		display: block;
	}
	.chart_box{
		height:190px;
		padding:40px 0 20px 0;
		background: #ffffff;
		margin-bottom: 5px;
	}

</style>