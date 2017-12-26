<template>
    <div style="height: 100%" class="transitionBox" >

        <transition :name="transitionName">


            <router-view class="child-view"    :user=user :friend-moods-spe="friendMoodsSpe"  :friend-moods="friendMoods" :my-last-mood="myLastMood" :isGoIndex="isGoIndex"></router-view>


        </transition>
    </div>
</template>


<script>

    import Bus from '../component/bus.js';

    export default {

        data () {
            return {
                transitionName: 'page-xqzs-left',
                pagesIn: [],
                isFunny: false,
                user:{},
                friendMoodsSpe:[],
                friendMoods:[],
                myLastMood:null,
                isGoIndex:false
            }
        },
        created:function () {
            console.log("create");
            var _this = this;
            _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                    _this.initData();
                }
            }, function (error) {
                //error
            });
        },
        mounted: function () {
            console.log("mounted")
            var _this = this;
            Bus.$on("setFunny", function (v) {
                _this.isFunny = v;

            });
            Bus.$on("goIndex", function (v) {
                _this.isGoIndex = v;

            });

            Bus.$on("initHomeData", function () {
                _this.initData();
            });

        },
        methods: {
            initData:function () {
                var _this = this;
                if(_this.user.isLookFriend!==0){
                    //用户 朋友当天心情 特别关系
                    _this.$http({
                        method: 'GET',
                        type: "json",
                        url: web.API_PATH + 'mood/event/query/friend/pull/day/_userId_/1/3?version=2.0',
                    }).then(function (data) {//es5写法
                        if (data.data.status === 1 && data.data.data !== null) {
                            _this.friendMoodsSpe = eval(data.data.data);
                            _this.friendMoodsSpe = xqzs.mood.initMoodsIndex(_this.friendMoodsSpe);
                        }
                    }, function (error) {
                        //error
                    });

                    //用户 朋友当天心情 普通
                    _this.$http({
                        method: 'GET',
                        type: "json",
                        url: web.API_PATH + 'mood/event/query/friend/pull/day/_userId_/0/3?version=2.0',
                    }).then(function (data) {//es5写法
                        if (data.data.status === 1 && data.data.data !== null) {
                            _this.friendMoods = eval(data.data.data);

                            _this.friendMoods = xqzs.mood.initMoodsIndex(_this.friendMoods);


                            console.log( _this.friendMoods)

                        }
                    }, function (error) {
                        //error
                    });
                }
                ///用户心情
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/find/userlast/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.status === 1 && data.data.status === 1 && data.data.data !== null) {
                        _this.myLastMood = eval(data.data.data);
                        _this.myLastMood.moodValueUrl = web.IMG_PATH + "list_mood_0" + _this.myLastMood.moodValue + ".png";
                        _this.myLastMood.careListUrl ="./myCenter/careMe?moodId=" + _this.myLastMood.id;
                        _this.myLastMood.addTime = xqzs.dateTime.formatTime(_this.myLastMood.addTime);
                    }
                }, function (error) {
                    //error
                });
            },
            isTabChange: function (from, to) {
                let tabs = [
                    '/',
                    '/more',
                    '/me',
                    '/friendsMoods'
                ];


                return ($.inArray(from.path, tabs) != -1 && $.inArray(to.path, tabs) != -1);
            }
        },

        beforeRouteUpdate (to, from, next) {
            var _this = this;



            if (_this.isFunny === true) {
                _this.isFunny = false;
                Bus.$emit("closeFunnyWindow");
                next(false);
                return false;
            }

            $(".child-view").removeClass("page-xqzs-left-enter-active").removeClass("page-xqzs-left-leave-active").removeClass("page-xqzs-right-enter-active").removeClass("page-xqzs-right-leave-active");

            xqzs.weui.removeWhenPageChange();


//

            if (this.isTabChange(from, to)) {
                this.transitionName = '';
            }else{
                let isBack = false;
                for (let i = 0; i < this.pagesIn.length; i++) {
//                console.log(this.pagesIn[i]);
                    if (this.pagesIn[i].to == from.fullPath && this.pagesIn[i].from == to.fullPath) {
                        isBack = true;
                        this.pagesIn.splice(i, 1);
                        break;
                    }
                }

                if(to.fullPath==='/')isBack=true;

                if (!isBack)
                    this.pagesIn.push({to: to.fullPath, from: from.fullPath})




                let isBackStrIndex  =  to.fullPath.indexOf("isBack=1");
                if(isBackStrIndex>0 ){
                    isBack= true;
                }

                if(_this.$route.query.isBack!=undefined &&　_this.$route.query.isBack==1){
                    isBack= true;
                }


                //是否为点开心情页面；
                if ((from.fullPath === "/" || from.fullPath === "/#") && (to.path === "/record"||to.path==="/addMood")) {
                    this.transitionName = 'page-xqzs-up'
                } else if ( (from.path === "/record"||from.path==="/addMood") && (to.fullPath === "/" || to.fullPath === "/#")) {
                    this.transitionName = 'page-xqzs-down'

                }else if (isBack) {
                    this.transitionName = 'page-xqzs-right'
                } else {
                    this.transitionName = 'page-xqzs-left'
                }
            }


            this.$nextTick(function () {
                setTimeout(function () {
                    next()
                },10)
            })
            var tt = document.querySelector('.child-view');
            tt.addEventListener("webkitAnimationEnd", function(){
//                console.log("webkitAnimationEnd")
            }, false);

        }
    }
</script>

<style>
    /*积分动画*/
    .coin_add{ position: fixed; width:5.558823529411765rem; height: 5.558823529411765rem; top:50%; left:50%; margin-left: -2.779411764705883rem; margin-top: -2.779411764705883rem; z-index: 1000;
        animation: coin_add_show 2.5s  forwards ;
        -webkit-animation: coin_add_show 2.5s  forwards ;}
    .coin_add .coin_add_round{ background: url(../images/coin_add_round.png) no-repeat center; width: 100%; height: 100%; background-size: 100%; position: absolute; top:0;
        animation: coin_round_round 1s    infinite linear ;;
        -webkit-animation: coin_round_round 1s  infinite linear ; ;
        animation-delay:0.8s;
        -webkit-animation-delay:0.8s;

    }
    .coin_add .coin_add_coin{ background: url(../images/coin_add_coin.png) no-repeat center; width: 100%; height: 100%; background-size: 3.617647058823529rem; position: absolute; top:0;
        animation: coin_coin_round 1s   infinite linear ; ;
        -webkit-animation: coin_coin_round 1s  infinite linear ;  ;
        animation-delay:0.8s;
        -webkit-animation-delay:0.8s;}

    .coin_add .add_num{ font-size: 12px; color:#ffaa00; position: absolute; top:0; width: 100%; text-align: center;
        animation: coin_big 1.5s  forwards linear;
        -webkit-animation: coin_big 1.5s  forwards  linear;
        animation-delay:0.8s;
        -webkit-animation-delay:0.8s;
    }
    @keyframes coin_coin_round {
        0%{
            backface-visibility: hidden;
            transform: rotateY(0deg);
            -webkit-transform: rotateY(0deg);
        }
        100%{
            backface-visibility: hidden;
            transform: rotateY(720deg);
            -webkit-transform: rotateY(720deg);
        }

    }

    @keyframes coin_round_round {

        0%{
            backface-visibility: hidden;

            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        100%{
            backface-visibility: hidden;

            transform: rotate(720deg);
            -webkit-transform: rotate(720deg);
        }

    }


    @keyframes coin_big {
        /*rotate(0deg) */
        0%{
            transform: translate3d(0, 0, 0)   scale(1);
            -webkit-transform: translate3d(0,0, 0) scale(1);
        }
        70%{
            transform: translate3d(0, -200%, 0)   scale(2.5);
            -webkit-transform: translate3d(0,-200%, 0) scale(2.5);
            opacity: 1;
        }
        100%{
            transform: translate3d(20%, -300%, 0)   scale(3);
            -webkit-transform: translate3d(20%,-300%, 0) scale(3);
            opacity: 0;
        }

    }

    @keyframes coin_add_show {
        0%{
            transform: translate3d(100%, -200%, 0)   scale(0);
            -webkit-transform: translate3d(100%,-200%, 0) scale(0);
        }
        15%{
            transform: translate3d(0, 0, 0)   scale(1);
            -webkit-transform: translate3d(0,0, 0) scale(1);
        }
        85%{
            transform: translate3d(0, 0, 0)   scale(1);
            -webkit-transform: translate3d(0,0, 0) scale(1);
        }
        100%{
            transform: translate3d(100%, -200%, 0)   scale(0);
            -webkit-transform: translate3d(100%,-200%, 0) scale(0);
        }
    }


    .child-view {
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        background: #f4f4f8;
        top: 0 !important;
        left: 0 !important;
        overflow-y: scroll !important;
        -webkit-overflow-scrolling: touch
    }
    .transitionBox{ position: relative}
    .transitionBox .child-view:nth-child(1){ z-index: 2}
    .transitionBox .child-view:nth-child(2){ z-index: 1}

    .page-xqzs-left-enter-active {
        animation-name: fold-in;
        animation-duration: .38s;


    }
    .page-xqzs-left-leave-active {
        animation-name: fold-out;
        animation-duration: .38s;

    }

    .page-xqzs-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .25s;
    }

    .page-xqzs-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .25s;

    }

    @media (device-height:480px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone4/4s */
        .page-xqzs-left-enter-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-left-leave-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-right-enter-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-right-leave-active {
            animation-name: noA;
            animation-duration: 0s;
        }
    }
    @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone5 */
        .page-xqzs-left-enter-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-left-leave-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-right-enter-active {
            animation-name: noA;
            animation-duration: 0s;
        }
        .page-xqzs-right-leave-active {
            animation-name: noA;
            animation-duration: 0s;

        }
    }



    @keyframes fold-right-in {
        0% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);

        }

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-right-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(100%, 0, 0);
            -webkit-transform: translate3d(100%, 0, 0);
        }
    }

    @keyframes fold-in {
        0% {
            transform: translate3d(100%, 0, 0);
            -webkit-transform: translate3d(100%, 0, 0);
        }
        15% {
            transform: translate3d(100%, 0, 0);
            -webkit-transform: translate3d(100%, 0, 0);
            z-index: 2;
        }

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 2;
        }
    }

    @keyframes fold-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }
        15% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 1;
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 1;
        }
    }

    .page-xqzs-up-enter-active .moodBox_bg, .page-xqzs-down-leave-active .moodBox_bg {
        background: none !important;
    }

    .page-xqzs-up-leave-active .addMoodBg{
        animation-name: goone;
        animation-duration: .3s;
    }

    .page-xqzs-down-enter-active .addMoodBg{
        animation-name: gozelo;
        animation-duration: .3s;
    }


    .page-xqzs-up-leave-active .addMoodBg, .page-xqzs-down-enter-active .addMoodBg {
        display: block;
        z-index: 10001;
    }

    .page-xqzs-down-leave-active .banner, .page-xqzs-up-enter-active .banner {
        display: none !important;
    }

    .page-xqzs-up-enter-active {
        animation-name: fold-up-in;
        animation-duration: .3s;
        background: none !important;
    }

    .page-xqzs-up-leave-active {
        animation-name: fold-up-out;
        animation-duration: .5s;

    }

    .page-xqzs-down-enter-active {

        animation-name: fold-down-in;
        animation-duration: .3s;

    }

    .page-xqzs-down-leave-active {
        animation-name: fold-down-out;
        animation-duration: .5s;
        background: none !important;

    }

    @keyframes gozelo {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes goone {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes fold-down-in {
        0% {
            transform: translate3d(0, 0%, 0);
            -webkit-transform: translate3d(0, 0%, 0);
        }

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);

        }
    }

    @keyframes fold-down-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(0, 100%, 0);
            -webkit-transform: translate3d(0, 100%, 0);
        }
    }

    @keyframes fold-up-in {
        0% {
            transform: translate3d(0, 100%, 0);
            -webkit-transform: translate3d(0, 100%, 0);
        }
        5%{
            z-index: 2;
            transform: translate3d(0, 100%, 0);
            -webkit-transform: translate3d(0, 100%, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 2;
        }
    }

    @keyframes fold-up-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }

        95%{
            z-index: 1;
            transform: translate3d(0,0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }

        100% {
            z-index: 1;
            transform: translate3d(0, 0%, 0);
            -webkit-transform: translate3d(0, 0%, 0);
        }
    }


</style>