<template id="careMe">
	<div class="careMe_box">
		<div  v-if="showList" >
			<router-link :to=detailUrl   class ="careMe_list"  v-for="careFriend in careFriends">
				<img class="careMe_img" :src="careFriend.faceUrl" alt="">
				<div class="careMe_div">
					<div>{{careFriend.nickName | shortName(7)}}</div>
					<img class="careimg1" v-show="myLastMood.moodValue>=5"
						 src="../images/mood_icon_dianz_pre.png" alt=""/>
					<img v-show="myLastMood.moodValue<5"
						 src="../images/list_baob_pre.png" alt=""/>
					<p>{{careFriend.addTime}}</p>
				</div>
				<div class="careMe_content">
					<img class="moodpic" v-if="myLastMood.pics&&myLastMood.pics.length>0" :src="myLastMood.pics[0].path">
					<div v-else-if="myLastMood.content" v-html="formatContent(myLastMood.content)">

					</div>
					<img v-else  :src="myLastMood.moodValueUrl"  />
				</div>
			</router-link>
		</div>
		<div class="noCare_box"  v-if="showEmpty">
			<img src="../images/nocare_pic_bj.png" alt="">
			<div class="noCare_content">
				<h3>还没有关心我的好友</h3>
				<p>赶紧去生成邀请卡，分享好友互为关注</p>
				<p>邀更多好友来一起参与记录和互为关心</p>
			</div>
			<div class="noCare_btn">
				<button class="weui-btn weui-btn_primary">生成邀请卡</button>
			</div>
		</div>
	</div>



</template>
<style>
	.careMe_box{
	    height:100%;
		position: relative;
		background: #ffffff;
    }
	.careMe_list{
		height:60px;
		border-bottom: 1px solid #eee;
		padding:10px 15px;
        display: block;
	}
	.careMe_img{
		height:44px;
		width: 44px;
		display: block;
		float: left;
		border-radius:3px;
	}
	.careMe_div{
		float: left;
		margin-left:10px;
		padding-top: 2px;
	}
	.careMe_div div{
		color: #5e61a2;
		font-size: 13px;
		line-height: 13px;
		width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.careMe_div img{
		width: 14px;
		display: block;
		padding: 8px 0 8px 2px;
	}
	.careMe_div p{
		color: #999999;
		font-size: 12px;
		line-height: 12px;
	}
	.careMe_content{
		width: 60px;
		height: 60px;
		float: right;
		overflow: hidden;
		position: relative;
		font-size: 12px;
		color: #333;
	}
	.careMe_content .moodpic{
		height:60px;
		width:60px;
		display: block;
		position: absolute;
		top:50%;
		left:50%;
		margin-top:-30px;
		margin-left:-30px;
	}
	.careMe_content img{
		height:32px;
		width:32px;
		display: block;
		position: absolute;
		top:50%;
		left:50%;
		margin-top:-16px;
		margin-left:-16px;
	}
    .noCare_box{
        position: relative;
        height:100%;
		background: #ffffff !important;
    }
    .noCare_box img{
        width:15rem;
        position: absolute;
        top:3rem;
        left:50%;
        margin-left: -7.5rem;
    }
    .noCare_content{
        width: 100%;
        position: absolute;
        top:300px;
        z-index: 1;
        left:50%;
        margin-left: -50%;
    }
    .noCare_content h3{
        font-size: 18px;
        color: #66cc33;
        font-weight: 100;
        text-align: center;
        margin-bottom: 10px;
    }
    .noCare_content p{
        font-size: 14px;
        color: #999999;
        text-align: center;
       height: 24px;
    }
    .noCare_btn{
        width:90%;
        position: absolute;
        bottom:3rem;
        left:50%;
        margin-left:-45%;
    }

</style>
<script type="text/javascript">
	var careMe={
		template:'#careMe'
	}

	export default {
		data() {
			return {
				myLastMood: [],
				careFriends:[],
                detailUrl:'',
				showList:false,
				showEmpty:false


			}
		},
		mounted: function () {
			let _this = this;
			///用户心情
			_this.getMoodDetail();
            xqzs.wx.setConfig(_this);
		},
        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
		methods:{
            formatContent: function (item) {

                return   xqzs.face.parse(item);


            },
			getMoodDetail:function(){
				let _this=this;
				_this.$http({
					method: 'GET',
					type: "json",
					url: web.API_PATH + 'mood/query/detail/'+_this.$route.query.moodId,
				}).then(function (data) {//es5写法
					console.log(data);
					if (data.data.data) {
						_this.myLastMood = eval(data.data.data);
						_this.myLastMood.moodValueUrl = web.IMG_PATH + "list_mood_0" + _this.myLastMood.moodValue + ".png";
						_this.detailUrl="/moodDetail?moodId="+_this.myLastMood.id;
						_this.getMoodCareList();
					}
				}, function (error) {
					//error
				});

			},
			getMoodCareList:function(){
				//关心的朋友列表
				let _this=this;
				_this.$http({
					method: 'GET',
					type: "json",
					url: web.API_PATH + 'mood/care/query/'+_this.$route.query.moodId+'/_userId_',
				}).then(function (data) {
					console.log(data);
					if (data.data.data.length>0) {
						_this.careFriends = data.data.data;
						_this.showList=true;
					}else{
						_this.showEmpty=true;
					}
					console.log(_this.careFriends.length);
				}, function (error) {
					//error
				});
			}
		}
	}
</script>
