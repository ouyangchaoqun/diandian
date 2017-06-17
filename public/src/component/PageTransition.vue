<template>
    <div style="height: 100%">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>

    import Bus from './bus.js';

    export default {
        data () {
            return {
                transitionName: 'page-xqzs-left',
                pagesIn: [],
                isFunny: false

            }
        },
        mounted: function () {
            var _this = this;
            Bus.$on("setFunny", function (v) {
                _this.isFunny = v;

            });
        },
        beforeRouteUpdate (to, from, next) {
            var _this = this;


            if (_this.isFunny === true) {
                _this.isFunny = false;
                Bus.$emit("closeFunnyWindow");
                next(false);
                return false;
            }


            xqzs.weui.removeWhenPageChange();


//            let isBack = parseInt( Math.random()*10)%2;

//            console.log({to:to.fullPath,from:from.fullPath});


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


//
            console.log(from.fullPath);
            //是否为点开心情页面；
            if ((from.fullPath === "/" || from.fullPath === "/#") && to.fullPath === "/addMood") {
                this.transitionName = 'page-xqzs-up'
            } else if (from.fullPath === "/addMood" && (to.fullPath === "/" || to.fullPath === "/#")) {
                this.transitionName = 'page-xqzs-down'

            } else if (isBack) {
                this.transitionName = 'page-xqzs-right'
            } else {
                this.transitionName = 'page-xqzs-left'
            }
            setTimeout(function () {
                next()
            },540)

        }
    }
</script>

<style>
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


    .page-xqzs-left-enter-active {
        animation-name: fold-in;
        animation-duration: .3s;

    }

    .page-xqzs-left-leave-active {
        animation-name: fold-out;
        animation-duration: .3s;

    }

    .page-xqzs-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .2s;
        z-index: 99
    }

    .page-xqzs-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .2s;
        z-index: 100;

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

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    .page-xqzs-up-enter-active .moodBox_bg, .page-xqzs-down-leave-active .moodBox_bg {
        background: none !important;
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
        z-index: 10003;
        animation-name: fold-down-out;
        animation-duration: .9s;
        background: none !important;

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

        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-up-out {
        0% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(0, 0%, 0);
            -webkit-transform: translate3d(0, 0%, 0);
        }
    }


</style>