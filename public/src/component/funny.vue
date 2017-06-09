<template id="funny">
    <div class="funny_box">
        <ul class="funny_ul">
            <li class="funny_active">开心高兴</li>
            <li>伤心委屈</li>
            <li>哭泣泪崩</li>
            <li>流汗无语</li>
            <li>生气愤怒</li>
            <li>害怕恐惧</li>
            <li>无聊发呆</li>
            <li>心烦纠结</li>
            <li>感动表情</li>
            <li>调皮可爱</li>
            <li>惊讶震惊</li>
            <li>希望期待</li>
            
        </ul>
        <div class="funny_exp">
            <div class="exp_active">
                <h3>开心高兴</h3>
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
            </div>
            <div>
                <h3>伤心委屈</h3>
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
                <img src="../images/funny1.png" alt="">
            </div>
            <div>
                <h3>哭泣泪崩</h3>

            </div>
            <div>
                <h3>流汗无语</h3>

            </div>
            <div>
                <h3>生气愤怒</h3>

            </div>
            <div>
                <h3>害怕恐惧</h3>

            </div>
            <div>
                <h3>无聊发呆</h3>

            </div>
            <div>
                <h3>心烦纠结</h3>

            </div>
            <div>
                <h3>感动表情</h3>

            </div>
            <div>
                <h3>调皮可爱</h3>

            </div>
            <div>
                <h3>惊讶震惊</h3>

            </div>
            <div>
                <h3>希望期待</h3>

            </div>
        </div>

    </div>
</template>
<style>
    .funny_ul{
        height:100%;
        overflow-y: scroll;
        width:23.4666%;
        background: #eeeeee;
    }
    .funny_exp img{
        display: block;
        width:27.8745644%;
        height:27.8745644%;
        float: left;
        margin-right:4.181184%;
        margin-bottom: 10px;
    }
    .funny_exp div{
        margin-left:4.181184%;
        display: none;
    }
    .funny_box{
        height:100%;
        background: #ffffff;
    }
    .funny_ul li{
        font-size: 15px;
        color: #999999;
        height:44px;
        line-height: 44px;
        background: #eeeeee;
        text-align: center;
        border-left:3px solid #eeeeee;
        position: relative;
    }
    .funny_ul .funny_active{
        border-left:3px solid #1cac1b;
        background: #ffffff;
        color: #1cac1b;
    }
    .funny_exp{
        position: absolute;
        width:75.53333%;
        top:0;
        right:-5px;
        overflow-y: scroll;
        padding-top: 10px;
        height:600px;
    }
    .funny_exp .exp_active{
        display: block;
    }
</style>
<script type="es6">

    let funny = {
        template: '#funny'
    };

    export default {
        props: ['moodvalue'],
        data() {
            return {}
        },
        mothods: {
            getTypes: function () {
                this.$http.get(web.API_PATH + 'funny/query/types').then(function (bt) {
                    console.info(bt);
                })
            }
        },
        mounted: function () {
            $('.funny_ul li').click(function () {
                $('.funny_ul li').removeClass('funny_active')
                $(this).addClass('funny_active')
                console.log($(this).index())
                var active_index = $(this).index();
                $('.funny_exp div').removeClass('exp_active')
                $('.funny_exp div').eq(active_index).addClass('exp_active')
            });
        },
        watch: {
            moodvalue: function (v) {
                console.info(this)
                //this.getTypes();
            }
        }
    }
</script>
