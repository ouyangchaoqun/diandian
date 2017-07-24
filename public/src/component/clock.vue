<template id="clock">
    <div :class="{'clock_box':true,'clock_boxNight':recordType}">
        <div :class="{'clock_top':true,'clock_topNight':recordType}">
            <div class="clock_head">
                <img :src="myRank.faceUrl" alt="">
            </div>
            <div :class="{'clock_count':true,'clock_countNight':recordType}">
                <div :class="{'clock_lists':true,'clock_listsNight':recordType}">
                    <div>
                        <p>起床时间</p>
                        <div>{{myRank.time}}</div>
                    </div>
                    <div>
                        <p>连续天数</p>
                        <div>XX</div>
                    </div>
                    <div>
                        <p>打卡天数</p>
                        <div>XX</div>
                    </div>
                </div>
                <div class="clock_ratio">32444人正在参加，你比70%的人都起的早。</div>
            </div>
        </div>

        <div :class="{'clock_tab':true,'clock_tabNight':recordType}">
            <div >好友排行</div>
            <div class="clock_tabActive">总排行</div>
        </div>
        <div class="rank_Bgbox">
            <div class="rank_box goleft">
                <div class="clock_rank">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':recordType}">
                        <span :class="{'rank_cup':true,'rank_cupNight':recordType}">{{myRank.rank}}</span>
                        <div class="rank_main">
                            <img class="rank_headImg" :src="myRank.faceUrl" alt="">
                            <div class="rank_name">{{myRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':recordType}">
                                <div class="clock_time">{{myRank.time}}</div>
                                <div>
                                    <span>2</span>
                                    <img src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':recordType}" v-for="(rankList,index) in myInFriendRank">
                            <img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">
                            <span :class="{'rank_cup':true,'rank_cupNight':recordType}" v-if="index>2">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':recordType}">
                                <img class="rank_headImg" :src="rankList.faceUrl" alt="">
                                <div class="rank_name">{{rankList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':recordType}">
                                    <div :class="{'clock_time':true,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2}">{{rankList.time}}</div>
                                    <div>
                                        <span>2</span>
                                        <img src="../images/mood_icon_dianz_pre.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <!--总排行-->
                <div class="clock_rank">
                    <div :class="{'rank_list':true,'me_rank':true,'rank_listNight':recordType}">
                        <span :class="{'rank_cup':true,'rank_cupNight':recordType}">{{allRank.rank}}</span>
                        <div class="rank_main" style="border: 0;">
                            <img class="rank_headImg" :src="allRank.faceUrl" alt="">
                            <div class="rank_name">{{allRank.nickName}}</div>
                            <div :class="{'rank_right':true,'rank_rightNight':recordType}">
                                <div class="clock_time">{{allRank.time}}</div>
                                <div>
                                    <span>2</span>
                                    <img src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li :class="{'rank_list':true,'rank_listNight':recordType}" v-for="(allRannList,index) in allRankList">
                            <img class="rank_cup" v-if="index==0" src="../images/rank1.png" alt="">
                            <img class="rank_cup" v-if="index==1" src="../images/rank2.png" alt="">
                            <img class="rank_cup" v-if="index==2" src="../images/rank3.png" alt="">
                            <span :class="{'rank_cup':true,'rank_cupNight':recordType}" v-if="index>2">{{index+1}}</span>
                            <div :class="{'rank_main':true,'rank_border':true,'rank_borderNight':recordType}">
                                <img class="rank_headImg" :src="allRannList.faceUrl" alt="">
                                <div class="rank_name">{{allRannList.nickName}}</div>
                                <div :class="{'rank_right':true,'rank_rightNight':recordType}">
                                    <div :class="{'clock_time':true,'rank1Color':index==0,'rank2Color':index==1,'rank3Color':index==2}">{{allRannList.time}}</div>
                                    <div>
                                        <span>2</span>
                                        <img src="../images/mood_icon_dianz_pre.png" alt="">
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
                recordType:false
            }
        },
        beforeCreate: function () {
            console.log("beforeCreate")
            //let _this = this;
            //var subsid = _this.$route.params.id;
           /* var typeId = 2;
            var clockDay = 21;
            var clockMonth = 7;
            var clockYear = 2017;*/
            this.$http({
                method: 'GET',
                url: web.API_PATH + "sleep/daily/relation/rank/2/1273/5/21/7/2017",
            }).then(function (data) {
                //console.log(data)
                this.myRank = data.data.data.userRank;
                this.myInFriendRank = data.data.data.allRank;
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + "sleep/daily/rank/2/1273/5/21/7/2017",
            }).then(function (data) {
                console.log(data)
                this.allRank = data.data.data.userRank;
                this.allRankList = data.data.data.allRank;
            }, function (data) {
            });
        },
        mounted:function () {
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


