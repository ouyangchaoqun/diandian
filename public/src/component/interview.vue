<template id="interview_1">
    <div class="interview_box ">
        <div class="inter_pic inter_pic4 ">
            <div class="inter_face"><img src="../images/arder.png"/></div>
            <div class="inter_name ">CCC</div>
            <div class="inter_text ">向 /您/ 推/ 荐</div>
            <div class="inter_xq">心情指数</div>
            <div class="inter_an">
                <div class="inter_code"><img src="../images/interview/二维码.png"/></div>
                <div class="inter_zw"><img src="../images/interview/4.png"/>
                    <p>长按识别二维码</p>
                    </div>
                </div>
            <div class="inter_tj">
                <p class="inter_left">这个工具很不错,</p>
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
        font-size: 12px;
        color: #7880a2;
        height: 7px;
        text-align: center;
        margin-top: 5%;
    }

    .inter_text {
        font-size: 11px;
        color: #7880a2;
        height: 11px;
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

    .inter_pic2 {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/2.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .inter_pic2 .inter_face {
        border-radius: 50%;
        width: 18.82%;
        margin-left: 7.6%;
        padding-top: 27.6%;
        font-size: 0;
    }

    .inter_pic2 .inter_face img {
        width: 100%;
        border: 0px ;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .inter_pic2 .inter_name {
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

    .inter_pic2 .inter_text {
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

    .inter_pic2 .inter_xq {
        color: #333333 ;
        text-align: center;
        margin-top: 28%;
        font-size: 0.88rem;
        font-weight: bold;
        font-family: "PingFangSC-Medium";
    }

    .inter_pic2 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        top: 61.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .inter_pic2 .inter_code {
        width: 100%;
        text-align: center;
        margin-top: 47%;
    }

    .inter_pic2 .inter_code img {
        width: 28.545%;
    }

    .inter_pic2 .inter_zw {
        text-align: center;
        width: 100%;
        position: absolute;
        top:13%;
    }

    .inter_pic2 .inter_zw img {
        width: 17.545%;
        margin:3% 21% 0 21%;
    }
    .inter_pic2 .inter_zw p{
        color: #7880a2 ;
        font-size: 0.3rem;
        font-weight: bold;
        margin: 4%;
    }
    .inter_pic2 .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        top: 2.5%;
        left: 50%;

    }
    .inter_pic2 .inter_tj p{
        font-style:oblique;
        line-height: 1.8;
        color: #000000 ;
        font-size: 0.588rem;
    }
    .inter_pic2 .inter_right{
        text-align: right;
        margin-right: 10%;
    }
    .inter_pic2 .inter_left{
        text-align: left;
        margin-left: 20%;
    }
    .inter_pic3 {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/3.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .inter_pic3 .inter_face {
        border-radius: 50%;
        width: 18%;
        margin: 0 auto;
        padding-top: 15%;
        font-size: 0;

    }

    .inter_pic3 .inter_face img {
        width: 100%;
        border-radius:50%;
        box-shadow: #333333 -2px 0px 8px  ;
        box-shadow: #333333 2px 0px 8px  ;
        border: 0px ;

    }

    .inter_pic3 .inter_name {
        font-size: 12px;
        color: #333333;
        height: 7px;
        text-align: center;
        margin-top: 5%;
    }

    .inter_pic3 .inter_text {
        font-size: 11px;
        color: #7d7c7c;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .inter_pic3  .inter_xq {
        color: #333333;
        text-align: center;
        margin-top: 19.5%;
        font-size: 0.88rem;
    }

    .inter_pic3 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 22%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .inter_pic3 .inter_code {
        float: left;
        width: 50%;
        text-align: right;
    }

    .inter_pic3 .inter_code img {
        width: 57.09%;
    }

    .inter_pic3 .inter_zw {
        float: right;
        text-align: left;
        width: 50%;
        margin-top: 2%;
    }

    .inter_pic3 .inter_zw img {
        width: 25%;
        margin:3% 21% 0 21%;
    }
    .inter_pic3 .inter_zw p{
        color: #7880a2 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
    }
    .inter_pic3 .inter_tj{
        width: 100%;
        position: absolute;
        bottom: 38%;
        left: 50%;
        margin-left: -24.8%;
    }
    .inter_pic3 .inter_tj p{
        font-style:oblique;
    }
    .inter_pic3 .inter_right{
        float: right;
        width: 53%;
        text-align: left;
        color: #333333;
        font-size: 0.8rem;
    }
    .inter_pic3 .inter_left{
        width: 30%;
        text-align: right;
        float: left;
        color: #7d7c7c ;
        line-height: 1.3rem;
        margin-left: -5%;
    }
    .inter_pic4 {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/4.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px  ;

    }
    .inter_pic4 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin: 0 auto;
        padding-top: 53.5%;
        font-size: 0;
    }

    .inter_pic4 .inter_face img {
        width: 100%;
        border: 0;
        border-radius:50%;
        box-shadow: #ffd3f4 0px 0px 0px  ;
    }

    .inter_pic4 .inter_name {
        font-size: 12px;
        color: #2e4d3c;
        height: 7px;
        text-align: center;
        margin-top: 2%;
    }

    .inter_pic4 .inter_text {
        font-size: 11px;
        color: #2e4d3c;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }
    .inter_pic4 .inter_xq{ text-indent: -9999px}
    .inter_pic4 .inter_xq:after{ content: " " ; display: block; height: 8.5%; width: 36%;background: url("../images/interview/xqzs.png") no-repeat;position: absolute;
        text-align: center;
        margin-left: -18%;
        left: 50%;
        margin-top: -10%;
        background-size: 100%;}
    .inter_pic4 .inter_xq {
        color: #2e4d3c;
        text-align: center;
        margin-top: 10%;
        font-size: 1.2rem;
    }

    .inter_pic4 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .inter_pic4 .inter_code {
        float: left;
        width: 49%;
        text-align: right;
    }

    .inter_pic4 .inter_code img {
        width: 57.09%;
    }

    .inter_pic4 .inter_zw {
        float: right;
        text-align: left;
        width: 47%;
    }

    .inter_pic4 .inter_zw img {
        width: 34%;
        margin:3% 21% 0 21%;
    }
    .inter_pic4 .inter_zw p{
        color: #333333 ;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
    }
    .inter_pic4 .inter_tj{
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        bottom: 6%;
        left: 50%;
        margin-left: -24.8%;
    }
    .inter_pic4 .inter_tj p{
        font-style:oblique;
        font-size: 0.4rem;

    }
    .inter_pic4 .inter_right{
        float: right;
        width: 50%;
        text-align: left;
        color: #333333;
        margin-right:-10%;

    }
    .inter_pic4 .inter_left{
        width: 60%;
        text-align: right;
        float: left;
        color: #333333 ;
        margin-left: -5%;

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

</style>