<template id="testResult">
    <div class="testResult">
        <div class="testResult_top">
            测测你的忧郁感程度？
        </div>
        <div class="textResult_option">
            <div class="textResulth1"><img src="../images/textdg.png" alt="">测试结果</div>
            <div class="textResulth2">A.爱情恐惧指数30%</div>
        </div>
        <div class="textResult_des">
            <div class="textResulth1"><img src="../images/textsm.png" alt="">说明</div>
            <div class="textResult_main">生活压力越来越重，都市人得忧郁症越来越普遍，你忧郁了吗？请依据一周以来身体，情绪的感觉选择与自己最相符的一项。生活压力越来越重，都市人得忧郁症越来越普遍，你忧郁了吗？请依据一周以来身体，情绪的感觉选择与自己最相符的一项。</div>
        </div>
        <div class="weui-btn weui-btn_primary textResult_btn">重新测试</div>
    </div>
</template>
<script type="text/javascript">
    var testResult = {
        template: '#testResult'
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
   .testResult{
       background: #fff;
   }
    .testResult_top{
        height:3.71rem;
        line-height: 3.71rem;
        font-size: 1.0588rem;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-left:0.88235rem;
    }
    .textResult_option{
        padding:0.941rem 0 1.0588rem 0.88235rem;
        border-bottom: 1px solid #eee;
    }
    .testResult img{
        display: inline-block;
        height:0.88235rem;
        width:0.88235rem;
        margin-top: -1px;
        float: left;
        margin-right:0.588rem;
    }
    .textResulth1{
        color: #666;
        font-size: 0.765rem;
        line-height: 1;
        margin-bottom: 1rem;
    }
    .textResulth2{
        color: #333333;
        font-size: 1.0588rem;
        line-height: 1;
    }
    .textResult_des{
        padding:2.0588rem 0.88235rem 4.4rem 0.88235rem;
    }
    .textResult_main{
        color: #333;
        font-size: 0.8235rem;
        line-height: 1.4rem;
    }
    .textResult_btn{
        width:11rem;
    }
</style>