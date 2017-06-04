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

            <router-link to='/friends' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="../images/friend1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">朋友心情</p>
            </router-link>

            <router-link to='/me' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="../images/me1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">我的</p>
            </router-link>

        </div>
        <div class="banner">
            <img src="../images/banner.jpg"/>

        </div>
        <!--banner end -->
        <div class="notice_box">
            <div class="notice">
                <img class="notice_friend" v-if="notice.count" :src="notice.lastuser.faceUrl" />
                <div>{{notice.count}}条新消息</div>
                <img class="goNotice" src="../images/goto.jpg" alt="">
            </div>
        </div>



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
                                <router-link to="./myCenter/careMe">
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.isCare==null"
                                         src="../images/list_dianz_nor.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.isCare==null"
                                         src="../images/list_baob_nor.png" alt=""/>
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.isCare!=null"
                                         src="../images/list_dianz_pre.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.isCare!=null"
                                         src="../images/list_dianz_pre.png" alt=""/>
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
            <div class="mycenter friendCenter">

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
                                      src="../images/list_dianz_pre.png" alt=""/>
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
                                     src="../images/list_dianz_pre.png" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <a class="share" href="">点击生成邀请卡</a>
        </div>
        <!--friendcenter end-->



    </div>
</template>

<script type="es6">

    let myCenter = {
        template: '#myCenter'
    }

    export default {
        data() {
            return {
                myLastMood:null,
                user: {},
                friendMoodsSpe: null,
                friendMoods: null,
                notice:null,
                linkTo:"/me/personal/validate"
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
            }
        },
        mounted: function () {
            let _this = this;


            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/[userId]',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {

                    _this.user = eval(data.data.data);
                     if( _this.user.mobile==''|| _this.user.mobile==null|| _this.user.mobile==undefined){
                        _this.linkTo ="/me/personal/validate";
                    }else{
                        _this.linkTo ="/writeMood";
                    }

                }
            }, function (error) {
                //error
            });

            this.$http({
				method: 'GET',
				type: "json",
				url: web.API_PATH + 'notice/find/new/[userId]',
			}).then(function (data) {
				if (data.data.data !== null) {
					_this.notice = eval(data.data.data);
				}
			}, function (error) {
				//error
			});


            //用户 朋友当天心情 特别关系
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'mood/query/friend/today/[userId]/1',
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
                url: web.API_PATH + 'mood/query/friend/today/[userId]/0',
            }).then(function (data) {//es5写法
                if (data.data.status === 1 && data.data.data !== null) {
                    _this.friendMoods = eval(data.data.data);
                    _this.friendMoods = xqzs.mood.initMoodsData(_this.friendMoods);

                }
            }, function (error) {
                //error
            });


            ///用户心情
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'mood/find/userlast/[userId]',
            }).then(function (data) {//es5写法
                if (data.data.status === 1 && data.data.status === 1 && data.data.data !== null) {
                    _this.myLastMood = eval(data.data.data);
                    _this.myLastMood.moodValueUrl = web.IMG_PATH + "list_mood_0" + _this.myLastMood.moodValue + ".png";
                    _this.myLastMood.addTime = xqzs.dateTime.formatTime(_this.myLastMood.addTime);
                }
            }, function (error) {
                //error
            });
        },


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

    .banner {
        width: 100%;
    }

    .banner img {
        display: block;
        width: 100%;
    }

    .mycenter {
        background: #ffffff;
        padding: 0 20px;
    }

    .mycenter_list {
        height: 100%;
    }

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
        width: 40px;
        height: 40px;
        float: left;
        margin-top: 16px;
        margin-right: 30px;
    }

    .interaction {
        float: left;
        text-align: center;
        padding-top: 13px;
        font-size: 13px;
        color: #aeaeae;
    }

    .interaction img {
        width: 26px;
        height: 26px;
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
        margin: 30px 15px 0 15px;
        color: #696969;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: #FFFFFF;
        border-radius: 5px;
        text-align: center;
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