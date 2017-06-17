<template id="noticeDetail">
    <div class="noticeDetail_box">
        <div class="myMood_list noticeborder">
            <img class="moodImg" :src="mood.moodValueUrl" alt="">
            <div class="moodImg_right">
                <div class="moodState" :class="mood.moodValueStyle">{{mood.moodValueText}}
                    <!--<img class="addCj" :src="mood.scense.src" alt="">  <i>{{mood.scense.text}}</i>-->
                </div>
                <div class="moodContext" v-html="formatContent(mood)"></div>
                <template v-if="canEdit(mood)">
                    <router-link :to=editurl+mood.id class="editMood">
                        20分钟内可以补充文字和图片
                        <img src="../images/bianji.png" alt="">
                    </router-link>
                </template>
                <div class="moodPhotoLists" v-if="mood.pics">
                    <div class="moodPhotoList" v-for="pic in mood.pics" >
                        <img :src="pic.path"     @click="showBigImg(mood.pics,pic)">
                    </div>
                </div>
                <div class="moodTime">
                    <span>{{mood.time}}</span>
                    <span class="btn_del" @click="delMoodContent(mood.id)" v-if="canClear(mood)">删除</span>
                    <div class="moodFollow">
                        <span class="followCount">{{mood.careCount}}</span>
                        <img  class="followtype" v-if="mood.moodValue>=5 && mood.careCount>0 "
                             src="../images/mood_icon_dianz_pre.png" alt=""/>
                        <img  class="followtype" v-if="mood.moodValue>=5 && mood.careCount<=0 "
                              src="../images/mood_icon_dianz_nor.png" alt=""/>
                        <img  class="followtype" v-if="mood.moodValue<5 && mood.careCount>0"
                             src="../images/list_baob_pre.png" alt=""/>
                        <img  class="followtype" v-if="mood.moodValue<5 && mood.careCount<=0"
                              src="../images/list_baob_nor.png" alt=""/>
                        <span class="followCount">{{mood.replycount}}</span>
                        <img class="followtype" src="../images/comments.png" style="width: 15px;margin-top: 3px;" alt="">
                    </div>
                </div>
            </div>
            <div class="show_box">
                <div class="arraw"></div>
                <div class="show_top" v-if="cares.length">
                    <img  class="show_img1" v-if="mood.moodValue>=5"
                          src="../images/mood_icon_dianz_pre.png" alt=""/>
                    <img  class="show_img1" v-if="mood.moodValue<5"
                          src="../images/list_baob_pre.png" alt=""/>
                    <div  v-for="headpic in cares">
                        <img :src="headpic.faceUrl" alt="">
                    </div>

                </div>
                <div class="line_comment" v-if="replies.length>0&&cares.length>0"></div>

                <ul class="show_bottom" v-if="replies.length>0">
                    <img class="show_img2" src="../images/comments.png"/>
                    <li v-for="(reply ,index) in replies" :key="index" @click="replyOrDel(reply.fromuserid,reply.id,index)" v-if="!reply.isDel">
                        <img class="show_bottom_img " :src="reply.from_faceUrl">
                        <div class="show_bottom_text">
                            <div class="reply_author">
                                <a class="pname other" >{{reply.from_nickName | shortName(7) }}</a>
                            </div>
                            <div class="reply_content">
                                <span class="text_comment">回复</span><a class="pname other" >{{reply.to_nickName | shortName(7) }}</a>
                                <span class="text_comment" >{{emojiContent(reply.content)}}</span>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    .noticeborder{
             border-bottom: 1px solid #f5f5f5;
         }
    .noticeDetail_box{
        background: #ffffff;
        height:100%;
    }

    .addCj{
        height: 16px;
        vertical-align: middle;
        margin-top: -3px;
        margin-left: 5px;
        display: inline-block;
    }
    .moodState i{
        font-size: 12px;
        color: #999;
        font-style: normal;
    }

</style>
<script type="text/javascript">
//    import wx from 'weixin-js-sdk';
    var noticeDetail={
        template:'#noticeDetail'
    };
    export default {
        data() {
            return {
                data: null,
                replies: [],
                cares: [],
                mood: {},
                user: {},
                editurl: '/myCenter/myIndex/Edit?id='

            }
        },
        mounted: function () {
            let _this = this;

            ///消息回复
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'mood/care/query/comment/' + _this.$route.query.moodId,
            }).then(function (data) {
                if (data.data.status == 1) {

                    _this.data = data.data.data;
                    _this.replies = _this.data.reply;
                    _this.cares = _this.data.care;
                    _this.mood = _this.data.mood;
                    console.log(_this.mood);
                    _this.mood.moodValueUrl = web.IMG_PATH + "list_mood_0" + _this.mood.moodValue + ".png";
                    _this.mood.moodValueText = xqzs.mood.moodValueText[_this.mood.moodValue];
                    _this.mood.time = xqzs.dateTime.formatTime(_this.mood.addTime);


                    _this.mood.scense = xqzs.mood.getCjImg(_this.mood.scenesId);

                    xqzs.mood.setMoodValueStyle(_this.mood);
                    console.info(_this.mood)
                }
                _this.$nextTick(function () {
                    myResizePicture();//渲染完成
                });
            }, function (error) {
                //error
            });

            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                    console.log(_this.user);
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
        methods: {
            canEdit:function (mood) {
                return xqzs.mood.canEdit(mood);
            },
            canClear:function (mood) {
                return xqzs.mood.canClear(mood);
            },
            replyOrDel: function (userId, id, index) {
                let vm = this;
                console.log(this.user);
                if (userId === vm.user.id) {
                    vm._delComment(id, index);
                } else {
                    vm.addComment(id, index);
                }
            },
            emojiContent:function (c) {
                return xqzs.face.parseEmoji(c);
            },

            _delComment(id, index){
                let vm = this;
                xqzs.weui.actionSheet("删除我的评论?", "删除", function () {
                    ///删除操作
                    let url = web.API_PATH + "mood/reply/_userId_/" + id;
                    vm.$http.delete(url)
                        .then((data) => {
                            if (data.data.status === 1) {
                                vm.replies[index].isDel = true;
                                vm.mood.replycount = vm.mood.replycount - 1;
                                // vm.$set(vm.replies, index, vm.replies[index])
                            } else {
                                xqzs.weui.toast("fail", "删除失败", function () {
                                });
                            }
                        })
                        .catch((response) => {

                        });


                }, function () {
                    //取消
                })
            },
            addComment(id, index){
                let vm = this;

                let edithoder = "";
                edithoder = xqzs.shortname(vm.replies[index].from_nickName,7);

                xqzs.mood.actionSheetEdit("取消", "发送", function (v) {
                    vm.$http.put(web.API_PATH + 'mood/reply/add', {
                        "moodId": vm.mood.id,
                        "userId": null,
                        "replyId": id,
                        "content": v
                    }).then(response => {
                        if (response.data.status === 1) {
                            xqzs.weui.toast("success", "提交成功", function () {
                            });
                            vm.mood.replycount = response.data.data.mood.replycount;
                            vm.replies.push(response.data.data.reply);
                        }


                    }, response => {
                        // error
                    });
                    console.log(v)

                }, function (v) {
                    console.log(v)
                    //取消
                }, "回复 " + edithoder)
            },
            showBigImg: function (list, curr) {

                var current = curr.path;
                var $data = [];
                for (var i = 0; i < list.length; i++) {
                    $data.push(list[i].path);
                }

                wx.previewImage({
                    current: current, // 当前显示图片的http链接
                    urls: $data // 需要预览的图片http链接列表

                });

            },
            delMoodContent: function (id) {
                let _this = this;
                let url = web.API_PATH + "mood/clean/content/_userId_/" + id;
                xqzs.weui.dialog("", "确定删除吗？", function () {

                }, function () {
                    _this.$http.delete(url).then(
                        (data) => {
                            if (data.data.status === 1) {
                                _this.mood.content = '';
                                _this.mood.haspicture = 0;
                                _this.mood.pics = [];
                                _this.mood.funnypics = [];

                            } else {
                                xqzs.weui.toast("fail", "删除失败", function () {
                                });
                            }
                        }
                    );

                });


            },
            formatContent: function (item) {
                var before=  "[ 在"+item.scense.text+"方面 ]";
                var before2=  "在"+item.scense.text+"方面：";
                if(item.content!=''&&item.content!=null&&item.content!=undefined){
                    return before2 + xqzs.face.parse(item.content);
                }else{
                    return before;
                }

            }
        }
    }

</script>



