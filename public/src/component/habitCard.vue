
<template >
    <div class="habit_card_box">
        <div class="top">
            <div class="h1">3个</div>
            <div class="h2">100%完美的日子</div>
            <div class="h3">「在2017年剩余的47个日子里要继续你努力」</div>
        </div>
        <div class="cards swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(item,index) in 8">
                <div class="item ">
                    <div class="img">
                        <img :src="getTopImg(1510890501 - index*24*3600)" />
                    </div>
                    <div class="habits">
                        <span><img src="../images/habit_icon_1.png" /></span>
                        <span><img src="../images/habit_icon_2.png" /></span>
                        <span><img src="../images/habit_icon_3.png" /></span>
                        <span><img src="../images/habit_icon_4.png" /></span>
                    </div>
                    <div class="txt">4个好习惯100%完成</div>
                    <div class="day">2017-11-17</div>
                </div>
                </div>
                <div class="swiper-slide"  >
                </div>
            </div>
        </div>

        <div class="share_btn" @click="share()">分享好习惯</div>
    </div>
</template>
<style>
    .habit_card_box{ background: #fff}
    .habit_card_box .top{ margin:1.4705882352941176470588235294118rem;}
    .habit_card_box .top>div{text-align: right; line-height: 1; color:#333}
    .habit_card_box .h1{ font-size: 2.1176470588235294117647058823529rem; }
    .habit_card_box .h2{ font-size: 1.3529411764705882352941176470588rem; margin-top: 0.85294117647058823529411764705882rem; }
    .habit_card_box .h3{font-size:0.76470588235294117647058823529412rem; margin-top:0.67647058823529411764705882352941rem;;}

    .habit_card_box .cards{ margin-top:5rem; margin-left: 1.8rem; overflow: visible}

    .habit_card_box .cards .item{ width: 12.941176470588235294117647058824rem; -webkit-box-shadow:0px 0px 13px rgba(0,0,0,.18); box-shadow:0px 0px 13px  rgba(0,0,0,.18); overflow: hidden;}
    .habit_card_box .cards .item .img{ width: 100%; height: 8.6470588235294117647058823529412rem; }
    .habit_card_box .cards .item .img img{ width: 100%; height: 100%}
    .habit_card_box .cards .item .habits{ margin: 1.4705882352941176470588235294118rem 0.5rem; margin-bottom: 1rem; text-align: right   }
    .habit_card_box .cards .item .habits img{height:1rem; }
    .habit_card_box .cards .item .habits span{ display: inline-block; width: 2rem;  text-align: center}

    .habit_card_box .cards .item  .txt{ font-size:0.82352941176470588235294117647059rem; color:#666; line-height: 1; text-align: right; margin-right: 0.9rem; }
    .habit_card_box .cards .item  .day{ color:#999; font-size: 0.70588235294117647058823529411765rem; text-align: right;margin-right: 0.9rem; margin-top:0.4rem; margin-bottom: 0.8rem; }

    .habit_card_box  .share_btn{line-height: 2rem; height: 2rem; border-radius: 0.4rem; border: 1px solid #FF9900;  color:#FF9900;font-size:0.88235rem;  display: inline-block; position: fixed; bottom:1.8rem; width: 8rem; left:50%; margin-left:-4rem; text-align: center; background: #fff }

</style>
<script type="text/javascript">

    export default {
        data() {
            return {

            }
        },

        mounted: function () {
            let _this = this;
            _this.mySwiperPre = new Swiper('.cards',{
                slidesPerView :2,
                width:510
            })
        },
        methods:{
            getTopImg:function (time) {
                return  xqzs.mood.getTopImg(time);
            },
            share:function () {
                let _this = this;
                _this.showLoad = true;
                _this.$http.get(web.API_PATH + 'record/daily/sign/card/_userId_').then(response => {
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

                    }

                }, function (error) {
                    _this.showLoad = false;
                });
            }
        },
        components: {

        }
    }

</script>
