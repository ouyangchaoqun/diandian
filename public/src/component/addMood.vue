<template id="addMood">
    <div class="addMood">
        <div v-title>此刻心情</div>
        <div class="banner">
            <v-banner></v-banner>
        </div>
        <div class="moodBox_bg" @click="goIndex()">
        </div>

            <div class="mood_box"  >
                <div class="mood_left" v-show="!goScenes"   >
                    <div class="moodBox_header">此刻心情</div>
                    <div class="weui-grids grids_box">
                        <a class="weui-grid grid_33" v-for="mood in moodValues" @click="chooseData('moodValue',mood.value)">
                            <div class="grid_top">
                                <img :src="moodSrc(mood.src)" alt="">
                            </div>
                            <p :class="{'weui-grid__label grid_bottom':true,'grid_row1':mood.class=='grid_row1','grid_row2':mood.class=='grid_row2','grid_row3':mood.class=='grid_row3'}" >
                                {{mood.text}}</p>
                        </a>
                    </div>
                </div>
                <div class="scene_box sogo-enter-active"  v-show="goScenes" >
                    <div>
                        <div class="moodBox_header">在哪方面</div>
                        <div class="weui-grids grids_box">
                            <a v-for="scenes in scenesList" class="weui-grid grid_33" @click="chooseData('scenesId',scenes.value)" v-if="!scenes.hide">
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
</template>
<style>


    .sogo-enter-active {
        animation-name: sgo ;
        animation-duration: .2s;
    }

    @keyframes sgo {
        0% {
            transform: translate3d(100%, 0, 0);
            -webkit-transform: translate3d(100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            z-index: 2;
        }
    }


    .addMood,.mood_box{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .grids_box{
        margin:0 15px;
    }
    .weui-grids{ overflow: inherit}

    .weui-grid{
        padding:0;
        position: relative;
    }
    .moodBox_bg{
        position: absolute;
        top:0;
        height:100%;
        width:100%;
        background: rgba(0,0,0,0.6);
        z-index:2;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .moodBox{
        position: absolute;
        top:0;
        height:100%;
        width:100%;
        z-index: 3;
    }
    .scene_top{
        margin-top: 1.082rem;
        margin-bottom: 0.5rem;
    }
    .scene_top img{
        width:1.883rem;
        height:1.883rem;
        display: block;
        margin:0 auto;
    }
    .addMood{
        height:100%;
        background: #FFFFFF;
    }
    .scene_box .grid_25{
        width:25%;

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
        background: url(../images/add_mood_bj.jpg) #fff;
        background-size: cover;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        position: absolute;
        bottom:0;
        width:100%;
        padding-top: 23px;
        padding-bottom: 25px;
        overflow: hidden;
        z-index: 3;
    }
    .scene_box{
        width:100%;
        display: block;
    }
    .moodBox_header{
        font-size: 18px;
        color: #666666;
        text-align: center;
        margin-bottom: 1.411761176470588rem;
    }
    .grid_top{
        margin-bottom:0.471rem;
    }
    .grid_top img{
        display: block;
        width:2.353rem;
        height:2.353rem;
        margin: auto;
        margin-top: 12px;
    }
    .grid_bottom{
        font-size: 12px;
    }
    .scene_col{
        color: #333333;
    }
    .grid_row1{
        color: #fe6103;
    }
    .grid_row2{
        color: #747474;
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
                scenesList:xqzs.mood.moodScenesList,
                goScenes:false,
                goScenesIng:false,
                choosedData:{},
                canAddMood:true,
                isAdded:false
            }
        },
        props:{
            user:{
                type:Object
            },
            pagesIn:[],
            isGoIndex:{type:Object}
        },
        methods: {
            goIndex:function () {

                if(window.history.length>=2){
                    this.$router.go(0-window.history.length+1)
                }

                this.$router.replace('/');

            },
            moodSrc:function (src) {
                return web.IMG_PATH+src;
            },
            chooseData:function (key,v) {
                this.choosedData[key] = v;
                console.log(v)
                //
                if(this.canAddMood==false&&'moodValue'==key){
                    this.$router.push('/me/personal/validate');
                    this.goScenes=false;
                }else{
                    this.goScenes=true;
                    var keys = ['moodValue','scenesId'];
                    var params = [];
                    for(var o in keys){
                        if(typeof this.choosedData[keys[o]] == 'undefined'){
                            return true;
                        }
                        params.push(keys[o]+'='+this.choosedData[keys[o]]);
                    }



                    let that = this;



                    if("scenesId"!=key||that.choosedData["moodValue"]==null){
                        return;
                    }
                    if(that.isAdded==true){
                        return;
                    }
                    var postdata = {
                        moodValue:that.choosedData["moodValue"],
                        scenesId:that.choosedData["scenesId"],
                        isOpen: true,
                        userId: '_userId_',
                    };

                    var apiurl = 'mood/add';
                    that.isAdded=true;

                    that.$http.put(web.API_PATH + apiurl,postdata)
                        .then(function (bt) {
                            console.log(postdata)
                            if (bt.data && bt.data.status == 1) {
                                that.$router.replace({path:'/myCenter/myIndex?scroll=1'});
                            }
                        });


                   // this.$router.push('/myCenter/myIndex/Edit?'+params.join('&'));
                }

            },
            getMoodCount(callback){
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'mood/get/user/count/_userId_'
                }).then(function (bt) {
                    if(bt.data && bt.data.status == 1){
                        if(typeof callback == 'function'){
                            callback(bt.data.data);
                        }
                    }
                })
            },
        },
        mounted: function () {

            var _this= this;
            if(_this.isGoIndex==true){
                _this.goIndex();
            }
            xqzs.wx.setConfig(this);

            var w =$(window).width() ;

            var w1= ( w -31 )/4;
            $('.grid_25').width(w1).height(w1 * 1.06976744186);

            var w2= ( w -31 )/3;
            var h2 = ( w -31 ) * 1.06976744186/4;
            $('.grid_33').width(w2).height(h2);
            $(".weui-grids").height( ( w -31 )*3 * 1.06976744186/4);



            // $(".mood_box").height( h-(500*w/750)-42);


            _this.getMoodCount(function (moodcount) {
                if (moodcount < 10) {
                    _this.canAddMood = true;
                } else {
                    if (_this.user.mobile == '' || _this.user.mobile == null || _this.user.mobile == undefined) {
                        _this.canAddMood = false;
                    } else {
                        _this.canAddMood = true;
                    }
                }
           });


           $('.grids_box a').click(function (event) {
               event.preventDefault();
               event.stopPropagation();
           })
        },


    }


</script>