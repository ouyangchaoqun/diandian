<template id="addMood">
    <div class="addMood">
        <div v-title>此刻心情</div>
        <div class="banner">
            <v-banner></v-banner>
        </div>

        <div class="moodBox_bg" @click="goIndex()">
            <div class="mood_box">
                <div class="mood_left">
                    <div class="moodBox_header">此刻心情</div>
                    <div class="weui-grids grids_box">
                        <a class="weui-grid" v-for="mood in moodValues" @click="chooseData('moodValue',mood.value)">
                            <div class="grid_top">
                                <img :src="moodSrc(mood.src)" alt="">
                            </div>
                            <p :class="{'weui-grid__label grid_bottom':true,'grid_row1':mood.class=='grid_row1','grid_row2':mood.class=='grid_row2','grid_row3':mood.class=='grid_row3'}" >
                                {{mood.text}}</p>
                        </a>
                    </div>
                </div>
                <div class="scene_box">
                    <div>
                        <div class="moodBox_header">心情场景</div>
                        <div class="weui-grids grids_box">
                            <a v-for="scenes in scenesList" class="weui-grid grid_25" @click="chooseData('scenesId',scenes.value)">
                                <div class="scene_top" v-if="scenes.haspic">
                                    <img :src="moodSrc(scenes.src)">
                                </div>
                                <div class="scene_top" v-if="!scenes.haspic">
                                    <img/>
                                </div>
                                <p :class="{'weui-grid__label grid_bottom':true,'scene_col':scenes.haspic}">{{scenes.text}}</p>
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
       padding-top: 0.588235rem;
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
        padding-top:1.76470rem;
        padding-bottom: 2.1176470rem;
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
        width:2.941176rem;
        height:2.941176rem;
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
                moodValues:[
                    {value:9,src:'list_mood_09.png',class:'grid_row1',text:'超级开心'},
                    {value:8,src:'list_mood_08.png',class:'grid_row1',text:'很开心'},
                    {value:7,src:'list_mood_07.png',class:'grid_row1',text:'开心'},
                    {value:6,src:'list_mood_06.png',class:'grid_row2',text:'小开心'},
                    {value:5,src:'list_mood_05.png',class:'grid_row2',text:'一般'},
                    {value:4,src:'list_mood_04.png',class:'grid_row2',text:'郁闷'},
                    {value:3,src:'list_mood_03.png',class:'grid_row3',text:'不开心'},
                    {value:2,src:'list_mood_02.png',class:'grid_row3',text:'很不开心'},
                    {value:1,src:'list_mood_01.png',class:'grid_row3',text:'超级不开心'}
                ],
                scenesList:[
                    {value:1,src:'study.png',haspic:true,text:'学习教育'},
                    {value:2,src:'work.png',haspic:true,text:'工作事业'},
                    {value:3,src:'economics.png',haspic:true,text:'经济'},
                    {value:4,src:'healthy.png',haspic:true,text:'健康'},
                    {value:5,src:'home.png',haspic:true,text:'家庭'},
                    {value:6,src:'love.png',haspic:true,text:'恋爱婚姻'},
                    {value:7,src:'arder.png',haspic:true,text:'娱乐休闲'},
                    {value:8,src:'interpersonal.png',haspic:true,text:'人际关系'},
                    {value:9,src:'weather.png',haspic:true,text:'天气'},
                    {value:10,src:'life.png',haspic:true,text:'生活'},
                    {value:11,src:'sport.png',haspic:true,text:'运动'},
                    {value:12,src:'other.png',haspic:true,text:'其他'}
                ],
                choosedData:{}
            }
        },
        methods: {
            goIndex:function () {
                this.$router.go(-1)
            },
            moodSrc:function (src) {
                return web.IMG_PATH+src;
            },
            chooseData:function (key,v) {
                this.choosedData[key] = v;
                //
                var keys = ['moodValue','scenesId'];
                var params = [];
                for(var o in keys){
                    if(typeof this.choosedData[keys[o]] == 'undefined'){
                        return true;
                    }
                    params.push(keys[o]+'='+this.choosedData[keys[o]]);
                }
                location.href =  web.BASE_PATH +'#/myCenter/myIndex/Edit?'+params.join('&');
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