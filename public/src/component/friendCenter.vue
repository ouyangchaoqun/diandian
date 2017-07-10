<template id="friendCenter">
    <div class="myIndex_box friendIndex_box">

        <div v-title>好友{{nickName}}的主页</div>
        <div class="banner index_banner">
            <!--<v-banner></v-banner>-->
            <img src="../images/indexBanner1.jpg" alt="">
            <router-link :to="friendSetLink" class="headBox">
                <div class="userHeaderImg">
                    <img alt="" :src="wxFaceUrl(friend.faceUrl)">
                </div>
            </router-link>
            <div class="addName">{{nickName}}</div>
            <v-indexCount></v-indexCount>
        </div>
        <!--banner end -->
        <div class="addSwiper">
            <a href="#" hidefocus="true" class="AddActive">心情指数</a>
            <a href="#" hidefocus="true">心情日历</a>
        </div>
        <div class="swiper-container addSwiperBox">
            <div class="swiper-wrapper">
                <div class="swiper-slide content-slide swiper-no-swiping">
                    <div class="chart_box" v-if="isLookFriend ">
                        <v-chart :chartData="chartData"></v-chart>
                        <div v-if="isLookFriend " class="addSwiperBoxText">只能展示好友七天心情</div>
                    </div>
                    <div class="canot-look" v-if="!isLookFriend "></div>
                </div>
                <div class="swiper-slide content-slide swiper-no-swiping">
                    <v-calendarTemplate v-if="isLookFriend"></v-calendarTemplate>
                    <div class="canot-look" v-if="!isLookFriend "></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import scroll from './lib/scroll.vue'
    import chart from "./chart.vue"
    import banner from "./banner.vue"
    import indexCount from './indexCount.vue'
    import calendarTemplate from './calendarTemplate.vue'
    var friendCenter = {
        template: '#friendCenter'
    };
    export default {
        data() {
            return {
                friend: {},
                isLookFriend: true,
                chartData: [
                    {"days": ["1月1", "2", "3", "4", "5", "6", "7"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月8", "9", "10", "11", "12", "13", "14"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月15", "16", "17", "18", "19", "20", "21"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月22", '23', "24", "25", "26", "27", "28"], "moods": [0, 0, 0, 0, 0, 0, 0]}

                ],
                friendSetLink: null

            }
        },

        methods: {
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },
            initData: function () {
                let _this = this;
                let friendId = this.$route.params.Id;
                _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/' + friendId)
                    .then(function (data) {
                        console.log(data.data.data[3])
                            if (data.data.status === 1) {
                                for (let i = 0; i < data.data.data.length; i++) {
                                    let week = {days: [], moods: []};
                                    for (let j = 0; j < data.data.data[i].length; j++) {
                                        week.days.push(data.data.data[i][j].day);
                                        week.moods.push(data.data.data[i][j].value);
                                    }
                                    _this.$set(_this.chartData, i, week)
                                }
                                console.log(_this.chartData)
                            }
                        }
                        , function (error) {
                            //error
                        });


                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/friend/'+friendId+'/_userId_'
                }).then(function (data) {//es5写法
                    console.log(data)
                    if (data.body.data) {
                        console.log(data.body.data)
                        _this.friend = (data.body.data);
                        _this.nickName = _this.friend.outName
                        _this.friendSetLink = "/me/friendsCount/friendSet/?friendId=" + friendId
                    }
                }, function (error) {
                    //error
                });

                _this.$http.get(web.API_PATH + "user/is/look/friend/_userId_/" + friendId)
                    .then(function (bt) {
                        console.log(bt)
                        if (bt && bt.body.status == 1) {
                            _this.isLookFriend = bt.body.data == 1 ? true : false;

                        }
                    })
            },
        },
        mounted: function () {
            console.log("activated")
            let _this = this;
            _this.initData();
            xqzs.wx.setConfig(_this);
            $('.yo-scroll').css('background','#fff');
            $(".addSwiper a").click(function(e){
                e.preventDefault();
            });
            var addtabsSwiper = new Swiper('.addSwiperBox',{
                speed:500,
                initialSlide:0,
                onSlideChangeStart: function(){
                    if(addtabsSwiper.activeIndex ==1){
                        var H = $(".content-slide").find('.calendarTemplate_box').height();
                        $(".content-slide").css('height',H + 'px');
                    }
                }
            });
            $(".addSwiper a").on('touchstart mousedown',function(e){
                e.preventDefault()
                $(".addSwiper .AddActive").removeClass('AddActive');
                $(this).addClass('AddActive');
                addtabsSwiper.slideTo($(this).index());
            });
        },


        components: {
            "v-chart": chart, "v-banner": banner,
            'v-indexCount':indexCount,
            'v-calendarTemplate':calendarTemplate,
            'v-scroll':scroll
        }
    }


</script>
<style>
    .canot-look {
        clear: both;
        width: 90%;
        height: 10px;
        background: url(../images/xt.jpg) top center no-repeat;
        margin:35px auto;
    }

    .friendIndex_box {
        background: #fff !important;
    }
    .userHeaderImg img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: auto;
        display: block;
    }
    .addSwiperBoxText{
        font-size: 12px;
        color: #999;
        text-align: center;
        margin-top: 15px;
    }
</style>