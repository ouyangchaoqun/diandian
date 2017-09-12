<template id="record">
    <div class="record">
        <div v-title>每日打卡</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="banner">
            <div v-show="isBirthday" class="RecordbrithBox">
                <!--<img src="/dist/top_img/birthday.jpg"/>-->
                <img src="/dist/top_img/bribg.jpg" alt="">
                <img src="/dist/top_img/bribg.png" alt="" style="position: absolute;bottom: 0">
                <img class="briCake" src="/dist/top_img/briCake.png" alt="">
                <img class="brithText" src="/dist/top_img/brithText.png" alt="">
                <img class="brithDayBg" src="/dist/top_img/brithDayBg.png" alt="">
            </div>
            <v-banner v-show="!isBirthday"></v-banner>
        </div>
        <div class="moodBox_bg" @click="goIndex()">
        </div>
        <div class="record_box" :class="{bgw:isShowResult&&!isNight,nightbg:isNight,night_do_ac:isDoNight}">

            <div class="main_record">
                <div class="init_record" :class="{goHide:isShowResult}" v-show="!outMorningTime&&!outNightTime">
                    <div class="notes">
                        <a class="weui-tabbar__item " @click="morning">
                            <div class="go_record record_morning "
                                 :class="{recorded:isGetUp||!isRecordTime(MORNING_FROM_TIME,MORNING_END_TIME)}">
                                <div class="record_cover"></div>
                                <div class="record_hot" v-show="isRecordTime(MORNING_FROM_TIME,MORNING_END_TIME)&&!isGetUp" ></div>
                                <div class="img"></div>
                                <div class="morning">
                                    <template v-if="!isGetUp&&isRecordTime(MORNING_FROM_TIME,MORNING_END_TIME)">早起打卡
                                    </template>
                                    <template v-if="isGetUp||!isRecordTime(MORNING_FROM_TIME,MORNING_END_TIME)">早起排行
                                    </template>
                                </div>
                            </div>
                        </a>
                        <a class="weui-tabbar__item" @click="addMood">
                            <div class="go_record record_mid" :class="{recorded:isRecordMood}">
                                <div class="record_cover"></div>
                                <div class="img"></div>
                                <div class="any">记录心情</div>
                            </div>
                        </a>
                        <!--<a  class="weui-tabbar__item">-->
                        <!--<div class="go_record record_right" :class="{recorded:isGoBed||!isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)}"  @click="night">-->
                        <!--<div class="img"></div>-->
                        <!--<div class="night">早睡<template v-if="!isGoBed&&isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)">打卡</template><template v-if="isGoBed||!isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)">排行</template></div>-->
                        <!--</div>-->
                        <!--</a>-->
                    </div>
                    <div class="notes2">
                        <a class="weui-tabbar__item" @click="night">
                            <div class="go_record record_night"
                                 :class="{recorded:isGoBed||!isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)}">
                                <div class="record_cover"></div>
                                <div class="record_hot" v-show="isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)&&!isGoBed" ></div>
                                <div class="img"></div>
                                <div class="night">
                                    <template v-if="!isGoBed&&isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)">早睡打卡
                                    </template>
                                    <template v-if="isGoBed||!isRecordTime(NIGHT_FROM_TIME,NIGHT_END_TIME)">早睡排行
                                    </template>
                                </div>
                            </div>
                        </a>
                        <a class="weui-tabbar__item" @click="dailyRecord">
                            <div class="go_record record_everyDay" :class="{recorded:isDailyRecord}">
                                <div class="record_cover"></div>
                                <div class="img"></div>
                                <div class="any">每日一签</div>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="result" :class="{goShow:isShowResult}">
                    <div class="bottom1">
                        <div class="record_time">{{result.data.hour}}:{{result.data.minute}}</div>
                        <div class="next"><span :class="{ok_night:result.data.type==3}">连续早<template
                                v-if="result.data.type==2">起</template><template v-if="result.data.type==3">睡</template>{{result.data.continuousDays}}天</span>
                        </div>
                        <div class="record_compare">
                            共有{{result.allCount}}人陪我早
                            <template v-if="result.data.type==2">起</template>
                            <template v-if="result.data.type==3">睡</template>
                            ，当前总排行第{{result.rank}}名
                        </div>


                        <div class="bottom_btn">
                            <div class="midLine"></div>
                            <div class="record_bottom" @click="share(false)" v-if="result.data.type==2">
                                <div class="doRecord" v-if="result.data.type==2">邀请好友</div>
                            </div>
                            <div class="record_bottom" @click="music" v-if="result.data.type==3">
                                <div class="doRecord" v-if="result.data.type==3">晚安音乐</div>
                            </div>
                            <div class="record_bottom" @click="writeOrRank">
                                <div class="doRecord" v-if="result.data.type==2">早起排行榜</div>
                                <div class="doRecord" v-if="result.data.type==3">早睡排行榜</div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="night_action">
                    <div style="height:1px;"></div>
                    <div class="record_action_go_bed" @click="checkIn(3)"><span>睡觉</span>睡觉之前戳一下（不要耍赖哦）</div>

                    <div class="bottom_btn">
                        <div class="midLine"></div>
                        <div class="record_bottom" @click="music">
                            <div class="doRecord">晚安音乐</div>
                        </div>
                        <div class="record_bottom" @click="writeOrRank">
                            <div class="doRecord">早睡排行榜</div>
                        </div>
                    </div>


                </div>

                <div class="timeout" :class="{night_time_out:outNightTime}">
                    <div class="re_text1" v-if="outMorningTime">早起时间</div>
                    <div class="re_text1" v-if="outNightTime">早睡时间</div>
                    <!--<div class="jiantou"></div>-->
                    <div class="ealy_time" v-if="outMorningTime">{{MORNING_FROM_TIME}}-{{MORNING_END_TIME}}</div>
                    <div class="ealy_time" v-if="outNightTime">{{NIGHT_FROM_TIME}}-{{NIGHT_END_TIME}}</div>
                    <div class="re_text2" v-if="outMorningTime">早起，将开启新的一天的最佳状态</div>
                    <div class="re_text2" v-if="outNightTime">早睡，为了在第二天遇见全新的自己</div>

                    <div class="bottom_btn">
                        <div class="midLine" v-if="outNightTime||(isGetUp&&outMorningTime)||(!isGetUp&&outMorningTime)"></div>
                        <div class="record_bottom" @click="share(false)" v-if="isGetUp&&outMorningTime">
                            <div class="doRecord">邀请好友</div>
                        </div>
                        <div class="record_bottom" @click="joinMornings()" v-if="!isGetUp&&outMorningTime">
                            <div class="doRecord">加入早起计划</div>
                        </div>
                        <div class="record_bottom" @click="music" v-if="outNightTime">
                            <div class="doRecord" v-if="outNightTime">晚安音乐</div>
                        </div>
                        <div class="record_bottom" @click="writeOrRank">
                            <div class="doRecord" v-if="outMorningTime">早起排行榜</div>
                            <div class="doRecord" v-if="outNightTime">早睡排行榜</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="date_info " :class="{morning_time_out:outMorningTime}">
                <div class="date">
                    <div class="day">{{day}}</div>
                    <div class="date_right">
                        <p>星期{{week.week}}</p>
                        <p>{{year}}年{{month+1}}月</p>
                    </div>
                </div>
                <div class="weather">
                    <div class="weather_info">
                        <p class="current">{{weather.current}}</p>
                        <p>{{weather.temperature}}</p>
                    </div>
                    <div class="weather_pic">
                        <img v-if="(hour>=6&&hour<=18)&&!isNight&&weather.weather!=undefined"
                             :src="weather.dayPictureUrl"/>
                        <img v-if="(hour<6||hour>18)||isNight&&weather.weather!=undefined"
                             :src="weather.nightPictureUrl"/>
                    </div>
                </div>
                <div class="weather" v-show="false">
                    <div class="weather_info">
                        <p>晴转多云</p>
                        <p>29/41C</p>
                    </div>

                    <div class="current">38C</div>
                    <div class="weather_pic">
                        <img v-if="(hour>=6&&hour<=18)&&!isNight"
                             src="http://api.map.baidu.com/images/weather/day/zhenyu.png"/>
                        <img v-if="(hour<6||hour>18)||isNight"
                             src="http://api.map.baidu.com/images/weather/night/zhenyu.png"/>
                    </div>
                </div>
            </div>
            <img src="../images/record_go_bed_btn_on.png" alt="" style="display: none">
        </div>
    </div>
</template>
<script>
    import banner from "./banner.vue";
    import showLoad from './showLoad.vue';

    let record = {
        template: '#record'
    };
    export default {
        components: {
            "v-banner": banner, 'v-showLoad': showLoad
        },
        data() {
            return {
                linkTo: "#",
                showLoad: false,
                day: 30,
                month: 12,
                year: 2017,
                isNight: false,
                weeks: [
                    {week: '日'},
                    {week: '一'},
                    {week: '二'},
                    {week: '三'},
                    {week: '四'},
                    {week: '五'},
                    {week: '六'}
                ],
                hour: 15,
                week: '',
                weather: {},
                MORNING_FROM_TIME: '5:00',
                MORNING_END_TIME: '10:00',
                NIGHT_FROM_TIME: '20:00',
                NIGHT_END_TIME: '23:59',
                MORNING_TYPE: 2,
                NIGHT_TYPE: 3,
                outMorningTime: false,
                outNightTime: false,
                isGetUp: false,
                isGoBed: false,
                isRecordMood: false,
                isDailyRecord: false,
                goBedId: 0,
                getUpId: 0,
                result: {
                    allCount: 0,
                    earlyPer: 0,
                    rank: 0,
                    data: {hour: 0, minute: 0, id: 0, type: 2}
                },
                record: '',
                isShowResult: false,
                doRecordText: '',
                isDoNight: false,
                isBirthday: false

            }
        },
        props: {
            user: {
                type: Object
            }
        },
        methods: {

            joinMornings:function () {
                this.$router.push("/me/subscribe")
            },
            music: function () {
                this.$router.push("/music")
            },
            share: function (isNotShowLoad) {
                let _this = this;
                if (!isNotShowLoad) {
                    _this.showLoad = true;
                }
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'wei/xin/create/check/in/invite/card/_userId_/' + _this.result.data.type
                }).then(function (bt) {
                    if (bt.body.status == 1) {
                        if (!isNotShowLoad) {
                            xqzs.weui.dialog({
                                title: '邀请卡已经发送',
                                msg: '前往公众号查看，留住每次早起回忆',
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
            back: function () {
                let _this = this;
                $(".timeout").animate({opacity: 0}, 200);
                $(".init_record").show().animate({opacity: 1}, 200, function () {
                    _this.outNightTime = false;
                    _this.outMorningTime = false;
                });

                this.isNight = false;
            },
            finish: function () {
                this.$router.push("/sleepRank?type=" + this.result.data.type)
            },
            writeOrRank: function () {
                if (this.isNight) {
                    this.$router.push("/sleepRank?type=" + this.NIGHT_TYPE)
                } else {
                    this.$router.push("/sleepRank?type=" + this.MORNING_TYPE)
                }
            },
            write: function () {
                let type = 2;
                if (this.isNight == true) {
                    type = 3;
                }
                let parm = '?type=' + type;
                if (this.result.data.id != 0) {
                    parm += "&id=" + this.result.data.id
                }
                this.$router.push("/write" + parm)
            },
            morning: function () {
                console.log("morning")

                let _this = this;
                if (_this.isGetUp && _this.isRecordTime(_this.MORNING_FROM_TIME, _this.MORNING_END_TIME)) {
                    _this.$router.push("sleepRank?type=" + this.MORNING_TYPE)
//                    _this.showResult(_this.getUpId);
                    return;
                }
                if (this.isRecordTime(this.MORNING_FROM_TIME, this.MORNING_END_TIME)) {
                    this.checkIn(2);
                } else {
                    console.log('outMorningTime');
                    _this.animateIn();
                    _this.outMorningTime = true;
                    $(".timeout").show().animate({"opacity": 1}, 200, function () {
                    });

                }

            },
            night: function () {
                console.log('night')
                let _this = this;
                if (_this.isGoBed && _this.isRecordTime(_this.NIGHT_FROM_TIME, _this.NIGHT_END_TIME)) {
                    _this.showResult(_this.goBedId);
                    return;
                }

                if (this.isRecordTime(this.NIGHT_FROM_TIME, this.NIGHT_END_TIME)) {


                    _this.animateIn();
                    $(".night_action").show().animate({"opacity": 1}, 200, function () {
                    });
                    let w = $("body").width();
                    $(".night_action").height(w * 753 / 750);
                    _this.isNight = true;
                    _this.isDoNight = true;

                    //this.checkIn(3);
                } else {
                    console.log('outnightTime');
                    _this.isNight = true;
                    _this.animateIn();
                    console.log('outnightTime');
                    _this.outNightTime = true;
                    $(".timeout").show().animate({"opacity": 1}, 200, function () {

                    });
                    $(".date_info").addClass("ngihttop")

                }
            },
            showResult: function (id) {
                let _this = this;
                _this.$http.get(web.API_PATH + 'record/sleep/get/detail/' + id).then(response => {
                    if (response.data.status === 1) {
                        _this.initResultData(response.data.data)
                    }
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

                        //显示结果页面
//                        if (type == 3) {
//                            $(".night_action").stop().animate({"opacity": 0}, 300, function () {
//                                $(this).hide();
//                            });
//                        }
//                        _this.initResultData(response.data.data,true)

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
            initResultData: function (data, isCheckIn) {

                let _this = this;
                _this.result.data = data;
                let time = new Date(data.time * 1000);
                let type = data.type;
                _this.result.data.hour = time.getHours();
                _this.result.data.minute = time.getMinutes();
                if (_this.result.data.hour < 10) {
                    _this.result.data.hour = "0" + _this.result.data.hour
                }
                if (_this.result.data.minute < 10) {
                    _this.result.data.minute = "0" + _this.result.data.minute
                }


                _this.$http.get(web.API_PATH + 'sleep/daily/info/_userId_/' + type + '').then(data => {
                    if (data.data.status === 1) {
                        _this.result.allCount = data.data.data.userNum;

                    }
                });
                _this.$http.get(web.API_PATH + 'record/sleep/get/rank/today/_userId_/' + type + '').then(data => {
                    if (data.data.status === 1) {
                        _this.result.rank = data.data.data;
                        if (isCheckIn) {
                            if (data.data.data <= 10000) {
                                _this.share(true)
                            }
                        }

                    }
                });


                _this.isShowResult = true;
                _this.doRecordText = '向今天问好';
                _this.animateIn();
                $(".result").show().stop().animate({"opacity": 1}, 200);
                if (type == 3) {
                    _this.isNight = true;
                    _this.doRecordText = '今日小成就';
                }
            },
            animateIn: function () {
                console.log('animateIn');
                $(".init_record").stop().animate({"opacity": 0}, 300, function () {
                    $(this).hide();
                });

            },

            //是否在打卡时间内
            isRecordTime: function (fromTime, endTime) {
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


            goIndex: function () {
                if (window.history.length >= 2) {
                    this.$router.go(0 - window.history.length + 1)
                }
                this.$router.replace('/');
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
            goRank: function () {
                this.$router.push("/sleepRank?type=" + this.result.data.type)

            },
            addMood: function () {
                let _this = this;
                console.log("addMood");
                _this.getMoodCount(function (moodcount) {
                    if (moodcount < 10) {
                        _this.$router.push("/addMood")

                    } else {
                        if (_this.user.mobile == '' || _this.user.mobile == null || _this.user.mobile == undefined) {
                            _this.$router.push("/me/personal/validate")
                        } else {
                            _this.$router.replace("/addMood")
                        }
                    }
                });

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


            }
        },

        mounted: function () {
            let _this = this;
            xqzs.wx.setConfig(_this);
            if (xqzs.localdb.get("isBirthday") === "1") {
                _this.isBirthday = true;
            } else {
                _this.isBirthday = false;
            }

            let w = $("body").width();
            $(".record_box ,.night_action").height(w * 753 / 750);

            //获取当前时间
            var mydate = new Date();
            _this.year = mydate.getFullYear();
            _this.month = mydate.getMonth();
            _this.day = mydate.getDate();
            _this.hour = mydate.getHours();
            var weekNo = mydate.getDay();
            _this.week = _this.weeks[weekNo];
            console.log(_this.week);
            _this.isDailyRecord = cookie.get("isDailyRecord");


            //获取是否从写点什么页面过来
            if (cookie.get("withId") != '' && cookie.get("withId") != null) {
                _this.$http.get(web.API_PATH + 'record/sleep/get/detail/' + cookie.get("withId")).then(response => {
                    console.log(response);
                    cookie.delete("withId")
                    if (response.data.status === 1) {
                        _this.initResultData(response.data.data)
                    }
                });
            }

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
            //是否记录
            _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + "mood/find/userlast/_userId_",
            }).then(function (data) {
                if (data.body.data != null) {
                    _this.isRecordMood = true;
                }

            });

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

    }


</script>
<style>
    .record_hot{ height: 0.7rem; width: 0.7rem;
        border-radius: 50%; position: absolute; right:-0.1rem; top:-0.1rem; background: red}
    .RecordbrithBox {
        position: relative;
        overflow: hidden;
    }

    .RecordbrithBox img {
        display: block;
    }

    .RecordbrithBox .briCake {
        position: absolute;
        width: 5.88rem;
        right: 1.76rem;
        bottom: 1.76rem;
        height: 5.71rem;
    }

    .RecordbrithBox .brithText {
        position: absolute;
        left: 3.88rem;
        width: 10.6rem;
        bottom: 5.88rem;
    }

    .RecordbrithBox .brithDayBg {
        position: absolute;
        top: -35rem;
    }

    .bottom_btn {
        position: absolute;
        bottom: 0;
        height: 2.95rem;
        line-height: 2.95rem;
        display: flex;
        display: -webkit-box;
        width: 100%;
        background-color: rgba(137, 181, 250, 1);
    }

    .bottom_btn .record_bottom {
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;

        font-size: 0.88rem;
        text-align: center;
        color: #fff;
    }

    .night_action {

        /*background: url(../images/nightbg.png) no-repeat;*/
        background-image: -webkit-linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-image: linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-size: 100% 100%;
        width: 100%;
        opacity: 0;
        display: none;;
        position: absolute;
        top: 0;
        background-position: 0 4.11764rem;
    }

    .record_action_go_bed {
        background: url("../images/record_go_bed_btn.png") no-repeat center top;
        background-size: 6.1764705rem 6.1764705rem;
        padding-top: 7.1764705rem;
        text-align: center;
        color: #fff;
        width: 65%;
        margin: 0 auto;
        margin-top: 7.5rem;
        font-size: 0.7rem;;
        position: relative
    }

    .record_action_go_bed:active {
        background: url("../images/record_go_bed_btn_on.png") no-repeat center top;
        background-size: 6.1764705rem 6.1764705rem;
    }

    .record_action_go_bed span {
        display: inline-block;
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        left: 0;
        line-height: 6.1764705rem;
        font-size: 1.0588rem;
        color: #645b76
    }

    .night_do_ac {
        background-image: -webkit-linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-image: linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-size: 100% 100%;
        background-position: 0 4.11764rem;
    }

    .main_record {
        position: relative
    }

    .init_record, .result {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 2
    }

    .init_record {
        position: relative
    }

    .result {
        display: none;
        opacity: 0;
        bottom: 0;
        height: 100%
    }

    .bgw {
        background: #fff !important;
    }

    .nightbg {
        color: #f4f4f7 !important
    }

    .nightbg .timeout, .nightbg .result .bottom1 {
        background-image: -webkit-linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-image: linear-gradient(135deg, #756684 0%, #4e4d7a 100%);
        background-size: 100% 100%;
        height: 100%;
        background-position: 0 4.11764rem;
    }

    .nightbg .record_time, .nightbg .next, .nightbg .record_compare {
        color: #f4f4f7
    }

    .nightbg .record_bottom, .nightbg .timeout .record_text2 {
        background-color: #4e4c73;
    }

    .nightbg .record_bottom2, .nightbg .timeout .record_text2, .nightbg .night_action .record_text2 {
        background-color: #4e4c73;
        left: 0;
        width: 100%;
    }

    .nightbg .date_right, .nightbg .date, .nightbg .weather {
        color: #cececd
    }

    .record, .record_box {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .ngihttop {
        animation-name: gonight;
        animation-duration: .4s;
    }

    @keyframes gonight {
        0% {
            background: #fff;
        }
        100% {
            background: #4e4c73;
        }
    }

    .moodBox_bg {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .banner {
        width: 100%;
    }

    .banner img {
        display: block;
        width: 100%;
    }

    .record_box {
        background: #f4f4f8;
        background-size: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 3;
        overflow: hidden;

    }

    .date_info {
        height: 4.11764rem;

        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        overflow: hidden;
        position: absolute;
        width: 100%;
        z-index: 2;
        background: #fff;

    }

    .date_info.morning_time_out {
        background: #f2f3f4;
    }

    .bgw .date_info {
        background: #f2f3f4;
    }

    .nightbg .date_info {
        border-bottom: none;
        background: #4e4c73;
    }

    .main_record {
        position: absolute;
        width: 100%;
        z-index: 1;
        height: 100%
    }

    .date {
        float: left;
        width: 50%;
    }

    .day {
        line-height: 4.11764rem;
        float: left;
        font-size: 2.35rem;
        margin-left: 7%;
        margin-right: 5%;
    }

    .date_right {
        font-size: 0.7rem;
        color: #666666;
        margin-top: 1rem;
    }

    .weather {
        float: right;
        width: 49%;
        font-size: 0.7rem;
        text-align: right;
        color: #666;
    }

    .weather .current {
        line-height: 1;
        font-size: 1.76rem;
    }

    .weather_pic {
        width: 2.45rem;
        height: 1.76rem;
        float: right;
        margin-top: 1.18rem;
    }

    .weather_pic img {
        width: 100%;
        height: 100%;
    }

    .weather_info {
        text-align: left;
        float: right;
        font-size: 12px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 12px;

    }

    .notes {
        padding: 5.82rem 1.47058823rem 0 1.47058823rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;

    }

    .notes2 {
        padding: 1.71rem 1.47058823rem 0 1.47058823rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
    }

    .go_record {
        width: 77%;
        height: 5.9rem;
        background: #fff;
        border-radius: 5px;
        margin: 0 auto;
        position: relative;
     }

    .record_cover {
        width: 100%;
        height: 100%;
        position: absolute;
        float: left;
        background: rgba(0, 0, 0, 0.3);
        display: none;
    }

    .weui-tabbar__item:active .img {
        opacity: 0.5;
    }

    .weui-tabbar__item:active .go_record {
        background: #d7d7d7
    }

    .go_record .img {
        height: 78%;
        background-color: #0ba98e;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
    }

    .record_left {
        float: left;
    }

    .record_morning .img {
        background: url("../images/record_morning.png") no-repeat center top;
        background-size: 100%
    }

    .record_mid .img {
        background: url("../images/record_moods.png") no-repeat center top;
        background-size: 100%
    }

    .record_night .img {
        background: url("../images/record_night.png") no-repeat center top;
        background-size: 100%
    }

    .record_everyDay .img {
        background: url("../images/record_everyday.jpg") no-repeat center top;
        background-size: 100%
    }

    .record_fx {
        text-align: center;
        margin-top: 2.23rem;
    }

    .record_rank, .record_share {
        float: left;
        background: url("../images/record_share.png") no-repeat;
        height: 20px;
        background-size: 20px;
        padding-top: 3px;
        padding-left: 26px;
        margin: 0 10px;
    }

    .record_rank {
        float: right;
        background: url("../images/record_rank.png") no-repeat;
        background-size: 20px;
    }

    .record_share.night_share {
        background: url("../images/record_share1.png") no-repeat;
        background-size: 20px;
        color: #f4f4f7;
    }

    .record_rank.night_rank {
        background: url("../images/record_rank1.png") no-repeat;
        background-size: 20px;
        color: #f4f4f7;
    }

    .record_inmid {
        display: inline-block;
        font-size: 14px;
        color: #999;
    }

    .record_fx img {
        width: 21.5px;
        margin-right: 10px;
    }

    .morning, .any, .night {

        border-radius: 0px 0px 5px 5px;
        font-size: 0.82rem;
        color: #666;
    }

    .record_mid {
        margin: 0 auto;
    }

    .record_right {
        float: right;
    }

    .record_tx1 {
        margin-top: 11.5%;
        font-size: 0.82rem;
        text-align: center;
        color: #999;
    }

    .record_tx2 {
        margin-top: 2%;
        font-size: 0.82rem;
        text-align: center;
        color: #999;
    }

    .recorded {
        background: #e3e3e3;

    }

    .bottom1 {
        width: 100%;
        background: url("../images/daybg1.png") no-repeat bottom center;
        background-size: 100%;
        height: 100%;
    }

    .record_time {
        text-align: center;
        font-size: 1.82rem;
        padding-top: 8rem;
        line-height: 1;
        color: rgba(102, 102, 102, 1);
    }

    .next {
        text-align: center;
        font-size: 0.82rem;
        color: rgba(102, 102, 102, 1);
        margin-top: 1.5rem;
    }

    .next span {
        display: inline-block;
        padding-left: 1.2rem;
        background: url(../images/daygood.png) no-repeat;
        background-size: 0.9rem;
        background-position: 0 3px;
    }

    .next .ok_night {
        background: url(../images/good.png) no-repeat;
        background-size: 0.9rem;
        background-position: 0 3px;
    }

    .record_compare {
        text-align: center;
        font-size: 0.82rem;
        color: rgba(101, 103, 101, 1);
        margin-top: 22px;
    }

    .record_pic {
        width: 17.5px;
        height: 17.5px;
        display: inline-block;
    }

    .record_pic img {
        width: 100%;
        vertical-align: middle;
    }

    .record_bottom2 {
        width: 50%;
        left: 50%;
        border: none;
    }

    .midLine {
        width: 1px;
        height: 1.5rem;
        position: absolute;
        left: 50%;
        bottom: 0.75rem;
        background-color: #fff;
        z-index: 99;
    }

    .doRecord {
        text-align: center;
        display: inline-block;
        font-size: 0.82rem;
    }

    .finish {
        width: 6.17647rem;
        height: 1.76470588rem;
        color: rgba(190, 190, 190, 1);
        border-radius: 15px 15px 15px 15px;
        border: 1px solid rgba(190, 190, 190, 1);
        text-align: center;
        margin: 0 auto;
        margin-top: 32px
    }

    .record_text2 {
        font-size: 0.88rem;
        width: 100%;
        text-align: center;
        background-color: rgba(137, 181, 250, 1);
        color: #fff;
        position: absolute;
        bottom: 0;
        height: 2.95rem;
        line-height: 2.95rem;
    }

    .timeout {
        width: 100%;
        text-align: center;
        opacity: 0;
        background: url("../images/daybg1.png") no-repeat bottom center #fff;
        background-size: 100%;
        height: 100%;
        display: none
    }

    .timeout.night_time_out .re_text1, .timeout.night_time_out .ealy_time, .timeout.night_time_out .re_text2, .timeout.night_time_out .re_text1 {
        color: #ccc;
    }

    .night_time_out {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .re_text1 {
        text-align: center;
        font-size: 1.05rem;
        color: rgba(165, 165, 165, 1);
        padding-top: 7.8rem;
    }

    .jiantou {
        width: 16px;
        height: 12.5px;
        background: url("../images/record_jt.png") no-repeat;
        background-size: cover;
        margin: 0 auto;
        margin-top: 15px;
    }

    .ealy_time {
        margin-top: 1.2rem;
        text-align: center;
        font-size: 2.11rem;
        color: rgba(165, 165, 165, 1);
        line-height: 1;
    }

    .re_text2 {
        font-size: 0.82rem;
        color: rgba(128, 126, 126, 1);
        margin-top: 23px;
        text-align: center;
    }

    .night_time_out {
        opacity: 0;
    }

    .nightbg {
        background: #66617e
    }
</style>