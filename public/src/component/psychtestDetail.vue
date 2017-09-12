<template id="psychtestDetail">
    <div class="psychtestDetail">
       <h2 class="psychtestDetail_title">测测你的忧郁感程度？</h2>
        <div class="psychtestDetail_count">555人测过</div>
        <img src="../images/psyDetail.jpg" alt="">
        <div class="psychtestDetail_content">生活压力越来越重，都市人得忧郁症越来越普遍，你忧郁了吗？请依据一周以来身体，情绪的感觉选择与自己最相符的一项。</div>
        <div class="psychtestDetail_Price"><span class="nowPrice">￥9.94</span><span class="oldPrice">￥19.9</span></div>
        <div class="psychtestDetail_item">
            <div>20道精选问题</div>
            <div>555人已经测试</div>
        </div>
        <div class="psychtestDetail_btn">立即测试</div>
    </div>
</template>
<script type="text/javascript">
    var psychtestDetail = {
        template: '#psychtestDetail'
    }
    export default {
        data() {
            return {

            }
        },
        mounted: function () {

        },
        methods: {

        }

    }
</script>
<style>
    .psychtestDetail{
        background: #fff;
        height:100%;
        position: relative;
    }
    .psychtestDetail_title{
        color:#333;
        font-size: 20px;
        line-height: 1;
        margin-top: 30px;
        margin-bottom: 15px;
        text-align: center;
    }
    .psychtestDetail_count{
        color: #666;
        font-size: 12px;
        line-height: 1;
        text-align: center;
    }
    .psychtestDetail img{
        width:345px;
        display: block;
        margin:15px auto;
    }
    .psychtestDetail_content{
        padding:0 15px;
        color: #333;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 35px;
    }
    .psychtestDetail_Price{
        text-align: center;
        line-height: 1;
        margin-bottom: 31px;
    }
    .nowPrice{
        color: #D55C03;
        font-size: 24px;
    }
    .oldPrice{
        color: #666;
        font-size: 15px;
        text-decoration: line-through;
    }
    .psychtestDetail_item{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        font-size: 12px;
        color: #666;
        padding-top: 13px;
        border-top: 1px solid #eee;
        line-height: 1;
    }
    .psychtestDetail_item div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .psychtestDetail_btn{
        height:43px;
        background: #1AAC19;
        color: #fff;
        font-size: 18px;
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 43px;
    }
</style>