<template >
	<div class="signRoom_box" id="signRoom_box">
		<div v-title>签到</div>
		<ul class="item_box" id="item_box">
			<li class="item" v-for="item in list " :class="{me_item:item.userId==1275}">
				<img :src="item.faceUrl" alt="">
				<div class="main">
					<span>姓名:{{item.realName}}</span>
					<p>{{item.message}}</p>
				</div>
				<div style="clear: both"></div>
			</li>
		</ul>
	</div>
</template>
<style>
	.signRoom_box{
		background: url("../images/signbg.jpg") no-repeat;
		background-size: 100% 100%;
		overflow: auto;
	}
	.signRoom_box .item_box{
		padding:1.5rem 0.88235rem;
		padding-bottom: 120px;
	}
	.signRoom_box .item_box .item{
		min-height:2.35rem;
		background: rgba(255,255,255,0.4);
		border-radius: 0.1471rem;
		padding: 0.588235rem;
		margin-bottom: 0.88235rem;
	}

	.signRoom_box .item_box .item img{
		width:2.235rem;
		height:2.235rem;
		border:1px solid #fff;
		float: left;
	}
	.signRoom_box .item_box .me_item img{
		float: right;
	}
	.signRoom_box .item_box .main{
		padding-left: 3rem;
		color:rgba(255,255,255,1);
	}
	.signRoom_box .item_box .me_item .main{
		padding-right: 3rem;
		padding-left: 0;
	}
	.signRoom_box .item_box .main span{
		font-size: 0.70588235rem;
		line-height: 1.1rem;
		display: block;
	}
	.signRoom_box .item_box .me_item .main span{
		text-align: right;
	}
	.signRoom_box .item_box .me_item .main p{
		text-align: right;
	}
	.signRoom_box .item_box .main p{
		font-size: 0.88235rem;
		line-height: 1.411764rem;
	}

</style>
<script type="text/javascript">

    export default {
        data() {
            return {
                isMe:false,
				lastMessageId:0,
				list:[],
				timer:null,
            }
        },

        mounted: function () {
            let _this = this;
            _this.getMessage()
			setInterval(function () {
                _this.getMessage()

            },500)

            $('.signRoom_box .item_box .me_item .main p').each(function () {
				var ph = $(this).height();
				if(ph>30){
                    $('.signRoom_box .item_box .me_item .main p').css('text-align','left')
				}else{
                    $('.signRoom_box .item_box .me_item .main p').css('text-align','right				')
				}
            })
            xqzs.mood.actionSheetEdit("取消","发送",function () {
                let val = $('.comment_text').val()
                let msg = {
                    'userId ':'_userId_',
                    'xcId ':_this.$route.query.xcId,
					'message':val
                };
					_this.$http.post(web.API_PATH+'xianchang/post/message/'+_this.$route.query.xcId	+'/_userId_',msg).then(
                        (response) => {
								if(response.body.status==1&&response.body.data==true){
									$("#textarea").val('')

								}
                        }
                    );

            },function () {

            },'上墙',false,true)
            $('.action-sheet-edit .weui-mask').hide()
        },
		methods:{
			getMessage:function () {
				let _this= this;
				let xcId=this.$route.query.xcId;
				_this.$http.get(web.API_PATH+'xianchang/get/message/'+xcId+'/8?last_messageId='+_this.lastMessageId).then(function (data) {

					_this.list = _this.list.concat(data.data.data);
					let lastId = _this.list[_this.list.length-1].messageId;
					_this.lastMessageId = lastId;
					console.log(data.data.data.length);
                    $('.signRoom_box').animate({scrollTop:$('.signRoom_box')[0].scrollHeight},1000*data.data.data.length)
                })
            }
		},
        updated:function () {
            var scrollDom = document.getElementById('signRoom_box');
            scrollDom.scrollTop = scrollDom.scrollHeight;
        },
        components: {

        }
    }

</script>
