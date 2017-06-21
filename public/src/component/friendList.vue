<template id="friendsCount">
    <div class="friendList_box">
        <div v-title>我的好友</div>
        <div v-if="hasFriend!=null&& hasFriend==true">
            <div class="weui-cells friendsCount_box specialCare_box" v-if="friend_s.length">
                <div class="friendsCount_cell specialCare"><img src="../images/mafriend_icom_special.png" alt="">特别关心
                </div>
                <a :href="user.friendLink" class="weui-cell weui-cell_access" v-for="(user,index) in  friend_s" :key="index" :class="{left_zero:(index==0)}">
                    <div class="weui-cell__hd">
                        <img class="img_frinedsCount" :src="wxFaceUrl(user.faceUrl)" alt="">
                    </div>
                    <div class="weui-cell__bd name_friendsCount">
                        <template v-if="user.memoName&&user.memoName!==''">{{user.memoName | shortName(16)}}</template>
                        <template v-else-if="user.nickName!==''">{{user.nickName | shortName(16)}}</template>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells friendsCount_box">
                <div v-for="(user,index) in friend_g" :key="index">
                    <div class="friendsCount_cell" v-if="index==0">{{friend_g[index].firstCn[0]}}</div>
                    <div class="friendsCount_cell"
                         v-if="index>0&& friend_g[index-1].firstCn[0]!=friend_g[index].firstCn[0]">
                        {{friend_g[index].firstCn[0]}}
                    </div>
                    <a :href="user.friendLink" class="weui-cell weui-cell_access" :class="{left_zero:(index==0)||(index>0&& friend_g[index-1].firstCn[0]!=friend_g[index].firstCn[0])}">
                        <div class="weui-cell__hd">
                            <img class="img_frinedsCount" :src="wxFaceUrl(user.faceUrl)" alt="">
                        </div>
                        <div class="weui-cell__bd name_friendsCount">
                            <template v-if="user.memoName&&user.memoName!==''">{{user.memoName | shortName(16)}}</template>
                            <template v-else-if="user.nickName!==''">{{user.nickName | shortName(16)}}</template>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </a>
                </div>
            </div>
            <div class="friendCount">{{friendCount}}位好友</div>
            <div class="bgw">
                <div class=" m-30 btn-gray"><a href="http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw">朋友太少，怎样邀请好友？</a>
                </div>
            </div>
            <div class="bottom-card">
                <div class="plr15 m-30">
                    <div class="weui-btn weui-btn_primary"  @click="createinvite()">生成邀请卡</div>
                </div>
            </div>
        </div>

        <div class="noFriends_box" v-if="hasFriend!=null&& hasFriend==false">
            <img src="../images/mafriends_pic_bj.png" alt="">
            <div class="noFriend_content">
                <div>还没有好友</div>
            </div>
            <div class="noFriend_btn">
                <div class="bgw">
                    <div class=" m-30 btn-gray"><a
                            href="http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw">朋友太少，怎样邀请好友？</a></div>
                </div>
                <div class="bottom-card">
                    <div class="plr15 m-30">
                        <div class="weui-btn weui-btn_primary" @click="createinvite()">生成邀请卡
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

    .weui-cell_access:active{ background: #fff }

    .left_zero:before{ left:0 !important}
    .noFriends_box {
        height: 100%;
        position: relative;
    }

    .noFriends_box img {
        width: 220px;
        position: absolute;
        top: 90px;
        left: 50%;
        margin-left: -110px;
    }

    .noFriend_content {
        font-size: 15px;
        color: #999999;
        text-align: center;
        position: absolute;
        width: 100%;
        left: 50%;
        margin-left: -50%;
        top: 335px;
    }

    .noFriend_content div {
        font-size: 19px;
        color: #66cc33;
        margin-bottom: 10px;
    }

    .noFriend_content p {
        height: 30px;
    }

    .noFriend_btn {
        width: 90%;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -45%;
    }

    .friendList_box {
        background: #ffffff;
    }


    .friendsCount_box:before{border-top:none}
    .friendsCount_box {
        margin-top: 0px;
        overflow: inherit;
    }
    .friendsCount_box  .weui-cell{
        padding: 9px 15px;
    }
    .friendsCount_box  .weui-cell:before{
        border-top: 1px solid #eee!important;
         -webkit-transform: scaleY(1);
         transform: scaleY(1);
    }

    .friendsCount_box.weui-cells:after{
        border-bottom: 1px solid #eee;
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }

    .specialCare img {
        float: left;
        width: 16px;
        margin-top: 7px;
        margin-right: 12px;
    }

    .friendsCount_box div .weui-cell:first-child:before {
        display: block
    }

    .friendsCount_box .specialCare {
        line-height: 32px;
    }

    .friendsCount_cell {
        padding-left: 15px;
        color: #666666;
        font: 12px/25px "arial";
        background: #f4f4f8;
        border-top:1px solid #eee;

    }
    .specialCare_box.weui-cells:after{ border-bottom: none}


    .img_frinedsCount {
        width: 38px;
        height: 38px;
        display: block;
        border-radius: 5px;
    }

    .name_friendsCount {
        color: #333333;
        font-size: 15px;
        margin-left: 13px;
    }

    .friendCount {
        height: 74px;
        line-height: 74px !important;
        text-align: center;
        color: #898989;
        font-size: 16px;
        background: #fff;
    }

    .bgw {
        background: #fff;
        padding-bottom: 23px;
    }

    .btn-gray {
        background: #ebeceb;
        line-height: 30px;
        text-align: center;
        margin-left: 15px !important;
        margin-right: 15px !important;
        border-radius: 5px;
        border-color: #ebeceb;
        overflow: hidden
    }

    .btn-gray a {
        padding: 0 !important;
        display: inherit;;
        background: none;
        font-size: 14px;
        color: #5d5d5d
    }
    .btn-gray a:active{
        background:rgba(0, 0, 0, .2);
    }

    .bottom-card {
        background: #ffffff;
        padding: 7px 0 30px 0;
        padding-left: 15px;
        padding-right: 15px
    }

    .bottom-card .weui-btn {
        -webkit-tap-highlight-color: rgba(0, 0, 0, .2) !important;
    }
</style>


<script type="text/javascript">
    var friendsCount = {
        template: '#friendsCount'
    }


    export default {
        data() {
            return {
                friend_s: [],
                friend_g: [],
                friendCount: 0,
                hasFriend: null,
                scrollTop:0
            }
        },
        mounted: function () {
            let _this = this;
            $(".friendList_box").scroll(function () {
                xqzs.localdb.set("friendsScrollTop",$(this).scrollTop())
            });
            _this.getFriends();

            xqzs.wx.setConfig(_this);
        },

        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
        methods: {
            getFriends:function () {
                let _this = this;
                this.$http.get(web.API_PATH + 'user/query/friend/by/user/id/_userId_').then(function (data) {

                    if (data.body.data !== null&&data.body.data !== undefined) {
                        console.log(data.body.data)
                        let generalFriends = data.body.data.generalFriends;
                        _this.friend_s = data.body.data.specialFriends;
                        for (let i = 0; i < _this.friend_s.length; i++) {
                            _this.friend_s[i].firstCn ='';
                            _this.friend_s[i].friendLink = "/#/friendCenter/?friendId=" + _this.friend_s[i].id;
                        }


                        console.log(generalFriends)

                        let arrayGeneal = [];
                        for (let key in generalFriends) {
                            for (let i = 0; i < generalFriends[key].length; i++) {
                                let friend = generalFriends[key][i];
                                friend.firstCn = key;
                                friend.friendLink = "/#/friendCenter/?friendId=" + friend.id;
                                arrayGeneal.push(friend)
                            }
                        }
                        _this.friend_g = arrayGeneal;


                        _this.friendCount = _this.friend_g.length + _this.friend_s.length;

                        if (_this.friendCount > 0) {
                            _this.hasFriend = true
                        } else {
                            _this.hasFriend = false
                        }
//                        _this.$nextTick(function () {
//                            setTimeout(function () {
//                                $(".friendList_box").scrollTop( xqzs.localdb.get("friendsScrollTop") );
//                            },100)
//
//                        })


                    }

                }, function (error) {
                });
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
                        msg:'前往公众号查看，分享好友互为关注',
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
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            }
        },
        updated:function () {
            var obj = $(".weui-cell_access");
            xqzs.weui.active(obj)
        }
    }


</script>


