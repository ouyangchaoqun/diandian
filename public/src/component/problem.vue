<template id="problem">
    <div class="problem_box">
        <div v-title>常见问题</div>
        <div class="problem">
            <span class="protit">1.为何要用心情指数?</span>
            <p class="protex">日子有大有小，心情冷暖自知!心情指数为你随时随地记录每一刻的心情，通过心情指数的变化趋势和其背后的故事,让你更了解自己的内心世界</p>
        </div>
        <div class="problem">
            <span class="protit">2.我可以事后做记录吗?</span>
            <p class="protex">不可以，心情指数只为你记录此刻的心情，不管是哪一刻的故事，此刻的心情和心情才是我们需关注和倾心的</p>
        </div>
        <div class="problem">
            <span class="protit">3.如何看到我的心情指数统计情况?</span>
            <p class="protex">我们会在每周一，每月1号和新年元旦的时间，给大家送上周或上月或去年的心情指数统计分析</p>
        </div>
    </div>
</template>
<style>
    .problem_box{
        height:100%;
        background: #ffffff !important;
    }
    .problem{
        padding:20px 15px 0 15px;
    }
    .protit{
        color:#333333;
        font-size: 16px;
    }
    .protex{
        color:#666666;
        font-size: 14px;
        margin-top:5px;
    }
</style>
<script type="text/javascript">

    var problem={
        template:'#problem'
    }
    export default {
        mounted:function () {
            xqzs.wx.setConfig(this);
        }
    }
</script>


