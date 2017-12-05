<template >
	<div class="me_box">
		<div v-title>个人中心</div>
		<v-tab tab="me"></v-tab>

		<div class="me_top">
			<div class="me_head">
			<a @click="goPerf()" class="me1">
				<span v-show="hasNewPerfect" class="hasnew"></span>
				<img class="me1_left" :src="user.faceUrl"/>
				<div class="me1_right">
					<div class="perfec_top">{{user.nickName | shortName(6)}}</div>
					<div class="perfec">
						<span>完善资料</span>
						<img class="edit" src="../images/info_icon_por.png"/>
					</div>
				</div>
				<div class="coin_btn" @click.stop="goCoin()">我的积分</div>
 			</a>
			</div>

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

		<router-link to="/me/subscribe" class="me_lists">
			<div class="me_list">
				<img class="listimg1 remindImgIcon" src="../images/listimg3.png"/>
				<div class="listtext">设置提醒</div>
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
		<router-link to="/me/aboutUs" class="me_lists">
			<div class="me_list">
				<img class="listimg1 listimgPro" src="../images/aboutMe.png"/>
				<div class="listtext ">关于我们</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>

		<router-link :to="interviewLink" class="me_lists"  v-if="false">
			<div class="me_list">
				<img class="listimg1 listimgPro" src="../images/aboutMe.png"/>
				<div class="listtext ">邀请卡</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</router-link>
		<a  href="/#/ranklist/w/2017-29" class="me_lists" v-if="false" >
			<div class="me_list">
				<img class="listimg1 listimgPro" src="../images/aboutMe.png"/>
				<div class="listtext ">排行榜</div>
				<img class="listimg2" src="../images/me_jt.png"/>
			</div>
		</a>

		<div style="height: 50px;"></div>
	</div>
</template>
<style>
	.me_box{
		background: #fff;
	}
	.me_top{
		background:url(../images/me_top_green_bg.png) no-repeat; background-size: 100%;
		height: 6.5rem;
		margin-bottom: 1.4rem;
	}
	.me_head{ position: absolute; width: 100%; top:0.88235rem; }
	.me_head .coin_btn{   color:#fff; background: url(../images/coin_coin_icoin2.png) no-repeat #FF9933 ; background-size: 1rem; padding-left: 1.6rem; display: block; height:1.764705882352941rem; width: 3.105882352941176rem;  position: absolute ; right:0; top:50%; margin-top: -0.88235rem; z-index: 100001;line-height:1.764705882352941rem;
		font-size: 0.6470588235294118rem; border-bottom-left-radius:0.8823529411764705rem; border-top-left-radius: 0.8823529411764705rem;
		background-position: 0.4rem 0.4rem; }
	.me_head .coin_btn:active{ background:  url(../images/coin_coin_icoin2.png) no-repeat #f39031; background-size: 1rem;background-position: 0.4rem 0.4rem;}
	.me1{
		background:#fff;
		height: 6.5rem;
		display: block;

		border-radius: 0.4rem;
		box-shadow: 0px 0px 1.058823529411765rem  rgba(74,186,0,0.6) ;
		position: absolute; z-index: 1111;     width: 92%;
		left: 4%;

	}
	.me1_left{
		height:3.529411764705882rem;
		width:3.529411764705882rem;
		display: block;
		border-radius: 4px;
		float: left;
		position: relative;
		margin-top: 1.470588235294118rem;
		margin-left: 1rem;
	}


	.me1_right{
		position: absolute;
		left:5.5rem;
		top:1.4rem;
	}
	.me1 .hasnew{
		position:absolute;background-color:#ff0000;border-radius: 50%;position: absolute;top:0.7058823529411765rem;left:4.117647058823529rem;height: 0.4705882352941176rem;width: 0.4705882352941176rem;z-index: 999;
	}
	.perfec_top{
		color: #333333;
		font-size:0.9411764705882353rem;
		line-height: 1.764705882352941rem;
	}
	.perfec{
		font-size:0.8235294117647059rem;
		color: #999;
		position: relative;
	}
	.perfec span{
		line-height: 1.411764705882353rem;
	}
	.perfec img{
		position: absolute;
		top:0px;
		left: 3.882352941176471rem;
		border-radius: 4px;
	}
	.edit{
		height:1.294117647058824rem;
		width:1.294117647058824rem;
	}
	.me1_back{
		display: block;
		float: right;
		width:0.9411764705882353rem;
		margin-top:1.176470588235294rem;
	}
	.me_lists{
		background:#fff;
		padding-left:  0.88235rem;
		display: block;
		position: relative;
	}
	.me_list{
		height:3.411764705882353rem;
		border-bottom:1px solid #eee;
		line-height: 3.411764705882353rem;
		padding-left: 2.411764705882353rem;
		padding-right: 0.88235rem;
	}
	.listimg1{
		width:1.235294117647059rem;
		display: block;
		position: absolute;
		top:50%;
		margin-top:-0.5882352941176471rem;
		left: 0.9705882352941176rem;
	}
	.listimg1.record { margin-top: -0.6470588235294118rem}
	.listimg1.remindImgIcon{ width: 1.176470588235294rem;margin-top:-0.6470588235294118rem;}
	.listimg20{
		width:1.176470588235294rem;
		display: block;
		position: absolute;
		top:50%;
		margin-top:-0.5882352941176471rem;
		left:1.176470588235294rem;
	}
	.listimg2{
		display: block;
		float: right;
		width:0.9411764705882353rem;
		margin-top:1.176470588235294rem;
	}
	.listtext{
		font-size:0.8823529411764706rem;
		color: #333333;
		float: left;
	}
	.me_bottom{
		padding: 0 0.8823529411764706rem;
		margin-top:1.764705882352941rem;
	}
	.privacyImg{
		width:1.058823529411765rem;
		margin-top:-0.6470588235294118rem;
		height:1.235294117647059rem;
		left: 1.058823529411765rem;
	}
	.proposalImg{
		margin-top: -0.4705882352941176rem;
	}
	.problemImg{
		margin-top:-0.9411764705882353rem;
	}
	.listimgSal{
		width: 1.176470588235294rem;
		margin-top:-0.4705882352941176rem;
		left:1.058823529411765rem
	}
	.listimgPro{
		width:1.294117647058824rem;
		margin-top: -0.7058823529411765rem;
	}
</style>
<script type="text/javascript">
    import tab from './lib/tab.vue';
    export default {
        data() {
            return {
                hasNewPerfect:false,
                interviewLink:"/interview"
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        mounted: function () {
            let _this = this;
			_this.getNewPerfect();
			console.log(_this.user)
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.me);
            var obj =  $(".me_lists")
            xqzs.weui.active(obj);
            _this.interviewLink="/interview?openId="+_this.user.openId;
        },
		filters:{
			shortName:function(value,len){
				return xqzs.shortname(value,len);
			}
		},
		methods:{
            goPerf:function () {
				this.$router.push("/me/personal");
            },
            goCoin:function () {
                this.$router.push("/coin/index");
            },
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
						msg:'前往公众号查看你的专属名片',
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
		},
        components: {
            'v-tab':tab
        },
		updated:function () {

            var obj =  $(".me_head>a")
            xqzs.weui.active(obj);

            $(".coin_btn").on("touchstart",function () {
                event.stopPropagation();
            })

        }
    }

</script>
