<template id="record">
    <div class="record">
        <div v-title>每日打卡</div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <div class="recordBox_bg" @click="goIndex()">
        </div>
        <div class="record_box">
            <div class="date_info">
                <div class="date">
                    <div class="day">19</div>
                    <div class="date_right">
                        <p>星期四</p>
                        <p>2017年7月</p>
                    </div>
                </div>
                <div class="weather">
                    <div class="weather_pic"><img src="../images/arder1.png"/></div>
                    <div class="weather_info">
                        <p>晴转多云</p>
                        <p>28-32</p>
                    </div>
                </div>
            </div>
            <div class="notes">
                <div class="go_record record_left">
                    <div class="img"><img src=""/></div>
                    <div class="morning">早起打卡</div>
                </div>
                <div class="go_record record_mid">
                    <div class="img"><img src=""/></div>
                    <div class="any">心情记录</div>
                </div>
                <div class="go_record record_right">
                    <div class="img"><img src=""/></div>
                    <div class="night">早睡打卡</div>
                </div>
            </div>
            <div class="record_tx1">21天可以养成一个好习惯</div>
            <div class="record_tx2">21天的坚持可以让你遇到一个更好的自己</div>
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
            return {}
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
        height: 63%;
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
        font-size: 40px;
        margin-left: 7%;
    }

    .date_right {
        font-size: 12px;
        color: #666666;
        position: absolute;
        left: 17%;
        top: 50%;
        margin-top: -19px;
    }

    .weather {
        float: right;
        width: 30%;
        font-size: 12px;
        text-align: right;
    }

    .weather_pic {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 75%;
        top: 50%;
        margin-top: -15px;
    }

    .weather_pic img {
        width: 100%;
    }

    .weather_info {
        position: absolute;
        width: 50px;
        top: 50%;
        left: 84%;
        text-align: center;
        margin-top: -19px;
    }
    .notes{
        margin: 25px 25px 0px 25px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
    }
    .go_record{
        width: 87.5px;
        height: 115px;
        background: #fff;
        border-radius: 5px;
    }
    .go_record .img{
        height: 95px;
        background-color: #0ba98e;
        width: 87.5px;
    }
     .record_left{
        float: left;
    }
     .morning{
         background: #b8baca;
         color: #fff;
         border-radius: 0px 0px 5px 5px;
         font-size: 12px;
     }
     .any{
         color: #fff;
         background-color: #ecb47a;
         border-radius: 0px 0px 5px 5px;
         font-size: 12px;
     }
     .night{
         background: #b8baca;
         color: #fff;
         border-radius: 0px 0px 5px 5px;
         font-size: 12px;
     }
    .record_mid{
        margin: 0 auto;
    }
    .record_right{
        float: right;
    }
    .record_tx1{
        margin-top: 13.5%;
        font-size: 12px;
        text-align: center;
        color: #b9bdc0;
    }
    .record_tx2{
        margin-top: 2%;
        font-size: 12px;
        text-align: center;
        color:#b9bdc0;
    }

</style>