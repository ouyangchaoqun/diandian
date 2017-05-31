<template id="writeMood">
    <div class="writeMood_box">
        <img class="icon"  id="icon8" src="../images/list_mood_08.png" :class="{bigImg:valMood8,icon8:!isClick}" alt="" @click="add(8)"/>
        <img class="icon " id="icon7" src="../images/list_mood_07.png" :class="{bigImg:valMood7,icon7:!isClick}" alt="" @click="add(7)"/>
        <img class="icon " id="icon9" src="../images/list_mood_09.png" :class="{bigImg:valMood9,icon9:!isClick}" alt="" @click="add(9)"/>
        <img class="icon " id="icon4" src="../images/list_mood_04.png" :class="{bigImg:valMood4,icon4:!isClick}" alt="" @click="add(4)"/>
        <img class="icon " id="icon5" src="../images/list_mood_05.png" :class="{bigImg:valMood5,icon5:!isClick}" alt="" @click="add(5)"/>
        <img class="icon " id="icon6" src="../images/list_mood_06.png" :class="{bigImg:valMood6,icon6:!isClick}" alt="" @click="add(6)"/>
        <img class="icon " id="icon1" src="../images/list_mood_01.png" :class="{bigImg:valMood1,icon1:!isClick}" alt="" @click="add(1)"/>
        <img class="icon " id="icon3" src="../images/list_mood_03.png" :class="{bigImg:valMood3,icon3:!isClick}" alt="" @click="add(3)"/>
        <img class="icon " id="icon2" src="../images/list_mood_02.png" :class="{bigImg:valMood2,icon2:!isClick}" alt="" @click="add(2)"/>
    </div>
</template>

<script type="es6">
    let writeMood = {
        template: '#writeMood'
    };

    export default {
        data() {
            return {
                valMood1: null,
                valMood2: null,
                valMood3: null,
                valMood4: null,
                valMood5: null,
                valMood6: null,
                valMood7: null,
                valMood8: null,
                valMood9: null,
                isClick:false

            }
        },
        methods: {
            add: function (val) {
                let _this = this;
                if(!_this.isClick){
                    this.$http.put(web.API_PATH + 'mood/add', {"moodValue": val, "userId": "omg"}).then(function (data) {//es5写法
                        if (data.data.status === 1) {

                            if (val === 1) {
                                _this.valMood1 = true;
                            }
                            if (val === 2) {
                                _this.valMood2 = true;
                            }
                            if (val === 3) {
                                _this.valMood3 = true;
                            }
                            if (val === 4) {
                                _this.valMood4 = true;
                            }
                            if (val === 5) {
                                _this.valMood5 = true;
                            }
                            if (val === 6) {
                                _this.valMood6 = true;
                            }
                            if (val === 7) {
                                _this.valMood7 = true;
                            }
                            if (val === 8) {
                                _this.valMood8 = true;
                            }
                            if (val === 9) {
                                _this.valMood9 = true;
                            }
                            setTimeout(function () {
                                location.href=  web.BASE_PATH +'#/myCenter/myIndex/Edit';
                            },350)

                        }
                    }, function (error) {
                        //error
                    });
                }
                _this.isClick=true;

            }
        },
        mounted: function () {
            let _this = this;


        },


    }


</script>

<style>
    .writeMood_box {
        height: 100%;

        position: relative;
    }



    .icon-box {
        width: 100%;
        height: 100%;
        padding: 0 0.75rem;

        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;

        position: relative;
    }

    .icon6,.icon2 {
        -webkit-animation: iconA 1s linear infinite alternate;
        -moz-animation: iconA 1s linear infinite alternate;
        -ms-animation: iconA 1s linear infinite alternate;
        animation: iconA 1s linear infinite alternate;
    }

    @-webkit-keyframes iconA {
        from {
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        to {
            -webkit-transform: scale(1.5, 1.5);
            -moz-transform: scale(1.5, 1.5);
            -ms-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
        }
    }

    @keyframes iconA {
        from {
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        to {
            -webkit-transform: scale(1.5, 1.5);
            -moz-transform: scale(1.5, 1.5);
            -ms-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
        }
    }

    .bigImg {
        -webkit-animation: bigImgAction 1.5s ease-out 0s forwards;
        -moz-animation: bigImgAction 1.5s ease-out 0s forwards;
        -ms-animation: bigImgAction 1.5s ease-out 0s forwards;
        animation: bigImgAction 1.5s ease-out  0s forwards;
    }

    @-webkit-keyframes bigImgAction {
        from {
            opacity: 1;
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        to {
            opacity: 0;
            -webkit-transform: scale(10, 10);
            -moz-transform: scale(10, 10);
            -ms-transform: scale(10, 10);
            transform: scale(10, 10);
        }
    }

    @keyframes bigImgAction {
        from {
            opacity: 1;
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        to {
            opacity: 0;
            -webkit-transform: scale(10, 10);
            -moz-transform: scale(10, 10);
            -ms-transform: scale(10, 10);
            transform: scale(10, 10);
        }
    }

    .icon-box img {
        width: 100%;
        height: 100%;
    }

    #icon10 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 15%;
        left: 13%;
    }

    #icon9 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 10%;
        right:9%;
    }

    .icon9 {
        -webkit-animation: iconA 1s linear .4s infinite alternate;
        -moz-animation: iconA 1s linear .4s infinite alternate;
        -ms-animation: iconA 1s linear .4s infinite alternate;
        animation: iconA 1s linear .4s infinite alternate;
    }

    #icon8 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 13%;
        left: 8%;
    }

    .icon8 {
        -webkit-animation: iconA 1s linear .2s infinite alternate;
        -moz-animation: iconA 1s linear .2s infinite alternate;
        -ms-animation: iconA 1s linear .2s infinite alternate;
        animation: iconA 1s linear .2s infinite alternate;
    }

    #icon7 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 22%;
        left: 42%;
    }

    .icon7 {
        -webkit-animation: iconA 1s linear .5s infinite alternate;
        -moz-animation: iconA 1s linear .5s infinite alternate;
        -ms-animation: iconA 1s linear .5s infinite alternate;
        animation: iconA 1s linear .5s infinite alternate;
    }

    #icon6 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 36%;
        right: 9%;
    }

    #icon5 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 42%;
        left: 42%;
    }

    .icon5 {
        -webkit-animation: iconA 1s linear .7s infinite alternate;
        -moz-animation: iconA 1s linear .7s infinite alternate;
        -ms-animation: iconA 1s linear .7s infinite alternate;
        animation: iconA 1s linear .7s infinite alternate;
    }

    #icon4 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 47%;
        left: 8%;
    }

    .icon4 {
        -webkit-animation: iconA 1s linear .2s infinite alternate;
        -moz-animation: iconA 1s linear .2s infinite alternate;
        -ms-animation: iconA 1s linear .2s infinite alternate;
        animation: iconA 1s linear .2s infinite alternate;
    }

    #icon3 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 61%;
        left: 42%;
    }

    .icon3 {
        -webkit-animation: iconA 1s linear .2s infinite alternate;
        -moz-animation: iconA 1s linear .2s infinite alternate;
        -ms-animation: iconA 1s linear .2s infinite alternate;
        animation: iconA 1s linear .2s infinite alternate;
    }

    #icon2 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 67%;
        right: 9%;
    }

    #icon1 {
        width: 3.5rem;
        height: 3.5rem;
        z-index: 9;
        position: absolute;
        top: 74%;
        left: 8%;
    }

    .icon1 {
        -webkit-animation: iconA 1s linear .3s infinite alternate;
        -moz-animation: iconA 1s linear .3s infinite alternate;
        -ms-animation: iconA 1s linear .3s infinite alternate;
        animation: iconA 1s linear .3s infinite alternate;
    }

</style>