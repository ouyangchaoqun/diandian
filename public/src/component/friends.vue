<template id="friends">

    <div style="position: relative">
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <div class="friends_box">
                <div class="friend_header">
                    <router-link to="/me/friendsCount">以下是我关注的朋友，猜猜TA是谁？</router-link>
                </div>
                <div class="friends_mood" v-for="( item,index)  in downdata" :key="index">
                    <img class="friendHeaderImg" :src="item.randomFaceUrl" alt="">
                    <div class="friendState">
                        <span class="mood_state" :class="{'unhappy_txt_color':item.moodValue<=4,'happy_txt_color':item.moodValue>4}">{{item.moodValueText}}</span>
                        <p class="mood_text">{{item.content}}</p>
                        <ul class="friendImgList" v-if="item.haspicture">
                                 <li   v-for="pic in item.pics">
                                    <img :src="pic.smallUrl" :data-bigPic="pic.bigUrl" :data-w="pic.picwidth"
                                         :data-h="pic.picheight" :style="pic.styleObject"
                                         @click="showBigImg(item.pics,pic)">
                                </li>


                        </ul>
                        <div class="friendsLoc">{{item.address}}</div>
                        <div class="stateBottom">
                            <div class="time">{{item.outTime}}</div>
                            <div class="time_right">
                                <span class="frined_zan">{{item.careCount}}</span>
                                <img class="time_rightimg1" :src="item.careImg" alt=""
                                     style="width: 26px" @click="addCare(item,index)">
                                <span class="frined_com">{{item.replycount}}</span>
                                <img class="time_rightimg2" src="../images/comments.png" alt="" @click="addComment(item.id,index)" style="width: 20px">
                            </div>
                        </div>

                        <div class="commont_box" v-if="item.replies.length>0">
                            <div class="arrow"></div>
                            <div class="friend_commont" v-for="(reply,replyIndex) in item.replies" :key="replyIndex" @click="commentOrDel(reply.fromuserid,reply.id,index,replyIndex)"  v-if="!reply.isDel">
                                <span class="name" v-if="reply.tomoodreplyid==0||reply.tomoodreplyid==null">
                                    <template v-if="reply.fromuserid==item.userId">作者</template>
                                    <template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName}}</template>
                                    :</span>
                                <template v-if="reply.tomoodreplyid!=0&&reply.tomoodreplyid!=null"><span class="name"><template v-if="reply.fromuserid==item.userId">作者</template>
                                    <template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName}}</template></span> 回复 <span class="name">{{reply.to_nickName}}:</span></template>
                                <span class="commont">{{reply.content}}</span>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </v-scroll>
    </div>

</template>

<script type="text/javascript">

    import scroll from './lib/scroll.vue';
    import wx from 'weixin-js-sdk';
    let friends = {
        template: '#friends'
    };
    export default {
        data() {
            return {
                counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                num: 10,  // 一次显示多少条
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                downdata: [],  // 上拉更多的数据存放数组
                user:{}
            }
        },
        methods: {
            getList(){
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/friend/page/[userId]/' + 1 + "/" + vm.num).then((response) => {
                    vm.downdata = response.data.data.rows;
                    vm.downdata = xqzs.mood.initMoodsData(vm.downdata);
                    console.log(vm.downdata);
                    vm.$nextTick(function () {
                        myResizePicture($(".friends_mood"),"friendImgList","li");//渲染完成
                    })
                }, (response) => {
                    console.log('error');
                });
            },
            onRefresh(done) {
                this.getList();
                done() // call done
            },
            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/friend/page/[userId]/' + (vm.counter + 1) + "/" + vm.num).then((response) => {
                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data.data.rows;
                    let i = 0;
                    let end = vm.pageEnd;
                    arr = xqzs.mood.initMoodsData(arr);
                    for (; i < arr.length; i++) {
                        vm.downdata.push(arr[i]);
                    }
                    vm.$nextTick(function () {
                        myResizePicture($(".friends_mood"),"friendImgList","li");//渲染完成
                    });
                    if (arr.length === 0) {
                        this.$el.querySelector('.load-more').style.display = 'none';
                        this.$el.querySelector('.load-finish').style.display = 'block';
                        return;
                    }

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            },
            showBigImg: function (list, curr) {

                var current = curr.bigUrl;
                var $data = [];
                for (var i = 0; i < list.length; i++) {
                    $data.push(list[i].bigUrl);
                }

                wx.previewImage({
                    current: current, // 当前显示图片的http链接
                    urls: $data // 需要预览的图片http链接列表
                });

            },
            addCare:function (mood,index) {
                let _this = this;
                if(mood.userId !==_this.user.id){
                    _this.$http.put(web.API_PATH+'mood/care/add',{"moodId":mood.id,"userId":null}).then(response => {
                        if(response.data.status===1){

                            _this.downdata[index].caremy=_this.user.id;
                           _this.$set(_this.downdata, index, _this.downdata[index]);
                            _this.downdata =  xqzs.mood.initMoodsData(_this.downdata);
                            console.log( _this.downdata)

                        }
                    });
                }
            },
            commentOrDel:function (userId,id,index,replyIndex) {
                let vm = this;
                if(userId===vm.user.id){
                    vm._delComment(id,index,replyIndex);
                }else{
                    vm.addComment(id,index,replyIndex);
                }
            },
            _delComment(id,index,replyIndex){
                let vm = this;
                xqzs.weui.actionSheet("删除我的评论?","删除",function () {
                    ///删除操作
                    let url  = web.API_PATH+ "mood/reply/[userId]/"+id;
                    vm.$http.delete(url)
                        .then((data) => {
                            if (data.data.status === 1) {
                                vm.downdata[index].replies[replyIndex].isDel = true;
                                vm.downdata[index].replycount=  vm.downdata[index].replycount-1;
                                vm.$set(vm.downdata, index, vm.downdata[index])
                            } else {
                                xqzs.weui.toast("fail", "删除失败", function () {
                                });
                            }
                        })
                        .catch((response) => {

                        });


                },function () {
                    //取消
                })
            },
            addComment(id,index,replyIndex){
                let vm = this;

                let edithoder="";
                 if(replyIndex!==undefined&&replyIndex) {


                     if(vm.downdata[index].replies[replyIndex].fromuserid ===vm.downdata[index].userId ){
                        edithoder="作者";
                    }else{
                        edithoder= vm.downdata[index].replies[replyIndex].from_nickName;
                    }

                }
                xqzs.mood.actionSheetEdit("取消","发送",function (v) {
                    vm.$http.put(web.API_PATH+'mood/reply/add',{"moodId":vm.downdata[index].id,"userId":null,"replyId":id,"content":v}).then(response => {
                        if(response.data.status===1){
                            xqzs.weui.toast("success","提交成功",function () {
                            });

                            if(response.data.data.reply.touserid===vm.downdata[index].userId){
                                response.data.data.reply.to_nickName= "作者";
                            }
                            vm.downdata[index].replycount = response.data.data.mood.replycount;
                            vm.downdata[index].replies.push(response.data.data.reply);
                            vm.$set(vm.downdata, index, vm.downdata[index])
                         }


                    }, response => {
                        // error
                    });
                    console.log(v)

                },function (v) {
                    console.log(v)
                    //取消
                },"回复 " +edithoder)
            },
            showComment: function (id, $index) {
                let vm = this;
                if (vm.downdata[$index].isShowComment) {
                    vm.downdata[$index].isShowComment = false;
                    vm.$set(vm.downdata, $index, vm.downdata[$index]);
                } else {
                    if (vm.downdata[$index].isAsk !== true) {

                        vm.$http.get(web.API_PATH + 'mood/care/query/comment/' + id).then((data) => {
                            vm.downdata[$index].isAsk = true;

                            if (data.data.status === 1) {

                                if (data.data.data.care.length > 0 || data.data.data.reply.length > 0) {
                                    vm.downdata[$index].hasComments = true;

                                    vm.downdata[$index].careList = data.data.data.care;
                                    vm.downdata[$index].commentList = data.data.data.reply;
                                    vm.downdata[$index].isShowComment = true;


                                }

                            }
                            console.log(data.data.data);
                            vm.$set(vm.downdata, $index, vm.downdata[$index]);
                        }, (response) => {
                            console.log('error');
                        });
                    }
                    vm.downdata[$index].isShowComment = true;
                    vm.$set(vm.downdata, $index, vm.downdata[$index]);
                }


            }

        },
        mounted: function () {
            let _this = this;
            this.getList();
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/[userId]',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                }
            }, function (error) {
                //error
            });
        },
        components: {
            'v-scroll': scroll
        }
    }


</script>
<style>


    .friend_header {
        border-bottom: 1px solid #eeeeee;
        background: #fff;
        padding: 10px 0;
    }

    .friend_header a {
        width: 90%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        background: #eeeeee;
        margin: 0 auto;
        font-size: 12px;
        border: 1px solid #eeeeee;
        border-radius: 5px;
        color: #999999;
        display: block;
    }

    .friends_mood {
        margin-top: 1px;
        background: #ffffff;
        padding: 10px 20px 10px 10px;
    }

    .friendHeaderImg {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 3px;
        float: left;
    }

    .friendState {
        margin-left: 55px;
    }

    .mood_state {
        font-size: 15px;
        margin-bottom: 10px;
        display: block;
    }

    .mood_text {
        font-size: 15px;
        color: #333333;
        margin-bottom: 10px;
    }

    .stateBottom {
        height: 30px;
        font-size: 12px;
    }

    .time {
        font-size: 12px;
        color: #999999;
        float: left;
        line-height: 30px;
    }

    .time_right {
        color: #999999;
        float: right;
    }

    .friendsLoc {
        font-size: 12px;
        color: #516591;
    }

    .time_right img {
        float: left;
    }

    .frined_zan {
        float: left;
        margin-right: 3px;
    }

    .frined_com {
        float: left;
        margin-right: 5px;
    }

    .time_rightimg1 {
        width: 22px;
        margin-top: -3px;
        margin-right: 10px;
    }

    .time_rightimg2 {
        margin-top: 2px;
        width: 18px;
    }

    .friendImgList {
        overflow: hidden;
        margin-bottom: 15px;
    }

    .friendImgList.two li{
        width: 7.5rem;
        height: 6rem;
    }

    .friendImgList.one li {
        width: 10.7rem;
        height: 8.1rem;
    }


    .friendImgList li {
        float: left;
        margin-right: 0.3125rem;
        width: 4.8675rem;
        height: 4.8675rem;
        overflow: hidden;
        position: relative;
    }

    .friendImgList img {

    }

    .commont_box {
        padding-top: 10px;
        background: #f9f9f9;
        border-radius: 5px;
        position: relative;
        margin-top: 10px;
        padding-bottom: 15px;
        padding-left: 10px;
    }

    .arrow {
        width: 15px;
        height: 15px;
        background: #f9f9f9;
        position: absolute;
        left: 20px;
        top: -6px;
        transform: rotate(45deg);
    }

    .friend_commont {
        margin-bottom: 6px;
        font-size: 13px;
    }
    .name {
        font-size: 14px;
        color: #666699;

    }
    .commont {
        font-size: 14px;
        color: #333333;
    }

</style>