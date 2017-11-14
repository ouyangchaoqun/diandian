<template>
    <div class="about_us_box">
        <h1>什么是“好一点”</h1>
        <h3>好一点是一款</h3>
        <h2>集<b>个人健康，心情管理，专家咨询</b>等</h2>
        <h3>为一体的小工具</h3>
        <div class="ewm">
            <img src="../images/about_us_ewm.png">

        </div>
        <div class="tip">(长按二维码 关注好一点)</div>
        <div class="about">
            <div class="title">“好一点”有什么</div>
            <div class="content">
                <b>新生活：</b><span>记录打卡、心情说说、心理测试、星座运势...</span><br>
                <b>加加油：</b><span>情感困惑、人际关系、工作事业、专家咨询...</span>
            </div>
        </div>
        <div class="bgr"></div>
    </div>
</template>
<script>

    export default {
        data() {
            return {

            }
        },
        mounted:function () {


            xqzs.wx.shareConfig.me.link= web.BASE_PATH + '#/me/aboutUs';
            xqzs.wx.setConfig(this,false,xqzs.wx.shareConfig.me);

        }
    }


</script>
<style>
    .about_us_box{
        background:-webkit-gradient(linear, 0 0, 0 bottom, from(#FDAB38), to(#F79511)); color:#754A2F; height: 100%; width: 100%;
        overflow-y: hidden !important;
        overflow-x: hidden !important;
    }
    .about_us_box h1, .about_us_box h2, .about_us_box h3,.about_us_box .tip{ text-align: center; line-height: 1}
    .about_us_box h1{ font-size: 1.1rem; margin-top: 2.029411764705882rem; margin-bottom:1.205882352941176rem; }
    .about_us_box h3{ font-size:0.7647058823529412rem; font-weight: normal}
    .about_us_box h2{ font-size: 0.7647058823529412rem; font-weight: normal; margin-top: 0.5588rem;margin-bottom: 0.5588rem;}
    .about_us_box .ewm{   width:97%;  margin: 0 auto; margin-top: 1.058823529411765rem; }
    .about_us_box .ewm img{  width: 100%}
    .about_us_box .tip{ font-size: 0.72rem;}


    .about_us_box .about{ background: rgba(255,255,255,0.8); position: absolute; bottom:1.2rem; z-index: 2; left:0.9rem; right:0.9rem; border-radius: 0.6rem; border: 1px solid #C9C7C6}
    .about_us_box .title{ font-size:1.3rem; ; color:#754A2F; text-align: center; font-weight: bold; padding-top: 1.5rem; padding-bottom:0.1rem;line-height: 1}
    .about_us_box .bgr{ height: 100rem;width: 100rem; border-radius: 50%;left:50%; margin-left: -50rem; position: absolute;  bottom:-92.8rem;   background: #FFFAF4}
    .about_us_box .content{ color:#754A2F; font-size: 0.7647058823529412rem;    text-align: center; padding-bottom: 0.76rem; line-height: 1.8rem; padding-top: 0.8rem;}
    .about_us_box .content b{ font-size: 0.8235294117647059rem;}



</style>