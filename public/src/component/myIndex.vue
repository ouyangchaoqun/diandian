<template id="myIndex">
	<div class="myIndex_box">
		<div class="banner index_banner">
			<img src="../images/banner.jpg"/>
			<router-link to="/me" class="userHeaderImg">
				<img src="../images/13.jpg" alt="">
			</router-link>
		</div>
		<!--banner end -->

		<div class="chart_box">
				<v-chart></v-chart>
		</div>
		<div class="myMood_list">
			<img class="moodImg" src="../images/list_mood_02.png" alt="">
			<div class="moodImg_right">
				<div class="moodState">不开心</div>
				<router-link to="/myCenter/myIndex/Edit" class="editMood">
					20分钟内可以补充文字和图片
					<img src="../images/bianji.png" alt="">
				</router-link>
				<div class="moodTime">
					<span >10秒前</span>
					<div class="moodFollow">
						<span class="followCount">0</span>
						<img class="followtype" src="../images/list_dianz_nor.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="myMood_list">
			<img class="moodImg" src="../images/list_mood_02.png" alt="">
			<div class="moodImg_right">
				<div class="moodState">不开心</div>
				<div class="moodContext">早上好，今天请继续加油！早上好，今天请继续加油！早上好，今天请继续加油！</div>
				<div class="moodPhotoLists">
					<div class="moodPhotoList"></div>
					<div class="moodPhotoList"></div>
					<div class="moodPhotoList"></div>

				</div>
				<div class="moodLoc">聚光中心</div>
				<div class="moodTime">
					<span >05月27日</span>
					<span >10:20</span>
					<div class="moodFollow">
						<span class="followCount">0</span>
						<img class="followtype" src="../images/list_dianz_nor.png" alt="">
						<span class="followCount">0</span>
						<img class="followtype" src="../images/comments.png" style="width: 18px;margin-top: 3px;" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="myMood_list">
			<img class="moodImg" src="../images/list_mood_02.png" alt="">
			<div class="moodImg_right">
				<div class="moodState">不开心</div>
				<div class="moodContext">早上好，今天请继续加油！早上好，今天请继续加油！早上好，今天请继续加油！</div>
				<div class="moodPhotoLists">
					<div class="moodPhotoList"></div>
					<div class="moodPhotoList"></div>

				</div>
				<div class="moodLoc">聚光中心</div>
				<div class="moodTime">
					<span >05月27日</span>
					<span >10:20</span>
					<div class="moodFollow">
						<span class="followCount">0</span>
						<img class="followtype" src="../images/list_dianz_nor.png" alt="">
						<span class="followCount">0</span>
						<img class="followtype" src="../images/comments.png" style="width: 18px;margin-top: 3px;" alt="">
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import chart from "./chart.vue"
	var myIndex={
		template:'#myIndex'
	}
    export default {
        data() {
            return {

            }
        },
		components:{
            "v-chart"	:chart
		}
    }
</script>
<style>
	.editMood{
		height:34px;
		line-height: 34px;
		font-size: 14px;
		color:#999999;
		background: #dcdcdc;
		display: block;
		padding-left: 10px;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
	}
	.editMood img{
		position: absolute;
		top:7px;
		right:10px;
		width:20px;
	}
	.myIndex_box{
		padding-bottom: 50px;
	}
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

	.myMood_list{
		background: #ffffff;
		padding:16px 10px;
		margin-bottom: 1px;
	}
	.moodImg{
		width:40px;
		height: 40px;
		display: block;
		float: left;
	}
	.moodImg_right{
		margin-left: 50px;
	}
	.moodState{
		font-size: 14px;
		color: #33cc00;
		margin-bottom: 6px;
	}
	.moodContext{
		font-size: 14px;
		color: #333333;
		line-height: 20px;
		margin-bottom: 10px;
	}
	.moodPhotoLists{
		display: flex;
		width:244px;
		height:auto;
		margin-bottom: 15px;
	}
	.moodPhotoList{
		flex-grow: 1;
		background: url("../images/imglist1.jpg") no-repeat;
		background-size: cover;
		margin-right:5px;
		min-height: 76px;
	}
	.moodLoc{
		font-size: 12px;
		color: #516591;
		margin-bottom: 5px;
	}
	.moodTime{
		font-size: 12px;
		color: #787878;
		height:20px;
		line-height: 20px;
	}
	.moodFollow{
		float: right;
	}
	.followCount{
		float: left;
		margin-left:5px;
	}
	.followtype{
		width:24px;
		margin-top:-2px;
		margin-left:5px;
		float: left;
	}
</style>