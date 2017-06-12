<template id="notice">
	<div class="careMe_box"  >
		<div v-title>消息</div>
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
			<router-link :to=detailUrl+newNotice.moodid  class ="careMe_list"  v-for="newNotice in newNotices">
				<img class="careMe_img" :src="newNotice.faceUrl" alt="">
				<div class="careMe_div">
					<div class="careMeName">{{newNotice.nickName}}</div>
					<div class="careMeText">{{newNotice.content}}</div>
					<div class="careStatus" v-if="newNotice.tp=='care'">
						<img v-bind:src="newNotice.careImg" alt="">
					</div>
					<p>{{newNotice.addtime}}</p>
				</div>
				<div class="careMe_content" :class ="{nobg:newNotice.moodcontent!='' && newNotice.moodcontent!=null}">
					<img v-if="newNotice.moodpicture" :src="newNotice.moodpicture">
					<div v-else-if="newNotice.moodcontent!='' && newNotice.moodcontent!=null ">
						{{newNotice.moodcontent}}
					</div>
					<img v-else  :src="newNotice.moodValueUrl"  />
				</div>
			</router-link>
			<!--<router-link :to=detailUrl+newNotice.moodid  class ="careMe_list"  v-for="newNotice in newNotices">
				<img class="careMe_img" :src="newNotice.faceUrl" alt="">
				<div class="careMe_div">
					<div class="careMeName">{{newNotice.nickName}}</div>
					&lt;!&ndash;<div class="careMeText">{{newNotice.content}}</div>&ndash;&gt;
					<div class="careStatus">
						<img v-bind:src="newNotice.careImg" alt="">
					</div>

					<p>{{newNotice.addtime}}</p>

				</div>
				<div class="careMe_content" :class ="{nobg:newNotice.moodcontent!='' && newNotice.moodcontent!=null}">
					<img v-if="newNotice.moodpicture" :src="newNotice.moodpicture">
					<div v-else-if="newNotice.moodcontent!='' && newNotice.moodcontent!=null ">
						{{newNotice.moodcontent}}
					</div>
					<img v-else  :src="newNotice.moodValueUrl"  />
				</div>
			</router-link>-->

		</v-scroll>

		<div class="bottom">

			<a id="btnViewMore" v-if="isNew==1" @click="checkMore()">查看更早的消息...</a>
			<a v-else-if="isNew==0" @click="checkMore()">加载更多</a>
			<a v-else="isNew==2">没有更多数据</a>


		</div>
	</div>

</template>
<style>
	.careStatus{
		padding:8px 0;
	}
	.careMe_div .careStatus img{
		width:14px;
	}
	.careMe_div .careMeName{
		color: #5e61a2;
	}
	.nobg{ background: none !important}
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
		height:44px;
		width: 44px;
		display: block;
		float: left;
		border-radius:3px;
		margin-top:13px;
	}
	.careMe_div{
		float: left;
		margin-left:10px;
		margin-top:7px;
		width: 12rem;

	}
	.careMe_div div{
		font-size: 13px;
		color: #000;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
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
		width: 60px;
		height: 60px;
		float: right;
		overflow: hidden;
		background: #f9f9f9;
		margin-top: 8px;
		position: relative;
		font-size: 13px;
		color: #666;
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
	import scroll from './lib/scroll.vue';
	var notice={
		template:'#notice'
	}

	export default {
		data() {
			return {
				pageNo: 1,
				num:20,
				newNotices:[],
				pageStart: 0, // 开始页数
				pageEnd: 0, // 结束页数
				isNew:1,
				detailUrl:"/notice/noticeDetail?moodId="

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

				_this.newNotices=data.data.data.rows;
				if (_this.newNotices.length>0) {
					_this.newNotices = xqzs.mood.initMoodsData(_this.newNotices);
					for(let i=0;i<_this.newNotices.length;i++){
						_this.newNotices[i].addtime=xqzs.dateTime.formatTime( _this.newNotices[i].addtime);
					}
					console.log(_this.newNotices);
				}else{
					console.log(_this.$route.query.time);
					_this.$http({
						method: 'GET',
						type: "json",
						url: web.API_PATH + 'notice/find/notices/_userId_/'+_this.$route.query.time,
					}).then(function (data) {
						console.log(data.data.data.rows);
						_this.newNotices=data.data.data.rows;
						if (_this.newNotices.length>0) {
							_this.newNotices = xqzs.mood.initMoodsData(_this.newNotices);
							for(let i=0;i<_this.newNotices.length;i++){
								_this.newNotices[i].addtime=xqzs.dateTime.formatTime( _this.newNotices[i].addtime);
							}
							console.log(_this.newNotices);
						}
					}, function (error) {
						//error
					});
				}
			}, function (error) {
				//error
			});

			///设置已读
			this.$http({
				method: 'post',
				type: "json",
				url: web.API_PATH + 'notice/update/read/_userId_/'+ _this.$route.query.time
			}).then(function (data) {//es5写法
//				console.log(data);
			}, function (error) {
				//error
			});
		},
		methods:{


			checkMore:function(){
				let vm = this;
				vm.$http.get(web.API_PATH + 'notice/query/page/_userId_/' + (vm.pageNo) + "/" + vm.num).then((response) => {
					let arr = response.data.data.rows;
					arr = xqzs.mood.initMoodsData(arr);

					for(let i=0;i<arr.length;i++){
                        arr[i].addtime=xqzs.dateTime.formatTime( arr[i].addtime);
                        vm.newNotices.push( arr[i]);
					}
					if (arr.length === 0) {
						vm.isNew=2;
					}else{
						vm.isNew=0;
					}
				}, (response) => {
					console.log('error');
				});
                vm.pageNo=vm.pageNo+1;
			}
		}
	}
</script>
