<template id="sleepRank">
    <div :class="{'clock_box':true,'clock_boxNight':isNight}">
        <div ><div v-title>{{sleepRank_title}}</div></div>
        <div :class="{'clock_top':true,'clock_topNight':isNight}">
            <div class="clock_head">
                <img :src="user.faceUrl" alt="">
            </div>
            <div :class="{'clock_count':true,'clock_countNight':isNight}">
                <div :class="{'clock_lists':true,'clock_listsNight':isNight}">
                    <div>
                        <p v-if="!isNight">起床时间</p>
                        <p v-if="isNight">睡觉时间</p>
                        <div>{{myRank.time}}</div>
                    </div>
                    <div>
                        <p v-if="!isNight">连续早起</p>
                        <p v-if="isNight">连续早睡</p>
                        <div>{{continueDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                    <div>
                        <p v-if="!isNight">坚持早起</p>
                        <p v-if="isNight">坚持早睡</p>
                        <div>{{allDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                </div>
                <div class="clock_ratio" v-if="!isNight">共有{{allCount}}人陪我一起参加早起计划</div>
                <div class="clock_ratio" v-if="isNight">共有{{allCount}}人陪我一起参加早睡计划</div>
            </div>
        </div>

        <div :class="{'clock_tab':true,'clock_tabNight':isNight}" style="position: relative;">
            <div >好友排行</div>
            <div class="clock_tabActive">总排行</div>
            <div class="tabMove"></div>
        </div>
        <div class="rank_Bgbox swiper-container">
            <div class="rank_box swiper-wrapper">
                <div class="clock_rank clock_rank1 swiper-slide swiper-no-swiping">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':isNight}">
                        <!--<img class="rank_cup" v-if="myRank.rank==1" src="../images/rank1.png" alt="">
                        <img class="rank_cup" v-if="myRank.rank==2" src="../images/rank2.png" alt="">
                        <img class="rank_cup" v-if="myRank.rank==3" src="../images/rank3.png" alt="">-->
                        <span :class="{'rank_cup':true,'rank_cupNight':isNight}">{{myRank.rank}}</span>
                        <div class="rank_main">
                            <img class="rank_headImg" :src="myRank.faceUrl" alt="">
                            <div class="rank_name">{{myRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                <div :class="{'clock_time':true/*,'rank1Color':myRank.rank==1,'rank2Color':myRank.rank==2,'rank3Color':myRank.rank==3*/}">{{myRank.time}}</div>
                                <div @click.stop="care(myRank)">
                                    <span>{{myRank.careCount||0}}</span>
                                    <img v-if="myRank.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-if="myRank.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':isNight}" v-show="rankList.userId!=user.id" v-for="(rankList,index) in myInFriendRank">
                           <!-- <img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">-->
                            <span :class="{'rank_cup':true,'rank_cupNight':isNight}">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':isNight}">
                                <img class="rank_headImg" :src="rankList.faceUrl" alt="">
                                <div class="rank_name">{{rankList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                    <div :class="{'clock_time':true/*,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2*/}">{{rankList.time}}</div>
                                    <div @click.stop="addCare(rankList,index)">
                                        <span>{{rankList.careCount||0}}</span>
                                        <img v-if="rankList.caremy==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                        <img v-if="rankList.caremy>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <!--总排行-->
                <div class="clock_rank clock_rank2 swiper-slide swiper-no-swiping">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':isNight}">
                        <!--<img class="rank_cup" v-if="allRank.rank==1" src="../images/rank1.png" alt="">
                        <img class="rank_cup" v-if="allRank.rank==2" src="../images/rank2.png" alt="">
                        <img class="rank_cup" v-if="allRank.rank==3" src="../images/rank3.png" alt="">-->
                        <span :class="{'rank_cup':true,'rank_cupNight':isNight}">{{allRank.rank}}</span>
                        <div class="rank_main" style="border: 0;">
                            <img class="rank_headImg" :src="allRank.faceUrl" alt="">
                            <div class="rank_name">{{allRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                <div :class="{'clock_time':true/*,'rank1Color':allRank.rank==1,'rank2Color':allRank.rank==2,'rank3Color':allRank.rank==3*/}">{{allRank.time}}</div>
                                <div>
                                    <span>{{allRank.careCount||0}}</span>
                                    <img v-if="allRank.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-if="allRank.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':isNight}" v-if="allRannList.userId!=user.id" v-for="(allRannList,index) in allRankList">
                            <!--<img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">-->
                            <span :class="{'rank_cup':true,'rank_cupNight':isNight}">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':isNight}">
                                <img class="rank_headImg" :src="allRannList.faceUrl" alt="">
                                <div class="rank_name">{{allRannList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                    <div :class="{'clock_time':true/*,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2*/}">{{allRannList.time}}</div>
                                    <div>
                                        <span>{{allRannList.careCount||0}}</span>
                                        <img v-if="allRannList.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                        <img v-if="allRannList.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var sleepRank = {
        template: '#sleepRank'
    }
    export default {
        data() {
            return {
                myRank:'',
                myInFriendRank:[],
                allRank:'',
                allRankList:[],
                isNight:false,
                continueDay:0,
                allDay:0,
                earlyPre:0,
                allCount:0,
                clock_careCount:0,
                sleepRank_title:'',
                swipersettime:null
            }
        },
        props:{
            user:{
                type:Object
            },friendMoodsSpe: {
                type:Object
            },
            friendMoods: {
                type:Object
            }
        },
        beforeCreate: function () {
            console.log("beforeCreate")
            let _this = this;
            //var subsid = _this.$route.params.id;
            let time=new Date();
            var typeId = _this.$route.query.type;
            var clockDay = time.getDate();
            var clockMonth =time.getMonth()+1;
            var clockYear = time.getFullYear();




            _this.$http.get(web.API_PATH+'record/sleep/get/all/day/count/_userId_/'+typeId+'').then(data => {
                if(data.data.status===1){
                    _this.allDay= data.data.data;
                }
            });
            _this.$http.get(web.API_PATH+'record/sleep/get/continue/day/count/_userId_/'+typeId+'').then(data => {
                if(data.data.status===1){
                    _this.continueDay= data.data.data;
                }
            });

            _this.$http.get(web.API_PATH+'record/sleep/all/user/count/'+typeId+'').then(data => {
                if(data.data.status===1){
                    _this.allCount=data.data.data;
                }
            });
            _this.$http.get(web.API_PATH+'record/sleep/get/early/per/_userId_/'+typeId+'').then(data => {
                if(data.data.status===1){
                    _this.earlyPer=data.data.data.toFixed(2);
                }
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + "sleep/daily/relation/rank/"+typeId+"/_userId_/10/"+clockDay+"/"+clockMonth+"/"+clockYear+"",
            }).then(function (data) {
                console.log(data)
                _this.myRank = data.data.data.userRank||{};
                //console.log(_this.myRank)
                _this.myInFriendRank = data.data.data.allRank||[];
                for(var i=0,l=_this.myInFriendRank.length;i<l;i++){
                    _this.myInFriendRank[i].careCount = _this.myInFriendRank[i].careCount||0;
                }
                console.log( _this.myInFriendRank)
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + "sleep/daily/rank/"+typeId+"/_userId_/10/"+clockDay+"/"+clockMonth+"/"+clockYear+"",
            }).then(function (data) {
                _this.allRank = data.data.data.userRank||{};
                _this.allRankList = data.data.data.allRank||[];
                for(var i=0,l=_this.allRankList.length;i<l;i++){
                    _this.allRankList[i].careCount = _this.allRankList[i].careCount||0;
                }
                console.log( _this.allRankList)
            }, function (data) {
            });
        },
        mounted:function () {
            var _this = this;
            var typeId = this.$route.query.type;

            if(typeId==3){
                this.isNight= true;
                this.sleepRank_title="早睡排行";
            }else{
                this.sleepRank_title="早起排行";
            }


            var myRankSwiper = new Swiper ('.rank_Bgbox',{
                speed:500,
                initialSlide :1,
                onSlideChangeStart: function(){
                    $(".rank_box").css('height', 'auto');
                }
            });
            $('.clock_tab div').on('touchstart mousedown',function () {
                myRankSwiper.slideTo($(this).index());
                var clock_rank1Width = $('.clock_rank1').height();
                var clock_rank2Width = $('.clock_rank2').height();
                $('.tabMove').removeClass('tab_goleft').removeClass('tab_goRight');
                $('.clock_tab .clock_tabActive').removeClass('clock_tabActive');
                $(this).addClass('clock_tabActive')
                $('.rank_Bgbox').css('height','auto');
                if(_this.swipersettime!=null){
                    clearTimeout(_this.swipersettime);
                }
                if($(this).index()==1){
                    $('.tabMove').addClass('tab_goRight');
                    _this.swipersettime = setTimeout(function () {
                            $('.rank_Bgbox').css('height',clock_rank2Width+15);
                        },500)
                }else{
                    $('.tabMove').addClass('tab_goleft');
                    _this.swipersettime = setTimeout(function () {
                        $('.rank_Bgbox').css('height',clock_rank1Width+15);
                    },500)
                }
            })

        },
        methods:{
            addCare:function (mood,index) {
                let _this = this;
                if(mood.userId !=_this.user.id && mood.caremy==0){
                    console.info(mood)
                    _this.$http.put(web.API_PATH+'mood/care/add',{"moodId":null,"userId":null,'type':mood.type,'withId':mood.id}).then(response => {
                        if(response.data.status===1){
                            console.info(index);
                            console.info(_this.myInFriendRank[index]);

                            _this.myInFriendRank[index].careCount= response.data.data;
                            _this.myInFriendRank[index].caremy= 1;
                            _this.$set(_this.myInFriendRank, index, _this.myInFriendRank[index]);
                            /*_this.allRankList =  xqzs.mood.initMoodsData(_this.allRankList,false,_this.user.id);*/
                            console.log( _this.allRankList)

                        }
                    });
                }
            },
            care:function (o) {
                console.info(o)
            }
        }

    }
</script>
<style>
    .clock_box{
        height:100%;
        background: #e2f4fe;
    }
    .clock_boxNight{
        background: #5f5975;
    }
    .clock_top{
        padding:2.471rem 0.88235rem 0 0.88235rem;
        position: relative;
        color: #666666;
    }
    .clock_topNight{
        color: #f4f4f7;
    }
    .clock_count{
        background: url("../images/clockDay2.png") no-repeat;
        background-size: 100% 100%;
        height:11.03rem;
        position: relative;
    }
    .clock_countNight{
        background: url("../images/clockNight2.png") no-repeat;
        background-size: 100% 100%;
    }
    .clock_head{
        width: 3.53rem;
        height: 3.53rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top:0.88235rem;
        left:50%;
        margin-left: -30px;
        box-shadow: rgba(24, 24, 24,0.38) 0px 2.5px 5px;
        z-index: 1;
    }
    .clock_head img{
        width:3.53rem;
        height:3.53rem;
    }
    .clock_lists{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: absolute;
        top: 3.8235rem;
        width:100%;
        font-size: 1.235rem;
        line-height: 1.294rem;
    }
    .clock_lists>div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }
    .clock_lists p{
        font-size: 0.8235rem;
        color: #807e7e;
        line-height: 0.88235rem;
        margin-bottom: 1rem;
    }
    .clock_listsDay{
        font-size: 0.88235rem;
    }
    .clock_listsNight p{
        color: #e9e9ec;
    }
    .clock_ratio{
        width:100%;
        text-align: center;
        font-size: 0.7059rem;
        position: absolute;
        bottom:1.7647rem;
    }
    .clock_tab{
        width:12rem;
        height:2rem;
        margin:0 auto;
        margin-top:1.1765rem;
        border-radius: 1rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        font-size:0.8235rem;
        line-height: 2rem;
        border:1px solid #fff;
        color: #333;
    }
    .clock_tab>div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .clock_tabNight>div{
        color: #fff;
    }
    .tabMove{
        height: 100%;
        width:50%;
        background: #fff;
        border-radius: 1rem;
        position: absolute;
        left:50%;
        top:-1px;
        z-index:-1;
        border:1px solid #fff;
        transition:transform .5s;
        -webkit-transition:transform .5s;
    }
    .tab_goleft{

        transform: translate3d(-100%, 0px, 0px);
        -webkit-transform: translate3d(-100%, 0px, 0px);
    }
    .tab_goRight{
        transform: translate3d(0, 0px, 0px);
        -webkit-transform: translate3d(0, 0px, 0px);
    }
    .clock_tabNight .clock_tabActive{
        color: #333;
    }
    .rank_list:last-of-type{
        border-bottom: 0;
    }
    .rank_list{
        height:3.53rem;
        background: #fff;
        padding-left:2.70589rem;
        position: relative;
        border-bottom: 0.06rem solid #eee;
    }
    .rank_listNight{
        /*background: rgba(255,255,255,0.2);*/
    }
    .rank_cup{
        position: absolute;
        top:50%;
        margin-top:-12px;
        left:0.88235rem;
        width:1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.94118rem;
        color: #666;
        text-align: center;
    }
    .rank_cupNight{
        color:#333;
    }
    .me_rank{
        margin-bottom: 0.88235rem;
    }
    .rank_main{
        height:3.53rem;
        position: relative;
        line-height: 3.53rem;
        padding-right: 0.88235rem;
    }
    .rank_border{

    }
    .rank_borderNight{

    }
    .rank_headImg{
        height:2.35rem;
        width:2.35rem;
        display: block;
        float: left;
        margin-top:0.588rem;
        border-radius: 0.294rem;
    }
    .rank_name{
        font-size: 0.8235rem;
        color: #333;
        float: left;
        margin-left:0.9412rem;
    }
    .rank_right{
        float: right;
    }
    .rank_right>div{
        float: left;
    }
    .clock_time{
        margin-right:1.9412rem;
        font-size: 0.88235rem;
        color: #666;
    }
    .rank_right img{
        display: block;
        width:0.9412rem;
        height:0.88235rem;
    }
    .rank_right span{
        line-height: 0.7647rem;
        font-size: 0.7059rem;
        color: #999;
        display: block;
        text-align: center;
        margin-top: 0.8rem;
        margin-bottom: 0.2941rem;
    }
    .rank_rightNight span{
        color:#ccc;
    }
    .goleft{
        -webkit-transition:transform .5s;
        transition:transform .5s;
        /*margin-left: -100%;*/
        -webkit-transform:translate3d(-50%,0,0);
        transform:translate3d(-50%,0,0)
    }
    .goright{
        -webkit-transition:transform .5s;
        transition:transform .5s;
       /* margin-left: 0%;*/
        -webkit-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)
    }
    .rank_Bgbox{
        width:100%;
        overflow: hidden;
        margin-bottom: 0.88235rem;
    }
    .rank_box{
        width:200%;
        margin-top: 0.70588rem;
    }
    .rank1Color{
        color: #ffc800;
    }
    .rank2Color{
        color: #c3c1c1;
    }
    .rank3Color{
        color: #c27502;
    }
</style>


