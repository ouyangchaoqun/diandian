<template id="testQuestions">
    <div class="testQuestions">
        <div class="weui-progress testQuestions_top">
            <div class="weui-progress__bar">
                <div class="weui-progress__inner-bar js_progress" style="width: 50%"></div>
            </div>
        </div>
        <div class="testQuestions_process">1/10</div>
        <div class="question_content">生活压力越来越重，都市人得忧郁症越来越普遍，你忧郁了吗？请依据一周以来身体，情绪的感觉选择与自己最相符的一项。</div>
        <ul class="question_option">
            <li>
                <span class="optionItem">A</span><span>会，怕失望，怕付出和得到不成正比</span>

            </li>
            <li><span class="optionItem">B</span><span>不会，时间是必然要付出的</span></li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    var testQuestions = {
        template: '#testQuestions'
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
    .testQuestions{
        background: #fff;
    }
    .testQuestions_top{
        padding:30px 20px 12px 20px;
    }
    .testQuestions_process{
        text-align: center;
        color: #666;
        font-size: 14px;
        line-height: 1;
    }
    .question_content{
       padding: 48px 35px 40px 19px;
        color: #333;
        font-size: 15px;
        line-height: 24px;

    }
    .question_option{
        color: #666;
        font-size: 13px;
    }
    .question_option li{
        padding:15px 20px;
        border-bottom: 1px solid #eee;
    }
    .question_option li:last-of-type{
        border-bottom: 0;
    }
    .optionItem{
        margin-right: 15px;
    }
</style>