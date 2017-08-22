<template id="calendarPopup">
    <div style="height: 100%;width: 100%;" @click="hideSwiper()">
        <div class="weui-mask weui-animate-fade-in" v-if="isa"></div>
        <div id="bg_back" :class="[{show_box_cal:isa,hidden_box:isb}]" >
            <div class="swiper-container1 clickBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="mood in dayMoods">
                        <!--<img :src="mood.bgUrl" alt=""/>-->
                        <!--<div class="clickBox_time">-->
                            <!--<span>{{mood.dt}}</span><span>星期{{mood.weekCn}}</span><span>{{mood.time}}</span>-->
                            <!--<div class="clickBox_bottom" v-html="formatContent(mood.content)"></div>-->
                        <!--</div>-->
                        <div class="addPopup">
                            <img class="addPopupBg" :src="topImg" alt=""/>
                            <img class="addPopupMood" :src="mood.bgUrl" alt="" />
                            <div class="addPopupField">【在生活方面】</div>
                            <div class="clickBox_bottom" v-html="formatContent(mood.content)" v-if="formatContent(mood.content)!=''"></div>
                            <div class="clickBox_bottom" v-if="formatContent(mood.content)==''">今天没有文字记录，在记录心情之后可以补充
                                文字和图片，让回忆更清晰！</div>
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
                topImg: xqzs.mood.getTopImg(),
                isa: false,
                isb: true,
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
                    _this.isa = false;
                    _this.isb = true;

                },200)

            },
            formatContent:function (c) {
                if(c){
                    c = c.replace(/[\n]+/g,"");
                }
                return xqzs.face.parse(c);
            },
        },
        updated:function () {
            xqzs.weui.active($(".dateView a"))
        },
        created: function () {
            var popup = this;
            Bus.$on('dataClick',function (_is) {
                console.log(_is)
                popup.index = _is.index
                popup.isa = _is._isa
                popup.isb = _is._isb
                popup.dayMoods = _is._dayMoods
                this.$nextTick(function () {
                    if (popup.mySwiper !== null) {
                        popup.mySwiper.update()

                    }
                    popup.mySwiper.slideTo(popup.index, 0, false);//切换到第一个slide
                });
            })
            $(".calendar_box").click()
        },

    }
</script>
<style>
    .addPopup{
        border-radius:0 0 5px 5px;
        height: 27.1rem;
        width: 18.26rem;
        background: #fff;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }
    .addPopupBg{
        width: 100%;
        height:12.59rem;
        display: block;
        border-radius: 5px 5px 0 0;
    }
    .addPopupMood{
        height: 3.53rem;
        width: 3.53rem;
        display: block;
        margin-top: -1.765rem;
        left: 50%;
        position: absolute;
        margin-left: -1.765rem;
    }
    .addPopupField{
        color: #363636;
        font-size:0.88235rem;
        margin-top:2.35rem;
        margin-bottom: 0.5rem;
    }
    .clickBox_bottom {
        font-size: 0.765rem;
        color: #525151;
        line-height: 1.2rem;
        padding: 0 1.176rem;
        text-align: left;
        letter-spacing:2px;
        height:8.4rem;
        overflow: auto;
    }
    .addPopupBottom span{
        color: #fff;
        font-size: 0.65rem;
        line-height: 1.2;
    }
</style>