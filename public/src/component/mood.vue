<template id="mood">
	<div>
		<div class="validate_box">
			<div class="validate_top">
				<h1>温馨提示</h1>
				<p>首次记录心情，必须通过手机验证哦！</p>
			</div>
			<div class="validate_div">
				<div class="validate_phone">
					<input class="input_phone" type="tel" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入您的手机号" />
					<p id="error">手机格式错误</p>
				</div>
				<button href="javascript:;" id="_phonebtn" class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">获取验证码</button>
			</div>
			

			<div class="validate_code">
				<input class="input_code" type="tel" placeholder="请输入您收到的验证码" />
				<p id="error">验证码错误</p>
				<p id="message">验证码已发送，请注意查收短信</p>
			</div>
			<div>
				<button id="sublim" href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_primary">确定</button>
			</div>
		</div>
		<div class="weui-toast _toast">
	        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
	        <p class="weui-toast_content">验证成功</p>
	    </div>
	</div>
</template>

<script type="text/javascript">
	var mood={
		template:'#mood'
	}
	module.exports=mood
</script>
<style type="text/css">
	.validate_box{
			padding:20px 15px;
			background:#fff;
			height: 100%;
		}
		.validate_top{
			margin-bottom: 32px;
		}
		.validate_top h1{
			font-size: 18px;
			color:#ff9900;
			margin-bottom: 18px;
		}
		.validate_top p{
			font-size: 15px;
			color:#878686;
			text-align: center;
		}
		input{
			height: 20px;
			outline: none;
			border: 0;
			line-height: 20px;
			margin-top: 12px;
		}
		#_phonebtn{
			width: 110px;
			height: 44px;
			font-size: 12px;
			float: right;
			padding:0;
			text-align: center;
		}
		.input_phone{
			font-size: 15px;
			color: #333333;
			
		}
		.input_code{
			font-size: 15px;
			color: #333333;
		}
		.validate_div{
			height:44px;	
			margin-bottom: 26px;
			position: relative;
		}
		.validate_phone{
			border: 1px solid #D2D2D2;
			height: 44px;
			border-radius: 5px;
			padding-left: 15px;
			padding-right: 7px;
			float: left;
			width: 180px;
			overflow: hidden;
			
		}
		#_phonebtn{
			float: right;
			font-size: 14px;
		}
		
		.validate_code{
			height:44px;
			border:1px solid #d2d2d2;
			border-radius: 5px;
			margin-bottom: 44px;
			padding-left: 15px;
			position: relative;
		}
		#error{
			font-size: 11px;
			color:#fc0303;
			position: absolute;
			left: 15px;
			top: 50px;
			display: none;
		}
		#message{
			font-size: 11px;
			color: #999999;
			position: absolute;
			top: 50px;
			left: 15px;
			display: none;
		}
		._toast{
			display: none;
		}
		input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.2);}
		input::-webkit-input-placeholder{color:rgba(0, 0, 0, 0.2);}
		input::-moz-placeholder{color:rgba(0, 0, 0, 0.2)}
		input:-moz-placeholder{color:rgba(0, 0, 0, 0.2);}
</style>