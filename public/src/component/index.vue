<template>
    <div style="height: 100%" class="index_box" >
        <v-showLoad v-if="showLoad"></v-showLoad>
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
            <div class="index_btns swiper-container">
                <div class="swiper-wrapper">
                    <a class="swiper-slide"   :class="isNight()?'go_sleep':'get_up'" @click="sleepOrGetUp()">
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
                    <a class=" swiper-slide mood" @click="addMood()"><span>心情说说</span></a>
                    <a class="swiper-slide habit" @click="goHabit()"><span>健康习惯</span></a>
                    <a class="swiper-slide sign" @click="dailyRecord()"><span>每日一签</span></a>
                    <a class=" swiper-slide set" @click="set()"><span>健康提醒</span></a>
                </div>
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
                                <p class="friendName" :class="{line_middle:!myInfos||!myInfos.outTime}">{{user.nickName | shortName(6)}}<font  v-if="myInfos&&false">{{myInfos.friendNum}}位好友</font></p>
                                <p class="time" v-if="myInfos"><font >{{myInfos.outTime}}</font>

                                </p>

                            </div>
                        </div>
                        <div class="list_right">
                            <template v-if="myInfos&&myInfos.finishEvents" >
                                <template v-for="(myi,index) in myInfos.finishEvents">
                                    <span  v-if="myi.type=='sleep'" class="sleep_icon icon" ></span>
                                    <span  v-if="myi.type=='getUp'" class="get_up_icon icon" ></span>
                                    <span  v-if="myi.type=='habit'" class="habit_icon icon" ></span>
                                    <template v-if="myi.type=='mood'">
                                        <img class="moodimg" :src="myi.value.moodValueUrl"/>
                                    </template>
                                    <div class="interaction" v-if="index == myInfos.finishEvents.length-1 "  >
                                        <div>{{ myInfos.careCount }}</div>
                                        <img :src="myInfos.careImg" alt=""/>
                                    </div>
                                </template>
                            </template>

                            <template v-if="!myInfos||myInfos.finishEvents.length==0">
                                <span class="noRecord">还未记录</span>
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
                                    <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName | shortName(6)}}<font v-if="false">{{friendMood.friendNum}}位好友</font></p>
                                    <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName | shortName(6)}}<font  v-if="false">{{friendMood.friendNum}}位好友</font></p>
                                    <p class="time"><font>{{friendMood.outTime}}</font><i class="habits"  v-if="false"><font v-if="friendMood.finishEvents.sleep"  class="sleep_icon" ></font><font v-if="friendMood.finishEvents.getUp" class="get_up_icon" ></font><font v-if="friendMood.finishEvents.habit" class="habit_icon"  ><img src=""/></font></i><i class="clear"></i></p>
                            </div>
                            </div>

                            <div class="list_right">

                                <font v-for="(item ,index) in friendMood.finishEvents"  :class="{not_care_a:index == friendMood.finishEvents.length-1&&!friendMood.isCare}">
                                    <span  v-if="item.type=='sleep'" class="sleep_icon icon" ></span>
                                    <span  v-if="item.type=='getUp'" class="get_up_icon icon" ></span>
                                    <span  v-if="item.type=='habit'" class="habit_icon icon" ></span>
                                    <template v-if="item.type=='mood'">
                                        <img class="moodimg" :src="item.value.moodValueUrl"/>
                                    </template>
                                    <div class="interaction" v-if="index == friendMood.finishEvents.length-1 " @click.stop="care(item)" >
                                        <div>{{ friendMood.careCount }}</div>
                                        <img :class="{heartUp:friendMood.hit}" :src="friendMood.careImg" alt=""/>
                                    </div>
                                </font>
                            </div>
                            <div class="clear"></div>
                        </a>
                    </div>
                    <div class="mycenterFill" v-if="hasLine"></div>
                    <div class="addBorder" v-for="friendMood in friendMoods">
                        <a @click="friendLink(friendMood.userId)">
                            <div class="list_left">
                                <img class="headerimg" :src="wxFaceUrl(friendMood.faceUrl)"/>
                                <div class="friend">
                                    <p class="friendName" v-if="friendMood.memoName!=null">{{friendMood.memoName | shortName(6) }}<font v-if="false">{{friendMood.friendNum}}位好友</font></p>
                                    <p class="friendName" v-if="friendMood.memoName==null">{{friendMood.nickName | shortName(6) }}<font v-if="false">{{friendMood.friendNum}}位好友</font></p>
                                    <p class="time"><font>{{friendMood.outTime}}</font><i class="habits"><font v-if="friendMood.finishEvents.sleep"  class="sleep_icon" ></font><font v-if="friendMood.finishEvents.getUp" class="get_up_icon" ></font><font v-if="friendMood.finishEvents.habit" class="habit_icon"  ><img src=""/></font></i><i class="clear"></i></p>
                                </div>
                            </div>

                            <div class="list_right">



                                <font v-for="(item ,index) in friendMood.finishEvents" :class="{not_care_a:index == friendMood.finishEvents.length-1&&!friendMood.isCare}">
                                    <span  v-if="item.type=='sleep'" class="sleep_icon icon" ></span>
                                    <span  v-if="item.type=='getUp'" class="get_up_icon icon" ></span>
                                    <span  v-if="item.type=='habit'" class="habit_icon icon" ></span>
                                    <template v-if="item.type=='mood'">
                                        <img class="moodimg" :src="item.value.moodValueUrl"/>
                                    </template>
                                    <div class="interaction" v-if="index == friendMood.finishEvents.length-1 " @click.stop="care(item)" >
                                        <div>{{ friendMood.careCount }}</div>
                                        <img :class="{heartUp:friendMood.hit}" :src="friendMood.careImg" alt=""/>
                                    </div>
                                </font>

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
        <!--新增打卡失败场景-->
        <div class="record_loseBox weui-mask weui-animate-fade-in" v-show="isLose" @click="hideLoseBox()">
                <div class="diglog_lose" :class="{'morning_lose':!isNight(),'night_lose':isNight()}">
                    <div class="title_lose">打卡失败</div>
                    <div class="record_time"><template v-if="isNight()">早睡</template>早起打卡时间：05:00-10:00 <template v-if="isNight()">10:00-02:00</template> </div>
                    <p>今天有122为小伙伴参与<template v-if="isNight()">早睡</template>早起打卡，设置打卡提醒和他们一起<template v-if="isNight()">早睡</template><template v-if="!isNight()">早起</template>吧，<template v-if="!isNight()">坚持早起打卡，遇见更好的自己！</template> <template v-if="isNight()"> 生活不易你要懂得照顾自己！</template></p>
                    <img v-if="!isNight()" class="status_img" src="../images/morning_status.png" alt="">
                    <img v-if="isNight()" class="status_img" src="../images/night_status.png" alt="">
                    <div class="lose_bottom" :class="{'morning_bottom':!isNight(),'night_bottom':isNight()}" @click="set()">
                        设置<template v-if="!isNight()">早起</template><template v-if="isNight()">早睡</template>打卡提醒
                    </div>
                </div>
        </div>
        <!--早睡弹窗-->
        <div class="sleep_dialog weui-mask weui-animate-fade-in" v-show="isGoSleep" @click="hideSleepDialog()">
            <div class="sleep_dialog_box">
                <div class="sleep_dialog_title">睡觉打卡</div>
                <p>又到睡觉时间了！乖，放下手机，关灯、睡觉，做个好梦。</p>
                <div class="sleep_dialog_bottom">
                    <div @click="goSleepRank()">查看排行榜</div>
                    <div @click="checkIn(3)">睡觉打卡</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    import banner from "./banner.vue";
    import tab from "./lib/tab.vue";
    import Bus from './bus.js';

    export default {
        data() {
            return {
                weather: {},
                showLoad:false,
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
                myInfos:null,
                isLose:false,
                isGoSleep:false,
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
            hideLoseBox:function () {
              this.isLose = false
            },
            hideSleepDialog:function () {
                this.isGoSleep = false
            },
            goSleepRank:function () {
                this.$router.push("/sleepRank?type=3")
            },
            set:function () {
                this.$router.push('/me/subscribe')
            },
            initBtns:function () {
                this.$nextTick(function () {
                    let mySwiperPre = new Swiper('.index_btns', {
                        slidesPerView: 4,
                        onInit: function(swiper){

                        },
                        onSlideChangeEnd: function(swiper){

                        }
                    });
                })
            },
            getMyInfos:function () {

                 let _this = this;
                _this.$http.get(web.API_PATH + 'mood/event/query/user/pull/day/_userId_').then(response => {
                    if (response.data.status === 1) {
                        let rel = xqzs.mood.initMoodsIndex(response.data.data,false,_this.user.id);
                        _this.myInfos =rel[0];
                    }
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
                return !(date.getHours() >= 4 && date.getHours() < 19)
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
                    if(_this.isRecordTime()){
                        _this.checkIn(this.MORNING_TYPE);
                    }else{
                      // _this.$router.push("record?record_type=" + this.MORNING_TYPE)
                        console.log('打卡失败')
                        if(cookie.get('loseBox_frist')){
                           _this.$router.push("/sleepRank?type=2")
                        }else{
                            _this.isLose = true;
                            cookie.set('loseBox_frist','true',1)
                        }



                    }

                }
            },

            share: function (isNotShowLoad) {
                let _this = this;
                if (!isNotShowLoad) {
                    _this.showLoad = true;
                }
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'wei/xin/create/check/in/invite/card/_userId_/' + _this.MORNING_TYPE
                }).then(function (bt) {
                    if (bt.body.status == 1) {
                        if (!isNotShowLoad) {
                            xqzs.weui.dialog({
                                title: '邀请卡已经发送',
                                msg: '前往公众号查看，邀请好友一起参加早起计划',
                                submitText: '查看',
                                submitFun: function () {
                                    try {
                                        WeixinJSBridge.call('closeWindow');
                                    } catch (e) {
                                    }
                                }
                            })
                        }
                    }
                    _this.showLoad = false;
                })

            },

            getWeather:function () {
                let _this=this;
                //获取天气
                wx.ready(function () {
                    //获取天气
                    wx.getLocation({
                        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function (res) {
                            let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                            let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                            let latLng = new qq.maps.LatLng(latitude, longitude);
                            //调用城市服务信息
                            let citylocation = new qq.maps.CityService({
                                complete: function (results) {
                                    let area = results.detail.detail;
                                    let city = encodeURIComponent(area.split(",")[1]);
                                    _this.$http({
                                        method: 'GET',
                                        type: "json",
                                        url: web.API_PATH + "base/get/weather/" + city,
                                    }).then(function (data) {
                                        _this.weather = data.body.results[0].weather_data[0];
                                        let s = _this.weather.date;
                                        _this.weather.current = s.substring(s.indexOf("：") + 1, s.indexOf(")"));
                                        _this.weather.current = _this.weather.current.replace("℃", "°");
                                        _this.weather.temperature = _this.weather.temperature.replace(" ~ ", "-");
                                        _this.weather.temperature = _this.weather.temperature.replace("℃", "°");
                                        console.log(_this.weather);
                                    }, function (error) {
                                        //error
                                    });
                                }
                            });

                            citylocation.searchCityByLatLng(latLng);
                        },
                        cancel: function (res) {

                        }
                    });
                });

            },
            checkIn: function (type) {
                let _this = this;
                let weather = '';
                if (_this.weather.weather != undefined) {
                    weather += _this.weather.weather;
                }
                if (_this.weather.current != undefined) {
                    weather += " " + _this.weather.current;
                }


                _this.$http.put(web.API_PATH + 'sleep/checkin/' + type + '/_userId_', {"weather": weather}).then(response => {
                    console.log(response);
                    if (response.data.status === 1) {


                        //直接跳转到排行榜
                        //早上发送成就卡
                        if (type == _this.MORNING_TYPE) {
                            _this.share(true)
                        }
                        setTimeout(function () {
                            _this.$router.push("sleepRank?type=" + type)

                        },200);



                    }
                });
            },

            sleep: function () {
                console.log('sleep')
                this.isGoSleep = true;
                //this.$router.push("record?record_type=" + this.NIGHT_TYPE)
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
            care: function (itemV) {
                let _this = this;

                let data= {};


                if(itemV.type=='mood'){
                    data ={"moodId": itemV.id, "userId": "omg"}
                }else{
                    let careType=null;
                    if(itemV.type=='habit'){
                        careType = xqzs.constant.HABIT_CARE_TYPE;
                    }else if(itemV.type=='getUp'){
                        careType = xqzs.constant.GET_UP_CARE_TYPE;
                    }else{
                        careType = xqzs.constant.SLEEP_CARE_TYPE;
                    }
                    data ={ "moodId": null,
                        "userId": null,
                        'type':careType,
                        'withId': itemV.id
                    }
                }



                _this.$http.put(web.API_PATH + 'mood/care/add', data).then(function (data) {//es5写法
                    if (data.data.status === 1) {
                        for (var i = 0; i < _this.friendMoodsSpe.length; i++) {
                            {
                                let item = _this.friendMoodsSpe[i];
                                for(let j =0;j<item.finishEvents.length;j++){
                                    if(item.finishEvents[j].type===itemV.type&&item.finishEvents[j].id === itemV.id){
                                        item.careCount = data.data.data;
                                        item.hit = true;
                                        item.isCare = true;
                                        item.careImg = item.careImg.replace("_nor", "_pre");
                                        _this.friendMoodsSpe[i] = item;
                                        _this.$set(_this.friendMoodsSpe, i, _this.friendMoodsSpe[i]);
                                        break
                                    }
                                }
                            }

                        }

                        for (i = 0; i < _this.friendMoods.length; i++) {
                            let item = _this.friendMoods[i];

                            for (let j = 0; j < item.finishEvents.length; j++) {
                                console.log(item.finishEvents[j]);
                                if (item.finishEvents[j].type === itemV.type && item.finishEvents[j].id === itemV.id) {
                                    item.hit = true;
                                    item.careCount = data.data.data;
                                    item.isCare = true;
                                    item.careImg = item.careImg.replace("_nor", "_pre");
                                    _this.friendMoods[i] = item;
                                    _this.$set(_this.friendMoods, i, _this.friendMoods[i]);
                                    break
                                }
                            }
                        }
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
            _this.getMyInfos();
            _this.getWeather();
            _this.initBtns();


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
            "v-tab":tab, 'v-showLoad': showLoad
        }

    }


</script>
<style>

    .index_btns {
        height: 5.5rem;
        background: #fff;
        border-bottom: 0.58823529411764705882352941176471rem solid #F4F3F8 ;
        padding-top: 6px;
    }
    .index_btns a{

        z-index: 100;
        text-align: center;
        color:#999; font-size: 0.70588235294117647058823529411765rem;
        position: relative;
    }
    .index_btns a .record_hot{ height: 8px; width: 8px;  border-radius: 50%; position: absolute; left:50%; margin-left: 1.2rem; top:-0.1rem; background: red}

    .index_btns a:before{content: ' '; display: block; width: 2.9rem; height: 2.9rem; margin: 0 auto; margin-bottom: 0.4rem; border-radius: 1.2rem;}
     .index_btns a.get_up:before{ background: url(../images/index_btn_get_up.png) no-repeat #ffefcb center; background-size: 1.8235294117647058823529411764706rem;border: 0.03rem  solid #ffb700}
    .index_btns a.go_sleep:before{ background: url(../images/index_btn_go_sleep.png) no-repeat #edd8f6 center; background-size: 1.5882352941176470588235294117647rem;border: 0.03rem   solid #a54bd8}
    .index_btns a.mood:before{ background: url(../images/index_btn_mood.png) no-repeat #cfebf1 center; background-size: 1.6470588235294117647058823529412rem;  border: 0.03rem  solid #00c1ff}
    .index_btns a.habit:before{ background: url(../images/index_btn_habit.png) no-repeat #def3cd center; background-size: 1.2647058823529411764705882352941rem; border: 0.03rem  solid #71c06d}
    .index_btns a.sign:before{ background: url(../images/index_btn_sign.png) no-repeat #ffd9ac center; background-size: 1.6470588235294117647058823529412rem;   border: 0.03rem  solid #ff7800}
    .index_btns a.set:before{ background: url(../images/index_btn_set.png) no-repeat #ffd8f5 center; background-size: 1.441176470588235rem;   border: 0.03rem  solid #f67cd1}
    .index_btns a:active.get_up:before{background-color: #ffebc7  }
    .index_btns a:active.go_sleep:before{background-color: #f6c8ed  }
    .index_btns a:active.mood:before{background-color: #c2ecf1  }
    .index_btns a:active.habit:before{background-color: #d2f3c7  }
    .index_btns a:active.sign:before{background-color: #ffd1a4  }
    .index_btns a:active{ color:#666}
    .my_head{ margin-right: 54px !important;}
    .banner { width: 100%; overflow: hidden}
    .banner .flow{
        width: 1600rem;
        position: absolute;
        height: 200px;
        bottom: -26px;
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
    /*新增打卡失败*/
    .record_loseBox{z-index:10001 !important;}
    .diglog_lose{position: relative;width:15.588rem;position: absolute;top:20%;left:50%;margin-left: -7.794rem;padding:1.235rem 0 4rem 0;color:rgba(51,51,51,1);text-align: center;}
    .morning_lose{background: url("../images/morning_lose.png") no-repeat;background-size: 100% 100%;}
    .night_lose{background: url("../images/night_lose.png") no-repeat;background-size: 100% 100%;}
    .title_lose{font-size: 1.35rem;line-height: 1;margin-bottom: 0.588235rem;}
    .record_time{font-size: 0.6471rem;line-height: 1;margin-bottom: 1.176471rem;}
    .diglog_lose p{font-size: 0.76471rem;text-align: left;line-height: 1.35rem;padding:0 0.88235rem}
    .status_img{width:1.176471rem;position: absolute;bottom:-1.176471rem;left:50%;margin-left: -0.588235rem;}
    .lose_bottom{width:10.8235rem;height:2.588235rem;font-size: 0.88235rem;color:#fff;line-height: 3rem;position: absolute;bottom:-4.588rem;left:50%;margin-left: -5.41175rem;}
    .morning_bottom{background: url("../images/lose_bottom1.png") no-repeat;background-size: 100% 100%;}
    .night_bottom{background: url("../images/lose_bottom2.png") no-repeat;background-size: 100% 100%;}
    /*早睡弹窗*/
    .sleep_dialog{z-index: 10001 !important;}
    .sleep_dialog_box{width:72%;background: rgba(255,255,255,1);position: absolute;top:25%;left:50%;margin-left:-36%;padding:1.471rem 0 1.52rem 0;border-radius: 0.588235rem;}
    .sleep_dialog_title{color:rgba(36,37,61,1);font-size: 1.35rem;text-align: center;line-height: 1;margin-bottom: 1.294rem;}
    .sleep_dialog_box p{font-size: 0.76471rem;color:rgba(51,51,51,1);padding: 0 1.471rem;line-height: 1.235rem;}
    .sleep_dialog_bottom{position: absolute;width:100%;bottom:-4rem;}
    .sleep_dialog_bottom div{width:7.0588rem;height:2rem;line-height: 2.1rem;font-size:0.76471rem;text-align: center;border-radius: 0.294rem; }
    .sleep_dialog_bottom div:nth-of-type(1){
        background: rgba(231,244,255,1);
        float: left;
        color:rgba(102,102,102,1);
    }
    .sleep_dialog_bottom div:nth-of-type(2){
        background: rgba(153,102,204,1);
        float: right;
        color:rgba(255,255,255,1);
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
    .not_care_a>span {   animation: not_care_a 2s infinite 0s;
        -webkit-animation:not_care_a 2s infinite 0s;
    }
    @keyframes not_care_a
    {
        0%  {
            transform:scale(1);
            -webkit-transform:scale(1);
        }
        50% { transform:scale(1.4);
            -webkit-transform:scale(1.4);}

        100%{ transform:scale(1);
            -webkit-transform:scale(1);}
    }

    .not_care_a>img{   animation: not_care_a2 2s infinite 0s;
        -webkit-animation:not_care_a2 2s infinite 0s;
    }

    @keyframes not_care_a2
    {
        0%  {
            transform:scale(1);
            -webkit-transform:scale(1);
        }
        50% { transform:scale(1.2);
            -webkit-transform:scale(1.2);}

        100%{ transform:scale(1);
            -webkit-transform:scale(1);}
    }

    .qun_qrcode{ text-align: center;  margin-bottom: 15px;}
    .birthdays{  position: absolute; top:1.34em;left:1.25rem;z-index: 1001;   height: 2.8rem; font-size: 0.9rem; color:#fff; width: 2.8rem; line-height:  2.8rem;}
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
        height:4.235294117647059rem;
        display: block;
        padding: 0 0.88235rem;
        /*-webkit-tap-highlight-color: rgba(0,0,0,.2);*/
        padding-right: 0;
        position: relative;
    }

    .friend {
        margin-left: 3.470588235294118rem;
        padding-top: 0.7058823529411765rem;
    }

    .index_box .friendName {
        font-size: 0.9411764705882353rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .index_box .friendName.line_middle{ line-height:2.941176470588235rem; }

    .index_box   .friendName font{     font-size: 0.7058823529411765rem;
        color: #999999; margin-left: 0.6rem;}
    .index_box  .time {
        font-size: 0.8235294117647059rem;
        color: #999999;
    }

    .index_box  p.time .habits{ display: inline-block;  min-height: 1.4764705882352941176470588235294rem; float:left; margin-left:0.4rem; }

  .index_box  p.time font {
         height: 1.1764705882352941176470588235294rem; width: 1.1764705882352941176470588235294rem; display: inline-block; float:left;
    }
    .index_box  p.time>font:first-child{ width: auto}
    .index_box  p.time>font:not(:first-child){ margin-left: 0.6rem;}
    .index_box  p.time .habits  font{margin-left: 0.29rem;}
    .index_box  p.time font img{ width: 100%; height: 100%}


    .index_box   .list_right  span.icon {
        width: 1.5rem;
        height: 1.5rem;
        float: left;
        margin-top: 1.38rem;
        margin-left: 0.6rem;
        background: url(../images/index_finish_icons.png) no-repeat; background-size: 4.5rem;

    }
    .index_box .get_up_icon{ background-position: 0 0}
    .index_box .habit_icon{ background-position: -1.5rem 0 !important}
    .index_box .sleep_icon{ background-position: -3rem 0 !important}



    .list_left {
        float: left;
        position: relative;
        height: 100%;
        width: 72%;

    }

    .headerimg {
        height:  2.588235294117647rem;;
        width: 2.588235294117647rem;
        display: inline-block;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        margin-top: -1.294117647058824rem;
    }

    .list_left span {
        font-size: 0.8823529411764706rem;
        line-height:4.235294117647059rem;;
        color: #000000;
        margin-left: 3.470588235294118rem;
    }

    .list_right {
        position: absolute;
        right:0; top:0;
        height: 4.235294117647059rem;
    }



    .list_right span {
        color: #666666;
        font-size:  0.8823529411764706rem;
        line-height: 4.235294117647059rem;
    }
    .list_right span.noRecord{
        margin-right:24px
    }

    .moodimg {
        width: 1.5rem;
        height: 1.5rem;
        float: left;
        margin-top: 1.43rem;
        margin-left: 0.6rem;
    }

    .interaction {
        float: left;
        text-align: center;
        padding:0.88235rem;
        padding-top:  0.9411764705882353rem;
        padding-left: 0.9411764705882353rem;

        padding-right: 0.8235294117647059rem;
        font-size: 0.7647058823529412rem;
        color: #aeaeae;
        overflow: hidden;
    }
    .interaction div{
        line-height: 0.8235294117647059rem;
    }

    .interaction img {
        display:block; margin-top: 2px;
        width: 1.176470588235294rem;
        height:  1.176470588235294rem;;
    }
    .interaction a{

        height: 1.176470588235294rem;;
        padding:0;
    }

    .mycenterFill {
        width: 100%;
        height:0.7058823529411765rem;
        background: #f4f4f8;
    }

    .friendCenter {
        padding:0;
    }

    .share {
        line-height: 2.352941176470588rem;
        height: 2.352941176470588rem;;
        font-size: 0.8235294117647059rem;
        margin: 1.470588235294118rem  0.88235rem 1.764705882352941rem   0.88235rem;
        color: #fff;
        display: block;
        border: 1px solid #ffad00;
        background: #ffaa00;
        border-radius: 0.2941176470588235rem;
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
        margin-left:8px;
        margin-top:8px;
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