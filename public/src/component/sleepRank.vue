<template id="sleepRank">
    <div class="clock_box" :class="{clock_boxNight:isNight}" style="position: relative;">
        <div v-title>{{sleepRank_title}}</div>
        <div class="myshare" v-show="isShowShareTip" @click="share()">
        </div>
        <v-scroll :on-refresh="onRefresh" :isNotRefresh="true" :on-infinite="onInfinite" :isPageEnd="isPageEnd"
                  :isShowMoreText="isShowMoreText">
            <div class="ranks_boxl">
                <v-showLoad v-if="showLoad"></v-showLoad>
                <div class="clock_top" :class="{clock_topNight:isNight}">
                    <div class="hot" v-if="!isClickFace&&!isGuest"></div>
                    <div class="share2" @click="share">分享</div>
                    <div class="clock_head">

                        <img @click="goRecordCount()" :src="user.faceUrl" alt="">
                    </div>
                    <div class="clock_count" v-show="!isNight">
                        <div class="clock_lists">
                            <div>
                                <p>起床时间</p>
                                <div>{{myFirst.time}}</div>
                            </div>
                            <div>
                                <p>连续早起</p>
                                <div>{{continueDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                            <div>
                                <p>累计早起</p>
                                <div>{{allDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                        </div>
                        <div class="clock_ratio">{{date}}共有{{allCount}}人陪我早起</div>
                    </div>
                    <div class="clock_count clock_countNight" v-show="isNight">
                        <div class="clock_lists clock_listsNight">
                            <div>
                                <p>睡觉时间</p>
                                <div>{{myFirst.time}}</div>
                            </div>
                            <div>
                                <p>连续早睡</p>
                                <div>{{continueDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                            <div>
                                <p>累计早睡</p>
                                <div>{{allDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                        </div>
                        <div class="clock_ratio">{{date}}共有{{allCount}}人陪我早睡</div>
                    </div>
                </div>
                <div class="clock_tab" v-show="!isGuest" :class="{clock_tabNight:isNight}" style="position: relative;">
                    <div class="tab_title">好友排行</div>
                    <div class="clock_tabActive tab_title tab_title_right">总排行</div>
                    <div class="tabMove"></div>
                </div>

                <a @click="fabulousList" class="weui-tabbar__item tab" style="padding: 0"
                   v-show="user&&currUser&&user.id==currUser.id&&notice.count">
                    <div class="notice_box notice_box_p">
                        <div class="notice">
                            <img class="notice_friend" v-if="notice.count&&notice.user!=null"
                                 :src="wxFaceUrl(notice.user.faceUrl)"/>
                            <div>{{notice.count}} 条新消息</div>
                            <img class="goNotice" src="../images/iconjt.png" alt="">
                        </div>
                    </div>
                </a>

                <div class="rank_Bgbox" :class="{box_padding_bottom:showBottomBtnType}">
                    <div class="rank_box goleft">
                        <div class="clock_rank clock_rank1">
                            <div class="rank_list me_rank"
                                 :class="{rank_listNight:isNight,has_content:user&&currUser&&user.id==currUser.id&&myFirst.rank!=''||(!(user&&currUser&&user.id==currUser.id)&&myFirst.content!=null&&myFirst.content!='')}">

                                <span class="rank_cup" :class="{rank_cupNight:isNight}">{{myFirst.rank}}</span>
                                <div class="rank_main">
                                    <img class="rank_headImg" :src="user.faceUrl" alt="">
                                    <div class="rank_name">
                                        <div class="rank_NickName">{{cutNickName(user.nickName)}}</div>
                                        <div @click="addComment(myFirst.id)" class="addLy"
                                             v-if="user&&currUser&&user.id==currUser.id&&(myFirst.content==null||myFirst.content=='')&&myFirst.rank!=''">
                                            我要留言
                                        </div>
                                        <div class="addMessage" v-if="myFirst.content!=null&&myFirst.content!=''">
                                            {{myFirst.content}}
                                        </div>
                                        <div></div>
                                    </div>
                                    <div class="clock_time" v-if="myFirst.rank!=''"
                                         :class="{no_record:myFirst.careCount==null}">{{myFirst.time}}
                                    </div>
                                    <div class="clock_time" v-if="myFirst.rank==''"
                                         :class="{no_record:myFirst.careCount==null}">{{myFirst.notRecordTxt}}
                                    </div>
                                </div>
                                <div class="rank_right" :class="{rank_rightNight:isNight}">
                                    <div class="care_icon" :class="{care_active:user&&currUser&&user.id==currUser.id}"
                                         v-if="myFirst.careCount!=null" @click.stop="fabulousList()">
                                        <span>{{myFirst.careCount||0}}</span>
                                        <img :src="myFirst.careImg" alt="" :class="{heartUp:myFirst.hit}">
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li class="rank_list "
                                    :class="{rank_listNight:isNight,has_content:rankList.content!=null&&rankList.content!=''}"
                                    v-for="(rankList,index) in rankLists"><!--v-show="rankList.userId!=user.id" -->

                                    <span class="rank_cup" :class="{rank_cupNight:isNight}">{{index+1}}</span>
                                    <div class="rank_main rank_border" :class="{rank_borderNight:isNight}">
                                        <img class="rank_headImg" :src="rankList.faceUrl" alt="">
                                        <div class="rank_name">
                                            <div class="rank_NickName">{{cutNickName(rankList.nickName)}}</div>
                                            <div class="addMessage">{{rankList.content}}</div>
                                        </div>
                                        <div class="clock_time">{{rankList.time}}</div>
                                    </div>
                                    <div class="rank_right" :class="{rank_rightNight:isNight}">
                                        <div @click.stop="addCare(rankList)" class="care_icon">
                                            <span>{{rankList.careCount||0}}</span>
                                            <img :src="rankList.careImg" alt="" :class="{heartUp:rankList.hit}">
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <!--总排行-->
                        <div class="clock_rank clock_rank2 ">
                            <div class="rank_list me_rank"
                                 :class="{rank_listNight:isNight,has_content:user&&currUser&&user.id==currUser.id&&myFirst.rank!=''||(!(user&&currUser&&user.id==currUser.id)&&myFirst.content!=null&&myFirst.content!='')}">

                                <span class="rank_cup" :class="{rank_cupNight:isNight}">{{myFirst.rank}}</span>
                                <div class="rank_main" style="border: 0;">
                                    <img class="rank_headImg" :src="user.faceUrl" alt="">
                                    <div class="rank_name">
                                        <div class="rank_NickName"> {{cutNickName(user.nickName)}}</div>

                                        <div @click="addComment(myFirst.id)" class="addLy"
                                             v-show="user&&currUser&&user.id==currUser.id&&(myFirst.content==null||myFirst.content=='')&&myFirst.rank!=''">
                                            我要留言
                                        </div>

                                        <div class="addMessage" v-if="myFirst.content!=null">{{myFirst.content}}</div>
                                        <div class="clock_time" v-if="myFirst.rank!=''"
                                             :class="{no_record:myFirst.careCount==null}">{{myFirst.time}}
                                        </div>
                                        <div class="clock_time" v-if="myFirst.rank==''"
                                             :class="{no_record:myFirst.careCount==null}">{{myFirst.notRecordTxt}}
                                        </div>
                                    </div>
                                </div>
                                <div class="rank_right" :class="{rank_rightNight:isNight}">
                                    <div class="care_icon" :class="{care_active:user&&currUser&&user.id==currUser.id}"
                                         v-if="myFirst.careCount!=null" @click="fabulousList()">
                                        <span>{{myFirst.careCount||0}}</span>
                                        <img :src="myFirst.careImg" alt="" :class="{heartUp:myFirst.hit}">
                                    </div>
                                </div>
                            </div>
                            <ul class="addRankLists">
                                <li class="rank_list"
                                    :class="{rank_listNight:isNight,isMatch:allRannList.isMatch,has_content:allRannList.content!=null&&allRannList.content!=''}"
                                    v-for="(allRannList,index) in rankLists"><!--v-show="allRannList.userId!=user.id"-->

                                    <span class="rank_cup" :class="{rank_cupNight:isNight}">{{index+1}}</span>
                                    <div class="rank_main rank_border " :class="{rank_borderNight:isNight}">
                                        <img class="rank_headImg" :src="allRannList.faceUrl" alt="">
                                        <div class="rank_name">
                                            <div class="rank_NickName">{{cutNickName(allRannList.nickName)}}</div>
                                            <div class="addMessage">{{allRannList.content}}</div>
                                        </div>
                                        <div class="clock_time">{{allRannList.time}}</div>
                                    </div>
                                    <div class="rank_right" :class="{rank_rightNight:isNight}">
                                        <div class="care_icon" @click="addCare(allRannList)">
                                            <span>{{allRannList.careCount||0}}</span>
                                            <img :src="allRannList.careImg" alt="" :class="{heartUp:allRannList.hit}">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


        </v-scroll>
        <div id="output" class="output" style="display: none"></div>
        <div id="follow" style="display: none">
            <div class="dialog_follow">
                <div class="img"><img :src="user.faceUrl"></div>
                <div class="ewm">

                </div>
                <div class="text">
                    长按关注"{{user.nickName}}"<br>
                    开启{{sleepName}}健康生活
                </div>
            </div>
        </div>
        <div class="join_rank" @click="followOrRecord" v-show="showBottomBtnType">{{showBottomBtnText}}</div>
    </div>
</template>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    import Bus from './bus.js';
    var sleepRank = {
        template: '#sleepRank'
    }
    export default {
        components: {
            'v-showLoad': showLoad,
            'v-scroll': scroll
        },
        data() {
            return {
                isClickFace: false,
                sleepNameShort: "早",
                sleepName: "早起",
                notice: {count: 0},
                FIRST_PAGE_NUM: 100,
                STEP_PAGE_NUM: 20,
                myFirst: {rank: "", time: "--:--", notRecordTxt: "还未打卡"},
                rankLists: [],
                isNight: false,
                continueDay: 0,
                allDay: 0,
                earlyPre: 0,
                allCount: 0,
                clock_careCount: 0,
                sleepRank_title: '',
                swipersettime: null,
                showLoad: false,
                date: "",
                counter: 1,
                isPageEnd: false,
                num: 100,
                typeId: '',
                time: '',
                clockDay: '',
                clockMonth: '',
                clockYear: '',
                rankUrl: "",
                rankType: 2,
                isLoading: false,
                careUserId: 0, //通过连接点击过来 跳到指定的用户
                isShowMoreText: true,
                sleepId: '',
                userid: 0,
                isGuest: false,
                user: {},
                currUser: false,
                isShowShareTip: false,
                showBottomBtnType: 0,
                showBottomBtnText: "",
                isLogin: false

            }
        },

        beforeCreate: function () {
            console.log("beforeCreate")

        },
        mounted: function () {

            let _this = this;
            this.showLoad = true;
            if (web.guest) _this.isGuest = true;

            if (xqzs.localdb.get("rank_click_head_face") == 'true') {
                this.isClickFace = true;
            }


            _this.careUserId = _this.$route.query.careUserId;
            if (_this.$route.query.userid) {
                _this.userid = _this.$route.query.userid;
            }
            let userIdStr = "_userId_";
            if (_this.userid) {
                userIdStr = _this.userid;
            }

            _this.time = new Date();
            _this.typeId = _this.$route.query.type;
            _this.clockDay = _this.time.getDate();
            _this.clockMonth = _this.time.getMonth() + 1;
            _this.clockYear = _this.time.getFullYear();
            let guestUrl = "";
            if (web.guest) {
                guestUrl = "?guest=true"
            }


            if (_this.typeId == 3) {
                _this.sleepName = "早睡"
                _this.sleepNameShort = "晚"
            }


            //总排行
            var typeId = this.$route.query.type;

            if (typeId == 3) {
                this.isNight = true;
                this.sleepRank_title = "早睡排行";
            } else {
                this.sleepRank_title = "早起排行";
            }


            //修改排行榜类型
            $('.clock_tab .tab_title').on('click', function () {

                let domThis = this;

                $('.rank_box').removeClass('goleft').removeClass('goright')
                $('.tabMove').removeClass('tab_goleft').removeClass('tab_goRight');
                $('.clock_tab .clock_tabActive').removeClass('clock_tabActive');
                setTimeout(function () {
                    $(domThis).addClass('clock_tabActive')
                }, 150)
//

                if ($(this).index() == 1) {
                    $('.tabMove').addClass('tab_goRight');
                    $('.rank_box').addClass('goleft')
                    _this.changeRankType(2);

                } else {
                    $('.tabMove').addClass('tab_goleft');
                    $('.rank_box').addClass('goright')
                    _this.changeRankType(1);
                }
            })


            //获取查询用户信息

            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/' + userIdStr + '' + guestUrl,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = data.data.data;
                    //二维码
                    _this.$http.get(web.API_PATH + 'user/get/qr/code/' + _this.user.id + guestUrl).then(function (data) {//es5写法
                        $("#output").empty();
//                        console.log(xqzs.string.toUtf8(data.body.data));
                        $('#output').qrcode({
                            width: 100, height: 100,
                            text: xqzs.string.toUtf8(data.body.data), background: "#ffffff",
                            foreground: "red"
                        });

                    }, function (error) {

                    });

                    _this.$http.get(web.API_PATH + 'sleep/daily/info/' + _this.user.id + '/' + _this.typeId + guestUrl).then(data => {
                        if (data.data.status === 1) {
                            _this.allDay = data.data.data.allDays;
                            _this.continueDay = data.data.data.continueDays;
                            _this.allCount = data.data.data.userNum;


                            let date = new Date(data.data.data.time * 1000);
                            if (data.data.data.time && data.data.data.time != null) {
                                _this.date = date.getFullYear() + "年" + (  date.getMonth() + 1) + "月" + date.getDate() + "日，"
                            }

                            xqzs.wx.setConfig(this, function () {


                                let sleepName = "早起";
                                if (_this.typeId == 3) {
                                    sleepName = "早睡"
                                }

                                let title = "坚持" + sleepName + "，遇见更好自己";
                                let desc = "我已经连续" + _this.continueDay + "天" + sleepName + "，" + _this.date + sleepName + "排行全国第 " + data.data.data.rank + " 名！";
                                if (data.data.data.time == null) {
                                    desc = "我要从明天开始，加入21天"+sleepName+"计划，挑战自己！";
                                }


                                wx.showAllNonBaseMenuItem();
                                var config = {
                                    imgUrl: _this.user.faceUrl,
                                    title: title,
                                    desc: desc,
                                    link: web.BASE_PATH + "guest/#/sleepRank?type=" + _this.typeId + "&userid=" + _this.user.id,
                                };
                                weshare.init(wx, config, function () {
                                }, function () {
                                })
                            });
                        }
                    });


                }
                _this.getCurrUser();
            }, function (error) {
                _this.getCurrUser();
            });


        },
        methods: {
            getCurrUser: function () {
                let _this = this;
                //获取当前用户
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null && data.data.data != undefined) {
                        _this.currUser = data.data.data;
                        _this.isLogin = true;
                    }


                    this.$http.get(web.API_PATH + "user/get/judge/relation/" + this.currUser.id + "/" + this.user.id).then((response) => {
                        let isFriend = false;
                        if (response.data.status == 1) {
                            if (response.data.data == 1) {
                                isFriend = true;
                            }
                        }



                        //是否显示底部按钮逻辑
                        let showButtomBtn = 0;
                        if (web.guest) {
                            if (_this.currUser && _this.user) {
                                if (_this.currUser.id == _this.user.id) {//本人不显示
                                    showButtomBtn = 0;
                                } else { //他人显示
                                    if(isFriend){  //好友关系显示
                                        showButtomBtn = 1;
                                    }else{//非好友关系显示
                                        showButtomBtn = 3;
                                    }
                                }
                            } else if (!_this.currUser) {   //未关注显示
                                showButtomBtn = 2;
                            }
                        }
                        _this.showBottomBtnType = showButtomBtn;
                        let sleepName = "早起";
                        if (_this.typeId == 3) {
                            sleepName = "早睡"
                        }
                        if (showButtomBtn == 1) {
                            _this.showBottomBtnText = "我的" + sleepName + "计划"
                        } else if (showButtomBtn == 2) {
                            _this.showBottomBtnText = "我也加入" + sleepName + "计划"
                        }else if(showButtomBtn == 3) {
                            _this.showBottomBtnText = "一起参与" + sleepName + "计划"
                        }


                    }, (response) => {

                    });

















                    _this.getRankList();
                }, function (error) {
                    _this.getRankList();
                });
            },

            initCareImg: function (item,firstTop) {
                let isRedHeart = false;
                if (!this.isLogin) {  //未登录直接判断关心数量
//                    console.log("notlogin")
                    if (item.careCount && item.careCount > 0) {
                        isRedHeart = true;
                    }
                } else { //登录判断自己是否关心过
//                    console.log("login")
                    if (item.caremy && item.caremy > 0) {
                        isRedHeart = true;
                    }
                }
                if(firstTop){
                    if(item.careCount && item.careCount > 0&&this.user&&this.currUser&&this.user.id==this.currUser.id){
                        isRedHeart = true;
                    }
                }
                if (isRedHeart) {
                    item.careImg = web.IMG_PATH + "/mood_icon_dianz_pre.png";
                } else {
                    item.careImg = web.IMG_PATH + "/mood_icon_dianz_nor.png";
                }
//                console.log(item);
                return item;
            },

            follow: function () { //关注
                let _this = this;
                xqzs.weui.dialogCustom($("#follow").html())
                var mycanvas1 = document.getElementsByTagName('canvas')[0];
                var img = xqzs.image.convertCanvasToImage(mycanvas1);
                $('.ewm').html('')
                $('.ewm').append(img);
            },
            followOrRecord: function () {

                if (this.currUser && this.currUser != undefined && this.currUser != null && this.currUser != {}) {
                    //登录但不是好友
                    this.$http.get(web.API_PATH + "user/get/judge/relation/" + this.currUser.id + "/" + this.user.id).then((response) => {
                        let isFriend = false;
                        if (response.data.status == 1) {
                            if (response.data.data == 1) {
                                isFriend = true;
                            }
                        }
                        if (isFriend) {
                            this.$router.push("/record")
                        } else {
                            this.follow()
                        }

                    }, (response) => {
                        this.follow()
                    });
                } else {
                    this.follow()
                }
            },
            share: function () {
                this.isShowShareTip = !this.isShowShareTip;
            },
            getNotice: function (sleepId) {

                let _this = this;

                //关心提醒
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'sleep/query/new/notice/' + sleepId + '/' + _this.typeId + '/_userId_',
                }).then(function (data) {
//                    console.log(data)
                    if (data.data.status == 1) {
                        _this.notice = data.data.data;

                    }
                }, function (error) {
                    //error
                });
            },
            changeRankType: function (v) {

                let _this = this;
                _this.num = _this.FIRST_PAGE_NUM;
                _this.isPageEnd = false;
                _this.isShowMoreText = true;
                _this.counter = 1;
                let url1 = web.API_PATH + "sleep/daily/relation/rank/page/" + _this.typeId + "/_userId_/" + _this.num + "/" + _this.clockDay + "/" + _this.clockMonth + "/" + _this.clockYear + "/";
                let url2 = web.API_PATH + "sleep/daily/rank/page/" + _this.typeId + "/_userId_/" + _this.num + "/" + _this.clockDay + "/" + _this.clockMonth + "/" + _this.clockYear + "/";
                if (v == 1) {
                    this.rankUrl = url1;
                } else {
                    this.rankUrl = url2;
                }


                this.rankType = v;
                _this.getRankList()
            },
            getRankList: function () {

                let vm = this;
                let userIdStr = "_userId_";
                if (vm.userid) {
                    userIdStr = vm.userid;
                }
                let url1 = web.API_PATH + "sleep/daily/relation/rank/page/" + vm.typeId + "/" + userIdStr + "/" + vm.num + "/" + vm.clockDay + "/" + vm.clockMonth + "/" + vm.clockYear + "/" + vm.counter;
                let url2 = web.API_PATH + "sleep/daily/rank/page/" + vm.typeId + "/" + userIdStr + "/" + vm.num + "/" + vm.clockDay + "/" + vm.clockMonth + "/" + vm.clockYear + "/" + vm.counter;
                if (vm.rankType == 1) {
                    this.rankUrl = url1;
                } else {
                    this.rankUrl = url2;
                }
                this.rankUrl = this.rankUrl + "?";
                if (web.guest) {
                    this.rankUrl = this.rankUrl + "guest=true"
                }

                //判断是否有当前用户
                if (vm.currUser) {
                    this.rankUrl = this.rankUrl + "&visitorId=" + vm.currUser.id
                }


                if (vm.isLoading || vm.isPageEnd) {
                    return;
                }
                if (vm.counter == 1) {
                    vm.showLoad = true;
                }
                vm.isLoading = true;
                vm.$http.get(vm.rankUrl).then((response) => {
                    vm.showLoad = false;
                    vm.isLoading = false;
//                    console.log(response)


                    if (response.data.data.userRank && response.data.data.userRank.content != null) {
                        response.data.data.userRank.content = xqzs.face.parseEmoji(response.data.data.userRank.content);
                    }

                    vm.myFirst = response.data.data.userRank || vm.myFirst;
                    vm.myFirst = vm.initCareImg(vm.myFirst,true);


                    if (vm.myFirst.id != undefined) {
                        vm.getNotice(vm.myFirst.id);
                        vm.sleepId = vm.myFirst.id
                    } else {
//                        console.log("undefined")
                    }


                    let arr = response.data.data.allRank;
//                    console.log("console.log(arr.length)")
//                    console.log(vm.num)
                    if (arr.length < vm.num) {
                        vm.isPageEnd = true;
                        vm.isShowMoreText = false
                    }
                    Bus.$emit("scrollMoreTextInit", vm.isShowMoreText );
                    if (arr.length == 0) return;
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = vm.initCareImg(arr[i]);
                        if (arr[i].content != null) {
                            arr[i].content = xqzs.face.parseEmoji(arr[i].content);
                        }


                    }


                    if (vm.counter == 1) {
                        vm.rankLists = arr;
                        vm.num = vm.STEP_PAGE_NUM;
                    } else {
                        vm.rankLists = vm.rankLists.concat(arr);
                    }


                    //判断是否从提醒页面到 那么定位到 这个用户
                    if (vm.careUserId != 0 && vm.careUserId != null && vm.careUserId != undefined) {
                        let isMatch = false;
                        for (let i = 0; i < vm.rankLists.length; i++) {
                            if (vm.rankLists[i].userId == parseInt(vm.careUserId)) {
                                isMatch = true;
                                vm.rankLists[i].isMatch = true;
                                vm.$set(vm.rankLists, i, vm.rankLists[i]);
                                break;
                            }
                        }

                        if (isMatch) {
                            //匹配到滚动到指定位置

                            vm.$nextTick(function () {
                                let top = $(".isMatch").offset().top;


                                $('.yo-scroll').animate({
                                    scrollTop: top - ($(document).height() - $(".isMatch").height()) + 29
                                }, 1000);
                            })

                        } else {
                            //匹配不到加载下一页
                            vm.getRankList()
                        }

                    }
                    if (vm.counter == 1) {
                        vm.counter = 5
                    }
                    vm.counter = vm.counter + 1;

                }, (response) => {
                    vm.isLoading = false;
                    vm.showLoad = false;
                });

            },
            onInfinite(done) {
                this.getRankList();
                done() // call done
            },
            addComment: function (sleepId) {
                let vm = this;
                xqzs.mood.actionSheetEdit("取消", "发送", function (v) {
//                    console.log(v)
                    vm.$http.put(web.API_PATH + 'sleep/reply/_userId_/' + sleepId, {content: v}).then(response => {
                        if (response.data.status === 1) {
                            vm.myFirst.content = v
                        }


                    }, response => {

                    });


                }, function (v) {

                }, '最多20个字', 20)
            },
            wxFaceUrl: function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },

            //页面跳转
            goRecordCount: function () {
                if(web.guest==true){}else{
                    xqzs.localdb.set("rank_click_head_face", "true")
                    this.$router.push("/getUpStatistics?type=" + this.typeId);
                }

            },
            addCare: function (item) {
                let _this = this;
                //如果没有关注公众号则弹出二维码
                if (!_this.currUser) {
                    _this.follow()
                    return;
                }
                if (item.caremy == 0 || item.caremy == undefined) {
                    _this.$http.put(web.API_PATH + 'mood/care/add', {
                        "moodId": null,
                        "userId": null,
                        'type': item.type,
                        'withId': item.id
                    }).then(response => {
                        if (response.data.status === 1) {
                            let list = _this.rankLists;
                            for (let i = 0; i < list.length; i++) {
                                if (list[i].id == item.id) {
                                    list[i].careCount = response.data.data;
                                    list[i].caremy = 1;
                                    list[i].hit = true;
                                    list[i] = _this.initCareImg(list[i])
                                    _this.$set(_this.rankLists, i, list[i]);
                                    //更新顶部信息

                                    if (list[i].id == _this.myFirst.id) {

                                        _this.myFirst.caremy = 1;
                                        _this.myFirst.hit = true;
                                        _this.myFirst = _this.initCareImg(_this.myFirst,true);
                                        _this.myFirst.careCount = response.data.data;
                                    }
                                    break;

                                }
                            }
                        }
                    });
                }
            },
            cutNickName: function (nickName) {
                if (!nickName) {
                    return '';
                }
                var len = 8;
                if (nickName.length <= len) {
                    return nickName;
                }
                return nickName.substr(0, 8) + '...';
            },
            fabulousList: function () {

                var _this = this;
                if (this.user && this.currUser && this.user.id == this.currUser.id) {

                    this.$router.push('/fabulous?sleepId=' + _this.sleepId + '&type=' + _this.typeId)
                } else if (this.isGuest && this.currUser) {
                    if (!this.myFirst.type) {
                        this.myFirst.type = this.typeId;
                    }

                    _this.addCare(this.myFirst)
                }

            },


        }

    }
</script>
<style>


    .care_active:active {
        background: #f1f1f1
    }

    .clock_time.no_record {
        right: -10px
    }

    .join_rank {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2.588235294117647rem;
        width: 100%;
        display: block;
        line-height: 2.588235294117647rem;
        background: #0BB20C;
        color: #fff;
        text-align: center;
        font-size: 0.88rem;
    }

    .join_rank:active {
        background: #0b9c0c
    }

    .yo-scroll {
        background: none !important
    }

    .isMatch {
        background: #eee !important;
    }

    .clock_rank {
        width: 50%;
        float: left;
    }

    .clock_box {
        height: 100%;
        background: #e2f4fe;
    }

    .clock_boxNight {
        background: #5f5975;
    }

    .clock_top {
        padding: 2.471rem 0.88235rem 0 0.88235rem;
        position: relative;
        color: #666666;

    }

    .clock_top .share2 {
        position: absolute;
        right: 0.9rem;
        top: 2.48rem;
        width: 3.6rem;
        height: 1.6rem;
        line-height: 1.6rem;
        background: #0BB20C;
        color: #fff;
        border-bottom-left-radius: 0.8rem;
        text-align: center;
        z-index: 1000;
        font-size: 0.8rem
    }

    .clock_top .share2:active {
        background: #0b8d0c;
    }

    .clock_topNight {
        color: #f4f4f7;
    }

    .clock_count {
        background: url("../images/zaoqi.jpg") no-repeat;
        background-size: 100% 100%;
        height: 11.03rem;
        position: relative;
        box-shadow: 0px 5px 10px 0 rgba(51,51,51,0.6);
    }

    .clock_countNight {
        background: url("../images/zaoshui.jpg") no-repeat;
        background-size: 100% 100%;
        box-shadow: 0px 5px 10px 0px rgba(51,51,51,1);
    }

    .clock_head {
        width: 3.53rem;
        height: 3.53rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 0.88235rem;
        left: 50%;
        margin-left: -30px;
        box-shadow: rgba(24, 24, 24, 0.38) 0px 2.5px 5px;
        z-index: 1;
    }

    .clock_top .hot {
        height: 10px;
        width: 10px;
        background: red;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 1.2rem;
        margin-left: 1.2rem;
        z-index: 10000;
    }

    .clock_head img {
        width: 3.53rem;
        height: 3.53rem;
    }

    .clock_lists {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: absolute;
        top: 3.8235rem;
        width: 100%;
        font-size: 1.235rem;
        line-height: 1.294rem;
    }

    .clock_lists > div {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }

    .clock_lists p {
        font-size: 0.8235rem;
        color: #807e7e;
        line-height: 0.88235rem;
        margin-bottom: 1rem;
    }

    .clock_lists > div, .clock_lists p, .clock_ratio {
        color: #fff
    }

    .clock_listsDay {
        font-size: 0.88235rem;
    }

    .clock_listsNight p {
        color: #e9e9ec;
    }

    .clock_ratio {
        width: 100%;
        text-align: center;
        font-size: 0.7059rem;
        position: absolute;
        bottom: 1.7647rem;
    }

    .clock_tab {
        width: 12rem;
        height: 2rem;
        margin: 0 auto;
        margin-top: 1.1765rem;
        border-radius: 1rem;
        text-align: center;
        font-size: 0.8235rem;
        line-height: 2rem;
        border: 1px solid #fff;
        color: #333;
    }

    .clock_tab .tab_title {
        z-index: 100;
        position: absolute;
        width: 50%;
        height: 2rem;
    }

    .clock_tab .tab_title_right {
        left: 50%;
    }

    .clock_tabNight > div {
        color: #fff;
    }

    .tabMove {
        height: 100%;
        width: 50%;
        background: #fff;
        border-radius: 1rem;
        position: absolute;
        left: 50%;
        top: -1px;
        z-index: 1;
        border: 1px solid #fff;
        transition: transform .5s;
        -webkit-transition: transform .5s;
    }

    .tab_goleft {

        transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
    }

    .tab_goRight {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }

    .clock_tabNight .clock_tabActive {
        color: #333;
    }

    .clock_box .rank_list:last-of-type {
        border-bottom: 0;
    }

    .clock_box .rank_list {
        background: #fff;
        display: flex;
        border-bottom: 0.06rem solid #eee;
        padding: 0.565rem 0;
        width: 100%;
        position: relative;
        line-height: 2.35rem;
    }

    .has_content.rank_list {
        line-height: 1.2rem;
    }

    .rank_listNight {
        /*background: rgba(255,255,255,0.2);*/
    }

    .rank_cup {
        width: 1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.94118rem;
        color: #666;
        text-align: center;
        height: 0.71rem;
        line-height: 0.71rem;
        margin: 0.88235rem 0.88235rem 0 0.88235rem;
    }

    .rank_cupNight {
        color: #333;
    }

    .me_rank {
        margin-bottom: 0.88235rem;
    }

    .rank_main {
        display: flex;

        width: 76.4%;
        position: relative;
    }

    .rank_NickName {
        font-size: 0.8235rem;
        color: #333;

    }

    .addLy {
        font-size: 0.70588rem;
        color: #066EA4;
        display: inline;
    }

    .addLy:active {
        background: #eee;

    }

    .addMessage {
        font-size: 0.70588rem;
        color: #7C7B7B;
        width: 12.11764705882353rem
    }

    .rank_border {

    }

    .rank_borderNight {

    }

    .rank_headImg {
        height: 2.35rem;
        width: 2.35rem;
        display: block;
        border-radius: 0.294rem;
        margin-right: 0.88235rem;
    }

    .clock_box .rank_right {
        position: absolute;
        right: 0;
        top: 0;
    }

    .clock_time {
        font-size: 0.88235rem;
        color: #666;

        position: absolute;
        right: 18px;
        top: 0;
    }

    .care_icon {
        padding: 0.8rem 0.88235rem 0.85rem 1.2rem
    }

    .clock_box .rank_right img {
        display: block;
        width: 0.9412rem;
        height: 0.88235rem;
    }

    .clock_box .rank_right span {
        line-height: 0.7647rem;
        font-size: 0.7059rem;
        color: #999;
        display: block;
        text-align: center;
        margin-bottom: 0.2941rem;
    }

    .rank_rightNight span {
        color: #ccc;
    }

    .goleft {
        -webkit-transition: transform .5s;
        transition: transform .5s;
        /*margin-left: -100%;*/
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0)
    }

    .goright {
        -webkit-transition: transform .5s;
        transition: transform .5s;
        /* margin-left: 0%;*/
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .rank_Bgbox {
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.88235rem;
    }

    .rank_Bgbox.box_padding_bottom {
        margin-bottom: 2.88235rem;
    }

    .rank_box {
        width: 200%;
        margin-top: 0.88235rem
    }

    .rank1Color {
        color: #ffc800;
    }

    .rank2Color {
        color: #c3c1c1;
    }

    .rank3Color {
        color: #c27502;
    }

    .ranks_boxl .notice_box {
        background: none;
        border-bottom:  none;
    }

    .notice_box_p {
        padding: 16px 0;
        padding-bottom: 0
    }

    .notice {
        height: 40px;
        width: 180px;
        background: #393939;
        border-radius: 5px;
        margin: 0 auto;

    }

    .notice:active {
        background: #1f1f1f
    }

    .notice_friend {
        height: 32px;
        width: 32px;
        float: left;
        margin-left: 5px;
        margin-top: 5px;
        display: block;
    }

    .notice div {
        float: left;
        height: 40px;
        line-height: 40px;
        color: #fff;
        margin-left: 32px;
        font-size: 13px;
    }

    .notice .goNotice {
        width: 16px;
        height: 16px;
        display: block;
        float: right;
        margin-right: 14px;
        margin-top: 12px;
    }

    .notice img {
        height: 30px;
        width: 30px;
    }

    .dialog_follow {
        width: 66%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 20.47058823529412rem;
        position: absolute;
        top: 50%;
        margin-top: -10.23529411764706rem;
        left: 17%;
        z-index: 10001;
    }

    .dialog_follow img {
        width: 100%
    }

    .dialog_follow .img {
        height: 11rem;
        overflow: hidden
    }

    .dialog_follow .text {
        text-align: center;
        font-size: 0.8235294117647059rem;
        line-height: 1.5
    }

    .ewm {
        width: 4.329411764705882rem;
        height: 4.329411764705882rem;
        border: 1px solid #ffcdcd;
        margin: 0.8rem auto;
        margin-bottom: 0.65rem;
        padding: 2px;
    }

    .ewm .output {
        width: 100%;
        height: 100%
    }

    .myshare {
        background: url(../../dist/birthday/share.png) no-repeat center top rgba(0, 0, 0, 0.9);
        background-position: 2.5rem 3.5rem;
        background-size: 80%;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10001;
    }


</style>


