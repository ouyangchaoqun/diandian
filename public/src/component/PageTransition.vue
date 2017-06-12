<template>
    <div style="height: 100%">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
    var urlCheck = function (to, from) {
        var result = {stop: false};
        var preventToPaths = [{
            path: '/myCenter/myIndex/Edit',
            allowQuery:['id'],
            allowFroms: ['/addMood'],
            go: -2
        }];
        for (var i = 0, l = preventToPaths.length; i < l; i++) {
            if (preventToPaths[i].path == to.path) {
                var stop = true;
                for(var j=0,jl=preventToPaths[i].allowQuery.length;j<jl;j++){
                    var _k_ =preventToPaths[i].allowQuery[j];
                    if(typeof to.query[_k_]!='undefined'){
                        stop = false;
                        break;
                    }
                }
                if(stop) {
                    for (var j = 0, jl = preventToPaths[i].allowFroms.length; j < jl; j++) {
                        if (preventToPaths[i].allowFroms[j] == from.path) {
                            //result = {stop: true, gourl: preventToPaths[i].gourl}
                            stop = false;
                            break;
                        }
                    }
                }
                if(stop){
                    result = {stop: stop, go: preventToPaths[i].go}
                }
                break;
            }
        }
        return result;
    }
    export default {
        data () {
            return {
                transitionName: 'page-xqzs-left',
                pagesIn: [],

            }
        },
        beforeRouteUpdate (to, from, next) {


            xqzs.weui.removeWhenPageChange();


//            let isBack = parseInt( Math.random()*10)%2;

//            console.log({to:to.fullPath,from:from.fullPath});
            var result = urlCheck(to, from);
            if(result.stop){
                this.$router.go(result.go);
                next(false);
                return;
            }







            let isBack = false;
            for (let i = 0; i < this.pagesIn.length; i++) {
//                console.log(this.pagesIn[i]);
                if (this.pagesIn[i].to == from.fullPath && this.pagesIn[i].from == to.fullPath) {
                    isBack = true;
                    this.pagesIn.splice(i, 1);
                    break;
                }
            }
            if (!isBack)
                this.pagesIn.push({to: to.fullPath, from: from.fullPath})


//
            console.log(from.fullPath);
            //是否为点开心情页面；
            if((from.fullPath==="/"||from.fullPath==="/#")&&to.fullPath==="/addMood"){
                this.transitionName = 'page-xqzs-up'
            }else if(from.fullPath==="/addMood"&&(to.fullPath==="/"||to.fullPath==="/#")){
                this.transitionName = 'page-xqzs-down'

            }else if (isBack) {
                this.transitionName = 'page-xqzs-right'
            } else {
                this.transitionName = 'page-xqzs-left'
            }
            next()
        }
    }
</script>

<style>
    .child-view {
        position: absolute !important;
        width:100% !important;
        height: 100% !important;
        background: #f5f5f5;
        top:0 !important;
        left:0 !important;
        overflow-y: scroll !important;
    }





    /*.slide-left-enter, .slide-right-leave-active {*/
        /*!*opacity: 0;*!*/
         /*background: #ffffff;*/
        /*-webkit-transform: translate(100px, 0);*/
        /*transform: translate(100px, 0);*/
    /*}*/
    /*.slide-left-leave-active, .slide-right-enter {*/
         /*!*opacity: 0;*!*/
        /*background: rgba(0,0,0,0.5);*/
        /*-webkit-transform: translate(-150px, 0);*/
        /*transform: translate(-150px, 0);*/
    /*}*/

    .page-xqzs-left-enter-active {
        animation-name: fold-in;
        animation-duration: .4s;

    }
    .page-xqzs-left-leave-active {
        animation-name: fold-out;
        animation-duration: .9s;

    }

    .page-xqzs-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .4s;

    }
    .page-xqzs-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .9s;

    }
    @keyframes fold-right-in {
        0% {
            transform: translate3d(-100%, 0, 0);
            -webkit-transform: translate3d(-100%, 0, 0);

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
            transform: translate3d(100%,0 , 0);
            -webkit-transform: translate3d(100%,0 , 0);
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
            transform: translate3d(-100%,0 , 0);
            -webkit-transform: translate3d(-100%,0 , 0);
         }
    }





    .page-xqzs-up-enter-active  .moodBox_bg , .page-xqzs-down-leave-active  .moodBox_bg {
        background: none !important;
    }
    .page-xqzs-up-leave-active  .addMoodBg , .page-xqzs-down-enter-active  .addMoodBg {
       display: block;
    }

    .page-xqzs-down-leave-active  .banner,.page-xqzs-up-enter-active   .banner{
        display: none !important;
    }




    .page-xqzs-up-enter-active {
        animation-name: fold-up-in;
        animation-duration: .4s;
        background: none !important;

    }

    .page-xqzs-up-leave-active {
        animation-name: fold-up-out;
        animation-duration: .9s;

    }

    .page-xqzs-down-enter-active {

        animation-name: fold-down-in;
        animation-duration:.4s;

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
            transform: translate3d(0,100% , 0);
            -webkit-transform: translate3d(0,100%, 0);
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
            transform: translate3d(0,0% , 0);
            -webkit-transform: translate3d(0,0% , 0);
        }
    }



</style>