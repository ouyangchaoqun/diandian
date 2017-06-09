<template id="myCenter">
    <div style="height: 100%">

        <div class="weui-tabbar" id="tabs">
            <router-link :to='linkTo' class="weui-tabbar__item  tab">
				<span style="display: inline-block;">
					<img src="../images/face1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">记录心情</p>
            </router-link>

            <router-link to='/calendar' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="../images/rl1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">心情日历</p>
            </router-link>

            <router-link to='/friendsMoods' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="../images/friend1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">朋友心情</p>
            </router-link>

            <router-link to='/me' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="../images/me1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">我的1</p>
            </router-link>

        </div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <!--banner end -->
        <router-link to='/notice' class="weui-tabbar__item tab" style="padding: 0" v-if="notice.count">
        <div class="notice_box">
            <div class="notice" >
                <img class="notice_friend"  :src="notice.lastuser.faceUrl" />
                <div>{{notice.count}}条新消息</div>
                <img class="goNotice" src="../images/goto.jpg" alt="">
            </div>
        </div>
        </router-link>


        <div class="mycenter_list">
            <!--mycenter start-->
            <div class="mycenter">
                <router-link to="./myCenter/myIndex">
                    <div class="list_left">
                        <img class="headerimg" :src="user.faceUrl"/>
                        <template v-if="myLastMood">
                            <div class="friend">
                                <p class="friendName">{{user.nickName}}</p>
                                <p class="time">{{myLastMood.addTime}}</p>
                            </div>
                        </template>
                        <template v-if="!myLastMood">
                            <span>{{ user.nickName }}</span>
                        </template>


                    </div>

                    <div class="list_right">
                        <template v-if="myLastMood!=null">
                            <img class="moodimg" :src="myLastMood.moodValueUrl"/>
                            <div class="interaction">
                                <div>{{ myLastMood.careCount }}</div>
                                <router-link :to="myLastMood.careListUrl">
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.careCount<=0"
                                         src="../images/list_dianz_nor.png" alt=""/>
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.careCount>0"
                                         src="../images/list_dianz_pre.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.careCount>0"
                                         src="../images/list_baob_pre.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.careCount<=0"
                                         src="../images/list_baob_nor.png" alt=""/>


                                </router-link>
                            </div>
                        </template>
                        <template v-if="myLastMood==null">
                            <span>还未记录</span>
                        </template>
                    </div>
                </router-link>
            </div>
            <!--mycenter end-->
            <div class="mycenterFill"></div>
            <!--friendcenter start-->
            <div class="mycenter friendCenter" v-if="user.isLookFriend!=null&&user.isLookFriend!==0">

                <div v-for="friendMood in friendMoodsSpe">
                    <a @click="link(friendMood.link)">
                        <div class="list_left">
                            <img class="headerimg" :src="friendMood.faceUrl"/>
                            <div class="friend">
                                <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName}}</p>
                                <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName}}</p>
                                <p class="time">{{friendMood.formatAddTime}}</p>
                            </div>
                        </div>

                        <div class="list_right">
                            <img class="moodimg" :src="friendMood.moodValueUrl"/>
                            <div class="interaction" @click.stop="care(friendMood.id)">
                                <div>{{ friendMood.careCount }}</div>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare==null"
                                     src="../images/list_dianz_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare==null"
                                     src="../images/list_baob_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare!=null"
                                     src="../images/list_dianz_pre.png" alt=""/>
                                <img  :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare!=null"
                                      src="../images/list_baob_pre.png" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                <div v-for="friendMood in friendMoods">
                    <a @click="link(friendMood.link)">
                        <div class="list_left">
                            <img class="headerimg" :src="friendMood.faceUrl"/>
                            <div class="friend">
                                <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName}}</p>
                                <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName}}</p>
                                <p class="time">{{friendMood.outTime}}</p>
                            </div>
                        </div>

                        <div class="list_right">
                            <img class="moodimg" :src="friendMood.moodValueUrl"/>
                            <div class="interaction" @click.stop="care(friendMood.id)">
                                <div>{{ friendMood.careCount }}</div>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare==null"
                                     src="../images/list_dianz_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare==null"
                                     src="../images/list_baob_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare!=null"
                                     src="../images/list_dianz_pre.png" alt=""/>
                                <img  :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare!=null"
                                      src="../images/list_baob_pre.png" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <a class="share" @click="createinvite()">点击生成邀请卡</a>
        </div>
        <!--friendcenter end-->



    </div>
</template>

<script type="es6">
    import banner from "./banner.vue"
    let myCenter = {
        template: '#myCenter'
    };

    export default {
        data() {
            return {
                myLastMood:null,
                user: {},
                friendMoodsSpe: null,
                friendMoods: null,
                notice:{count:0},
                linkTo:"#"
            }
        },
        methods: {
            care: function (id) {
                let _this = this;

                this.$http.put(web.API_PATH + 'mood/care/add', {"moodId": id, "userId": "omg"}).then(function (data) {//es5写法
                    if (data.data.status === 1) {
                        for(var i = 0; i<_this.friendMoodsSpe.length;i++){
                            if(_this.friendMoodsSpe[i].id===id){
                                _this.friendMoodsSpe[i].careCount =data.data.data;
                                _this.friendMoodsSpe[i].hit=true;
                                _this.friendMoodsSpe[i].isCare=true;
                            }
                        }
                        for( i = 0; i<_this.friendMoods.length;i++){
                            if(_this.friendMoods[i].id===id){
                                _this.friendMoods[i].hit=true;
                                _this.friendMoods[i].careCount =data.data.data;
                                _this.friendMoods[i].isCare=true;

                            }
                        }
                        console.log(_this.friendMoods)

                    }
                }, function (error) {
                    //error
                });
                return false;
            },
            link: function (url) {
                location.href = url;
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
            canWriteMood:function () {

            },
            getMoodCount(callback){
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/get/user/count/_userId_'
                }).then(function (bt) {
                    if(bt.data && bt.data.status == 1){
                        if(typeof callback == 'function'){
                            callback(bt.data.data);
                        }
                    }
                })
            }
        },
        mounted: function () {

            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {

                    _this.user = eval(data.data.data);
                    console.log(_this.user);

                    //
                    _this.getMoodCount(function (moodcount) {
                        if (moodcount < 10) {
                            _this.linkTo = "/addMood";
                        } else {
                            if (_this.user.mobile == '' || _this.user.mobile == null || _this.user.mobile == undefined) {
                                _this.linkTo = "/me/personal/validate";
                            } else {
                                _this.linkTo = "/addMood";
                            }
                        }
                    });

                }
            }, function (error) {
                //error
            });

            this.$http({
				method: 'GET',
				type: "json",
				url: web.API_PATH + 'notice/find/new/_userId_',
			}).then(function (data) {
				if (data.data.data !== null) {
					_this.notice = eval(data.data.data);
					console.log(_this.notice);
				}
			}, function (error) {
				//error
			});


            if(_this.user.isLookFriend!==0){
                //用户 朋友当天心情 特别关系
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/query/friend/pull/day/_userId_/1/1',
                }).then(function (data) {//es5写法
                    if (data.data.status === 1 && data.data.data !== null) {
                        _this.friendMoodsSpe = eval(data.data.data);
                        _this.friendMoodsSpe = xqzs.mood.initMoodsData(_this.friendMoodsSpe);

                    }
                }, function (error) {
                    //error
                });

                //用户 朋友当天心情 普通
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/query/friend/pull/day/_userId_/0/1',
                }).then(function (data) {//es5写法
                    if (data.data.status === 1 && data.data.data !== null) {
                        _this.friendMoods = eval(data.data.data);
                        _this.friendMoods = xqzs.mood.initMoodsData(_this.friendMoods);

                    }
                }, function (error) {
                    //error
                });
            }




            ///用户心情
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'mood/find/userlast/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.status === 1 && data.data.status === 1 && data.data.data !== null) {
                    _this.myLastMood = eval(data.data.data);
                    _this.myLastMood.moodValueUrl = web.IMG_PATH + "list_mood_0" + _this.myLastMood.moodValue + ".png";
                     _this.myLastMood.careListUrl ="./myCenter/careMe?moodId=" + _this.myLastMood.id;
                    _this.myLastMood.addTime = xqzs.dateTime.formatTime(_this.myLastMood.addTime);
                    console.log(_this.myLastMood);
                }
            }, function (error) {
                //error
            });
        },
        components: {
           "v-banner": banner
        }

    }


</script>
<style>

    #tabs {
        position: fixed;
    }

    body, html {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }


    .mycenter {
        background: #ffffff;
        padding: 0 20px;
    }

    /*.mycenter_list {
        height: 100%;
    }*/

    .mycenter a {
        height: 72px;
        display: block;
    }

    .friend {
        margin-left: 55px;
        padding-top: 28px;
    }

    .friendName {
        font-size: 16px;
        color: #000000;
        line-height: 0;
        margin-bottom: 11px;
    }

    .time {
        font-size: 12px;
        color: #999999;
    }

    .list_left {
        float: left;
        position: relative;
        height: 100%;
    }

    .headerimg {
        height: 40px;
        width: 40px;
        display: inline-block;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        margin-top: -20px;
    }

    .list_left span {
        font-size: 15px;
        line-height: 72px;
        color: #000000;
        margin-left: 55px;
    }

    .list_right {
        float: right;
        height: 72px;
    }

    .list_right span {
        color: #666666;
        font-size: 15px;
        line-height: 72px;
    }

    .moodimg {
        width: 34px;
        height: 34px;
        float: left;
        margin-top: 17px;
        margin-right: 20px;
    }

    .interaction {
        float: left;
        text-align: center;
        padding-top: 15px;
        font-size: 13px;
        color: #aeaeae;
        overflow: hidden;
    }

    .interaction img {
        width: 20px;
        height: 20px;
    }
    .interaction a{
        height:20px;
    }

    .mycenterFill {
        width: 100%;
        height: 10px;
        background: #eeeeee;
    }

    .friendCenter {
        margin-bottom: 1px;
    }

    .share {
        line-height: 36px;
        height: 36px;
        font-size: 14px;
        margin: 30px 15px 60px 15px;
        color: #696969;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: #FFFFFF;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 100px;
    }
    .share:active{
        background: #eeeeee;
    }
    .notice_box{
        padding:10px;
        background: #ffffff;
        margin-bottom: 1px;
    }
    .notice{
        height: 40px;
        width: 180px;
        background: #393939;
        border-radius: 5px;
        margin: 0 auto;
    }
    .notice_friend{
        height:32px;
        width: 32px;
        float: left;
        margin-left:5px;
        margin-top:3px;
        display: block;
        border-radius: 3px;
    }
    .notice div{
        float: left;
        height:40px;
        line-height: 40px;
        color: #f8f5f5;
        margin-left:32px;
        font-size: 14px;
    }
    .goNotice{
        width:16px;
        display: block;
        float: right;
        margin-right: 14px;
        margin-top:12px;

    }
</style>