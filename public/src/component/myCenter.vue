
<template id="myCenter">
	<div>
		<div class="banner">
			<img src="../images/banner.jpg"/>

		</div>
		<!--banner end -->
		
		<div class="mycenter_list">
			<!--mycenter start-->
			<div class="mycenter">
				<router-link to="./myCenter/myIndex">
					<div class="list_left">
						<img class="headerimg" src="../images/13.jpg"/>
						<span>欧阳</span>
					</div>
					<div class="list_right">
						<span>还未记录</span>
					</div>
				</router-link>
			</div>
			<!--mycenter end-->
			
			<div class="mycenterFill"></div>
			
			<!--friendcenter start-->
			<div class="mycenter friendCenter">
				<router-link to="./myCenter/friendIndex">
					<div class="list_left">
						<img class="headerimg" src="../images/34.jpg"/>
						<div class="friend">
							<p class="friendName">丫丫</p>
							<p class="time">11:00</p>
						</div>
					</div>
					<div class="list_right">
						<img class="moodimg" src="../images/list_mood_07.png"/>
						<div class="interaction">
							<div>0</div>
							<img src="../images/list_dianz_nor.png" alt="" />
						</div>
					</div>
				</router-link>
			</div>
			<div class="mycenter friendCenter">
				<a href="">
					<div class="list_left">
						<img class="headerimg" src="../images/34.jpg"/>
						<div class="friend">
							<p class="friendName">丫丫</p>
							<p class="time">11:00</p>
						</div>
					</div>
					<div class="list_right">
						<img class="moodimg" src="../images/list_mood_07.png"/>
						<div class="interaction">
							<div>5</div>
							<img src="../images/list_dianz_pre.png" alt="" />
						</div>
					</div>
				</a>
			</div>
			<a class="share" href="">朋友太少，点击生成邀请卡，分享到朋友圈</a>
		</div>  
        <!--friendcenter end-->     
		
	</div>
</template>

<script type="text/javascript">

	var myCenter={
		template:'#myCenter'
	}
module.exports = myCenter
</script>
<style>
	body,html{
		width: 100%;
		height: 100%;
		background:#f5f5f5;
	}
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	.banner{
		width: 100%;
	}
	.banner img{
		display: block;
		width: 100%;
	}
	.mycenter{
		background: #ffffff;
		padding:0 20px;
	}
	.mycenter_list{
		height: 100%;
	}
	.mycenter a{
		height: 72px;
		display: block;
	}
	.friend{
		margin-left: 55px;
		padding-top: 28px;
	}
	.friendName{
		font-size: 16px;
		color: #000000;
		line-height: 0;
		margin-bottom: 11px;
	}
	.time{
		font-size: 12px;
		color: #999999;
	}
	.list_left{
		float: left;
		position: relative;
		height: 100%;
	}
	.headerimg{
		height: 40px;
		width: 40px;
		display: inline-block;
		border-radius: 5px;
		position: absolute;
		top: 50%;
		margin-top: -20px;
	}
	.list_left span{
		font-size: 15px;
		line-height: 72px;
		color: #000000;
		margin-left: 55px;
	}
	.list_right{
		float: right;
		height: 72px;
	}
	.list_right span{
		color: #666666;
		font-size: 15px;
		line-height: 72px;
	}
	.moodimg{
		width: 40px;
		height: 40px;
		float: left;
		margin-top: 16px;
		margin-right: 30px;
	}
	.interaction{
		float: left;
		text-align: center;
		padding-top: 13px;
		font-size: 13px;
		color: #aeaeae;
	}
	.interaction img{
		width: 26px;
		height: 26px;
	}
	.mycenterFill{
		width: 100%;
		height: 10px;
		background: #eeeeee;
	}
	.friendCenter{
		margin-bottom: 1px;
	}
	.share{
		line-height: 36px;
		height: 36px;
		font-size: 14px;
		margin: 30px 15px 0 15px;
		color: #696969;
		display: block;
		border: 1px solid rgba(0, 0, 0, 0.2);
		background: #FFFFFF;
		border-radius: 5px;
		text-align: center;
	}
</style>