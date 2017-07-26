<template id="record">
    <div class="record">
        <div v-title>每日打卡</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <div class="moodBox_bg" @click="goIndex()">
        </div>
        <div class="record_box" :class="{bgw:isShowResult,nightbg:isNight}">

            <div class="main_record">
                <div class="init_record" :class="{goHide:isShowResult}" v-show="!outMorningTime&&!outNightTime">
                    <div class="notes">
                        <a  class="weui-tabbar__item ">
                            <div class="go_record record_left " @click="morning">
                                <div class="img"></div>
                                <div class="morning" :class="{recorded:isGetUp}">早起打卡</div>
                            </div>
                        </a>
                        <router-link :to="linkTo" class="weui-tabbar__item">
                            <div class="go_record record_mid">
                                <div class="img"></div>
                                <div class="any">心情记录</div>
                            </div>
                        </router-link>
                        <a  class="weui-tabbar__item">
                            <div class="go_record record_right" @click="night">
                                <div class="img"></div>
                                <div class="night" :class="{recorded:isGoBed}">早睡打卡</div>
                            </div>
                        </a>
                    </div>
                    <div class="record_tx1">坚持21天A计划</div>
                    <div class="record_tx2">遇见更好的自己</div>
                </div>
                <div class="result" :class="{goShow:isShowResult}">
                    <div class="bottom1">
                        <div class="record_time">{{result.data.hour}}:{{result.data.minute}}</div>
                        <div class="next"><span  :class="{ok_night:result.data.type==3}">连续早<template v-if="result.data.type==2">起</template><template v-if="result.data.type==3">睡</template>{{result.data.continuousDays}}天</span>
                        </div>
                        <div class="record_compare" v-if="result.data.type==2">
                            {{result.allCount}}人正在参加，比{{result.earlyPer}}%的人起的早
                        </div>
                        <div class="record_compare" v-if="result.data.type==3">
                            {{result.allCount}}人正在参加，比{{result.earlyPer}}%的人睡的早
                        </div>
                        <div class="record_fx">
                            <div class="record_inmid">
                                <div class="record_share" :class="{night_share:result.data.type==3}" @click="share">分享成就</div>
                                <div class="record_rank" :class="{night_rank:result.data.type==3}" @click="goRank"><template v-if="result.data.type==2">早</template><template v-if="result.data.type==3">晚</template>安排行</div>
                            </div>
                        </div>
                        <div class="record_bottom" @click="write">
                            <div class="record_pic">
                                <img src="../images/record_ss.png" v-if="result.data.type==3">
                                <img src="../images/record_record1.png" v-if="result.data.type==2">
                            </div>
                            <div class="doRecord" v-if="result.data.type==2">向新的一天问好</div>
                            <div class="doRecord" v-if="result.data.type==3">今日小成就</div>
                            <div style="clear: both;"></div>
                        </div>
                        <!--<div class="finish" @click="finish">完成</div>-->
                    </div>
                </div>


                <div class="timeout" :class="{night_time_out:outNightTime}">
                    <div class="re_text1" v-if="outMorningTime">早起时间</div>
                    <div class="re_text1" v-if="outNightTime">早睡时间</div>
                    <div class="jiantou"></div>
                    <div class="ealy_time" v-if="outMorningTime">{{MORNING_FROM_TIME}}-{{MORNING_END_TIME}}</div>
                    <div class="ealy_time" v-if="outNightTime">{{NIGHT_FROM_TIME}}-{{NIGHT_END_TIME}}</div>
                    <div class="re_text2" v-if="outMorningTime">早起，将开启新的一天的最佳状态</div>
                    <div class="re_text2" v-if="outNightTime">早睡，为了在第二天遇见全新的自己</div>
                    <div class="record_text2" @click="write">
                        <div class="record_pic"><img src="../images/record_ss.png" v-if="isNight"><img src="../images/record_record1.png" v-if="!isNight"></div>
                        <div class="doRecord" v-if="outMorningTime">不忘初心</div>
                        <div class="doRecord" v-if="outNightTime">为啥熬夜</div>
                        <div style="clear: both;"></div>
                    </div>
                    <!--<div class="finish" @click="back" v-if="outMorningTime">我知道了</div>-->
                    <!--<div class="finish" @click="back" v-if="outNightTime">早点睡啦</div>-->
                </div>

            </div>
            <div class="date_info ">
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
                        <img v-if="(hour>=6&&hour<=18)&&!isNight" :src="weather.dayPictureUrl"/>
                        <img v-if="(hour<6||hour>18)||isNight" :src="weather.nightPictureUrl"/>
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
            "v-banner": banner,'v-showLoad':showLoad
        },
        data(){
            return {
                linkTo: "#",
                showLoad:false,
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
                outMorningTime: false,
                outNightTime: false,
                isGetUp: false,
                isGoBed: false,
                result: {
                    allCount: 0,
                    earlyPer: 0,
                    data: {hour: 0, minute: 0, id: 0, type: 2}
                },
                record: '',
                isShowResult: false,
                doRecordText:''

            }
        },
        methods: {
            share:function () {
                let _this=this;
                _this.showLoad=true;
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'wei/xin/create/check/in/invite/card/_userId_/'+_this.result.data.type
                }).then(function (bt) {
                    if(bt.body.status==1){
                        xqzs.weui.dialog({
                            title:'成就卡已经发送',
                            msg:'前往公众号查看，分享到朋友圈',
                            submitText:'查看',
                            submitFun:function () {
                                try {
                                    WeixinJSBridge.call('closeWindow');
                                }catch (e){
                                }
                            }
                        })
                    }
                    _this.showLoad=false;
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
                let _this = this;
                if (_this.isGetUp == true) {
                    _this.$router.push("/sleepRank?type=2")
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
                let _this = this;
                if (_this.isGoBed == true) {
                    _this.$router.push("/sleepRank?type=3")
                    return;
                }

                if (this.isRecordTime(this.NIGHT_FROM_TIME, this.NIGHT_END_TIME)) {
                    this.checkIn(3);
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
                        _this.result.data = response.data.data;
                        let time = new Date(response.data.data.time*1000);
                        if(time.getHours()<10){
                            _this.result.data.hour = '0'+time.getHours();
                        }
                        else{
                            _this.result.data.hour =time.getHours();
                        }
                        _this.result.data.minute = time.getMinutes();
                        if(_this.result.data.hour <10){_this.result.data.hour ="0"+_this.result.data.hour}
                        if(_this.result.data.minute <10){_this.result.data.minute ="0"+_this.result.data.minute}


                        _this.$http.get(web.API_PATH + 'record/sleep/all/user/count/' + type + '').then(data => {
                            if (data.data.status === 1) {
                                _this.result.allCount = data.data.data;
                            }
                        });
                        _this.$http.get(web.API_PATH + 'record/sleep/get/early/per/_userId_/' + type + '').then(data => {
                            if (data.data.status === 1) {
                                _this.result.earlyPer = data.data.data.toFixed(2);
                            }
                        });
                        _this.isShowResult = true;
                        _this.doRecordText='向新的一天问好';
                        _this.animateIn();
                        $(".result").show().stop().animate({"opacity": 1}, 200);
                        if (type == 3) {
                            _this.isNight = true;
                            _this.doRecordText='今日小成就';
                        }


                    }
                });
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
                //打卡时间
                let _r = false;
                if (startTime <= mydate.getHours() * 60 + mydate.getMinutes() && mydate.getHours() * 60 + mydate.getMinutes() <= endTime) {
                    _r = true;
                } else {//非打卡时间
                    _r = false;
                }
                return _r;
            },


            goIndex: function () {
                if (window.history.length >= 2) {
                    this.$router.go(0 - window.history.length + 1)
                }
                this.$router.replace('/');
            },

            getMoodCount(callback){
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
            goRank:function () {
                this.$router.push("/sleepRank?type="+this.result.data.type)

            }
        },
        mounted: function () {
            let _this = this;
            xqzs.wx.setConfig(_this);
            let w = $("body").width();
            $(".record_box").height(w * 684 / 750);

            //获取当前时间
            var mydate = new Date();
            _this.year = mydate.getFullYear();
            _this.month = mydate.getMonth();
            _this.day = mydate.getDate();
            _this.hour = mydate.getHours();
            var weekNo = mydate.getDay();
            _this.week = _this.weeks[weekNo];
            console.log(_this.week);


            //是否打卡
            _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + "record/sleep/get/is/record/_userId_",
            }).then(function (data) {
                if (data.body.status == 1) {
                    _this.isGetUp = data.body.data.isGetUp;
                    _this.isGoBed = data.body.data.isGoBed;


                    _this.MORNING_FROM_TIME = data.body.data.getUpConfig.starttime;
                    _this.MORNING_END_TIME = data.body.data.getUpConfig.endtime;
                    _this.NIGHT_FROM_TIME = data.body.data.goBedConfig.starttime;
                    _this.NIGHT_END_TIME = data.body.data.goBedConfig.endtime;
                }
            }, function (error) {

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
                                    _this.weather.current =_this.weather.current.replace("℃","°");
                                    _this.weather.temperature = _this.weather.temperature.replace("~", "-").trim();
                                     _this.weather.temperature = _this.weather.temperature.replace("℃","°");
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


        },

    }


</script>
<style>
    .go_record:active {
        background: #eee
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

    .nightbg .timeout ,.nightbg .result .bottom1 {
        background: url(../images/nightbg.png) no-repeat;
        background-size: 100% 100%;
        height: 100%
    }

    .nightbg .record_time, .nightbg .next, .nightbg .record_compare {
        color: #f4f4f7
    }
    .nightbg .record_bottom,  .nightbg .timeout .record_text2{
     background-color: #4e4c73;
 }
    .nightbg .date_right, .nightbg .date, .nightbg .weather {
        color: #cececd
    }

    .record, .record_box {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .nightbg .date_info {
        background: #4e4c73;
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
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 3;

    }

    .date_info {
        height: 4.11764rem;
        background: #fff;
        border-radius: 10px;
        box-shadow: rgba(102, 102, 102, 0.2) 0px 3px 4px;
        overflow: hidden;
        position: absolute;
        width: 100%;
        z-index: 2;
        top: -1.764705rem;
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
    }

    .date_right {
        font-size: 0.7rem;
        color: #666666;
        position: absolute;
        left: 18%;
        top: 50%;
        margin-top: -1rem;
    }

    .weather {
        float:right;
        width: 49%;
        font-size: 0.7rem;
        text-align: right;
        color: #666;
    }

    .weather .current {
        line-height: 1;
        font-size: 30px;
    }

    .weather_pic {
        width: 42px;
        height: 30px;
        float: right;
        margin-top: 20px;
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
        margin-right: 5px;
        margin-top: 12px;

    }

    .notes {
        padding: 3.47058823rem 1.47058823rem 0 1.47058823rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;

    }

    .go_record {
        width: 81%;
        height: 6.7rem;
        background: #fff;
        border-radius: 5px;
    }

    .go_record .img {
        height: 83%;
        background-color: #0ba98e;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
    }

    .record_left {
        float: left;
    }
    .record_left .img{ background: url("../images/record_get_up.png") no-repeat center; background-size: 80% }
    .record_mid .img{ background: url("../images/record_mood.png") no-repeat center ; background-size: 80%}
    .record_right .img{ background: url("../images/record_go_bed.png") no-repeat center; background-size: 80% }
    .record_fx{
        text-align: center;
        margin-top: 55px;
    }
    .record_rank,.record_share{
        float: left;
        background: url("../images/record_share.png") no-repeat; height: 20px;
        background-size: 20px;
        padding-top: 3px;
        padding-left: 26px;
        margin: 0 10px;
    }
    .record_rank{
        float: right;
        background: url("../images/record_rank.png") no-repeat;
        background-size: 20px;
    }

    .record_share.night_share{
        background: url("../images/record_share1.png") no-repeat;
        background-size: 20px;
    }
    .record_rank.night_rank{
        background: url("../images/record_rank1.png") no-repeat;
        background-size: 20px;
    }


    .record_inmid{
        display: inline-block;
        font-size: 12px;
    }
    .record_fx img{
        width: 21.5px;
        margin-right: 10px;
    }

    .morning {
        background: #b8baca;
        color: #fff;
        border-radius: 0px 0px 5px 5px;
        font-size: 0.7rem;
    }

    .any {
        color: #fff;
        background-color: #ecb47a;
        border-radius: 0px 0px 5px 5px;
        font-size: 0.7rem;
    }

    .night {
        background: #b8baca;
        color: #fff;
        border-radius: 0px 0px 5px 5px;
        font-size: 0.7rem;
    }

    .record_mid {
        margin: 0 auto;
    }

    .record_right {
        float: right;
    }

    .record_tx1 {
        margin-top: 11.5%;
        font-size: 0.70rem;
        text-align: center;
        color: #b9bdc0;
    }

    .record_tx2 {
        margin-top: 2%;
        font-size: 0.70rem;
        text-align: center;
        color: #b9bdc0;
    }

    .recorded {
        background: #ecb47a;
    }

    .bottom1 {
        width: 100%;
        background: url("../images/daybg.png") no-repeat bottom center;
        background-size: 100%;
        height: 100%;
    }

    .record_time {
        text-align: center;
        font-size: 1.82rem;
        padding-top: 80px;
        line-height: 1;
        color: rgba(102, 102, 102, 1);
    }

    .next {
        text-align: center;
        font-size: 0.78rem;
        color: rgba(102, 102, 102, 1);
        margin-top: 18px;
    }
    .next span{ display: inline-block; padding-left: 1.2rem; background: url(../images/daygood.png) no-repeat; background-size: 0.9rem; background-position: 0 3px ;}

    .next .ok_night{background: url(../images/good.png) no-repeat; background-size: 0.9rem; background-position: 0 3px ;}


    .record_compare {
        text-align: center;
        font-size: 0.70rem;
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

    .record_bottom {
        font-size: 0.88rem;
        width: 100%;
        text-align: center;
        background-color: rgba(137, 181, 250, 1);
        color: #fff;
        position: absolute;
        bottom: 0;
        height:40px;
        padding-top:10px;
    }

    .doRecord {
        text-align: center;
        display: inline-block;
        vertical-align: middle;
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
        height:40px;
        padding-top:10px;
    }

    .timeout {
        width: 100%;
        text-align: center;
        opacity: 0;
        background: url("../images/daybg.png") no-repeat bottom center;
        background-size: 100%;
        height: 100%;
        display:none
    }

    .timeout.night_time_out .re_text1, .timeout.night_time_out .ealy_time, .timeout.night_time_out .re_text2, .timeout.night_time_out .re_text1 {
        color: #ccc;
    }


    .re_text1 {
        padding-top: 1.47rem;
        text-align: center;
        font-size: 1.05rem;
        color: rgba(165, 165, 165, 1);
        padding-top: 78px;
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
        margin-top: 0.88rem;
        text-align: center;
        font-size: 2.11rem;
        color: rgba(165, 165, 165, 1);
        line-height: 1;
    }

    .re_text2 {
        font-size: 0.7rem;
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