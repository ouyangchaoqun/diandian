<template id="interview_1">
    <div class="interview_box interview_box11">
        <div class="inter_pic ">
            <div class="inter_face"><img src="../images/arder.png"/></div>
            <div class="inter_name ">CCC</div>
            <div class="inter_text ">向 /您/ 推/ 荐</div>
            <div class="inter_xq">心情指数</div>
            <div class="inter_an">
                <div class="inter_code"><img src="../images/interview/二维码.png"/></div>
                <div class="inter_zw"><img src="../images/interview/11.png"/>
                    <p>长按识别二维码</p>
                    </div>
                </div>
            <div class="inter_tj">
                <p class="inter_left">这个工具很不错</p>
                <p class="inter_right">推荐给你哦!</p>
            </div>
            </div>
            <div class="inter_prompt">
                <div class="inter_btn weui-btn weui-btn_primary">重新生成邀请卡</div>
                <div class="inter_hint">
                    <h1>邀请卡操作提示</h1>
                    <p>1. 长按保存图片，发送给微信好友或分享至朋友圈</p>
                    <p>2. 或点击右上角分享当前专属邀请页给好友或分享至朋友圈</p>
                    <p>3. 点击「重新生成」可更新邀请卡</p>
                </div>
            </div>
        </div>
</template>
<script>


    var interview_1 = {
        template: '#interview_1'
    };


    export default {

        data() {
            return {}
        },
        mounted: function () {
            var w = $(".inter_pic").width()

            var h = 860 * w / 540;
            $(".inter_pic").height(h);
            var y=$(".interview_box11  .inter_xq").width()
         //   $(".interview_box11  .inter_xq").height(y)


        }


    }


</script>
<style>

    .interview_box {
        background-color: #ffffff;
    }

    .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/1.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 4px 5px 8px  ;

    }
    .inter_face {
        border-radius: 50%;
        width: 15%;
        margin: 0 auto;
        padding-top: 14%;
        font-size: 0;
    }

    .inter_face img {
        width: 100%;
        border: #ffffff 4px solid;
        border-radius:50%;
        box-shadow: #ffd3f4 -2px 0px 8px  ;
    }

    .inter_name {
        font-size: 0.705rem;
        color: #7880a2;
        text-align: center;
        margin-top: 5%;
    }

    .inter_text {
        font-size: 0.645rem;
        color: #7880a2;
        text-align: center;
        margin-top: 5%;
    }

    .inter_xq {
        color: #7880a2;
        text-align: center;
        margin-top: 20.5%;
        font-size: 0.88rem;
    }

    .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        top: 61.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .inter_code {
        float: left;
        width: 50%;
        text-align: right;
    }

    .inter_code img {
        width: 57.09%;
    }

    .inter_zw {
        float: right;
        text-align: left;
        width: 50%;
    }

    .inter_zw img {
        width: 25%;
        margin:3% 21% 0 21%;
    }
    .inter_zw p{
        color: #7880a2 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
    }
    .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        bottom: 5%;
        left: 50%;
        margin-left: -24.8%;
    }
    .inter_tj p{
        font-style:oblique;
        color: #d173af ;
        font-size: 0.65rem;
    }
    .inter_right{
        text-align: right;
        margin-right: 20%;
    }
    .inter_left{
        text-align: left;
        margin-left: 10%;
    }
    .inter_prompt{
        margin-top:4%;
    }
    .inter_btn{
        margin: 0px 5%;
        font-size: 15px;
    }
    .inter_hint{
        margin: 0px 5%;
    }
    .inter_hint h1{
        font-size: 15px;
        margin: 3.24% 0;
    }
    .inter_hint p{
        font-size:12px;
        color: #666666;

    }

    .interview_box2 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/2.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box2 .inter_face {
        border-radius: 50%;
        width: 18.82%;
        margin-left: 7.6%;
        padding-top: 27.6%;
        font-size: 0;
    }

    .interview_box2 .inter_face img {
        width: 100%;
        border: 0px ;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .interview_box2 .inter_name {
        font-size: 12px;
        color: #333333;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 19.2%;
    }

    .interview_box2 .inter_text {
        font-size: 11px;
        color: #333333;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top:24%;
        margin: 0;
    }

    .interview_box2 .inter_xq {
        color: #333333 ;
        text-align: center;
        margin-top: 28%;
        font-size: 0.88rem;
        font-weight: bold;
        font-family: "PingFangSC-Medium";
    }

    .interview_box2 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        top: 61.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box2 .inter_code {
        width: 100%;
        text-align: center;
        margin-top: 47%;
    }

    .interview_box2 .inter_code img {
        width: 28.545%;
    }

    .interview_box2 .inter_zw {
        text-align: center;
        width: 100%;
        position: absolute;
        top:13%;
    }

    .interview_box2 .inter_zw img {
        width: 23.1%;
        margin:3% 21% 0 21%;
    }
    .interview_box2 .inter_zw p{
        color: #7880a2 ;
        font-size: 0.3rem;
        font-weight: bold;
        margin-top: -1%;
        margin-left: -1%;
    }
    .interview_box2 .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        top: 2.5%;
        left: 50%;

    }
    .interview_box2 .inter_tj p{
        font-style:oblique;
        line-height: 1.5;
        color: #000000 ;
        font-size: 0.588rem;
    }
    .interview_box2 .inter_right{
        text-align: right;
        margin-right: 10%;
    }
    .interview_box2 .inter_left{
        text-align: left;
        margin-left: 20%;
    }
    .interview_box3 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/3.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box3 .inter_face {
        border-radius: 50%;
        width: 18%;
        margin: 0 auto;
        padding-top: 15%;
        font-size: 0;

    }

    .interview_box3.inter_face img {
        width: 100%;
        border-radius:50%;
        box-shadow: #333333 -2px 0px 8px  ;
        box-shadow: #333333 2px 0px 8px  ;
        border: 0px ;

    }

    .interview_box3 .inter_name {
        font-size: 12px;
        color: #333333;
        height: 7px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box3 .inter_text {
        font-size: 11px;
        color: #7d7c7c;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box3  .inter_xq {
        color: #333333;
        text-align: center;
        margin-top: 18%;
        font-size: 0.88rem;
    }

    .interview_box3 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 22%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box3 .inter_code {
        float: left;
        width: 50%;
        text-align: right;
    }

    .interview_box3 .inter_code img {
        width: 57.09%;
    }

    .interview_box3 .inter_zw {
        float: right;
        text-align: left;
        width: 50%;
    }

    .interview_box3 .inter_zw img {
        width: 34%;
        margin:3% 21% 0 15%;
    }
    .interview_box3 .inter_zw p{
        color: #666666 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
        margin-top: -4%;
    }
    .interview_box3 .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 38%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box3 .inter_tj p{
        font-style:oblique;
    }
    .interview_box3 .inter_right{
        float: right;
        width: 53%;
        text-align: left;
        color: #333333;
        font-size: 0.8rem;
    }
    .interview_box3 .inter_left{
        width: 30%;
        text-align: right;
        float: left;
        color: #7d7c7c ;
        line-height: 1.3rem;
        margin-left: -5%;
    }
    .interview_box4 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/4.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box4 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin: 0 auto;
        padding-top: 53.5%;
        font-size: 0;
    }

    .interview_box4 .inter_face img {
        width: 100%;
        border: 0;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .interview_box4 .inter_name {
        font-size: 12px;
        color: #2e4d3c;
        height: 7px;
        text-align: center;
        margin-top: 2%;
    }

    .interview_box4 .inter_text {
        font-size: 11px;
        color: #2e4d3c;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }
    .interview_box4 .inter_xq{ text-indent: -9999px}
    .interview_box4 .inter_xq:after{ content: " " ; display: block; height: 8.5%; width: 36%;background: url("../images/interview/xqzs.png") no-repeat;position: absolute;
        text-align: center;
        margin-left: -18%;
        left: 50%;
        margin-top: -10%;
        background-size: 100%;}
    .interview_box4 .inter_xq {
        color: #2e4d3c;
        text-align: center;
        margin-top: 10%;
        font-size: 1.2rem;
    }

    .interview_box4 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box4 .inter_code {
        float: left;
        width: 49%;
        text-align: right;
    }

    .interview_box4 .inter_code img {
        width: 57.09%;
    }

    .interview_box4 .inter_zw {
        float: right;
        text-align: left;
        width: 47%;
    }

    .interview_box4 .inter_zw img {
        width: 34%;
        margin:3% 21% 0 21%;
    }
    .interview_box4 .inter_zw p{
        color: #333333 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
    }
    .interview_box4 .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        bottom: 6%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box4 .inter_tj p{
        font-style:oblique;


    }
    .interview_box4 .inter_right{
        float: right;
        width: 50%;
        text-align: left;
        color: #333333;
        margin-right:-10%;
        font-size: 0.64rem;

    }
    .interview_box4 .inter_left{
        width: 60%;
        text-align: right;
        float: left;
        color: #333333 ;
        margin-left: -5%;
        font-size:0.588rem;

    }

    .interview_box5 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/5.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 08px  ;

    }
    .interview_box5 .inter_face {
        width: 16%;
        margin: 0 auto;
        padding-top: 44%;
        font-size: 0;
    }

    .interview_box5 .inter_face img {
        width: 100%;
        border: 0;
        border-radius:50%;
        box-shadow: #ffd3f4 -0px 0px 0px  ;
    }

    .interview_box5 .inter_name {
        font-size: 0.70rem;
        color: #0ba98e;
        height: 7px;
        text-align: center;
        margin-top: 1.5%;
    }

    .interview_box5 .inter_text {
        font-size: 0.647rem;
        color: #0ba98e;
        height: 11px;
        font-weight: bold;
        text-align: center;
        margin-top: 4%;
    }

    .interview_box5 .inter_xq {
        color: #0ba98e ;
        text-align: center;
        margin-top: 16.4%;
        font-size: 0.88rem;
    }

    .interview_box5 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        top: 81.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box5 .inter_code {
        float: left;
        width: 50%;
        text-align: right;
    }

    .interview_box5 .inter_code img {
        width: 57.09%;
    }

    .interview_box5 .inter_zw {
        float: right;
        text-align: left;
        width: 50%;
    }

    .interview_box5 .inter_zw img {
        width: 33%;
        margin:2% 20% 0 20%;
    }
    .interview_box5 .inter_zw p{
        color: #666666 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
        line-height:1;
    }
    .interview_box5 .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        bottom: 23%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box5.inter_tj p{
        color: #515050 ;

    }
    .interview_box5 .inter_right{
        text-align: right;
        margin-right:3%;
        font-size: 0.64rem;
    }
    .interview_box5 .inter_left{
        text-align: left;
        margin-left: 0%;
        font-size: 0.64rem;
        margin-bottom: -6%;
    }


    .interview_box6 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/6.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box6 .inter_face {
        border-radius: 50%;
        width: 18%;
        margin: 0 auto;
        padding-top: 20.5%;
        font-size: 0;

    }

    .interview_box6 .inter_face img {
        width: 100%;
        border-radius:50%;
        box-shadow: #333333 -2px 0px 8px  ;
        box-shadow: #333333 2px 0px 8px  ;
        border: 3px solid #ffffff ;

    }

    .interview_box6 .inter_name {
        font-size: 12px;
        color: #ffffff;
        height: 7px;
        text-align: center;
        margin-top: 1%;
    }

    .interview_box6 .inter_text {
        font-size: 11px;
        color: #ffffff;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box6  .inter_xq {
        color: #ffffff;
        text-align: center;
        margin-top: 19.5%;
        font-size: 0.88rem;
    }

    .interview_box6 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 9%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box6 .inter_code {
        float: left;
        width: 47%;
        text-align: right;
        margin-right: 1%;
    }

    .interview_box6 .inter_code img {
        width: 57.09%;
    }

    .interview_box6  .inter_zw {
        float: right;
        text-align: left;
        width: 50%;

    }

    .interview_box6 .inter_zw img {
        width: 33%;
        margin:0% 20% 0 15%;
    }
    .interview_box6 .inter_zw p{
        color: #7880a2 ;
        font-size: 0.47rem;
        font-weight: normal;
        margin-left: 4%;
    }
    .interview_box6  .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 13%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box6  .inter_tj p{
        font-style:oblique;
    }
    .interview_box6 .inter_right{
        float: right;
        width: 53%;
        text-align: left;
        color: #7980a2 ;
        font-size: 0.8rem;
    }
    .interview_box6 .inter_left{
        width: 32%;
        text-align: right;
        float: left;
        color: #7980a2  ;
        line-height: 1.6rem;
        margin-left: -5%;
    }


    .interview_box7 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/7.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box7 .inter_face {
        border-radius: 50%;
        width: 16%;
        margin: 0 auto;
        padding-top: 24.8%;
        margin-left: 42.9%;
        font-size: 0;

    }

    .interview_box7 .inter_face img {
        width: 100%;
        border-radius:50%;
        box-shadow: #333333 -0px 0px 0px  ;
        box-shadow: #333333 0px 0px 0px  ;
        border: 0;

    }

    .interview_box7 .inter_name {
        font-size: 12px;
        color: #ffffff;
        height: 7px;
        text-align: center;
        margin-top: 6%;
    }

    .interview_box7 .inter_text {
        font-size: 11px;
        color: #ffffff;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box7  .inter_xq {
        color: #ffffff;
        text-align: center;
        margin-top: 15.5%;
        font-size: 0.70rem;
    }

    .interview_box7 .inter_an {
        width: 86%;
        overflow: hidden;
        margin-top: 26%;
        position: absolute;
        left: 50%;
        margin-left: -43%;
    }

    .interview_box7 .inter_code {
        float: left;
        width: 49%;
        text-align: right;
        margin-right: 1%;
    }

    .interview_box7  .inter_code img {
        width: 66%;
    }

    .interview_box7  .inter_zw {
        float: right;
        text-align: left;
        width: 50%;

    }

    .interview_box7 .inter_zw img {
        width: 43%;
        margin:4% 20% 0 10%;
    }
    .interview_box7  .inter_zw p{
        color: #7880a2 ;
        font-size: 0.47rem;
        font-weight: normal;
        margin-left: 4%;
        margin-top: -3.1%;
    }
    .interview_box7 .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 0%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box7 .inter_tj p{
        font-style:oblique;
    }
    .interview_box7  .inter_right{
        float: right;
        width: 53%;
        text-align: left;
        color: #7980a2 ;
        font-size: 0.8rem;
    }
    .interview_box7  .inter_left{
        width: 31.5%;
        text-align: right;
        float: left;
        color: #7980a2  ;
        line-height: 1.3rem;
        margin-left: -5%;
    }

    .interview_box8 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/8.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box8 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin-left: 9.6%;
        padding-top: 4.6%;
        font-size: 0;
    }

    .interview_box8 .inter_face img {
        width: 100%;
        border: 0px ;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .interview_box8 .inter_name {
        font-size: 0.705rem;
        color: #333333;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 4.1%;
    }

    .interview_box8 .inter_text {
        font-size: 0.647rem;
        color: #333333;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top:8.1%;
        margin: 0;
    }

    .interview_box8  .inter_xq {

        text-align: center;
        margin-top: 24%;
        text-indent: -9999px;
        margin-left: 27%;
        width: 46%;
        height: 10%;
        background: url("../images/interview/xqzs1.png") no-repeat;
        background-size: 100%;
    }

    .interview_box8 .inter_an {
        width: 86%;
        overflow: hidden;
        margin-top: 18%;
        position: absolute;
        left: 50%;
        margin-left: -43%;
    }

    .interview_box8 .inter_code {
        float: left;
        width: 49%;
        text-align: right;
        margin-right: 1%;
    }

    .interview_box8  .inter_code img {
        width: 66%;
    }

    .interview_box8  .inter_zw {
        float: right;
        text-align: left;
        width: 50%;

    }

    .interview_box8 .inter_zw img {
        width: 43%;
        margin:4% 20% 0 15%;
    }
    .interview_box8  .inter_zw p{
        color: #999999 ;
        font-size: 0.47rem;
        font-weight: normal;
        margin-left: 0%;
        margin-top: -3.1%;

    }
    .interview_box8 .inter_tj {
        width: 52%;
        position: absolute;
        bottom: 58%;
        left: 50%;
        height: 5%;
        margin-left: -12.8%;
    }


    .interview_box8 .inter_tj p{
        font-style:oblique;
        color: #d9d7d7 ;
    }
    .interview_box8 .inter_right{
        float: right;
        width: 53%;
        text-align: left;
        font-size: 0.8rem;
        display: none;
    }
    .interview_box8 .inter_left{
        width: 31%;
        text-align: right;
        float: left;
        line-height: 1.3rem;
        margin-left: -5%;
        display: none;
    }
    .interview_box9 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/9.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box9 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin-left: 9%;
        padding-top: 18%;
        font-size: 0;
    }

    .interview_box9 .inter_face img {
        width: 100%;
        border: 0px ;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .interview_box9 .inter_name {
        font-size: 0.705rem;
        color: #666666;
        margin: 0;
        position: absolute;
        left: 29.3%;
        top: 12.6%;
        font-weight: normal;
    }

    .interview_box9 .inter_text {
        font-size: 0.647rem;
        color: #666666;
        height: 11px;
        position: absolute;
        left: 29.3%;
        top:19.1%;
        margin: 0;
        font-weight: normal;
    }


    .interview_box9  .inter_xq {
        color: #666666;
        position: absolute;
        left:29.3%;
        top:12.5%;
        font-size: 0.705rem;
        font-family: normal;
        font-weight: normal;
    }
    .interview_box9 .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 64%;
        left: 50%;
        margin-left:-19.5%;
    }
    .interview_box9 .inter_tj p{
        font-style:oblique;
        color: #666666 ;
        font-size: 0.647rem;
    }
    .interview_box9 .inter_right{
        float: right;
        width: 53%;
        text-align: left;

    }
    .interview_box9 .inter_left{
        width: 31%;
        text-align: right;
        float: left;
        margin-left: -5%;
    }
    .interview_box9 .inter_an {
        width: 78%;
        overflow: hidden;
        top:35.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box9 .inter_code {
        width: 100%;
        text-align: center;
        margin-top: 47%;
    }

    .interview_box9 .inter_code img {
        width: 29.545%;
    }

    .interview_box9 .inter_zw {
        text-align: center;
        width: 100%;
        position: absolute;
        top:13%;
    }

    .interview_box9 .inter_zw img {
        width: 23.1%;
        margin:3% 21% 0 21%;
    }
    .interview_box9 .inter_zw p{
        color: #666666 ;
        font-size: 0.52rem;
        font-weight: bold;
        margin-top: -1%;
        margin-left: -1%;
    }
    .interview_box11 {
        background:url("../images/interview/11.jpg") no-repeat;
        background-size: cover;
        background-position: center;
    }
    .interview_box11 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        width: 78%;
        background: none;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .interview_box11 .inter_face {
        border-radius: 50%;
        width: 15%;
        margin-left: 9.6%;
        padding-top: 25.8%;
        font-size: 0;
    }

    .interview_box11 .inter_face img {
        width: 100%;
        border: 0px ;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .interview_box11 .inter_name {
        font-size: 0.705rem;
        color: #ffffff;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 27.3%;
        top: 17.8%;
    }

    .interview_box11 .inter_text {
        font-size: 0.647rem;
        color: #ffffff;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 27.3%;
        top:21.8%;
        margin: 0;
    }

    .interview_box11  .inter_xq {
        text-align: center;
        margin-top: 17%;
        margin-left: 29.2%;
        width: 31.7%;
        font-size: 1.05rem;
        padding: 12.2% 1%;
        border-radius: 50%;
        color: #9ed758;
        border: 10px solid #9ed758 ;
    }

    .interview_box11 .inter_an {
        width: 86%;
        overflow: hidden;
        margin-top: 37%;
        position: absolute;
        left: 50%;
        margin-left: -43%;
    }

    .interview_box11 .inter_code {
        float: left;
        width: 42%;
        text-align: right;
        margin-right: 1%;
    }

    .interview_box11  .inter_code img {
        width: 65%;
    }

    .interview_box11 .inter_zw {
        float: right;
        text-align: left;
        width: 46%;

    }

    .interview_box11 .inter_zw img {
        width: 31%;
        margin:4% 20% 0 10%;
    }
    .interview_box11  .inter_zw p{
        color: #666666 ;
        font-size: 0.47rem;
        font-weight: normal;
        margin-left: 0%;
        margin-top: -3.1%;

    }
    .interview_box11  .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 28%;
        left: 50%;
        margin-left: -24.8%;
    }
    .interview_box11  .inter_tj p{
        color: #999999;
        font-size: 0.647rem;
        font-family: "PingFangSC-Regular";
        font-style: normal;
    }
    .interview_box11 .inter_right{
        float: right;
        width: 53%;
        text-align: left;
    }
    .interview_box11 .inter_left{
        width: 31%;
        text-align: right;
        float: left;
        margin-left: -5%;
    }
    .interview_box11 .inter_btn{
        margin: 0px 5%;
        font-size: 15px;
        position: absolute;
        bottom: 5%;
        width: 90%;
        background-color: #9ed758   ;
    }
    .interview_box11 .inter_hint{
        margin: 0px 5%;
        color: #ffffff ;
    }
    .interview_box11 .inter_hint h1{
        font-size: 15px;
        margin: 3.24% 0;
        font-weight: 500;
    }
    .interview_box11 .inter_hint p{
        font-size:12px;
        color: #ffffff;

    }
    .interview_box11 .inter_prompt{
        margin-top: 6%;
    }
</style>