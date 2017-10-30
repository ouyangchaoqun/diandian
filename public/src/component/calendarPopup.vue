<template id="calendarPopup">
    <div style="height: 100%;width: 100%;" @click="hideSwiper()">
        <div class="weui-mask weui-animate-fade-in" v-if="isShow" style="background:rgba(0,0,0,0.8);"></div>
        <div id="bg_back" :class="[{show_box_cal:isShow,hidden_box:isHidden}]" >
            <div class="swiper-container1 clickBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="mood in dayMoods">
                        <!--<img :src="mood.bgUrl" alt=""/>-->
                        <!--<div class="clickBox_time">-->
                        <!--<span>{{mood.dt}}</span><span>星期{{mood.weekCn}}</span><span>{{mood.time}}</span>-->
                        <!--<div class="clickBox_bottom" v-html="formatContent(mood.content)"></div>-->
                        <!--</div>-->
                        <div class="addPopup">
                            <img class="addPopupBg" :src="mood.topImage" alt=""/>
                            <img class="addPopupMood" :src="mood.bgUrl" alt="" />
                            <div class="addContent">
                                <div class="addPopupField">【在{{mood.field}}方面】</div>
                                <div class="clickBox_bottom" v-html="formatContent(mood.content)" v-if="formatContent(mood.content)!=''"></div>
                                <div class="clickBox_bottom" v-if="formatContent(mood.content)==''">今天没有文字记录,在记录心情之后可以补充文字和图片,让回忆更清晰！</div>
                            </div>

                        </div>
                        <img src="../images/caendarBottom.png" alt="" style="width: 100%;display: block;margin-top: 0.3rem">
                        <div class="addPopupBottom">
                            <span>{{mood.dt}}</span>
                            <span>{{mood.time}}</span>
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
                isShow: false,
                isHidden: true,
                swiper_box: true,
                dayMoods: [],
                mySwiper: null,
                nowMonth: null,
                nowYear: null,
                index:''
            }
        },

        mounted: function () {
            //this.setNowDate();
            //轮播配置
            let _this = this;

            _this.mySwiper = new Swiper('.clickBox', {

            });
            xqzs.wx.setConfig(_this);


        },
        methods: {
            hideSwiper: function () {                                 //轮播隐藏事件
                let _this= this;
                xqzs.weui.weuiMaskClose();
                setTimeout(function () {
                    _this.isShow = false;
                    _this.isHidden = true;

                },200)

            },
            formatContent:function (c) {
                if(c){
                    c = c.replace(/[\n]+/g,"");
                }
                return xqzs.face.parse(c);
            },
            getCalendarTopImg: function (date) {
                return  "http://oss.xqzs.cn/xqzs/top_img/" + date.replace(/[年|月]/g, "/") + ".jpg";
            }
        },
        updated:function () {
            xqzs.weui.active($(".dateView a"))
        },
        created: function () {
            var popup = this;
            Bus.$on('dataClick',function (_is) {


                popup.index = _is.index
                popup.isShow = _is.isShow
                popup.isHidden = _is.isHidden
                popup.dayMoods = _is._dayMoods

                for(var i=0;i<popup.dayMoods.length;i++){
                    popup.dayMoods[i].topImage = popup.getCalendarTopImg(popup.dayMoods[i].dt);
                    popup.dayMoods[i].field = xqzs.mood.getCjImg(popup.dayMoods[i].scenesId).text

                }
                this.$nextTick(function () {
                    if (popup.mySwiper !== null) {
                        popup.mySwiper.update()

                    }
                    setTimeout(function () {
                        var clickBoxHeight = $('.clickBox').outerHeight(true);
                        var bodyHeight = $(window).height();
                        var clickBoxTop = (bodyHeight-clickBoxHeight)/2+'px';
                        $('.clickBox').css('top',clickBoxTop)
                    },10);
                    popup.mySwiper.slideTo(popup.index, 0, false);//切换到第一个slide
                });
            })

            $(".calendar_box").click()
        },

    }
</script>
<style>
    .addPopup{
        border-radius:5px;
        width: 18.26rem;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }
    .addPopupBg{
        width: 100%;
        height:12.35rem;
        display: block;
        /*border-radius:5px 5px 0 0;*/
    }
    .addPopupMood{
        height: 3.53rem;
        width: 3.53rem;
        display: block;
        margin-top: -1.765rem;
        left: 50%;
        position: absolute;
        margin-left: -1.765rem;
        z-index: 100;
    }
    .addContent{
        height:12.35rem;
        background: #fff;
        position: relative;
        padding-top: 2.35rem;
        border-radius: 0 0 5px 5px;
    }
    .addPopupField{
        color: #363636;
        font-size:0.88235rem;
        margin-bottom: 0.5rem;
    }
    .clickBox_bottom {
        font-size: 0.765rem;
        color: #525151;
        line-height: 1.2rem;
        padding: 0 1.176rem;
        text-align: left;
        height:8.4rem;
        overflow: auto;
    }
    .addPopupBottom span{
        color: #fff;
        font-size: 0.65rem;
        line-height: 1.2;
    }
</style>