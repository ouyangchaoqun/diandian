<template id="record">
    <div class="record">
        <div v-title>每日打卡</div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <div class="moodBox_bg" @click="goIndex()">
        </div>
        <div class="record_box" :class="{bgw:isShowResult,nightbg:isNight}">

            <div class="main_record">
                <div class="init_record" :class="{goHide:isShowResult}" v-show="!outMorningTime&&!outNightTime">
                    <div class="notes">
                        <a @click="morning" class="weui-tabbar__item ">
                            <div class="go_record record_left ">
                                <div class="img"><img src=""/></div>
                                <div class="morning" :class="{recorded:isGetUp}">早起打卡</div>
                            </div>
                        </a>
                        <router-link :to="linkTo" class="weui-tabbar__item">
                            <div class="go_record record_mid">
                                <div class="img"><img src=""/></div>
                                <div class="any">心情记录</div>
                            </div>
                        </router-link>
                        <a @click="night" class="weui-tabbar__item">
                            <div class="go_record record_right">
                                <div class="img"><img src=""/></div>
                                <div class="night" :class="{recorded:isGoBed}">早睡打卡</div>
                            </div>
                        </a>
                    </div>
                    <div class="record_tx1">21天可以养成一个好习惯</div>
                    <div class="record_tx2">21天的坚持可以让你遇到一个更好的自己</div>
                </div>
                <div class="result" :class="{goShow:isShowResult}">
                    <div class="bottom1"  >
                        <div class="record_time">{{result.data.hour}}:{{result.data.minute}}</div>
                        <div class="next"><img src="../images/good.png"/>连续早起{{result.data.continuousDays}}天</div>
                        <div class="record_compare">{{result.allCount}}人正在参加，比{{result.earlyPer}}%的人起的早</div>
                        <div class="record_text" @click="write">
                            <div class="record_pic"><img src="../images/record.png"></div>
                            <div  class="doRecord">早安，今天的小目标是...</div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="finish" @click="finish">完成</div>
                    </div>
                </div>


                <div class="timeout" :class="{night_time_out:outNightTime}" v-show="outMorningTime||outNightTime">
                    <div class="re_text1" v-show="outMorningTime">早起时间</div>
                    <div class="re_text1" v-show="outNightTime">早睡时间</div>
                    <div class="jiantou"></div>
                    <div class="ealy_time" v-show="outMorningTime">05:00-10:00</div>
                    <div class="ealy_time" v-show="outNightTime">20:00-24:00</div>
                    <div class="re_text2" v-show="outMorningTime">早起，将开启你对新的一天的最佳状态</div>
                    <div class="re_text2" v-show="outNightTime">早睡，是为了遇见新的一天和一个新的自己</div>
                    <div class="record_text2" @click="write">
                        <div class="record_pic"><img src="../images/record.png"></div>
                        <div class="doRecord"  v-show="outMorningTime">不忘初心</div>
                        <div  class="doRecord"  v-show="outNightTime">是什么让你如此忘我的熬夜?</div>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="finish" @click="back" v-show="outMorningTime">我知道了</div>
                    <div class="finish" @click="back" v-show="outNightTime">早点睡啦</div>
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
                    <div class="weather_pic">
                        <img v-if="hour>=6&&hour<=18" :src="weather.dayPictureUrl"/>
                        <img v-if="hour<6||hour>18" :src="weather.nightPictureUrl"/>
                    </div>
                    <div class="current">{{weather.weather}}</div>
                    <div class="weather_info">
                        <p>{{weather.weather}}</p>
                        <p>{{weather.temperature}}</p>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>
<script>
    import banner from "./banner.vue";
    let record = {
        template: '#record'
    };
    export default {
        components: {
            "v-banner": banner
        },
        data(){
            return {
                linkTo:"#",
                day: 30,
                month: 12,
                year: 2017,
                isNight:false,
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
                MORNING_FROM_TIME:'0:0',
                MORNING_END_TIME:'23:0',
                NIGHT_FROM_TIME:'0:0',
                NIGHT_END_TIME:'23:59',
                outMorningTime:false,
                outNightTime:false,
                isGetUp:false,
                isGoBed:false,
                result:{
                    allCount:0,
                    earlyPer:0,
                    data:{hour:0,minute:0,id:0}
                },
                record: '',
                isShowResult:false

            }
        },
        methods: {
            back:function () {
                this.outNightTime=false;
                this.outMorningTime=false;
                $(".timeout").hide();
                $(".init_record").animate({opacity:1});
                this.isNight=false;
            },
            finish:function () {
                this.$router.push("/clock?type="+this.result.data.type)
            },

            write:function () {
                let parm='';
                if(this.result.data.id!=0){
                    parm="?id="+this.result.data.id
                }
                this.$router.push("/write"+parm)
            },
            morning:function () {
                let _this =this;
                if(_this.isGetUp==true){
                   _this.$router.push("/clock?type=2")
                }
                if(this.isRecordTime(this.MORNING_FROM_TIME,this.MORNING_END_TIME)){
                    this.checkIn(2);
                }else{
                    console.log('outMorningTime');
                    _this.animateIn();
                    $(".timeout").show().animate({"opacity":1},200,function () {
                        _this.outMorningTime=true;
                    });

                }

            },
            night:function () {
                let _this =this;
                if(_this.isGoBed==true){
                    _this.$router.push("/clock?type=3")
                }

                if(this.isRecordTime(this.NIGHT_FROM_TIME,this.NIGHT_END_TIME)){
                    this.checkIn(3);
                }else{
                    console.log('outnightTime');
                    _this.isNight=true;
                    _this.animateIn();
                    console.log('outnightTime');
                    $(".timeout").show().animate({"opacity":1},200,function () {
                        _this.outNightTime=true;
                    });

                }
            },
            checkIn:function (type) {
                let _this = this;
                let weather ='';
                if(_this.weather.weather!=undefined){
                    weather +=_this.weather.weather;
                }
                if(_this.weather.current!=undefined){
                    weather += " " +_this.weather.current;
                }

                _this.$http.put(web.API_PATH+'sleep/checkin/'+type+'/_userId_',{"weather":weather}).then(response => {
                    console.log(response);
                    if(response.data.status===1){
                        _this.result.data = response.data.data;
                        let   time=new   Date(response.data.data.time);
                        _this.result.data.hour=time.getHours();
                        _this.result.data.minute=time.getMinutes();


                        _this.$http.get(web.API_PATH+'record/sleep/all/user/count/'+type+'').then(data => {
                            if(data.data.status===1){
                                _this.result.allCount=data.data.data;
                            }
                        });
                        _this.$http.get(web.API_PATH+'record/sleep/get/early/per/_userId_/'+type+'').then(data => {
                            if(data.data.status===1){
                                _this.result.earlyPer=data.data.data.toFixed(2);
                            }
                        });
                        _this.isShowResult=true;

                        _this.animateIn();
                        $(".result").show().stop().animate({"opacity":1},200);
                        if (type==3){
                            _this.isNight=true;
                        }


                    }
                });
            },
            animateIn:function () {
                console.log('animateIn');
                $(".init_record").stop().animate({"opacity":0},300,function () {
                    $(this).hide();
                });

            },

            //是否在打卡时间内
            isRecordTime:function (fromTime,endTime) {
                let startTime=parseInt( fromTime.split(":")[0])*60+parseInt(fromTime.split(":")[1]);
                endTime=parseInt( endTime.split(":")[0])*60+parseInt(endTime.split(":")[1]);
                let mydate = new Date();
                //打卡时间
                let _r =false;
                if(startTime<=mydate.getHours()*60+mydate.getMinutes()&&mydate.getHours()*60+mydate.getMinutes()<=endTime){
                    _r = true;
                }else{//非打卡时间
                    _r = false;
                }
                return _r;
            },



            goIndex:function () {
                if(window.history.length>=2){
                    this.$router.go(0-window.history.length+1)
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
        },
        mounted: function () {
            let _this = this;
            xqzs.wx.setConfig(_this);
            let  w= $("body").width();
            $(".record_box").height(w*684/750);

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
                url: web.API_PATH + "record/sleep/get/is/record/_userId_" ,
            }).then(function (data) {
                  if(data.body.status==1){
                      _this.isGetUp=data.body.data.isGetUp;
                      _this.isGoBed=data.body.data.isGoBed;
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
                                    var s = _this.weather.date;
                                    var w = s.substring(s.indexOf("：") + 1, s.indexOf(")"));
                                    _this.weather.current = w.replace("~", "/").trim();
                                    console.log(_this.weather)
                                    console.log(data)
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


        }
    }


</script>
<style>
    .main_record{position: relative}
    .init_record,.result{ position: absolute; bottom:0; left:0; width: 100%; z-index: 2}
    .result{   display: none; opacity: 0; bottom:0; height: 100%
    }
    .bgw{ background: #fff !important;}
    .nightbg{ color:#f4f4f7 !important}
    .nightbg .result .bottom1{ background:url(../images/nightbg.png) no-repeat;background-size: 100% 100%; height: 100%}
    .nightbg .record_time,.nightbg .next,.nightbg .record_compare  { color:#f4f4f7 }

    .nightbg .date_right , .nightbg .date{color:#cececd}
    .nightbg .doRecord{ border-bottom: 1px solid #fff}

    .record, .record_box {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .nightbg .date_info{ background: #4e4c73 ;}

    .ngihttop{
        animation-name: gozelo;
        animation-duration: .2s;
    }

    @keyframes gozelo {
        0%{
            background: #fff ;
        }
        100% {
            background: #4e4c73 ;
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
        height: 70px;
        background: #fff;
        border-radius: 10px;
        box-shadow: rgba(102, 102, 102, 0.2) 0px 3px 4px;
        overflow: hidden;
        position: absolute;
        width: 100%; z-index: 2;
        top: -38px;
    }
    .main_record{ position: absolute;
        width: 100%;  z-index: 1; height: 100%}

    .date {
        float: left;
        width: 50%;
    }

    .day {
        line-height: 70px;
        float: left;
        font-size: 2.35rem;
        margin-left: 7%;
    }

    .date_right {
        font-size: 0.7rem;
        color: #666666;
        position: absolute;
        left: 17%;
        top: 50%;
        margin-top: -1rem;
    }

    .weather {
        float: right;
        width: 30%;
        font-size: 0.7rem;
        text-align: right;
    }

    .current {
        position: absolute;
    }

    .weather_pic {
        width: 8%;
        height: 30px;
        position: absolute;
        right: 10%;
        top: 50%;
        margin-top: -10px;
    }

    .weather_pic img {
        width: 100%;
    }

    .weather_info {
        position: absolute;
        top: 50%;
        left: 84%;
        text-align: center;
        margin-top: -19px;
    }

    .notes {
        margin: 25px 25px 0px 25px;
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
        font-size: 12px;
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
        padding-bottom:5rem;
    }

    .recorded{background:#ecb47a;}

    .bottom1 {
        width: 100%;
        background:url("../images/daybg.png") no-repeat bottom center;
        background-size:100% ;
        height: 100%;
    }

    .record_time {
        text-align: center;
        font-size: 1.82rem;
        padding-top: 50px;
        color: rgba(102, 102, 102, 1);
    }

    .next {
        text-align: center;
        font-size: 0.78rem;
        color: rgba(102, 102, 102, 1);
        margin-top: 18px;
    }
        .next img{
            width:0.9rem;
            margin-right: 2%;
        }
    .record_compare {
        text-align: center;
        font-size: 0.70rem;
        color: rgba(101, 103, 101, 1);
        margin-top: 25px;
    }
    .record_pic{
        width: 17.5px;
        height: 17.5px;
        display: inline-block;
        vertical-align: middle;
    }
    .record_pic img{
        width: 100%;

    }
    .record_text {
        font-size: 0.78rem;
        width: 50%;
        margin: 0 auto;
        margin-top: 50px;
        text-align: center;
    }
    .doRecord{
        border-bottom:1px solid rgba(102,102,102,1) ;
        text-align: center;

        display: inline-block;
        vertical-align: middle;
    }
    .finish{
        width: 105px;
        height: 30px;
        color: rgba(190,190,190,1);
        border-radius:15px 15px 15px 15px;
        border: 1px solid rgba(190,190,190,1);
        text-align: center;
        margin: 0 auto;
        margin-top:32px
    }



    .record_text2 {
        font-size: 0.78rem;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        margin-top: 30px;
    }

    .timeout {
        width: 100%;
        padding-bottom: 1.52rem;
        text-align: center;  position: absolute;
        bottom:0;left:0
     }
    .timeout.night_time_out .re_text1,.timeout.night_time_out .ealy_time,.timeout.night_time_out .re_text2,.timeout.night_time_out .re_text1 { color:#ccc;}
    .timeout.night_time_out .doRecord{border-bottom: 1px solid #ccc}


    .re_text1 {
        padding-top: 1.47rem;
        text-align: center;
        font-size: 1.05rem;
        color: rgba(165, 165, 165, 1);
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
        line-height:1;
    }

    .re_text2 {
        font-size: 0.7rem;
        color: rgba(128, 126, 126, 1);
        margin-top: 23px;
        text-align: center;
    }
    .night_time_out{ opacity: 0;   }
    .nightbg{background: #66617e}
</style>