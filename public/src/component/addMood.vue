<template id="addMood">
    <div class="addMood">
        <div class="banner">
            <v-banner></v-banner>
        </div>

        <div class="moodBox_bg">
            <div class="mood_box">
                <div class="mood_left">
                    <div class="moodBox_header">此刻心情</div>
                    <div class="weui-grids grids_box">
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_09.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row1">超级开心</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_08.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row1">很开心</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_07.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row1">开心</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_06.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row2">小开心</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_05.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row2">一般</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_04.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row2">郁闷</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_03.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row3">不开心</p>
                        </a>

                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_02.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row3">很不开心</p>
                        </a>
                        <a href="" class="weui-grid">
                            <div class="grid_top">
                                <img src="../images/list_mood_01.png" alt="">
                            </div>
                            <p class="weui-grid__label grid_bottom grid_row3">超级不开心</p>
                        </a>
                    </div>
                </div>

                <div class="scene_box">
                    <div>
                        <div class="moodBox_header">心情场景</div>
                        <div class="weui-grids grids_box">
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/study.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">学习教育</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/work.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">工作事业</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/healthy.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">健康</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/home.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">家庭</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/love.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">恋爱婚姻</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/arder.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">休闲娱乐</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/interpersonal.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">人际关系</p>
                            </a>

                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/weather.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">天气</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/life.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">生活</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/sport.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">运动</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img src="../images/other.png" alt="">
                                </div>
                                <p class="weui-grid__label grid_bottom scene_col">其他</p>
                            </a>
                            <a href="" class="weui-grid grid_25">
                                <div class="scene_top">
                                    <img>
                                </div>
                                <p class="weui-grid__label grid_bottom ">...</p>
                            </a>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    </div>
</template>
<style>
    .grids_box{
        margin:0 15px;
    }
    .grids_box a{
       padding-top: 10px;
    }
    .weui-grid{
        padding:0;
    }
    .moodBox_bg{
        position: absolute;
        top:0;
        height:100%;
        width:100%;
        background: rgba(0,0,0,0.4);
    }
    .scene_top{
        margin-bottom: 14px;
    }
    .scene_top img{
        width:31px;
        height:31px;
        display: block;
        margin:0 auto;
    }
    .addMood{
        height:100%;
        background: #FFFFFF;
    }
    .scene_box .grid_25{
        width:25%;
        padding-top: 22px;
        padding-bottom: 5px;
    }
    .banner {
        width: 100%;
    }

    .banner img {
        display: block;
        width: 100%;
    }
    .mood_box{
        /*padding:30px 15px 36px 15px;*/
        background: url("../images/moodBg.png") no-repeat;
        background-size: cover;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
        position: absolute;
        bottom:0;
        width:100%;
        padding-top:30px;
        padding-bottom: 36px;
        overflow: hidden;
    }
    .scene_box{
        width:100%;
        display: none;
    }
    .moodBox_header{
        font-size: 18px;
        color: #666666;
        text-align: center;
        margin-bottom: 18px;
    }
    .grid_top{
        margin-bottom: 12px;
    }
    .grid_top img{
        display: block;
        width:50px;
        height:50px;
        margin: auto;
    }
    .grid_bottom{
        font-size: 12px;
        margin-bottom: 16px;
    }
    .scene_col{
        color: #333333;
    }
    .grid_row1{
        color: #fe6103;
    }
    .grid_row2{
        color: #330000;
    }
    .grid_row3{
        color: #0eb80e;
    }
</style>
<script type="es6">
    import banner from "./banner.vue";
    let addMood = {
        template: '#addMood'
    };

    export default {
        components: {
            "v-banner": banner
        },
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
                                location.href =  web.BASE_PATH +'#/myCenter/myIndex/Edit?id='+data.data.data.id;
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

           $('.grids_box a').click(function (event) {
               event.preventDefault();
               event.stopPropagation();
               $('.mood_left').css('display','none');
               $('.scene_box').css({'display':'block'});
           })
        },


    }


</script>

<style>


</style>