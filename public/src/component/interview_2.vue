<template id="interview_2">
    <div class="interview_box interview_box2 ">
        <div class="inter_pic">
            <div class="inter_tj">
                <p class="inter_left">这个工具不错哦</p>
                <p class="inter_right">推荐给你!</p>
            </div>
            <div class="user_info">
            <div class="inter_face"><img src="../images/arder.png"/></div>
            <div class="inter_name ">CCC</div>
            <div class="inter_text ">向/您/推/荐</div>
            </div>
            <div class="inter_xq">心情指数</div>
            <div class="inter_an">
                <div class="inter_zw"><img src="../images/interview/2.png"/>
                    <p>长按识别二维码</p>
                </div>
                <div class="inter_code"><img src="../images/interview/二维码.png"/></div>
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
            var w1 = $(".inter_code").width()

            $(".inter_zw").width(w1)
        }


    }


</script>
<style>
    .interview_box {
        background-color: #ffffff;
    }

    .inter_pic {
        margin-top: 40.5px;
        margin-left: auto;
        margin-right: auto;
        background: url("../images/interview/2.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 4px 5px 8px;

    }

    .inter_prompt{
        margin-top:3%;
    }
    .inter_btn{
        margin: 0px 5%;
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