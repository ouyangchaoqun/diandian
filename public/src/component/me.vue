<template id="me">
	<div class="me_box">
		<div v-title>个人中心</div>
		<div class="me_top">
			<router-link to="/me/personal" class="me1">
				<span v-show="hasNewPerfect" class="hasnew"></span>
				<img class="me1_left" :src="user.faceUrl"/>
				<div class="me1_right">
					<div class="perfec_top">{{user.nickName | shortName(6)}}</div>
					<div class="perfec">
						<span>完善资料</span>
						<img class="edit" src="../images/info_icon_por.png"/>
					</div>
				</div>
				<img class="me1_back" src="../images/me_jt.png"/>
			</router-link>
		</div>
		<router-link to = "/me/moodCount" class="me_lists">
			<div class="me_list">
				<img class="listimg1 record" src="../images/listimg1.png"/>
				<div class="listtext">我的心情指数</div>
				<img class="listimg2" src="../images/me_jt.png" />
			</div>
		</router-link>
		<router-link to="/friendList" class="me_lists">
			<div class="me_list">
				<img class="listimg1" src="../images/listimg2.png"/>
				<div class="listtext">我的好友</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>
		<router-link to="/me/remind" class="me_lists">
			<div class="me_list">
				<img class="listimg1 remind" src="../images/listimg3.png"/>
				<div class="listtext">心情记录提醒设置</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>
		<router-link to="/me/privacy" class="me_lists">
			<div class="me_list">
				<img class="listimg1 privacyImg" src="../images/listimg4.png"/>
				<div class="listtext">隐私设置</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>
		<router-link to="/me/proposal" class="me_lists">
			<div class="me_list">
				<img class="listimg1 listimgSal" src="../images/listimg6.png"/>
				<div class="listtext">意见反馈</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>
		<router-link to="/me/problem" class="me_lists">
			<div class="me_list">
				<img class="listimg1 listimgPro" src="../images/aboutMe.jpg"/>
				<div class="listtext ">关于我们</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>

		<div class="me_bottom">
			<a class="weui-btn weui-btn_primary"  @click="createinvite()">生成邀请卡</a>
		</div>
		<div style="height: 50px;"></div>
	</div>
</template>
<style>
	.me_box{
		background: #fff;
	}
	.me_top{
		background:#f4f4f8;
		padding: 12px 0;
	}
	.me1_left{
		height:60px;
		width:60px;
		display: block;
		border-radius: 4px;
		float: left;
		position: relative;
	}
	.me1{
		background:#fff;
		padding:15px;
		height:60px;
		display: block;
		position: relative;
		-webkit-tap-highlight-color: rgba(0,0,0,.2);
	}
	.me1_right{
		position: absolute;
		left:88px;
		top:16px;
	}
	.me1 .hasnew{
		position:absolute;background-color:#ff0000;border-radius: 50%;position: absolute;top:12px;left:70px;height: 8px;width: 8px;z-index: 999;
	}
	.perfec_top{
		color: #333333;
		font-size:16px;
		line-height: 30px;
	}
	.perfec{
		font-size:14px;
		color: #999;
		position: relative;
	}
	.perfec span{
		line-height: 24px;
	}
	.perfec img{
		position: absolute;
		top:0px;
		left: 66px;
		border-radius: 4px;
	}
	.edit{
		height:22px;
		width:22px;
	}
	.me1_back{
		display: block;
		float: right;
		width:16px;
		margin-top:20px;
	}
	.me_lists{
		background:#fff;
		padding:0 15px;
		display: block;
		position: relative;

	}
	.me_lists:active{ background: #ECECEC}
	.me_list{
		height:58px;
		border-bottom:1px solid #eee;
		line-height: 58px;
		padding-left: 41px;
	}
	.listimg1{
		width:21px;
		display: block;
		position: absolute;
		top:50%;
		margin-top:-10px;
		left: 16.5px;
	}
	.listimg1.record { margin-top: -11px}
	.listimg1.remind{ width: 20px;margin-top:-11px;}
	.listimg20{
		width:20px;
		display: block;
		position: absolute;
		top:50%;
		margin-top:-10px;
		left:20px;
	}
	.listimg2{
		display: block;
		float: right;
		width:16px;
		margin-top:20px;
	}
	.listtext{
		font-size:15px;
		color: #333333;
		float: left;
	}
	.me_bottom{
		padding: 0 15px;
		margin-top:30px;
	}
	.privacyImg{
		width:18px;
		margin-top:-11px;
		height:21px;
		left: 18px;
	}
	.proposalImg{
		margin-top: -8px;
	}
	.problemImg{
		margin-top:-16px;
	}
	.listimgSal{
		width: 20px;
		margin-top:-8px;
		left:18px
	}
	.listimgPro{
		width:22px;
		margin-top: -12px;
	}
</style>
<script type="text/javascript">
	var me={
		template:'#me'
	};
    export default {
        data() {
            return {
                user: {},
                hasNewPerfect:false
            }
        },
        mounted: function () {
            let _this = this;
			_this.getNewPerfect();

            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                }
            }, function (error) {
                //error
            });
        },
		filters:{
			shortName:function(value,len){
				return xqzs.shortname(value,len);
			}
		},
		methods:{
			_createinvite:function (type,callback) {
				this.$http({
					method: 'GET',
					type: "json",
					url: web.API_PATH + 'wei/xin/create/invite/' + type + '/_userId_',
				}).then(function (data) {
					if (data && data.data.status == 1) {
						if (typeof callback == 'function') {
							callback();
						}
					}
				})
			},
			createinvite:function () {
				let that = this;
				that._createinvite('link',function () {
					that._createinvite('card',function () {});
					xqzs.weui.dialog({
						title:'邀请卡已经发送',
						msg:'前往公众号查看，分享好友互为关注',
						submitText:'查看',
						submitFun:function () {
							try {
								WeixinJSBridge.call('closeWindow');
							}catch (e){
							}
						}
					})
				});
			},
            getNewPerfect:function () {
                var infokey = 'perfectinfo';
                if(xqzs.version.isshow(infokey)){
                    this.hasNewPerfect=true;
                }
            }
		}
    }

</script>
