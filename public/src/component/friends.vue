<template id="friends">
	<div class="friends_box">
		<div class="friend_header">
			<router-link to="/me/friendsCount">以下是我关注的朋友，猜猜TA是谁？</router-link>
		</div>
		<div class="friends_mood">
			<img class="friendHeaderImg" src="../images/13.jpg" alt="">
			<div class="friendState">
				<span class="mood_state">一般</span>
				<p class="mood_text">以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁</p>
				<ul class="friendImgList">
					<li><img src="../images/imglist1.jpg" alt=""></li>
					<li><img src="../images/imglist2.jpg" alt=""></li>
					<li><img src="../images/imglist3.jpg" alt=""></li>
				</ul>
				<div class="friendsLoc">聚光中心</div>
				<div class="stateBottom">
					<div class="time">5月21日 11:00</div>
					<div class="time_right">
						<span class="frined_zan">0</span>
						<img class="time_rightimg1" src="../images/list_dianz_nor.png" alt="" style="width: 26px">
						<span class="frined_com">0</span>
						<img class="time_rightimg2" src="../images/comments.png" alt="" style="width: 20px">
					</div>
				</div>

				<div class="commont_box">
					<div class="arrow"></div>
					<div class="friend_commont">
						<span class="name">小王:</span>
						<span class="commont">下雨天和睡觉更配哦...</span>
					</div>
					<div class="me_commont">
						<span class="name">欧阳</span>  回复  <span class="name">小王:</span><span class="commont">英雄所见略同啊...</span>
					</div>
					<div class="friend_commont">
						<span class="name">丫丫:</span>
						<span class="commont">每天早上都在和床做斗争，唉</span>
					</div>
					<div class="me_commont">
						<span class="name">欧阳</span>  回复  <span class="name">丫丫:</span><span class="commont">哈哈</span>
					</div>
				</div>
			</div>
		</div>
		<div class="friends_mood">
			<img class="friendHeaderImg" src="../images/13.jpg" alt="">
			<div class="friendState">
				<span class="mood_state">一般</span>
				<p class="mood_text">以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁以下是我关注的朋友，猜猜TA是谁</p>
				<ul class="friendImgList">
					<li><img src="../images/imglist1.jpg" alt=""></li>
					<li><img src="../images/imglist2.jpg" alt=""></li>
					<li><img src="../images/imglist3.jpg" alt=""></li>
				</ul>
				<div class="friendsLoc">聚光中心</div>
				<div class="stateBottom">
					<div class="time">5月21日 11:00</div>
					<div class="time_right">
						<span class="frined_zan">0</span>
						<img class="time_rightimg1" src="../images/list_dianz_nor.png" alt="" style="width: 26px">
						<span class="frined_com">0</span>
						<img class="time_rightimg2" src="../images/comments.png" alt="" style="width: 20px">
					</div>
				</div>

				<div class="commont_box">
					<div class="arrow"></div>
					<div class="friend_commont">
						<span class="name">小王:</span>
						<span class="commont">下雨天和睡觉更配哦...</span>
					</div>
					<div class="me_commont">
						<span class="name">欧阳</span>  回复  <span class="name">小王:</span><span class="commont">英雄所见略同啊...</span>
					</div>
					<div class="friend_commont">
						<span class="name">丫丫:</span>
						<span class="commont">每天早上都在和床做斗争，唉</span>
					</div>
					<div class="me_commont">
						<span class="name">欧阳</span>  回复  <span class="name">丫丫:</span><span class="commont">哈哈</span>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script type="text/javascript">
	var friends={
		template:'#friends'
	}
	module.exports=friends
</script>
<style>
	.friends_box{
		padding-bottom: 50px;
	}
	.friend_header{
		border-bottom:1px solid #eeeeee;
		background:#fff;
		padding:10px 0;
	}
	.friend_header a{
		width:90%;
		height:24px;
		line-height:24px;
		text-align:center;
		background:#eeeeee;
		margin:0 auto;
		font-size:12px;
		border:1px solid #eeeeee;
		border-radius:5px;
		color:#999999;
		display: block;
	}
	.friends_mood{
		margin-top:1px;
		background: #ffffff;
		padding:10px 20px 10px 10px;
	}
	.friendHeaderImg{
		width:40px;
		height: 40px;
		display: block;
		border-radius: 3px;
		float: left;
	}
	.friendState{
		margin-left:55px;
	}
	.mood_state{
		font-size:15px;
		color:#ff6600;
		margin-bottom: 10px;
		display: block;
	}
	.mood_text{
		font-size:15px;
		color:#333333;
		margin-bottom: 10px;
	}
	.stateBottom{
		height: 30px;
		font-size: 12px;
	}
	.time{
		font-size:12px;
		color:#999999;
		float: left;
		line-height: 30px;
	}
	.time_right{
		color: #999999;
		float: right;
	}
	.friendsLoc{
		font-size:12px;
		color:#516591;
	}
	.time_right img{
		float: left;
	}
	.frined_zan{
		float: left;
		margin-right:3px;
	}
	.frined_com{
		float: left;
		margin-right:5px;
	}
	.time_rightimg1{
		width: 22px;
		margin-top:-3px;
		margin-right:10px;
	}
	.time_rightimg2{
		margin-top:2px;
		width:18px;
	}
	.friendImgList{
		overflow: hidden;
		margin-bottom: 15px;
	}
	.friendImgList li{
		float: left;
	}
	.friendImgList img{
		display: block;
		margin-right: 5px;
		height:80px;
		width:80px;
	}
	.commont_box{
		padding-top:10px;
		background: #f9f9f9;
		border-radius: 5px;
		position: relative;
		margin-top:10px;
		padding-bottom: 15px;
		padding-left:10px;
	}
	.arrow{
		width:15px;
		height:15px;
		background: #f9f9f9;
		position: absolute;
		left:20px;
		top:-6px;
		transform:rotate(45deg);
	}
	.friend_commont{
		margin-bottom: 6px;
	}
	.name{
		font-size: 14px;
		color:#666699;

	}
	.commont{
		font-size: 14px;
		color:#333333;
	}
	.me_commont{
		font-size: 13px;
		margin-bottom: 6px;
	}
</style>