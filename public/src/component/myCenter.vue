
<template id="myCenter">
	<div>
		<div class="banner">
			<img src="../images/banner.jpg"/>
		</div>
		<!--banner end -->
		
		<div class="mycenter_list">
			<!--mycenter start-->
			<div class="mycenter">
				<a href="">
					<div class="list_left">
						<img class="headerimg" src="../images/13.jpg"/>
						<span>欧阳</span>
					</div>
					<div class="list_right">
						<span>还未记录</span>
					</div>
				</a>
			</div>
			<!--mycenter end-->
			
			<div class="mycenterFill"></div>
			
			<!--friendcenter start-->
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
							<div>0</div>
							<img src="../images/list_dianz_nor.png" alt="" />
						</div>
					</div>
				</a>
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
<