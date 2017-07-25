<template id="clock">
    <div :class="{'clock_box':true,'clock_boxNight':isNight}">
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
                <div class="clock_ratio" v-if="!isNight">{{allCount}}人正在参加，你比{{earlyPer}}%的人都起的早。</div>
                <div class="clock_ratio" v-if="isNight">{{allCount}}人正在参加，你比{{earlyPer}}%的人都睡的早。</div>
            </div>
        </div>

        <div :class="{'clock_tab':true,'clock_tabNight':isNight}">
            <div >好友排行</div>
            <div class="clock_tabActive">总排行</div>
        </div>
        <div class="rank_Bgbox">
            <div class="rank_box goleft">
                <div class="clock_rank">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':isNight}">
                        <img class="rank_cup" v-if="myRank.rank==1" src="../images/rank1.png" alt="">
                        <img class="rank_cup" v-if="myRank.rank==2" src="../images/rank2.png" alt="">
                        <img class="rank_cup" v-if="myRank.rank==3" src="../images/rank3.png" alt="">
                        <span v-if="myRank.rank>3" :class="{'rank_cup':true,'rank_cupNight':isNight}">{{myRank.rank}}</span>
                        <div class="rank_main">
                            <img class="rank_headImg" :src="myRank.faceUrl" alt="">
                            <div class="rank_name">{{myRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                <div class="clock_time">{{myRank.time}}</div>
                                <div @click.stop="care(myRank)">
                                    <span>{{myRank.careCount||0}}</span>
                                    <img v-if="myRank.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-if="myRank.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':isNight}" v-for="(rankList,index) in myInFriendRank">
                            <img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">
                            <span :class="{'rank_cup':true,'rank_cupNight':isNight}" v-if="index>2">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':isNight}">
                                <img class="rank_headImg" :src="rankList.faceUrl" alt="">
                                <div class="rank_name">{{rankList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                    <div :class="{'clock_time':true,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2}">{{rankList.time}}</div>
                                    <div @click.stop="addCare(rankList,index)">
                                        <span>{{rankList.careCount||0}}</span>
                                        <img v-if="rankList.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                        <img v-if="rankList.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <!--总排行-->
                <div class="clock_rank">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':isNight}">
                        <img class="rank_cup" v-if="allRank.rank==1" src="../images/rank1.png" alt="">
                        <img class="rank_cup" v-if="allRank.rank==2" src="../images/rank2.png" alt="">
                        <img class="rank_cup" v-if="allRank.rank==3" src="../images/rank3.png" alt="">
                        <span v-if="allRank.rank>3" :class="{'rank_cup':true,'rank_cupNight':isNight}">{{allRank.rank}}</span>
                        <div class="rank_main" style="border: 0;">
                            <img class="rank_headImg" :src="allRank.faceUrl" alt="">
                            <div class="rank_name">{{allRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                <div class="clock_time">{{allRank.time}}</div>
                                <div>
                                    <span>{{allRank.careCount||0}}</span>
                                    <img v-if="allRank.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-if="allRank.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':isNight}" v-for="(allRannList,index) in allRankList">
                            <img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">
                            <span :class="{'rank_cup':true,'rank_cupNight':isNight}" v-if="index>2">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':isNight}">
                                <img class="rank_headImg" :src="allRannList.faceUrl" alt="">
                                <div class="rank_name">{{allRannList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':isNight}">
                                    <div :class="{'clock_time':true,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2}">{{allRannList.time}}</div>
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

    var clock = {
        template: '#clock'
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
                clock_careCount:0
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




            _this.$http.get(web.API_PATH+'record/sleep/all/user/count/'+typeId+'').then(data => {
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
                //console.log( _this.myInFriendRank)
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
            var typeId = this.$route.query.type;
            if(typeId==3){
                this.isNight= true;
            }
            $('.clock_tab div').on('touchstart mousedown',function () {
                $('.clock_tab div').removeClass('clock_tabActive');
                $(this).addClass('clock_tabActive');
                $('.rank_box').removeClass('goleft').removeClass('goright')
                //console.log($(this).index())
                if($(this).index()==1){
                    $('.rank_box').addClass('goleft')
                }else{
                    $('.rank_box').addClass('goright')
                }
            })
        },
        methods:{
            addCare:function (mood,index) {
                let _this = this;
                if(mood.userId !=_this.user.id){
                    _this.$http.put(web.API_PATH+'mood/care/add',{"moodId":null,"userId":null,'type':mood.type,'withId':mood.id}).then(response => {
                        if(response.data.status===1){
                            _this.myInFriendRank[index].careCount= response.data.data;
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
        background: url("../images/clockDay.png") no-repeat;
        background-size: 100% 100%;
        height:11.03rem;
        position: relative;
    }
    .clock_countNight{
        background: url("../images/clockNight.png") no-repeat;
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
        border:1px solid #ccc;
        overflow: hidden;
        color: #fff;
    }
    .clock_tab>div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        background: #b8baca;
    }
    .clock_tabNight>div{
        background: rgba(219,219,221,0.4);
        color: #ccc;
    }

    .clock_tab .clock_tabActive{
        background: #fff;
        color: #333;
    }
    .clock_tabNight .clock_tabActive{
        background: rgba(254,254,254,0.5);
    }
    .clock_rank{
        float: left;
        width:50%;
    }
    .rank_list{
        height:3rem;
        background: #fff;
        padding-left:2.70589rem;
        position: relative;
    }
    .rank_listNight{
        background: rgba(255,255,255,0.2);
    }
    .rank_cup{
        position: absolute;
        top:0.7647rem;
        left:0.88235rem;
        width:1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.94118rem;
        color: #666;
    }
    .rank_cupNight{
        color:#333;
    }
    .me_rank{
        margin-bottom: 0.88235rem;
    }
    .rank_main{
        height:2.9412rem;
        position: relative;
        line-height: 3rem;
        padding-right: 0.88235rem;
    }
    .rank_border{
        border-bottom: 0.06rem solid #eee;
    }
    .rank_borderNight{
        border-color: rgba(204,204,204,0.2);
    }
    .rank_headImg{
        height:1.706rem;
        width:1.706rem;
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
        margin-top: 0.588rem;
        margin-bottom: 0.2941rem;
    }
    .rank_rightNight span{
        color:#ccc;
    }
    .goleft{
        transition:all .8s;
        margin-left: -100%;
    }
    .goright{
        transition:all .8s;
        margin-left: 0%;
    }
    .rank_Bgbox{
        width:100%;
        overflow: hidden;
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


