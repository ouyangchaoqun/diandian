<template>
    <div>
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                transitionName: 'slide-left',
                pagesIn:[],

            }
        },
        beforeRouteUpdate (to, from, next) {
//            let isBack = parseInt( Math.random()*10)%2;

            console.log({to:to.fullPath,from:from.fullPath});
            let isBack=false;
            for(let i = 0;i<this.pagesIn.length;i++){
                console.log(this.pagesIn[i]);
                if(this.pagesIn[i].to==from.fullPath&&this.pagesIn[i].from==to.fullPath){
                    isBack=true;
                    this.pagesIn.splice(i,1);
                    break;
                }
            }
            if(!isBack)
            this.pagesIn.push({to:to.fullPath,from:from.fullPath})


            console.log(1);
            console.log(this.pagesIn);
            console.log(2);

            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
             next()
        }

    }
</script>

<style scoped>
    .child-view {
        position: absolute;
        width:100%;
        height: 100%;
        transition: all .8s ;
        background: #ffffff
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

    .slide-left-enter-active {
        animation-name: fold-in;
        animation-duration: .4s;
    }
    .slide-left-leave-active {
        animation-name: fold-out;
        animation-duration: .8s;
    }

    .slide-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .4s;
    }
    .slide-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .8s;
    }
    @keyframes fold-right-in {
        0% {
            transform: translate3d(-100%, 0, 0);
        }

        100% {
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes fold-right-out {
        0% {
            transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(100%,0 , 0);
        }
    }



    @keyframes fold-in {
        0% {
            transform: translate3d(100%, 0, 0);
        }

        100% {
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes fold-out {
        0% {
            transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(-100%,0 , 0);
        }
    }



</style>