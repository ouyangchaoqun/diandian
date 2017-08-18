<template id="birthday">
    <div class="birthday_box">
        <div class="top_info"></div>
        <div class="mid_counts">
            <div class="heart">
                <div class="over"></div>
                <div class="wave">
                    <div class="img1"></div>
                    <div class="img2"></div>
                </div>
            </div>
            <div class="step" v-for="step in steps">
                <span class="point_reach" :class="{reach:step.isReach}"></span>
                <span class="point_small"><i></i><i></i><i></i><i></i></span>
            </div>

        </div>
        <div class="clear"></div>
        <div class="tip">点赞送生日祝福</div>
        <div class="count">116</div>
        <div class="heart_a" >

        </div>
        <div class="heart_click_btn" @click="addHeart">

            <div class="btn">
                <div class="heart_btn"></div>
                <div class="text"></div>
            </div>

        </div>

    </div>
</template>
<style>
    .clear {
        clear: both
    }

    .birthday_box {
        background: #fbf6eb
    }

    .birthday_box .top_info {
        height: 17rem;
    }

    .birthday_box .mid_counts {
        width: max-content;
        position: relative;
        margin: 0 auto;
    }

    .birthday_box .mid_counts .step {
        height: 20px;
        width: auto;
        float: left;
        text-align: center;
    }

    .birthday_box .mid_counts .step .point_reach {
        display: block;
        height: 0.47058823rem;
        width: 0.47058823rem;
        border: 1px solid #836f63;
        border-radius: 50%;
        float: left;
    }

    .birthday_box .mid_counts .step .point_small {
        line-height: 1;
        float: left
    }

    .birthday_box .mid_counts .step .point_small i {
        float: left;
        background: #836f63;
        display: block;
        height: 0.14705882352rem;
        width: 0.14705882352rem;
        border-radius: 50%;
        margin: 0 0.18rem;
        line-height: 1;
        margin-top: 0.15rem;
    }

    .birthday_box .mid_counts .step {
    }

    .mid_counts:after {
        display: block;
        clear: both;
        content: " "
    }

    .birthday_box .mid_counts .step:last-child i {
        display: none
    }

    .heart {
        position: absolute;
        width: 3.6470588rem;
        height: 3.176470588rem;
        overflow: hidden;
        background: url(../../dist/birthday/heart_bg.png);
        background-size: 100% 100%;
        left: 50%;
        margin-left: -1.8235294rem;
        top: -1rem
    }

    .heart .over {
        background: url(../../dist/birthday/heart_over.png);
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0
    }

    .heart .wave {
        position: absolute;
        top: 100%;
        left: 0;
        height: 100%;
        width: 100%
    }

    .heart .wave .img1, .heart .wave .img2 {
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../dist/birthday/wave.png);
        height: 4.352941176470588rem;
        width: 78235.29411764706rem
    }

    .heart .wave .img2 {
        opacity: 0.5;
        animation: wave_move2 8200s infinite;
        -webkit-animation: wave_move2 8200s infinite;;
        margin-left: -100px;
    }

    .heart .wave .img1 {
        animation: wave_move 8000s infinite;
        -webkit-animation: wave_move 8000s infinite;
    }

    @keyframes wave_move {
        0% {
            transform: translate3d(-50%, 0, 0);
            -webkit-transform: translate3d(-50%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }

    }

    @keyframes wave_move2 {
        0% {
            transform: translate3d(-50%, 0, 0);
            -webkit-transform: translate3d(-50%, 0, 0);
        }
        100% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }
    }




    .heart_a div{ position: absolute;   background: url(../../dist/birthday/click_heart.png) no-repeat; height:1.294117647058824rem ; width:1.294117647058824rem ; background-size: 100% 100% }
    .heart_a .a_1{
        animation: heart_move1 2s linear ;
        -webkit-animation: heart_move1 2s  linear;
        animation-fill-mode:forwards;
        height: 1rem; width:1rem
    }

    .heart_a .a_2{
        animation: heart_move2 2.5s linear ;
        -webkit-animation: heart_move2 2.5s  linear;
        animation-fill-mode:forwards;
        height: 1.2rem; width:1.2rem
    }
    .heart_a .a_3{
        animation: heart_move3 3.5s linear ;
        -webkit-animation: heart_move3 3.5s  linear;
        animation-fill-mode:forwards;
        height: 1.3rem; width:1.3rem
    }
    .heart_a .a_4{
        animation: heart_move4 1.5s linear ;
        -webkit-animation: heart_move4 1.5s  linear;
        animation-fill-mode:forwards;
        height: 1.4rem; width:1.4rem
    }
    .heart_a .a_5{
        animation: heart_move4 3.5s linear ;
        -webkit-animation: heart_move4 3.5s  linear;
        animation-fill-mode:forwards;
        height: 1.5rem; width:1.5rem
    }
    @keyframes heart_move1 {
        0% {

            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0)  rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0)  rotate(0deg);

        }
        20% {
            transform: translate3d(1rem, 8rem, 0)  rotate(-7deg);
            -webkit-transform: translate3d(1rem, 8rem, 0)  rotate(-7deg);
        }
        40% {
            transform: translate3d(0.2rem, 6rem, 0)  rotate(17deg);
            -webkit-transform: translate3d(0.2rem, 6rem, 0)  rotate(17deg);
        }
        60% {
            opacity: 0.7;
            transform: translate3d(1.3rem, 4rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.3rem, 4rem, 0) rotate(-4deg);
        }
        80% {
            transform: translate3d(0.8rem, 2rem, 0) rotate(18deg);
            -webkit-transform: translate3d(0.8rem, 2rem, 0) rotate(18deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;

        }
    }
    @keyframes heart_move2 {
        0% {
            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);;
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);;
        }

        20% {
            transform: translate3d(2rem, 8rem, 0) rotate(10deg);
            -webkit-transform: translate3d(2rem, 8rem, 0) rotate(10deg);
        }
        40% {
            transform: translate3d(2.2rem, 6rem, 0) rotate(12deg);
            -webkit-transform: translate3d(2.2rem, 6rem, 0) rotate(12deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(2.3rem, 4rem, 0) rotate(13deg);
            -webkit-transform: translate3d(2.3rem, 4rem, 0) rotate(13deg);
        }
        80% {
            transform: translate3d(2.8rem, 2rem, 0) rotate(-18deg);
            -webkit-transform: translate3d(2.8rem, 2rem, 0) rotate(-18deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }
    @keyframes heart_move3 {
        0% {
            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(-4deg);
        }
        20% {
            transform: translate3d(1.1rem, 8rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.1rem, 8rem, 0) rotate(-4deg);
        }
        40% {
            transform: translate3d(0.8rem, 6rem, 0) rotate(-14deg) ;
            -webkit-transform: translate3d(0.8rem, 6rem, 0) rotate(-14deg);
        }
        60% {
            opacity: 0.6;
            transform: translate3d(0.3rem, 4rem, 0) rotate(14deg);
            -webkit-transform: translate3d(0.3rem, 4rem, 0) rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 2rem, 0) rotate(-10deg);
            -webkit-transform: translate3d(1.7rem, 2rem, 0) rotate(-10deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }
    @keyframes heart_move4 {
        0% {
            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0)  rotate(14deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0)  rotate(14deg);
        }
        20% {
            transform: translate3d(2.8rem, 8rem, 0)  rotate(14deg);;
            -webkit-transform: translate3d(2.8rem, 8rem, 0)  rotate(14deg);;
        }
        40% {
            transform: translate3d(3.1rem, 6rem, 0)  rotate(-10deg);;
            -webkit-transform: translate3d(3.1rem, 6rem, 0)  rotate(-10deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(1.9rem, 4rem, 0)  rotate(-10deg);
            -webkit-transform: translate3d(1.9rem, 4rem, 0)  rotate(-10deg);
        }
        80% {
            transform: translate3d(1.4rem, 2rem, 0)  rotate(5deg);
            -webkit-transform: translate3d(1.4rem, 2rem, 0)  rotate(5deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0);
            -webkit-transform: translate3d(1.56rem, 0, 0);
            opacity: 0;
            display: none;
        }
    }
    @keyframes heart_move5 {
        0% {
            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0)  rotate(-14deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(-14deg);
        }
        20% {
            transform: translate3d(1rem, 8rem, 0)  rotate(-14deg);
            -webkit-transform: translate3d(1rem, 8rem, 0)  rotate(-14deg);
        }
        40% {
            transform: translate3d(0.2rem, 6rem, 0)  rotate(14deg);
            -webkit-transform: translate3d(0.2rem, 6rem, 0) rotate(14deg);
        }
        60% {
            opacity: 0.3;
            transform: translate3d(1.4rem, 4rem, 0) rotate(14deg);
            -webkit-transform: translate3d(1.4rem, 4rem, 0)  rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 2rem, 0) rotate(-7deg);
            -webkit-transform: translate3d(1.7rem, 2rem, 0)  rotate(-7deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }



    .heart_a {
        height: 10rem;
        width: 4.5rem;
        position: absolute;
        left: 50%;
        margin-left: -2.25rem;
        top: 17rem;
        z-index: 1001;
    }

    .heart_click_btn {
        height: 4.529411764705882rem;
        width: 4.529411764705882rem;
        border-radius: 50%;
        background: #dd3c3b;
        position: absolute;
        top: 26rem;
        left: 50%;
        margin-left: -2.264705882352941rem
    }
    .heart_btn{ background: url(../../dist/birthday/heart_w.png) no-repeat; background-size: 1.2941176rem; height: 1.117647058823529rem; width: 1.294117647058824rem; margin: 0 auto; margin-top: 1rem;}



</style>
<script type="es6">

    let funny = {
        template: '#birthday'
    };

    export default {
        data() {
            return {
                steps: [
                    {num: 1, isReach: true},
                    {num: 99, isReach: true},
                    {num: 520, isReach: true},
                    {num: 0, isReach: false},
                    {num: 0, isReach: false},
                    {num: 999, isReach: false},
                    {num: 1314, isReach: false},
                    {num: 9999, isReach: false}
                ],
                random:1,
                per:0
            }
        },
        methods: {
            addHeart:function () {

                let random= 1+  parseInt(Math.random()*5);
                if( this.random  == random){
                    this.addHeart()
                    return;
                }
                if(this.per<100){this.per++;}
                console.log(random);
                this.random=random;
                $(".heart_a").append("<div class='a_"+random+"'></div>");
                $(".heart .wave").css({top:100-this.per+"%"})
            }
        },

        mounted: function () {

            xqzs.wx.setConfig(this);
        }
    }
</script>
