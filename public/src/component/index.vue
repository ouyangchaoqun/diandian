<template>
    <div style="height: 100%" class="index_box" >

        <div v-title>好一点</div>
        <v-tab tab="home"></v-tab>
        <div class="weui-tab__panel" >
            <div class="banner" style="position: relative;">
                <div class="birthdays swiper-container" v-if="birthdayList&&birthdayList.length>0">

                    <div class="swiper-wrapper">
                        <div class="swiper-slide" @click="birthday(item.userId)" v-for="(item,index) in  birthdayList" :key="index" v-show="birthdayList.length>0"><template  v-if="item.myself==1"><img :src="item.faceUrl" ></template><template v-else=""><img :src="item.faceUrl" ></template></div>

                    </div>

                    <i></i>
                </div>

                <div v-show="isBirthday" class="brithBox">
                    <img src="../images/birthday/bribg.jpg" alt="">
                    <img src="../images/birthday/bribg.png" alt="" style="position: absolute;bottom: 0">
                    <img class="briCake" src="../images/birthday/briCake.png" alt="">
                    <img class="brithText" src="../images/birthday/brithText.png" alt="">
                    <img class="brithDayBg" src="../images/birthday/brithDayBg.png" alt="">
                </div>
                <v-banner v-show="!isBirthday"></v-banner>
                <div class="flow">
                    <div class="img4"></div>
                    <div class="img"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>


                </div>
            </div>
            <div class="index_btns">
                <a   :class="isNight()?'go_sleep':'get_up'" @click="sleepOrGetUp()">
                    <span class="record_hot" v-show="isRecordTime()&&(isNight()&&!isGoBed||!isNight()&&!isGetUp)" ></span>
                    <span v-if="!isNight()">
                        <template v-if="isGetUp||!isRecordTime()">早起排行</template>
                        <template v-else="">早起打卡</template>
                    </span>
                    <span v-if="isNight()">
                        <template v-if="isGoBed||!isRecordTime()">早睡排行</template>
                        <template v-else="">早睡打卡</template>
                    </span>
                </a>
                <a class="mood" @click="addMood()"><span>心情说说</span></a>
                <a class="habit" @click="goHabit()"><span>好习惯</span></a>
                <a class="sign" @click="dailyRecord()"><span>每日一签</span></a>
            </div>
            <!--banner end -->
            <router-link :to='noticeLink' class="weui-tabbar__item tab" style="padding: 0" v-if="notice.count">
                <div class="notice_box notice_box_p">
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
                    <a   @click="link('/myCenter/myIndex')">
                        <div class="list_left">
                            <img class="headerimg" :src="wxFaceUrl(user.faceUrl)"/>
                            <div class="friend">
                                <p class="friendName">{{user.nickName | shortName(8)}}</p>
                                <p class="time"><font>{{friendCount}}位好友</font><i class="habits"><font v-for="habit in myHabit" v-if="habit.finish==1"><img :src="habit.iconFinish"/></font></font></i><i class="clear"></i></p>
                            </div>
                        </div>

                        <div class="list_right">
                            <template v-if="myLastMood!=null">
                                <img class="moodimg" :src="myLastMood.moodValueUrl"/>
                                <div class="interaction" @click.stop="link(myLastMood.careListUrl)">
                                    <div>{{ myLastMood.careCount }}</div>
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.careCount<=0"
                                         src="../images/list_icon_dianz_nor.png" alt=""/>
                                    <img v-if="myLastMood.moodValue>=5 &&  myLastMood.careCount>0"
                                         src="../images/list_icon_dianz_pre.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.careCount>0"
                                         src="../images/list_baob_pre.png" alt=""/>
                                    <img v-if="myLastMood.moodValue<5 &&  myLastMood.careCount<=0"
                                         src="../images/list_baob_nor.png" alt=""/>
                                </div>
                            </template>
                            <template v-if="myLastMood==null">
                                <img class="moodimg my_head" src="../images/list_mood_no.png"/>

                            </template>
                        </div>
                    </a>
                </div>
                <!--mycenter end-->
                <div class="mycenterFill"></div>
                <!--friendcenter start-->
                <div class="mycenter friendCenter" v-if="user.isLookFriend!=null&&user.isLookFriend!==0">
                    <div class="addBorder" v-for="friendMood in friendMoodsSpe">
                        <a @click="friendLink(friendMood.userId)">
                            <div class="list_left">
                                <img class="headerimg" :src="wxFaceUrl(friendMood.faceUrl)"/>
                                <div class="friend">
                                    <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName | shortName(8)}}</p>
                                    <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName | shortName(8)}}</p>
                                    <p class="time"><font>{{friendMood.friendNum}}位好友</font><i class="habits"><font v-for="habit in friendMood.finishHabit"><img :src="habit.iconFinish"/></font></font></i><i class="clear"></i></p>
                                </div>
                            </div>

                            <div class="list_right">
                                <img class="moodimg" :src="friendMood.moodValueUrl"/>
                                <div class="interaction" @click.stop="care(friendMood.id)" >
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
                            <div class="clear"></div>
                        </a>
                    </div>
                    <div class="mycenterFill" v-if="hasLine"></div><!--todo-->
                    <div class="addBorder" v-for="friendMood in friendMoods">
                        <a @click="friendLink(friendMood.userId)">
                            <div class="list_left">
                                <img class="headerimg" :src="wxFaceUrl(friendMood.faceUrl)"/>
                                <div class="friend">
                                    <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName | shortName(8) }}</p>
                                    <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName | shortName(8) }}</p>
                                    <p class="time"><font>{{friendMood.friendNum}}位好友</font><i class="habits"><font v-for="habit in friendMood.finishHabit"><img :src="habit.iconFinish"/></font></font></i><i class="clear"></i></p>
                                </div>
                            </div>

                            <div class="list_right">
                                <img class="moodimg" :src="friendMood.moodValueUrl"/>
                                <div class="interaction" @click.stop="care(friendMood.id)" >
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
                            <div class="clear"></div>
                        </a>
                    </div>
                </div>
                <a class="share" @click="createinvite()">点击生成好友邀请卡</a>
                <div class="qun_qrcode"><img src="http://oss.xqzs.cn/xqzs/qun_qrcode.png"  width="60%" :height="qunImgHeight"></div>

            </div>
            <!--friendcenter end-->
        </div>


        <div class="addMoodBg"></div>

    </div>
</template>

<script type="es6">
    import banner from "./banner.vue";
    import tab from "./lib/tab.vue";
    import Bus from './bus.js';
    let myCenter = {
        template: '#myCenter'
    };

    export default {
        data() {
            return {
                myLastMood:null,
                notice:{count:0},
                linkTo:"#",
                noticeLink:'/notice',
                fillFlag:false,
                scrollTop:0,
                birthdayList:[],
                isBirthday:false,
                qunImgHeight:300,
                newMoodCount:0,
                LOCAL_DB_KEY_MOOD_COUNT:'local_db_key_mood_count',
                isMoreHotPointClicked:false,

                MORNING_FROM_TIME: '5:00',
                MORNING_END_TIME: '10:00',
                NIGHT_FROM_TIME: '20:00',
                NIGHT_END_TIME: '23:59',
                MORNING_TYPE: 2,
                NIGHT_TYPE: 3,
                friendCount:'',
                myHabit:[]

            }
        },
        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
        props:{
            user:{
                type:Object
            },friendMoodsSpe: {
                type:Object
            },
            friendMoods: {
                type:Object
            },
            myLastMood:{
                type:Object
            }
        },
        methods: {
            getMyHabit:function () {
                let _this = this;
                _this.$http.get(web.API_PATH + 'habit/get/card/page/_userId_/1/1').then(response => {
                    if (response.data.status === 1) {
                        _this.myHabit = response.data.data.todayHabit;

                    }
                });

            },
            getFriends:function () {
                let _this = this;
                this.$http.get(web.API_PATH + 'user/query/friend/by/user/id/_userId_').then(function (data) {

                    if (data.body.data !== null&&data.body.data !== undefined) {

                        let generalFriends= data.body.data.generalFriends;

                        let arrayGeneal = [];
                        for (let key in generalFriends) {
                            for (let i = 0; i < generalFriends[key].length; i++) {
                                let friend = generalFriends[key][i];
                                friend.firstCn = key;
                                friend.friendLink = "/#/friendCenter/" + friend.id;
                                arrayGeneal.push(friend)
                            }
                        }

                        console.log(data.body.data)
                        _this.friendCount = data.body.data.specialFriends.length +  arrayGeneal.length;
                    }

                }, function (error) {
                });
            },


            initSleepConfig:function () {
                let _this=this;
                //是否打卡
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + "record/sleep/get/is/record/_userId_",
                }).then(function (data) {
                    if (data.body.status == 1) {
                        _this.isGetUp = data.body.data.isGetUp;
                        _this.isGoBed = data.body.data.isGoBed;
                        _this.goBedId = data.body.data.goBedId;
                        _this.getUpId = data.body.data.getUpId;

                        _this.MORNING_FROM_TIME = data.body.data.getUpConfig.starttime;
                        _this.MORNING_END_TIME = data.body.data.getUpConfig.endtime;
                        _this.NIGHT_FROM_TIME = data.body.data.goBedConfig.starttime;
                        _this.NIGHT_END_TIME = data.body.data.goBedConfig.endtime;
                    }
                }, function (error) {

                });
            },
            isNight:function () {
                let date= new Date();
                return !(date.getHours() >= 5 && date.getHours() < 20)
            },
            isRecordTime:function () {
                if(this.isNight()){
                    return this._isRecordTime(this.NIGHT_FROM_TIME,this.NIGHT_END_TIME)
                }else{
                    return this._isRecordTime(this.MORNING_FROM_TIME,this.MORNING_END_TIME)
                }
            },
            //是否在打卡时间内
            _isRecordTime: function (fromTime, endTime) {
                let startTime = parseInt(fromTime.split(":")[0]) * 60 + parseInt(fromTime.split(":")[1]);
                endTime = parseInt(endTime.split(":")[0]) * 60 + parseInt(endTime.split(":")[1]);
                let mydate = new Date();
                let nowTime = mydate.getHours() * 60 + mydate.getMinutes();
                //打卡时间
                let _r = false;
                //跨天判断
                if (startTime > endTime) {  //跨天
                    _r = (startTime <= nowTime && nowTime <= 24 * 60) || (0 <= nowTime && nowTime <= endTime);
                } else { //非跨天
                    _r = startTime <= nowTime && nowTime <= endTime;
                }
                return _r;
            },

            goHabit:function () {
                this.$router.push("/habit")
            },
            dailyRecord: function () {
                let _this = this;
                _this.showLoad = true;
                _this.$http.get(web.API_PATH + 'record/daily/sign/card/_userId_').then(response => {
                    console.log(response);
                    if (response.data.status == 1) {
                        _this.showLoad = false;
                        xqzs.weui.dialog({
                            title: '每日一签已经发送',
                            msg: '前往公众号查看你的每日一签',
                            submitText: '查看',
                            submitFun: function () {
                                try {
                                    WeixinJSBridge.call('closeWindow');
                                } catch (e) {
                                }
                            }
                        })
                        _this.isDailyRecord = true;
                        var date = new Date();
                        cookie.set("isDailyRecord", true, 1 - date.getHours() / 24);

                    }

                }, function (error) {
                    _this.showLoad = false;
                });


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
                        if(_this.user&&_this.user.faceUrl) xqzs.wx.shareConfig.home.imgUrl=_this.user.faceUrl;
                        xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.home);
                    }
                }, function (error) {
                    //error
                });
            },
            addMood: function () {
                let _this = this;
                console.log("addMood");
                _this.getMoodCount(function (moodcount) {
                    if (moodcount < 10) {
                        _this.$router.push("/addMood")

                    } else {
                        if (_this.user&&_this.user.mobile == '' || _this.user.mobile == null || _this.user.mobile == undefined) {
                            _this.$router.push("/me/personal/validate")
                        } else {
                            _this.$router.replace("/addMood")
                        }
                    }
                });

            },
            getMoodCount(callback) {
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/get/user/count/_userId_'
                }).then(function (bt) {
                    if (bt.data && bt.data.status == 1) {
                        if (typeof callback == 'function') {
                            callback(bt.data.data);
                        }
                    }
                })
            },

            sleepOrGetUp:function () {
                if(this.isNight()){
                    this.sleep();
                }else{
                    this.getUp();
                }
            },
            getUp: function () {
                console.log("morning")
                let _this = this;
                if (_this.isGetUp && _this.isRecordTime()) {
                    _this.$router.push("sleepRank?type=" + this.MORNING_TYPE)
                }else{
                    _this.$router.push("record?record_type=" + this.MORNING_TYPE)
                }

            },
            sleep: function () {
                console.log('sleep')
                this.$router.push("record?record_type=" + this.NIGHT_TYPE)
            },

            birthday:function (userId) {
                this.$router.push("/birthday?userId="+userId)
            },
            record:function () {
                var  _this=this;
                Bus.$emit("goIndex",false);
                setTimeout(function () {
                    _this.$router.push("/record")
                },2)
            },
            rank:function () {

                let date=new Date();
                let hour = date.getHours();
                if(hour>=4&&hour<=19){
                    this.$router.push("/sleepRank?type=2")
                }else{
                    this.$router.push("/sleepRank?type=3")
                }


            },
            care: function (id) {
                let _this = this;
                _this.$http.put(web.API_PATH + 'mood/care/add', {"moodId": id, "userId": "omg"}).then(function (data) {//es5写法
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
            more:function () {
              this.link("/more")
            },
            link: function (url) {
                this.$router.push(url)
            },
            friendLink:function (userId) {
                this.$router.push({name: 'friendUrl', params: {Id:userId}})
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
                        msg:'前往公众号查看你的专属名片',
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


            getFriendLastMood:function () {

                let _this=this;

                //小心情数量发生变化就有红点点
                let oldMoodCount=xqzs.localdb.get(_this.LOCAL_DB_KEY_MOOD_COUNT);
                _this.$http.get(web.API_PATH + "mood/query/all/page/0/1/1?lastId=0&lastAdId=0")
                    .then(function (bt) {
                        if (bt && bt.data.status == 1) {
                            let newMoodCount = bt.data.data.total;
                            _this.newMoodCount=newMoodCount;
                            if (oldMoodCount != newMoodCount) {
                                _this.hasNewFirendMood = true;
                                let container = $('#tabs .tab:eq(0)');
                                let right = (container.width() - 32) / 2;
                                _this.newFirendMoodStyle = 'right:' + right + 'px';
                            }
                        }
                    })





                //好友是否有新心情
//                var that = this;
//                var lastfriendmoodid = xqzs.friendmood.getlast();
//                if(lastfriendmoodid!=''){
//                    that.$http.get(web.API_PATH + "mood/find/friendlast/_userId_")
//                        .then(function (bt) {
//                            if(bt && bt.data.status == 1){
//                                var data = bt.data.data;
//                                var newId = data.id;
//                                console.info(newId+'   '+lastfriendmoodid)
//                                if(newId > parseFloat(lastfriendmoodid)){
//                                    that.hasNewFirendMood=true;
//                                    var container = $('#tabs .tab:eq(0)');
//                                    var right = (container.width() - 32) / 2;
//                                    that.newFirendMoodStyle = 'right:'+right+'px';
//                                }
//                            }
//                        })
//                }
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

            let _this =this;
            _this.getUserInfo();
            _this.initSleepConfig();
            _this.getFriends();
            _this.getMyHabit();



             if( xqzs.localdb.get("isBirthday")==="1"){
                 _this.isBirthday=true;
             }else{
                 _this.isBirthday=false;
             }


             this.qunImgHeight =  $(window).width() * 400 *0.6 / 300;
             $(".weui-tab__panel").height($(window).height()-50);




            let date=new Date();
            let year=date.getFullYear();
            let month=date.getMonth()+1;
            let day=date.getDate()
            //好友生日 
            _this.$http.get(web.API_PATH + 'birthday/get/list/'+year+'/'+month+'/'+day+'/_userId_').then(function (data) {//es5写法
                console.log(data)
                if(data.body.status==1){
                    _this.birthdayList=data.body.data;
                    let isbirthday=false;
                    for(let i=0;i<_this.birthdayList.length;i++){
                        if(_this.birthdayList[i].myself==1){

                            isbirthday=true;
                            break;
                        }
                    }
                    _this.isBirthday=isbirthday;
                    if(isbirthday){
                        xqzs.localdb.set("isBirthday",1);
                    }else{
                        xqzs.localdb.set("isBirthday",0);
                    }
                    let loop=false;
                    if(_this.birthdayList>1){loop=true}
                    _this.$nextTick(function () {
                        _this.questSwiper = new Swiper ('.birthdays', {
                            direction : 'vertical',
                            noSwiping : false,
                            loop : loop,
                            autoplay : 3000,
                            observer:true,//修改swiper自己或子元素时，自动初始化swiper
                            onSlideChangeStart:function () {

                            },
                            onSlideChangeEnd :function () {

                            }
                        })
                    })

                }


            }, function (error) {

            });

            $(".weui-tab__panel").scroll(function () {
                xqzs.localdb.set("indexScrollTop",$(this).scrollTop())
            });


            _this.noticeLink=_this.noticeLink +"/?time="+ xqzs.dateTime.getTimeStamp();




            Bus.$emit('initHomeData');


            _this.$http({
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




            if(window.screen.height==$(window).height()){
                if(window.screen.width==320&& window.screen.availHeight==548){
                    var style ="<style id='iphone5style'>.transitionBox .child-view{height:504px !important;}</style>";
                    $(".child-view").append(style);
                }
            }else{
                $("#iphone5style").remove();
            }

//

        },
        updated:function () {
            var obj =  $(".mycenter>a ,.addBorder>a")
            xqzs.weui.active(obj);

            $(".interaction").on("touchstart",function () {
                event.stopPropagation();
            })

        },
        components: {
            "v-banner": banner,
            "v-tab":tab
        }

    }


</script>
<style>

    .index_btns { display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        height: 5.5rem;
        background: #fff;
        border-bottom: 0.58823529411764705882352941176471rem solid #F4F3F8 ;
    }
    .index_btns a{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        z-index: 100;
        text-align: center;
        color:#999; font-size: 0.70588235294117647058823529411765rem;
        position: relative;
    }
    .index_btns a .record_hot{ height: 0.7rem; width: 0.7rem;  border-radius: 50%; position: absolute; left:50%; margin-left: 1.2rem; top:-0.1rem; background: red}

    .index_btns a:before{content: ' '; display: block; width: 3rem; height: 3rem; margin: 0 auto; margin-bottom: 0.4rem;}
    .index_btns a.get_up:before{ background: url(../images/index_btn_get_up.png) no-repeat; background-size: 3rem;}
    .index_btns a.go_sleep:before{ background: url(../images/index_btn_go_sleep.png) no-repeat; background-size: 3rem;}
    .index_btns a.mood:before{ background: url(../images/index_btn_mood.png) no-repeat; background-size: 3rem;}
    .index_btns a.habit:before{ background: url(../images/index_btn_habit.png) no-repeat; background-size: 3rem;}
    .index_btns a.sign:before{ background: url(../images/index_btn_sign.png) no-repeat; background-size: 3rem;}

    .my_head{ margin-right: 54px !important;}




    .banner { width: 100%; overflow: hidden}
    .banner .flow{
        width: 1600rem;
        position: absolute;
        height: 200px;
        bottom: -20px;
    }
    .banner .flow .img{

        opacity: 0.82;
        width: 2000rem;
        background: url(../images/index_flow.png) repeat-x bottom;background-size: 35rem  3rem;
        height: 80px;
        animation: flow 260s infinite;
        -webkit-animation: flow 260s infinite;  position: absolute; bottom:0;
        animation-timing-function:linear}
    .banner .flow .img2{
        opacity: 0.82;
        width: 2000rem;
        background: url(../images/index_flow.png) repeat-x bottom;background-size: 35rem  3rem;
        height: 80px;
        animation: flow 600s infinite;
        -webkit-animation: flow 600s infinite;  position: absolute; bottom:0;
        animation-timing-function:linear}
    .banner .flow .img3{

        width: 2000rem;
        opacity: 0.82;
        background: url(../images/index_flow.png) repeat-x bottom;background-size: 35rem 3rem;
        height: 80px;
        animation: flow 720s infinite;
        -webkit-animation: flow 720s infinite;  position: absolute; bottom:0;
        animation-timing-function:linear}
    .banner .flow .img4{
        -webkit-filter: blur(6px); /* Chrome, Opera */
        -ms-filter: blur(6px);
        filter: blur(6px);
        width: 2000rem;
        opacity: 0.4;
        background: url(../images/index_flow.png) repeat-x bottom;background-size: 20rem ;
        height: 80px;
        animation: flow 800s infinite;
        -webkit-animation: flow 800s infinite;  position: absolute; bottom:20px;
        animation-timing-function:linear}

    @keyframes  flow {
        0%{
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(-100%, 0, 0);
            -webkit-transform: translate3d(-100%, 0, 0);
        }
    }



    .add_record{ height: 3.3rem; width: 3.3rem ; margin-left: -1.65rem; top:-1.65rem; border-radius: 50% ;position: absolute; font-size: 2.5rem;  left:50%; background: #fff; color:#fff; border: 0.0588235294117647rem solid #ddd;}
    .add_record:before{ content: " " ; height: 2.8rem; width: 2.8rem;border-radius: 50% ;position: absolute;left:0.25rem; background: #0BB20C; top:0.25rem; z-index: 2  }
    .add_record:after{ content: " " ; height: 1.76rem; width: 3.5176470588235294rem; position: absolute;left:-0.0588235294117647rem; background: #fff; top:1.6rem; z-index: 1  }
    .add_record span{display: block;  position: absolute;left:0;
        top: 0.1rem;; z-index: 3; width: 100%; text-align: center; line-height: 2.8rem;}
    .add_record:before:active{background: #0b9a0c;}
    .add_record_box .weui-tabbar__label {

        z-index: 100000;
        position: absolute;
        text-align: center;
        display: block;
        width: 100%;}



    .qun_qrcode{ text-align: center;  margin-bottom: 15px;}
    .birthdays{  position: absolute; top:4.6rem;right:1.2rem;z-index: 1001;   height: 2.8rem; font-size: 0.9rem; color:#fff; width: 2.8rem; line-height:  2.8rem;}
    .birthdays .swiper-slide{ width: 2.8rem;height: 2.8rem; }
    .birthdays .swiper-slide img{ width: 2.4rem ; border: 0.1rem solid rgba(225,225,225,.7); height: 2.4rem; border-radius: 50%;  }
    .birthdays .swiper-slide img:active{ border:  0.1rem solid rgb(225, 225, 225);}
    .birthdays   i{ display: none;float:right; width: 0.9rem; height: 0.9rem; background: url(../images/go.png) no-repeat; background-size: 100% 100%; margin-top: 0.78rem; margin-right: 0.5rem; position: absolute; top:0; right:0}

    .birthdays.b_right{left:inherit; right:0;}
    .birthdays.b_right li{border-radius: 1.058823529411765rem; border-top-right-radius: 0; border-bottom-right-radius: 0; }
    .birthdays.b_right li img{margin-left: 0.4rem;}
    .birthdays.b_right li i{ margin-right: 0.2rem;}


    .brithBox{
        position: relative;
        overflow: hidden;
    }
    .brithBox img{
        display: block;
    }
    .brithBox .briCake{
        position: absolute;width:5.88rem;right: 1.76rem;
        height:5.71rem;
        animation: mybriCake 1s ease 1s forwards ;
        -webkit-animation:mybriCake 1s ease 1s forwards ;
    }
    .brithBox .brithText{
        position: absolute;width: 10.6rem;bottom:5.88rem;opacity: 0;left:3.88rem;
        animation: mybrithText 2s linear .5s forwards;
        -webkit-animation:mybrithText 2s linear .5s forwards;
    }
    .brithBox .brithDayBg{
        position: absolute;
        animation: mybrithDayBg 4s linear 1.2s;
        -webkit-animation:mybrithDayBg 4s linear 1.2s;
    }
    @keyframes mybriCake
    {
        0%  {bottom: -5.88rem;}
        50% {bottom:2rem;height:6.47rem;}
        70% {bottom:1.76rem;height:5.71rem;}
        100%{bottom:1.76rem;}
    }
    @-webkit-keyframes mybriCake
    {
        0%  {bottom: -5.88rem;}
        50% {bottom:2rem;height:6.47rem;}
        70% {bottom:1.76rem;height:5.71rem;}
        100%{bottom:1.76rem;}
    }

    @keyframes mybrithText
    {
        0%   {opacity: 0;}
        100% {opacity: 1;}
    }
    @-webkit-keyframes mybrithText
    {
        0%   {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes mybrithDayBg
    {
        0%   {top: -32rem;}
        25%   {top: -16rem;}
        50%   {top:0}
        75%   {top: 16rem;}
        100% {top: 32rem;}
    }
    @-webkit-keyframes mybrithDayBg
    {
        0%   {top: -32rem;}
        25%   {top: -16rem;}
        50%   {top:0}
        75%   {top: 16rem;}
        100% {top: 32rem;}
    }



    .friendCenter .addBorder{
        border-bottom: 1px solid #eeeeee;
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


    .addMoodBg{ background: rgba(0,0,0,0.6); height: 100%; width: 100%; z-index: 0; position: fixed;top:0; display: none}


    .mycenter {
        background: #ffffff;

    }

    /*.mycenter_list {
        height: 100%;
    }*/

    .mycenter a {
        min-height: 72px;
        display: block;
        padding: 0 15px;
        /*-webkit-tap-highlight-color: rgba(0,0,0,.2);*/
        padding-right: 0;
    }

    .friend {
        margin-left: 59px;
        padding-top: 12px
    }

    .friendName {
        font-size: 16px;
        color: #333;
        width:144px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

  .index_box  .time {
        font-size: 14px;
        color: #999999;
    }

    .index_box  p.time .habits{ display: inline-block; padding-bottom: 0.3rem; width: 72%}

  .index_box  p.time font {
         height: 1.1764705882352941176470588235294rem; width: 1.1764705882352941176470588235294rem; display: inline-block; float:left;
    }
    .index_box  p.time>font:first-child{ width: auto}
    .index_box  p.time>font:not(:first-child){ margin-left: 0.6rem;}
    .index_box  p.time .habits  font{margin-left: 0.29rem; margin-bottom: 0.3rem;}
    .index_box  p.time font img{ width: 100%; height: 100%}

    .list_left {
        float: left;
        position: relative;
        height: 100%;
        width: 75%;
    }

    .headerimg {
        height: 44px;
        width: 44px;
        display: inline-block;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        margin-top: -22px;
    }

    .list_left span {
        font-size: 15px;
        line-height: 72px;
        color: #000000;
        margin-left: 59px;
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
    .list_right span.noRecord{
        margin-right:24px
    }

    .moodimg {
        width: 34px;
        height: 34px;
        float: left;
        margin-top: 17px;
        margin-right: 4px;
    }

    .interaction {
        float: left;
        text-align: center;
        padding: 15px;
        padding-top: 16px;
        padding-left: 16px;

        padding-right: 14px;
        font-size: 13px;
        color: #aeaeae;
        overflow: hidden;
    }
    .interaction div{
        line-height: 14px;
    }

    .interaction img {
        display:block; margin-top: 2px;
        width: 20px;
        height: 20px;
    }
    .interaction a{

        height:20px;
        padding:0;
    }

    .mycenterFill {
        width: 100%;
        height: 12px;
        background: #f4f4f8;
    }

    .friendCenter {
        padding:0;
    }

    .share {
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        margin: 25px 15px 30px 15px;
        color: #fff;
        display: block;
        border: 1px solid #ffad00;
        background: #ffaa00;
        border-radius: 5px;
        text-align: center;

    }
    .share:active{
        background: #e5a000;
    }
    .notice_box{
        background: #ffffff;
        border-bottom: 1px solid #eee;
    }
    .notice_box_p{ padding: 16px 0}
    .notice{
        height: 40px;
        width: 180px;
        background: #393939;
        border-radius: 5px;
        margin: 0 auto;

    }
    .notice:active{ background: #1f1f1f}
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
    .notice img{
        height: 30px;
        width:30px;
    }



</style>