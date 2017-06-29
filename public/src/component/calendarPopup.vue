<template id="calendarPopup">
    <div style="height: 100%;width: 100%;" @click="hideSwiper()">
        <div class="weui-mask weui-animate-fade-in" v-if="isa"></div>
        <div id="bg_back" :class="[{show_box_cal:isa,hidden_box:isb}]" >
            <div class="swiper-container clickBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="mood in dayMoods">
                        <img :src="mood.bgUrl" alt=""/>
                        <div class="clickBox_time">
                            <span>{{mood.dt}}</span><span>星期{{mood.weekCn}}</span><span>{{mood.time}}</span>
                            <div class="clickBox_bottom" v-html="formatContent(mood.content)"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script type="text/javascript">
    import Bus from './bus.js';
    var calendarPopup = {
        template: '#calendarPopup'
    }
    export default {
        data() {
            return {
                isa: false,
                isb: true,
                swiper_box: true,
                dayMoods: [],
                mySwiper: null,
                nowMonth: null,
                nowYear: null,
                dayMoods:[]
            }
        },

        mounted: function () {
            //this.setNowDate();
            //轮播配置
            let _this = this;
            _this.mySwiper = new Swiper('.clickBox', {});
            xqzs.wx.setConfig(_this);
            this.$nextTick(function () {
                if (_this.mySwiper !== null) {
                    _this.mySwiper.update()
                }
                _this.mySwiper.slideTo(_this.dayMoods.length - 1, 0, false);//切换到第一个slide
            });
        },
        methods: {

            calculateDays(year, month) {
                let defaultImgUrl = web.IMG_PATH + "list_mood_0" + 0 + ".png";
                let _this = this;
                let days = [];
                let thisMonthDays = this.getThisMonthDays(year, month);
                let monthchange = month;
                if (month < 10) monthchange = "0" + monthchange;


                for (let i = 1; i <= thisMonthDays; i++) {
                    days.push({index: i - 1, date: "", smailUrl: defaultImgUrl, moods: []});
                }

                this.days = days;
                days = [];
                _this.$http.get(web.API_PATH + 'mood/query/calendar/list/_userId_?date=' + year + '-' + monthchange + '-01').then(response => {
                    if (response.data.status === 1) {

                        if (thisMonthDays > 0) {
                            for (let i = 1; i <= thisMonthDays; i++) {
                                let dayChange = i;
                                if (i < 10) dayChange = "0" + i;
                                let dateStr = year + "-" + monthchange + "-" + dayChange;
                                let faceIndex = 0;
                                let moods = [];
                                for (let j = 0; j < response.data.data.length; j++) {
                                    if (dateStr === response.data.data[j].dt) {
                                        faceIndex = response.data.data[j].moodValue;
                                        moods.push(response.data.data[j]);
                                    }
                                }
                                let smailUrl = web.IMG_PATH + "list_mood_0" + faceIndex + ".png";
                                days.push({index: i - 1, date: dateStr, smailUrl: smailUrl, moods: moods});
                            }
                        }

                        this.days = days

                    } else {
                        for (let i = 1; i <= thisMonthDays; i++) {
                            days.push({index: i - 1, date: "", smailUrl: defaultImgUrl, moods: []});
                        }
                    }
                }, response => {
                    for (let i = 1; i <= thisMonthDays; i++) {
                        days.push({index: i - 1, date: "", smailUrl: defaultImgUrl, moods: []});
                    }
                });

                //
            },

            hideSwiper: function () {                                 //轮播隐藏事件
                let _this= this;
                xqzs.weui.weuiMaskClose();
                setTimeout(function () {
                    _this.isa = false;
                    _this.isb = true;
                    _this.moveMove();
                },200)

            },

            /***禁止滑动***/
            moveStop: function () {
                $('body').css('overflow', 'hidden') .on('touchmove', function(e) {
                    e.preventDefault();
                })
            },

            /***取消滑动限制***/
            moveMove: function () {
                $('body').off().css('overflow', 'auto');
            },
            formatContent:function (c) {
                return xqzs.face.parse(c);
            }
        },
        updated:function () {
            xqzs.weui.active($(".dateView a"))
        },
        created: function () {
            var popup = this;
            Bus.$on('dataClick',function (_is) {
                console.log(_is)
                console.log(_is._isa)
                console.log(_is._isb)
                popup.isa = _is._isa
                popup.isb = _is._isb
                popup.dayMoods = _is._dayMoods


                this.$nextTick(function () {

                    if (popup.mySwiper !== null) {
                        popup.mySwiper.update()
                    }

                    popup.mySwiper.slideTo(popup.dayMoods.length - 1, 0, false);//切换到第一个slide

                });




            })
            $(".calendar_box").click()
        },

    }
</script>
