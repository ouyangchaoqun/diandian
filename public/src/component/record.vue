<template id="record">
    <div class="record">
        <div v-title>每日打卡</div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <div class="moodBox_bg" @click="goIndex()">
        </div>
        <div class="record_box">
            <div class="date_info">
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
            <!--<div class="notes">-->
            <!--<a @click="" class="weui-tabbar__item ">-->
            <!--<div class="go_record record_left ">-->
            <!--<div class="img"><img src=""/></div>-->
            <!--<div class="morning">早起打卡</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--<router-link to="addMood" class="weui-tabbar__item">-->
            <!--<div class="go_record record_mid">-->
            <!--<div class="img"><img src=""/></div>-->
            <!--<div class="any">心情记录</div>-->
            <!--</div>-->
            <!--</router-link>-->
            <!--<a to="" class="weui-tabbar__item">-->
            <!--<div class="go_record record_right">-->
            <!--<div class="img"><img src=""/></div>-->
            <!--<div class="night">早睡打卡</div>-->
            <!--</div>-->
            <!--</a>-->
            <!--</div>-->
            <!--<div class="record_tx1">21天可以养成一个好习惯</div>-->
            <!--<div class="record_tx2">21天的坚持可以让你遇到一个更好的自己</div>-->

            <div class="bottom1 ">
                <div class="record_time">6:30</div>
                <div class="next"><img src="../images/good.png"/>连续早起5天</div>
                <div class="record_compare">32444人正在参加，比70%的人起的早</div>
                <div class="record_text">
                    <div class="record_pic"><img src="../images/record.png"></div>
                    <div  class="doRecord">早安，今天的小目标是...</div>
                    <div style="clear: both;"></div>
                </div>
                <div class="finish">完成</div>

            </div>
            <!--<div class="bottom2 ">-->
                <!--<div class="re_text1">早起时间</div>-->
                <!--<div><img src=""></div>-->
                <!--<div class="ealy_time">05:00-10:00</div>-->
                <!--<div class="re_text2">早起，将开启你对新的一天的最佳状态</div>-->
                <!--<div class="record_text">-->
                    <!--<div class="record_pic"><img src="../images/record.png"></div>-->
                    <!--<div  class="doRecord">不忘初心</div>-->
                    <!--<div style="clear: both;"></div>-->
                <!--</div>-->
                <!--<div class="finish">我知道了</div>-->

            <!--</div>-->
        </div>
    </div>
</template>
<script>
    import banner from "./banner.vue";
    let addMood = {
        template: '#addMood'
    };
    export default {
        components: {
            "v-banner": banner
        },
        data(){
            return {
                day: 30,
                month: 12,
                year: 2017,
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
                record: '',
            }
        },
        methods: {


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


            //获取当前时间
            var mydate = new Date();
            _this.year = mydate.getFullYear();
            _this.month = mydate.getMonth();
            _this.day = mydate.getDate();
            _this.hour = mydate.getHours();
            var weekNo = mydate.getDay();
            _this.week = _this.weeks[weekNo];
            console.log(_this.week);


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
    .sogo-enter-active {
        animation-name: sgo;
        animation-duration: .2s;
    }

    @keyframes sgo {
        0% {
            transform: translate3d(100%, 0, 0);
            -webkit-transform: translate3d(100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 2;
        }
    }

    .record, .record_box {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .recordBox_bg {
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
        /*padding:30px 15px 36px 15px;*/
        background: #f4f4f8;
        background-size: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        z-index: 3;
    }

    .date_info {
        height: 70px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(102, 102, 102, 0.2) 0px 3px 4px;
        overflow: hidden;
        position: relative;
    }

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
        margin-top: 13.5%;
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

    .bottom1 {
        width: 100%;
        background:url("../images/nightbg.png") no-repeat;
        background-size:100% 100% ;
        padding-bottom: 1.52rem;
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
        float: left;
    }
    .record_pic img{
        width: 100%;

    }
    .record_text {
        font-size: 0.78rem;
        width: 50%;
        margin: 0 auto;
        margin-top: 50px;
    }
    .doRecord{
        border-bottom:1px solid rgba(102,102,102,1) ;
        text-align: center;
        width: 85%;
        float: left;
    }
    .finish{
        width: 105px;
        height: 30px;
        color: rgba(190,190,190,1);
        border-radius:15px 15px 15px 15px;
        border: 1px solid rgba(190,190,190,1);
        text-align: center;
        margin: 0 auto;
        margin-top:38px;
    }
</style>