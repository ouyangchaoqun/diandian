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
						<img class="edit" src="../images/me_btn_icon_perfore.png"/>
					</div>
				</div>
 			</a>

				<div class="coin_btn"   @click.stop="goCoin()">我的积分 <span v-if="user">{{user.coinAmount}}</span></div>
			</div>
		</div>
		<div class="me_top_btn">
			<div class="mood" @click="goMyMood()">我的心情</div>
			<div class="amount"  @click="goMyAmount()">我的余额</div>
			<div class="friend"  @click="goMyFriend()">我的好友</div>
		</div>
		<div class="me_list">
			<router-link to = "/me/subscribe" class="set_btn"><i></i>提醒设置</router-link>
			<router-link to = "/me/privacy" class="privacy_btn"><i></i>隐私设置</router-link>
			<router-link to = "/me/proposal" class="feedback_btn_list"><i></i>意见反馈</router-link>
			<router-link to = "/me/aboutUs" class="about_btn"><i></i>关于我们</router-link>
		</div>


		<div v-if="false">
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
				<img class="listimg1 listimgPro" src="../images/me_btn_icon_about.png"/>
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
		</div>
		<div style="height: 50px;"></div>
	</div>
</template>
<style>


	.me_top_btn{
		display: flex;
		display: -webkit-box;
		display: -webkit-flex;
		border-bottom: 0.5882352941176471rem solid #eee;
	}
	.me_top_btn>div{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
		color:#000;
		font-size:0.88235rem; ; padding-bottom: 0.85rem; padding-top: 1rem;
	}
	.me_top_btn>div:active{ background: #f1f1f1}
	.me_top_btn>div:before{ margin-bottom: 0.5rem;}
	.me_top_btn>div.mood:before{content:'';width:100%; height: 1.3rem; background: url(../images/me_btn_icon_mood.png) no-repeat center;   background-size: 1.176470588235294rem; display: block }
	.me_top_btn>div.amount:before{content:'';width:100%; height: 1.3rem; background: url(../images/me_btn_icon_money.png) no-repeat center;   background-size: 1.088235294117647rem;  display: block }
	.me_top_btn>div.friend:before{content:'';width:100%; height: 1.3rem; background: url(../images/me_btn_icon_friend.png) no-repeat center;     background-size: 1.176470588235294rem;  display: block }
	.me_list{ overflow: hidden}
	.me_list a{ height: 3.235294117647059rem; line-height: 3.235294117647059rem; background: #fff; color:#666; font-size: 0.8235294117647059rem ; display: block; position: relative; padding-left: 3.235294117647059rem;  }
	.me_list a:active{ background: #f1f1f1}
	.me_list a i{ display: block; position: absolute; top:0; left:1.176470588235294rem; height:3.235294117647059rem; width: 3.235294117647059rem;  }
	.me_list a:before{ background: url(../images/me_btn_right.png) no-repeat center; height: 3.235294117647059rem; width: 0.4705882352941176rem; background-size: 0.4705882352941176rem; content: ''; display: block; position: absolute; right:0.88235rem;}
	.me_list a:after{ content: ''; position: absolute; bottom:0; display: block; height:0.0588235294117647rem; background: #E5E5E5; left:0.88235rem; width: 100%; }
	.me_list a.set_btn i{background: url(../images/me_btn_icon_set.png) no-repeat center left; background-size: 0.9411764705882353rem; }
	.me_list a.privacy_btn i{background: url(../images/me_btn_icon_hide.png) no-repeat center left; background-size: 0.7941176470588235rem; }
	.me_list a.feedback_btn_list i{background: url(../images/me_btn_icon_feedback.png) no-repeat center left; background-size: 0.8823529411764706rem; }
	.me_list a.about_btn i{background: url(../images/me_btn_icon_about.png) no-repeat center left; background-size: 0.9411764705882353rem; }

	.me_box{
		background: #fff;
	}
	.me_top{
		background:url(../images/me_top_bg.png) ;  background-size: 100%;
		height:7.911764705882353rem;

	}
	.me_head{ position: absolute; width: 100%;  }
	.me_head .coin_btn{   color:rgba(255,255,255,0.8); background: url(../images/me_top_coin_icon.png) no-repeat   rgba(0,0,0,0.29);
	; background-size: 1.264705882352941rem; padding-left: 1.6rem; display: block; height:1.705882352941176rem; width: 3.105882352941176rem;  position: absolute ; right:0;     z-index: 100001;  top:2.764705882352941rem;
		font-size: 0.5882352941176471rem; border-bottom-left-radius:0.852941176470588rem; border-top-left-radius: 0.852941176470588rem;
		background-position: 0.25rem 0.25rem;line-height: 1.2 ;}
	.me_head .coin_btn span{ color:#FAAE30}
	.me_head .coin_btn:active{ background:  url(../images/me_top_coin_icon.png) no-repeat  rgba(0,0,0,0.4); background-size: 1.264705882352941rem;background-position: 0.25rem 0.25rem}
	.me1{

		height: 6.5rem;
		display: block;

		border-radius: 0.4rem;
 		position: absolute; z-index: 1111;     width: 92%;
		left: 4%;
		top:0.4rem;


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
		position:absolute;background-color:#ff0000;border-radius: 50%;position: absolute;top:1.25rem;left:4.2rem;height: 0.4705882352941176rem;width: 0.4705882352941176rem;z-index: 999;
	}
	.perfec_top{
		color: #FFFFFF ;
		font-size:1.058823529411765rem;
		line-height: 1.764705882352941rem;
	}
	.perfec{
		font-size:0.7058823529411765rem;
		color: #333;
		position: relative;
		background:rgba(255,255,255,0.29);
		width: 4.617647058823529rem;
		height:1.441176470588235rem;
		border-radius: 4px;
		margin-top: 0.2rem;
	}
	.perfec span{
		line-height: 1.441176470588235rem; margin-left: 0.2rem;
	}
	.perfec img{
		position: absolute;
		top:0.22rem;
		left: 3.4rem;
		border-radius: 4px;
	}
	.edit{
		height:0.9rem;
		width:0.9rem;
	}
	.me1_back{
		display: block;
		float: right;
		width:0.9411764705882353rem;
		margin-top:1.176470588235294rem;
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

			getAllCoin:function () {

            },
            goMyMood: function () {
                this.$router.push("/me/moodCount");
            },
            goMyAmount: function () {
                this.$router.push("/me/amount");
            },
            goMyFriend: function () {
                this.$router.push("/friendList");
            },
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
