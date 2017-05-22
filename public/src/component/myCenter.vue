<template id="myCenter">
	<div>
		<div class="banner">
			<img src="../images/banner.jpg"/>
		</div>
		<div class="mycenter_list">
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
			<div class="mycenterFill"></div>
			<div class="mycenter">
				<a href="">
					<div class="list_left">
						<img class="headerimg" src="../images/13.jpg"/>
						<span>欧阳</span>
					</div>
					<div class="list_right">
						
					</div>
				</a>
			</div>
			
		</div>
		
	</div>
</template>

<script type="text/javascript">
	var myCenter={
		template:'#myCenter'
	}
module.exports = myCenter
</script>
<style type="text/css">
	body,html{
		width: 100%;
		height: 100%;
		background:#f5f5f5;
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
	.list_left{
		float: left;
		position: relative;
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
	}
	.list_right span{
		color: #666666;
		font-size: 15px;
		line-height: 72px;
	}
	.mycenterFill{
		width: 100%;
		height: 10px;
		background: #eeeeee;
	}
	
</style>