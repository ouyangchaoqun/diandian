<template id="myCenter">
    <div style="height: 100%">
        <div class="addMoodBg"></div>
        <div v-title>心情指数</div>
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

            <a class="weui-tabbar__item tab" @click="hideNewCircle('mood','/friendsMoods')">
				<span style="display: inline-block;">
					<img src="../images/friend1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">朋友心情</p>
                <span v-show="hasNewFirendMood" class="hasnew" :style="newFirendMoodStyle"></span>
            </a>

            <a class="weui-tabbar__item tab" @click="hideNewCircle('perfect','/me')">
				<span style="display: inline-block;">
					<img src="../images/me1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">我的</p>
                <span v-show="hasNewPerfect" class="hasnew" :style="newPerfectStyle"></span>
            </a>

        </div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <!--banner end -->
        <router-link :to='noticeLink' class="weui-tabbar__item tab" style="padding: 0" v-if="notice.count">
        <div class="notice_box">
            <div class="notice" >
                <img class="notice_friend"  :src="wxFaceUrl(notice.lastuser.faceUrl)" />
                <div>{{notice.count}} 条新消息</div>
                <img  class="goNotice" src="../images/iconjt.png" alt="">
            </div>
        </div>
        </router-link>


        <div class="mycenter_list">
            <!--mycenter start-->
            <div class="mycenter">
                <router-link to="./myCenter/myIndex">
                    <div class="list_left">
                        <img class="headerimg" :src="wxFaceUrl(user.faceUrl)"/>
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
                                         src="../images/list_icon_dianz_nor.png" alt=""/>
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.careCount>0"
                                         src="../images/list_icon_dianz_pre.png" alt=""/>
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
                <div class="addBorder" v-for="friendMood in friendMoodsSpe">
                    <a @click="link(friendMood.link)">
                        <div class="list_left">
                            <img class="headerimg" :src="wxFaceUrl(friendMood.faceUrl)"/>
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
                                     src="../images/list_icon_dianz_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare==null"
                                     src="../images/list_baob_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare!=null"
                                     src="../images/list_icon_dianz_pre.png" alt=""/>
                                <img  :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare!=null"
                                      src="../images/list_baob_pre.png" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mycenterFill" v-if="hasLine"></div><!--todo-->
                <div class="addBorder" v-for="friendMood in friendMoods">
                    <a @click="link(friendMood.link)">
                        <div class="list_left">
                            <img class="headerimg" :src="wxFaceUrl(friendMood.faceUrl)"/>
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
                                     src="../images/list_icon_dianz_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue<5 &&  friendMood.isCare==null"
                                     src="../images/list_baob_nor.png" alt=""/>
                                <img :class="{heartUp:friendMood.hit}" v-if="friendMood.moodValue>=5 &&  friendMood.isCare!=null"
                                     src="../images/list_icon_dianz_pre.png" alt=""/>
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
                linkTo:"#",
                noticeLink:'/notice',
                fillFlag:false,
                hasNewFirendMood:false,
                newFirendMoodStyle:'',
                hasNewPerfect:false,
                newPerfectStyle:''
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
            },
            getFriendLastMood:function () {
                var that = this;
                //好友是否有新心情
                var lastfriendmoodid = xqzs.friendmood.getlast();
                if(lastfriendmoodid!=''){
                    that.$http.get(web.API_PATH + "mood/find/friendlast/_userId_")
                        .then(function (bt) {
                            if(bt && bt.data.status == 1){
                                var data = bt.data.data;
                                //
                                var newId = data.id;
                                console.info(newId+'   '+lastfriendmoodid)
                                if(newId > parseFloat(lastfriendmoodid)){
                                    that.hasNewFirendMood=true;
                                    var container = $('#tabs .tab:eq(0)');
                                    var right = (container.width() - 32) / 2;
                                    that.newFirendMoodStyle = 'right:'+right+'px';
                                }
                            }
                        })
                }
            },
            getNewPerfect:function () {
                var infokey = 'perfectinfo';
                if(xqzs.version.isshow(infokey)){
                    this.hasNewPerfect=true;
                    var container = $('#tabs .tab:eq(0)');
                    var right = (container.width() - 32) / 2;
                    this.newPerfectStyle = 'right:'+right+'px';
                }
            },
            hideNewCircle:function (key,url) {
                if(key == 'mood'){
                    this.hasNewFirendMood = false;
                }
                if(key == 'perfect'){
                    this.hasNewPerfect = false;
                }
                this.$router.push(url);
            },
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            }
        },
        computed:{
            hasLine:function () {
                return this.friendMoodsSpe!=null && this.friendMoodsSpe.length > 0
                    && this.friendMoods!=null && this.friendMoods.length > 0 ;
            }
        },
        mounted: function () {
            let _this = this;
            _this.getFriendLastMood();
            _this.getNewPerfect();

            _this.noticeLink=_this.noticeLink +"/?time="+ xqzs.dateTime.getTimeStamp();
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
    .tab{position: relative}
    .tab .hasnew{position:absolute;background-color:#ff0000;border-radius: 50%;position: absolute;top:1px;height: 8px;width: 8px;}
    .tab img{
        height: 24px;
        width:24px;
    }
    .friendCenter .addBorder{
        padding:0 15px;
        border-bottom: 1px solid #eeeeee;
    }

    #tabs {
        position: fixed;
        z-index:10000
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


    .addMoodBg{ background: rgba(0,0,0,0.4); height: 100%; width: 100%; z-index: 10001; position: fixed; display: none}


    .mycenter {
        background: #ffffff;

    }

    /*.mycenter_list {
        height: 100%;
    }*/

    .mycenter a {
        height: 72px;
        display: block;
        padding: 0 15px;
        -webkit-tap-highlight-color: rgba(0,0,0,.2);
    }

    .friend {
        margin-left: 55px;
        padding-top: 28px;
    }

    .friendName {
        font-size: 16px;
        color: #333;
        line-height: 0px;
        margin-bottom: 11px;
    }

    .time {
        font-size: 14px;
        color: #999999;
    }

    .list_left {
        float: left;
        position: relative;
        height: 100%;
    }

    .headerimg {
        height: 44px;
        width: 44px;
        display: inline-block;
        border-radius: 3px;
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
        margin-top: 19px;
        margin-right: 19px;
    }

    .interaction {
        float: left;
        text-align: center;
        padding-top: 17px;
        font-size: 13px;
        color: #aeaeae;
        overflow: hidden;
    }
    .interaction div{
        line-height: 14px;
    }

    .interaction img {
        width: 20px;
        height: 20px;
    }
    .interaction a{
        height:20px;
        padding:0;
    }

    .mycenterFill {
        width: 100%;
        height: 10px;
        background: #eee;
    }

    .friendCenter {
        padding:0;
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
        margin-bottom: 78px;
    }
    .share:active{
        background: #eeeeee;
    }
    .notice_box{
        padding:15px;
        background: #ffffff;
        border-bottom: 1px solid #eee;
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
        margin-top:5px;
        display: block;
    }
    .notice div{
        float: left;
        height:40px;
        line-height: 40px;
        color: #fff;
        margin-left:32px;
        font-size: 13px;
    }
    .notice .goNotice{
        width:16px;
        height:16px;
        display: block;
        float: right;
        margin-right: 14px;
        margin-top:12px;
    }

</style>