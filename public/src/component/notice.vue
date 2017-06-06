<template id="notice">
	<div class="careMe_box"  >
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
			<router-link :to=detailUrl+newNotice.moodid  class ="careMe_list"  v-for="newNotice in newNotices">
					<img class="careMe_img" :src="newNotice.faceUrl" alt="">
					<div class="careMe_div">
						<div>{{newNotice.nickName}}</div>
						<div>{{newNotice.content}}</div>
						<p>{{newNotice.addtime}}</p>
					</div>
					<div class="careMe_content">
						<img v-if="newNotice.moodpicture" :src="newNotice.moodpicture">
						<div v-else-if="newNotice.content">
							{{newNotice.moodcontent}}
						</div>
						<img v-else  :src="newNotice.moodValuePic"  />
					</div>
			</router-link>
		</v-scroll>
		<div class="bottom">

				<a id="btnViewMore" v-if="isNew==1">查看更早的消息...</a>
				<a v-else-if="isNew==0">加载更多</a>
				<a v-else="isNew==2">没有更多数据</a>


		</div>
	</div>

</template>
<style>
	.bottom{width:100%;
		padding-bottom: 20px;
		padding-top: 20px;
		color:#999;
		text-align: center;
		font-size: 14px;
	}
	.careMe_box{
		height:100%;
		background: #ffffff;
	}
	.careMe_list{
		overflow: hidden;
		border-bottom: 1px solid#eee;
		padding:10px 15px;
		color: #000;
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
		height:50px;
		width:50px;
		display: block;

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
	import scroll from './lib/scroll.vue';
	var notice={
		template:'#notice'
	}

	export default {
		data() {
			return {
				pageNo: 1,
				num:20,
				newNotices:null,
				pageStart: 0, // 开始页数
				pageEnd: 0, // 结束页数
				isNew:1,
				detailUrl:"./notice/noticeDetail?moodId="

			}
		},
		mounted: function () {
			let _this = this;
			//notice列表
			this.$http({
				method: 'GET',
				type: "json",
				url: web.API_PATH + 'notice/find/newNotices/_userId_'
			}).then(function (data) {

				if (data.data.status==1) {
					_this.newNotices=data.data.data.rows;
					_this.newNotices = xqzs.mood.initMoodsData(_this.newNotices);
					for(let i=0;i<_this.newNotices.length;i++){
						_this.newNotices[i].moodValuePic=web.IMG_PATH + "list_mood_0" + _this.newNotices[i].moodValue + ".png";
						_this.newNotices[i].addtime=xqzs.dateTime.formatTime( _this.newNotices[i].addtime);
                    }
					console.log(_this.newNotices);
				}
			}, function (error) {
				//error
			});

			///设置已读
			this.$http({
				method: 'post',
				type: "json",
				url: web.API_PATH + 'mood/care/update/read/1156/{updatetime}'
			}).then(function (data) {//es5写法
//				console.log(data);
			}, function (error) {
				//error
			});
		},
		methods:{
			onRefresh(done) {
				done() // call done
			},
			onInfinite(done) {
				let vm = this;
				vm.$http.get(web.API_PATH + 'notice/query/page/[userId]/' + (vm.pageNo + 1) + "/" + vm.num).then((response) => {
					vm.counter++;
					vm.pageEnd = vm.num * vm.counter;

					vm.pageStart = vm.pageEnd - vm.num;
					let arr = response.data.data.rows;

					let end = vm.pageEnd;
					arr = xqzs.mood.initMoodsData(arr);
					for (let i = 0; i < arr.length; i++) {
						vm.newNotices.push(arr[i]);
					};
					vm.isNew=0;
//					vm.$nextTick(function () {
//						myResizePicture($(".careMe_list"),"careMe_content","li");//渲染完成
//					});
					if (arr.length === 0) {
						this.$el.querySelector('.load-more').style.display = 'none';
						this.$el.querySelector('.load-finish').style.display = 'block';
						vm.isNew=2;
						return;
					}

					done() // call done
				}, (response) => {
					console.log('error');
				});
			},





		}
	}
</script>
