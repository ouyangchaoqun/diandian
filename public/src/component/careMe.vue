<template id="careMe">
	<div class="careMe_box">
		<router-link to="/myCenter/careMe/careDetail" class="careMe_list">
			<img class="careMe_img" src="../images/13.jpg" alt="">
			<div class="careMe_div">
				<div>葫芦娃</div>
				<img src="../images/list_dianz_pre.png" alt="">
				<p>刚刚</p>
			</div>
			<div class="careMe_content">
				<img src="../images/list_mood_04.png" alt="">
			</div>
		</router-link>
        <!--<div class="noCare_box">
            <img src="../images/nocare_pic_bj.png" alt="">
            <div class="noCare_content">
                <h3>还没有关心我的好友</h3>
                <p>赶紧去生成邀请卡，分享好友互为关注</p>
                <p>邀更多好友来一起参与记录和互为关心</p>
            </div>
            <div class="noCare_btn">
                <button class="weui-btn weui-btn_primary">生成邀请卡</button>
            </div>
        </div>-->
	</div>
</template>
<style>
	.careMe_box{
	    height:100%;
		background: #ffffff;
    }
	.careMe_list{
		height:66px;
		border-bottom: 1px solid #f5f5f5;
		padding:0 10px;
        display: block;
	}
	.careMe_img{
		height:40px;
		width: 40px;
		display: block;
		float: left;
		border-radius:3px;
		margin-top:13px;
	}
	.careMe_div{
		float: left;
		margin-left:10px;
		margin-top:5px;
	}
	.careMe_div div{
		font-size: 14px;
		color: #516591;
	}
	.careMe_div img{
		width: 18px;
		display: block;
	}
	.careMe_div p{
		color: #999999;
		font-size: 12px;
	}
	.careMe_content{
		height:50px;
		width: 50px;
		background: #f5f5f5;
		float: right;
		margin-top: 8px;
		position: relative;
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
    }
    .noCare_box img{
        width:180px;
        position: absolute;
        top:15%;
        left:50%;
        margin-left: -90px;
    }
    .noCare_content{
        width: 100%;
        position: absolute;
        top:35%;
        z-index: 1;
        left:50%;
        margin-left: -50%;
    }
    .noCare_content h3{
        font-size: 16px;
        color: #66cc33;
        font-weight: 100;
        text-align: center;
        margin-bottom: 10px;
    }
    .noCare_content p{
        font-size: 12px;
        color: #999999;
        text-align: center;
        margin-bottom: 10px;
    }
    .noCare_btn{
        width:90%;
        position: absolute;
        bottom:20%;
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
				lastMood: null,
				careFrinds:null
			}
		},
		mounted: function () {
			let _this = this;

			//lastmood
			this.$http({
				method: 'GET',
				type: "json",
				url: web.API_PATH + 'mood/find/userlast/[userId]',
			}).then(function (data) {
				if (data.data.data !== null) {
					_this.lastMood = eval(data.data.data);
					//careFrinds
					this.$http({
						method: 'GET',
						type: "json",
						url: web.API_PATH + 'mood/care/query/'+_this.lastMood.id+'/[userId]',
					}).then(function (data) {
						if (data.data.data !== null) {
							_this.careFrinds = eval(data.data.data);
							console.log(_this.careFrinds);
						}
					}, function (error) {
						//error
					});
				}
			}, function (error) {
				//error
			});



		},
		methods:{

		}


	}
</script>
