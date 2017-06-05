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