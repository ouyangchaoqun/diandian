<template id="friendsCount">
    <div>
        <div class="weui-cells friendsCount_box">
            <div class="friendsCount_cell">特别关系</div>


            <router-link :to="user.friendLink" class="weui-cell weui-cell_access" v-for="user in  friend_s">
                <div class="weui-cell__hd">
                    <img class="img_frinedsCount" :src="user.faceUrl" alt="">
                </div>
                <div class="weui-cell__bd name_friendsCount">
                    <template v-if="user.memoName&&user.memoName!==''">{{user.memoName}}</template>
                    <template v-else-if="user.nickName!==''">{{user.nickName}}</template>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>


        </div>
        <div class="weui-cells friendsCount_box">
            <div v-for="(user,index) in friend_g" :key="index">
                <div class="friendsCount_cell" v-if="index==0">{{friend_g[index].firstCn[0]}}</div>
                <div class="friendsCount_cell"
                     v-if="index>0&& friend_g[index-1].firstCn[0]!=friend_g[index].firstCn[0]">
                    {{friend_g[index].firstCn[0]}}
                </div>
                <a :href="user.friendLink" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img class="img_frinedsCount" :src="user.faceUrl" alt="">
                    </div>
                    <div class="weui-cell__bd name_friendsCount">
                        <template v-if="user.memoName&&user.memoName!==''">{{user.memoName}}</template>
                        <template v-else-if="user.nickName!==''">{{user.nickName}}</template>
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
                <div class="weui-btn weui-btn_primary" id="mack_card_all" @click="createinvite()">生成邀请卡</div>
            </div>
        </div>
        <div class="friendCount"></div>
    </div>
</template>
<style>
    .friendsCount_box {
        margin-top: 0px;
        overflow: inherit;
    }

    .friendsCount_box div .weui-cell:first-child:before {
        display: block
    }

    .friendsCount_cell {
        line-height: 30px;
        padding-left: 15px;
        color: #666666;
        font-size: 14px;
        background: #f5f5f5;

    }

    .img_frinedsCount {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 5px;
    }

    .name_friendsCount {
        color: #333333;
        font-size: 14px;
        margin-left: 13px;
    }

    .friendCount {
        height: 56px;
        line-height: 56px !important;
        text-align: center;
        color: #898989;
        font-size: 16px;
        background: #fff;
    }

    .bgw {
        background: #fff;
        padding-bottom: 25px;
        padding-top: 5px;
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
        -webkit-tap-highlight-color: rgba(0, 0, 0, .2) !important;
        padding: 0 !important;
        display: inherit;;
        background: none;
        font-size: 14px;
        color: #666
    }

    .bottom-card {
        background: #ffffff;
        padding: 7px 0 59px 0;
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
                friend_s: null,
                friend_g: null,
                friendCount: 0
            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http.get(web.API_PATH + 'user/query/friend/by/user/id/_userId_').then(function (data) {

                if (data.body.data !== null) {
                    let generalFriends = data.body.data.generalFriends;
                    _this.friend_s = data.body.data.specialFriends;
                    for (let i = 0; i < _this.friend_s.length; i++) {
                        _this.friend_s[i].firstCn = makePy(_this.friend_s[i].nickName);
                        _this.friend_s[i].friendLink = "/#/friendCenter/?friendId=" + _this.friend_s[i].id;
                    }

                    let arrayGeneal=[];
                    for (let key in generalFriends) {
                        for(let i =0; i<generalFriends[key].length;i++){
                            let friend  = generalFriends[key][i];
                            friend.firstCn = key;
                            friend.friendLink = "/#/friendCenter/?friendId=" + friend.id;
                            arrayGeneal.push(friend)
                        }
                    }
                    _this.friend_g=arrayGeneal;
//
                    _this.friendCount = _this.friend_g.length + _this.friend_s.length;

                    console.log(_this.friend_g);
                    console.log(_this.friend_s);
                }

            }, function (error) {
            });

        },
        methods: {

            _createinvite: function (type, callback) {
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
            createinvite: function () {
                let that = this;
                that._createinvite('link', function () {
                    that._createinvite('card', function () {
                    });
                    xqzs.weui.dialog({
                        title: '邀请卡已经发送',
                        msg: '前往公众号查看，分享好友互为关注',
                        submitText: '查看',
                        submitFun: function () {
                            try {
                                WeixinJSBridge.call('closeWindow');
                            } catch (e) {
                            }
                        }
                    })
                });
            },
        }
    }


</script>


