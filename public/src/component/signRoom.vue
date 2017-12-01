<template >
	<div class="signRoom_box" id="signRoom_box">
		<div v-title>消息上墙</div>
		<ul class="item_box" id="item_box">
			<li class="item" v-for="item in list " :class="{me_item:item.userId==user.id}">
				<img :src="item.faceUrl" alt="">
				<div class="main">
					<span>{{item.nickName}}</span>
					<p>{{emj(item.message)}}</p>
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
		word-break: break-all;word-wrap:break-word
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
				isgeting:false,user:{}
            }
        },

        mounted: function () {
            let _this = this;
            _this.getUserInfo();
            _this.getMessage(8);
			setInterval(function () {
                _this.getMessage(2)

            },500)


            xqzs.mood.actionSheetEdit("取消","发送",function () {
                let val = $('.comment_text').val()

                let msg = {
					'message':val
                };
                $("#textarea").val('').attr({"style":""});
                $(".action-sheet-edit .release").css({'borderColor': "#91cc91", "background": "#94db93"})
					_this.$http.post(web.API_PATH+'xianchang/post/message/'+_this.$route.query.xcId	+'/_userId_',msg).then(
                        (response) => {
								if(response.body.status==1&&response.body.data==true){


								}
                        }
                    );

            },function () {

            },'上墙',false,true)
            $('.action-sheet-edit .weui-mask').hide()
        },
		methods:{
            emj:function (t) {
					return xqzs.face.parseEmoji(t);
            },
            getUserInfo:function () {
                let _this=this;
                _this.$http({
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
			getMessage:function (num) {
				let _this= this;

                let xcId=this.$route.query.xcId;
				if(_this.isgeting){
				    return
				}
                _this.isgeting = true;
				_this.$http.get(web.API_PATH+'xianchang/get/message/'+xcId+'/'+num+'?last_messageId='+_this.lastMessageId).then(function (data) {

					_this.list = _this.list.concat(data.data.data);
                    let lastId =0;
					if(_this.list.length>0){
                          lastId = _this.list[_this.list.length-1].messageId;
					}
					_this.lastMessageId = lastId;
                    _this.isgeting = false
					console.log(data.data.data.length);
                    if(num==8){
                      _this.$nextTick(function () {
                          var scrollDom = document.getElementById('signRoom_box');
                          scrollDom.scrollTop = scrollDom.scrollHeight;
                      })
					}else{
                        if(data.data.data.length>0){
                            $('.signRoom_box').animate({scrollTop:$('.signRoom_box')[0].scrollHeight},1000*data.data.data.length)
                        }
					}



                })
            },

		},
        updated:function () {
		   this.$nextTick(function () {
				$('.signRoom_box .item_box .me_item .main p').each(function () {
					var ph = $(this).height();
					if(ph>30){
						$(this).css('text-align','left')
					}else{
						$(this).css('text-align','right')
					}
				})
			})
        },
        components: {

        }
    }

</script>
