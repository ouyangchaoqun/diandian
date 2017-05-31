<template id="validate">
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
	var validate={
		template:'#validate'
	}
    export default {
        data() {
            return {

            }
        },
        mounted:function () {
            $(function() {
                $('.input_phone').keyup(function() {
                    var length = $('.input_phone').val().length;
                    if(length == 11) {
                        if(checkUserPhoneReg()) {
                            $('#error').hide();
                            //手机号码验证成功后获取验证码btn变可点击
                            $('#_phonebtn').removeClass('weui-btn_plain-disabled');
                        } else {
                            $('#error').show();
                            $('#_phonebtn').addClass('weui-btn_plain-disabled');
                        }
                    } else {
                        $('#_phonebtn').addClass('weui-btn_plain-disabled');
                        $('#error').hide();
                    }
                });
                $('.input_code').keyup(function() {
					/*if(checkIdCodeReg()) {
					 $('#sublim').removeClass('weui-btn_disabled');
					 } else {
					 $('#sublim').addClass('weui-btn_disabled');
					 }*/
                    var len = $(".input_code").val().length;
                    console.log(len)
                    if(len == 4) {
                        $('#sublim').removeClass('weui-btn_disabled');
                    } else {
                        $('#sublim').addClass('weui-btn_disabled');
                    }
                });

                //获得焦点
                $('.input_phone').focus(function() {
                    $('#error').hide();
                });

                //封装验证手机号码
                function checkUserPhoneReg() {
                    var regExpP = /^1[34578]\d{9}$/; //手机号

                    if(regExpP.test($('.input_phone').val())) { //test检测$('#user_phone').val()是否符合regExp格式
                        //$('#err-lgU').html('√ 检测通过').css('color', 'green');
                        return true;
                    }
                    return false;
                }
                //封装验证码
                function checkIdCodeReg() {
                    var regExpP = /^\d{4}$/; //验证码四位数
                    if(regExpP.test($('.input_code').val())) { //test检测$('#user_phone').val()是否符合regExp格式
                        //$('#err-lgU').html('√ 检测通过').css('color', 'green');
                        return true;
                    }
                    $('#error').show();
                    return false;
                }

                $('#sublim').click(function() {
                    if($('#sublim').hasClass('weui-btn_disabled')) {

                    } else {
                        $.ajax({
                            type: "get",
                            dataType: "json",
                            url: "mobile.json",
                            //data:"mobile="+ $("#mobile").val() + "&code="+ $(".codeval").val(),
                            success: function(data) {
                                console.log(data)
                                if(data.state == 1) {
                                    $("._toast").show()
                                    setTimeout(function() {
                                        history.go(-1);
                                        $("._toast").hide()
                                    }, 1000);
                                    console.log(data.state)
                                } else {

                                }
                            }
                        });
                    }

                });
                var time = 60;
                var interValObj;

                function setRemainTime() {
                    if(time == 0) {
                        clearInterval(interValObj)
                        $("#_phonebtn").html('获取验证码');
                        $('#_phonebtn').removeClass('weui-btn_plain-disabled');
                        $('#message').hide();
                        time = 60;
                    } else {
                        time--;
                        $("#_phonebtn").html('重获验证码' + '(' + time + ')');
                        $('#_phonebtn').addClass('weui-btn_plain-disabled');
                        $('#message').show();
                    }

                }

                $("#_phonebtn").click(function() {

                    if($('#_phonebtn').hasClass('weui-btn_plain-disabled')) {

                    } else {
                        $('#_phonebtn').addClass('weui-btn_plain-disabled')
                        interValObj = setInterval(setRemainTime, 1000)
                        $.ajax({
                            type: "get",
                            dataType: "json",
                            url: "code.json",
                            //data:"mobile="+ $("#mobile").val(),
                            success: function(data) {
                                if(data.state == 1) {
                                    //layer.msg("验证码发送成功!")
                                    console.log("验证码发送成功!")
                                } else {
                                    if(data.data == -1) {
                                        //layer.msg("请勿频繁获取验证码!");
                                        console.log("请勿频繁获取验证码!")
                                    } else if(data.data == -2) {
                                        //layer.msg("手机号码不能为空");
                                        console.log("手机号码不能为空")
                                    } else if(data.data == -3) {
                                        //layer.msg("手机号码格式不正确");
                                        console.log("手机号码格式不正确")
                                    }
                                }
                            }
                        });
                    }

                })

            });
        }
    }
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