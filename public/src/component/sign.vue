<template >
	<div class="sign_box">
		<div v-title>签到</div>
		<div class="sign_main" v-show="showRecord" >
			<div class="input_box">
				<input type="text" placeholder="输入姓名"  v-model="realName">
			</div>
			<div class="input_box">
				<input type="tel" placeholder="输入电话号码" v-model="mobile" maxlength="11">
			</div>
			<div class="sign_btn" @click="goSign()">签到</div>
		</div>
	</div>
</template>
<style>
	.sign_box{
		background: url("../images/signbg.jpg") no-repeat;
		background-size: 100% 100%;
	}
	.sign_main{
		position: absolute;
		width:100%;
		top:35%;
	}
	.sign_box .input_box{
		width:72%;
		height:2.29rem;
		border:1px solid rgba(255,255,255,1);
		border-radius: 0.147rem;
		margin:0 auto;
		margin-bottom: 1.235rem;
		background: #fff;
	}
	.sign_box .input_box input{
		border: 0;
		outline: none;
		background: none;
		height:100%;
		display: block;
		margin:0 auto;
		text-align: center;
		color:rgba(102,102,102,1);
		font-size: 0.88235rem;
	}
	.sign_box .input_box:nth-of-type(2){
		margin-bottom: 2.471rem;
	}
	.sign_box  .sign_btn{
		height:2.1471rem;
		line-height: 2.176471rem;
		text-align: center;
		width:50%;
		background: #fb4c66;
		border-radius: 1rem;
		margin:0 auto;
		font-size: 1.0588235rem;
		color:#fff;
	}
	.sign_box  .sign_btn:active{
		background: #c53449;
	}
</style>
<script type="text/javascript">

    export default {
        data() {
            return {
                realName:'',
                mobile:'',
				showRecord:false
            }
        },
        mounted: function () {
			let auto = this.$route.query.auto;
			if(auto=="true"){
                this.autoSign()
			}else{
			    this.showRecord=true;
			}

        },
		methods:{
            autoSign:function () {
                let _this = this;
                let xcId= this.$route.query.xcId;
                let msg = {

                };
                _this.$http.put(web.API_PATH + 'xianchang/put/sign/_userId_/'+xcId, msg).then(
                    (response) => {
                        _this.$router.replace('/signRoom?xcId='+xcId)
                    }
                );
            },
            goSign:function () {
                let _this = this;
                let xcId= this.$route.query.xcId;
                if(!(/^1[34578]\d{9}$/.test(_this.mobile))){
                    xqzs.weui.tip("手机号码有误，请重新填写");
                    return false;
				}
				let msg = {

					'realName ':_this.realName,
					'mobile ':_this.mobile
                };
				_this.$http.put(web.API_PATH + 'xianchang/put/sign/_userId_/'+xcId, msg).then(
					(response) => {
						xqzs.weui.tip("签到成功！",function () {
                            _this.$router.replace('/signRoom?xcId='+xcId)
                        })

					}
				);

            },
		},
        components: {

        }
    }

</script>
