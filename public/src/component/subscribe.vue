<template id="subscribe">
    <div class="subscribe_box">
        <div v-title>精选订阅</div>
        <div class="tabs">
            <div class="tabHeader">
                <a href="#" hidefocus="true" class="active">订阅推荐</a>
                <a href="#" hidefocus="true">我的订阅</a>
            </div>

        </div>
        <div class="swiper-container moodCount_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul class="subscribeLists">
                        <router-link to="/me/subscribe/subscribeList">
                            <li class="subscribeList">
                                <img class="timing" src="../images/timing.png" alt="">
                                <div>
                                    <h3>记录时间定时提醒</h3>
                                    <p>每天定时提醒你记录此刻心情</p>
                                    <span>4468人已订阅</span>
                                </div>
                                <img class="addSubscribe" src="../images/add.png" alt="">
                            </li>
                        </router-link>
                        <li class="subscribeList">
                            <img class="timing" src="../images/morning.png" alt="">
                            <div>
                                <h3>早安心语</h3>
                                <p>每天清晨给你一句早安问候</p>
                                <span>4468人已订阅</span>
                            </div>
                            <img class="addSubscribe" src="../images/add.png" alt="">
                        </li>
                        <li class="subscribeList">
                            <img class="timing" src="../images/night.png" alt="">
                            <div>
                                <h3>晚安物语</h3>
                                <p>每天晚上给你一句晚安物语</p>
                                <span>4468人已订阅</span>
                            </div>
                            <img class="addSubscribe" src="../images/add.png" alt="">
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <!--<ul class="subscribeLists">
                        <li class="subscribeList">
                            <img class="timing" src="../images/timing.png" alt="">
                            <div>
                                <h3 class="subMarTop">记录时间定时提醒</h3>
                                <p>每天9:30提醒</p>
                            </div>

                        </li>
                        <li class="subscribeList">
                            <img class="timing" src="../images/morning.png" alt="">
                            <div>
                                <h3 class="subMarTop">早安心语</h3>
                                <p>每天7:30提醒</p>
                            </div>

                        </li>
                        <li class="subscribeList">
                            <img class="timing" src="../images/night.png" alt="">
                            <div>
                                <h3 class="subMarTop">晚安物语</h3>
                                <p>22:30提醒</p>
                            </div>
                        </li>
                    </ul>-->
                    <div class="noSubscribe">你暂时还没有任何订阅哦~</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var subscribe={
        template:'#subscribe'
    }
    export default {
        data() {
            return {

            }
        },
        mounted:function () {
            var tabsSwiper = new Swiper('.swiper-container',{
                speed:500,
                onSlideChangeStart: function(){
                    $(".tabs .active").removeClass('active');
                    $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
                }
            });
            $(".tabs a").on('touchstart mousedown',function(e){
                e.preventDefault()
                $(".tabs .active").removeClass('active');
                $(this).addClass('active');
                tabsSwiper.slideTo($(this).index());
            });

            $(".tabs a").click(function(e){
                e.preventDefault();
            });
        }

    }
</script>
<style>
    .subscribe_box{
        width: 100%;
        height: 100%;
        background: #ffffff !important;
    }
    .tabs{
        height:37px;
        background:#fff;
        padding:15px;
        border-bottom: 1px solid #eee
    }
    .tabHeader{
        height:37px;
        background:#ebebeb;
        border-radius: 5px;
        padding:0 2px
    }
    .tabs a{
        display:block;
        float:left;
        width:50%;
        color:#bcbcbc;
        text-align:center;
        line-height:33px;
        height:33px;
        font-size:14px;
        text-decoration:none;
        border-radius: 4px;
        margin:2px 0;
        font-family: PingFangSC-Regular
    }
    .tabs a.active{
        color:#333;
        position: relative;
        background: #fff;
        font-size: 15px;
        font-family: PingFangSC-Medium
    }
    .subscribeLists{padding:0 15px 0 15px}
    .subscribeList{
        height: 77px;
        border-bottom: 1px solid #eee;
        color: #999;
        padding-top: 15px;
    }
    .subscribeList div{
        float: left;
        margin-left: 20px;
    }
   .subscribeList h3{
       font-size: 16px;
       color: #333;
       font-weight: normal;
       line-height: 16px;
       margin-bottom: 9px;
   }
   .subscribeList p{
       font-size: 13px;
       line-height: 13px;
       margin-bottom: 15px;
   }
    .subscribeList span{
        font-size: 11px;
        line-height: 11px;
        display:block;
    }
    .addSubscribe{
        float: right;
        width:37px;
        height: 33px;
    }
    .moodCount_box{
        width:100%;
        height:100%;
    }
    .timing{
        width: 41px;
        display: block;
        float: left;
    }
    .subMarTop{
        margin-top: 5px;
    }
    .noSubscribe{
        font-size: 15px;
        color: #333;
        margin-top: 50%;
        text-align: center;
    }
</style>


