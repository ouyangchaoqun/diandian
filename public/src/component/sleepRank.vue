<template id="sleepRank">
    <div class="clock_box" :class="{clock_boxNight:isNight}">
        <v-scroll  :on-infinite="onInfinite" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">
        <div v-title>{{sleepRank_title}}</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div  class="clock_top" :class="{clock_topNight:isNight}">
            <div class="clock_head">
                <img @click="goRecordCount()" :src="user.faceUrl" alt="">
            </div>
            <div class="clock_count" v-show="!isNight">
                <div class="clock_lists" >
                    <div>
                        <p >起床时间</p>
                        <div>{{myFirst.time}}</div>
                    </div>
                    <div>
                        <p >连续早起</p>
                        <div>{{continueDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                    <div>
                        <p >累计早起</p>
                        <div>{{allDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                </div>
                <div class="clock_ratio">{{date}}共有{{allCount}}人陪我早起，收获{{myFirst.careCount||0}}个点赞</div>
            </div>
            <div class="clock_count clock_countNight"   v-show="isNight">
                <div class="clock_lists clock_listsNight">
                    <div>
                        <p >睡觉时间</p>
                        <div>{{myFirst.time}}</div>
                    </div>
                    <div>
                        <p>连续早睡</p>
                        <div>{{continueDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                    <div>
                        <p>累计早睡</p>
                        <div>{{allDay}}<span class="clock_listsDay">天</span> </div>
                    </div>
                </div>
                <div class="clock_ratio" >{{date}}共有{{allCount}}人陪我早睡，收获{{myFirst.careCount||0}}个点赞</div>
            </div>
        </div>

        <div class="clock_tab" :class="{clock_tabNight:isNight}" style="position: relative;">
            <div  class="tab_title">好友排行</div>
            <div class="clock_tabActive tab_title tab_title_right"  >总排行</div>
            <div class="tabMove"></div>
        </div>

        <div class="rank_Bgbox">
            <div class="rank_box goleft">
                <div class="clock_rank clock_rank1">
                    <div  class="rank_list me_rank" :class="{rank_listNight:isNight}">

                        <span class="rank_cup" :class="{rank_cupNight:isNight}">{{myFirst.rank}}</span>
                        <div class="rank_main">
                            <img class="rank_headImg" :src="user.faceUrl" alt="">
                            <div class="rank_name">
                                <div class="rank_NickName">{{cutNickName(user.nickName)}}</div>
                                <div @click="addComment(myFirst.id)" class="addLy" v-if="myFirst.content==null">留言</div>
                                <div class="addMessage" v-if="myFirst.content!=null">{{myFirst.content}}</div>
                                <div></div>
                            </div>
                            <div class="clock_time" v-if="myFirst.rank!=''" :class="{no_record:myFirst.careCount==null}">{{myFirst.time}}</div>
                            <div class="clock_time" v-if="myFirst.rank==''" :class="{no_record:myFirst.careCount==null}">{{myFirst.notRecordTxt}}</div>
                        </div>
                        <div class="rank_right" :class="{rank_rightNight:isNight}">
                            <div  class="care_icon" v-if="myFirst.careCount!=null" @click.stop="">
                                <span>{{myFirst.careCount||0}}</span>
                                <img v-show="myFirst.careCount==0||myFirst.careCount==null" src="../images/mood_icon_dianz_nor.png" alt="">
                                <img v-show="myFirst.careCount>0" src="../images/mood_icon_dianz_pre.png" alt="">
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li class="rank_list " :class="{rank_listNight:isNight}" v-for="(rankList,index) in rankLists"><!--v-show="rankList.userId!=user.id" -->

                            <span class="rank_cup" :class="{rank_cupNight:isNight}">{{index+1}}</span>
                            <div class="rank_main rank_border" :class="{rank_borderNight:isNight}">
                                <img class="rank_headImg" :src="rankList.faceUrl" alt="">
                                <div class="rank_name">
                                    <div class="rank_NickName">{{cutNickName(rankList.nickName)}}</div>
                                    <div class="addMessage">{{rankList.content}}</div>
                                </div>
                                <div class="clock_time">{{rankList.time}}</div>
                            </div>
                            <div class="rank_right" :class="{rank_rightNight:isNight}">
                                <div @click.stop="addCare(rankList)" class="care_icon">
                                    <span>{{rankList.careCount||0}}</span>
                                    <img v-show="rankList.caremy==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-show="rankList.caremy>0" :class="{heartUp:rankList.hit}" src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <!--总排行-->

                    <div class="clock_rank clock_rank2 ">
                        <div class="rank_list me_rank" :class="{rank_listNight:isNight}">

                            <span class="rank_cup" :class="{rank_cupNight:isNight}">{{myFirst.rank}}</span>
                            <div class="rank_main" style="border: 0;">
                                <img class="rank_headImg" :src="user.faceUrl" alt="">
                                <div class="rank_name">
                                    <div class="rank_NickName"> {{cutNickName(user.nickName)}}</div>

                                    <div @click="addComment(myFirst.id)" class="addLy" v-if="myFirst.content==null">留言</div>
                                    <div class="addMessage" v-if="myFirst.content!=null">{{myFirst.content}}</div>
                                    <div class="clock_time" v-if="myFirst.rank!=''":class="{no_record:myFirst.careCount==null}">{{myFirst.time}}</div>
                                    <div class="clock_time" v-if="myFirst.rank==''" :class="{no_record:myFirst.careCount==null}">{{myFirst.notRecordTxt}}</div>
                                </div>
                            </div>
                            <div class="rank_right" :class="{rank_rightNight:isNight}">
                                <div class="care_icon" v-if="myFirst.careCount!=null" @click="fabulousList()">
                                    <span>{{myFirst.careCount||0}}</span>
                                    <img v-show="myFirst.careCount==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                    <img v-show="myFirst.careCount>0"  src="../images/mood_icon_dianz_pre.png" alt="">
                                </div>
                            </div>
                        </div>
                        <ul class="addRankLists">
                            <li class="rank_list" :class="{rank_listNight:isNight}" v-for="(allRannList,index) in rankLists"><!--v-show="allRannList.userId!=user.id"-->

                                <span  class="rank_cup" :class="{rank_cupNight:isNight}">{{index+1}}</span>
                                <div class="rank_main rank_border " :class="{rank_borderNight:isNight}">
                                    <img class="rank_headImg" :src="allRannList.faceUrl" alt="">
                                    <div class="rank_name">
                                        <div class="rank_NickName">{{cutNickName(allRannList.nickName)}}</div>
                                        <div class="addMessage">{{allRannList.content}}</div>
                                    </div>
                                    <div  class="clock_time">{{allRannList.time}}</div>
                                </div>
                                <div class="rank_right" :class="{rank_rightNight:isNight}">
                                    <div class="care_icon" @click="addCare(allRannList)">
                                        <span>{{allRannList.careCount||0}}</span>
                                        <img v-show="allRannList.caremy==0" src="../images/mood_icon_dianz_nor.png" alt="">
                                        <img v-show="allRannList.caremy>0" :class="{heartUp:allRannList.hit}" src="../images/mood_icon_dianz_pre.png" alt="">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

            </div>
        </div>
        </v-scroll>
    </div>
</template>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    var sleepRank = {
        template: '#sleepRank'
    }
    export default {
        components: {
           'v-showLoad':showLoad,
            'v-scroll': scroll
        },
        data() {
            return {
                myRank: {rank:"",time:"--:--",notRecordTxt:"还未打卡"},
                myInFriendRank:[],
                allRank: {rank:"",time:"--:--",notRecordTxt:"还未打卡"},
                allRankList:[],
                myFirst:{rank:"",time:"--:--",notRecordTxt:"还未打卡"},
                rankLists:[],
                isNight:false,
                continueDay:0,
                allDay:0,
                earlyPre:0,
                allCount:0,
                clock_careCount:0,
                sleepRank_title:'',
                swipersettime:null,
                showLoad:false,
                date:"",
                counter:1,
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                isPageEnd:false,
                num: 8,
                typeId:'',
                time:'',
                clockDay:'',
                clockMonth:'',
                clockYear:''

            }
        },
        props:{
            user:{
                type:Object
            }
        },
        beforeCreate: function () {
            console.log("beforeCreate")

        },
        mounted:function () {

            let _this = this;
            xqzs.wx.setConfig(_this);
            //var subsid = _this.$route.params.id;
            _this.time = new Date();
            _this.typeId = _this.$route.query.type;
            _this.clockDay = _this.time.getDate();
            _this.clockMonth =_this.time.getMonth()+1;
            _this.clockYear = _this.time.getFullYear();
            _this.$http.get(web.API_PATH+'sleep/daily/info/_userId_/'+_this.typeId+'').then(data => {
                if(data.data.status===1){
                    _this.allDay= data.data.data.allDays;
                    _this.continueDay= data.data.data.continueDays;
                    _this.allCount= data.data.data.userNum;
                }

            });
            let url1  = web.API_PATH + "sleep/daily/relation/rank/"+_this.typeId+"/_userId_/100/"+_this.clockDay+"/"+_this.clockMonth+"/"+_this.clockYear+"";
            let url2 = web.API_PATH + "sleep/daily/rank/page/"+_this.typeId+"/_userId_/"+_this.num+"/"+_this.clockDay+"/"+_this.clockMonth+"/"+_this.clockYear+"/"+_this.counter;

//            //好友排行
//            this.$http({
//                method: 'GET',
//                url: web.API_PATH + "sleep/daily/relation/rank/"+typeId+"/_userId_/100/"+clockDay+"/"+clockMonth+"/"+clockYear+"",
//            }).then(function (data) {
//                console.log(data)
//                if(data.data.status==1){
//                    _this.myRank = data.data.data.userRank||_this.myRank;
//                    //console.log(_this.myRank)
//                    _this.myInFriendRank = data.data.data.allRank||[];
//                    for(var i=0,l=_this.myInFriendRank.length;i<l;i++){
//                        _this.myInFriendRank[i].careCount = _this.myInFriendRank[i].careCount||0;
//
//                        _this.myInFriendRank[i].faceUrl=_this.wxFaceUrl(_this.myInFriendRank[i].faceUrl)
//                    }
////                    _this.date = data.data.data.date.year+"年"+data.data.data.date.month+"月"+data.data.data.date.day+"日";
//                    console.log( _this.myInFriendRank)
//                }
//            }, function (data) {
//            });
            //总排行
        _this.getRankList(url2)
            var typeId = this.$route.query.type;

            if(typeId==3){
                this.isNight= true;
                this.sleepRank_title="早睡排行";
            }else{
                this.sleepRank_title="早起排行";
            }
           setInterval(function () {
               $('#query_ticket').click()
           },10000)


            $('.clock_tab .tab_title').on('click',function () {
                let  domThis=this;
                var clock_rank1Width = $('.clock_rank1').height();
                var clock_rank2Width = $('.clock_rank2').height();
                $('.rank_box').removeClass('goleft').removeClass('goright')
                $('.tabMove').removeClass('tab_goleft').removeClass('tab_goRight');
                $('.clock_tab .clock_tabActive').removeClass('clock_tabActive');
               setTimeout(function () {
                   $(domThis).addClass('clock_tabActive')
               },150)
                $('.rank_Bgbox').css('height','auto');
                if(_this.swipersettime!=null){
                    clearTimeout(_this.swipersettime);
                }
                domThis.allRankList=[];
                if($(this).index()==1){
                    $('.tabMove').addClass('tab_goRight');
                    $('.rank_box').addClass('goleft')
                    _this.swipersettime = setTimeout(function () {
                            $('.rank_Bgbox').css('height',clock_rank2Width+15);
                        },500)
                    _this.getRankList(url2);

                }else{
                    $('.tabMove').addClass('tab_goleft');
                    $('.rank_box').addClass('goright')
                    _this.swipersettime = setTimeout(function () {
                        $('.rank_Bgbox').css('height',clock_rank1Width+15);
                    },500)
                    _this.getRankList(url1);
                }
            })

        },
        methods:{
            getRankList:function (url) {
                let _this = this;
                this.$http({
                    method: 'GET',
                    url: url,
                }).then(function (data) {
                    if(data.data.status==1){
                        _this.myFirst = data.data.data.userRank|| _this.allRank ;
                        _this.rankLists = data.data.data.allRank||[];
                        for(var i=0,l=_this.rankLists.length;i<l;i++){
                            _this.rankLists[i].careCount = _this.rankLists[i].careCount||0;
                            _this.rankLists[i].faceUrl=_this.wxFaceUrl(_this.rankLists[i].faceUrl)
                        }
                        _this.counter++;
                        _this.num = 8;

                    }
                    _this.showLoad=false;
                }, function (data) {
                    _this.showLoad=false;
                });
            },
            addComment:function (sleepId) {
                let vm = this;
                xqzs.mood.actionSheetEdit("取消","发送",function (v) {
                    console.log(v)
                    vm.$http.put(web.API_PATH+'sleep/reply/_userId_/'+sleepId,{content:v}).then(response => {
                        if(response.data.status===1){
                           location.reload()
                        }


                    }, response => {

                    });
                    console.log(v)

                },function (v) {

                },'最多19个字')
            },
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },
            share:function () {
                let _this=this;
                var typeId = _this.$route.query.type;
                _this.showLoad=true;
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'wei/xin/create/check/in/invite/card/_userId_/'+typeId
                }).then(function (bt) {
                    if(bt.body.status==1){
                        xqzs.weui.dialog({
                            title:'成就卡已经发送',
                            msg:'前往公众号查看，留住每次早起回忆',
                            submitText:'查看',
                            submitFun:function () {
                                try {
                                    WeixinJSBridge.call('closeWindow');
                                }catch (e){
                                }
                            }
                        })
                    }
                    _this.showLoad=false;
                })

            },
            //页面跳转
            goRecordCount:function () {
                if(!this.isNight)
                this.$router.push("/getUpStatistics");

            },


            addCare:function (item) {
                let _this = this;
                if(item.userId !=_this.user.id && item.caremy==0){
                    console.info(item)
                    _this.$http.put(web.API_PATH+'mood/care/add',{"moodId":null,"userId":null,'type':item.type,'withId':item.id}).then(response => {
                        if(response.data.status===1){
                            for(let i=0 ;i<_this.myInFriendRank.length;i++){
                                if(_this.myInFriendRank[i].id==item.id){
                                    _this.myInFriendRank[i].careCount= response.data.data;
                                    _this.myInFriendRank[i].caremy= 1;
                                    _this.myInFriendRank[i].hit= true;
                                    _this.$set(_this.myInFriendRank, i, _this.myInFriendRank[i]);
                                }
                            }
                            for(let i=0 ;i<_this.allRankList.length;i++){
                                if(_this.allRankList[i].id==item.id){
                                    _this.allRankList[i].careCount= response.data.data;
                                    _this.allRankList[i].caremy= 1;
                                    _this.allRankList[i].hit= true;
                                    _this.$set(_this.allRankList, i, _this.allRankList[i]);
                                }
                            }
                        }
                    });
                }
            },
            cutNickName:function (nickName) {
                if(!nickName){
                    return '';
                }
                var len = 8;
                if(nickName.length<=len){
                    return nickName;
                }
                return nickName.substr(0,8)+'...';
            },
            fabulousList:function () {
                this.$router.push('/fabulous')
            },

            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH + "sleep/daily/rank/page/"+vm.typeId+"/_userId_/"+vm.num+"/"+vm.clockDay+"/"+vm.clockMonth+"/"+vm.clockYear+"/"+vm.counter).then((response) => {
                    console.log(response)

                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data.data.allRank;
                    let i = 0;
                    let end = vm.pageEnd;
                    console.log(arr)
                    for (; i < arr.length; i++) {
                        vm.allRankList.push(arr[i]);
                    }
                    if (arr.length <vm.num) {
                        vm.isPageEnd=true;
                    }
                    console.log(vm.isPageEnd)

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            }
        }

    }
</script>
<style>
    .clock_rank{
        width:50%;
        float: left;
    }
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
    .clock_lists>div, .clock_lists p,.clock_ratio{ color:#fff}
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
        text-align: center;
        font-size:0.8235rem;
        line-height: 2rem;
        border:1px solid #fff;
        color: #333;
    }

    .clock_tab .tab_title{ z-index: 100; position: absolute; width: 50%;     height: 2rem;}
    .clock_tab .tab_title_right{ left:50%;}
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
        z-index:1;
        border:1px solid #fff;
        transition:transform .5s;
        -webkit-transition:transform .5s;
    }
    .tab_goleft{

        transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
    }
    .tab_goRight{
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }
    .clock_tabNight .clock_tabActive{
        color: #333;
    }
    .clock_box .rank_list:last-of-type{
        border-bottom: 0;
    }
    .clock_box .rank_list{
        background: #fff;
        display: flex;
        border-bottom: 0.06rem solid #eee;
        padding:0.765rem 0;
        width:100%;
        position: relative;
    }
    .rank_listNight{
        /*background: rgba(255,255,255,0.2);*/
    }
    .rank_cup{
        width:1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.94118rem;
        color: #666;
        text-align: center;
        height:0.71rem;
        line-height: 0.71rem;
        margin:0.88235rem 0.88235rem 0 0.88235rem;
    }
    .rank_cupNight{
        color:#333;
    }
    .me_rank{
        margin-bottom: 0.88235rem;
    }
    .rank_main{
         display: flex;
        line-height: 1;
        width: 76.4%;
        position: relative;
    }

    .rank_NickName{
        margin-top:0.176rem;
        font-size: 0.94rem;
        color: #333;
        margin-bottom: 0.70588rem;

    }
    .addLy{
        font-size: 0.70588rem;
        color: #066EA4;
    }
    .addMessage{
        font-size: 0.70588rem;
        color: #7C7B7B;
    }
    .rank_border{

    }
    .rank_borderNight{

    }
    .rank_headImg{
        height:2.35rem;
        width:2.35rem;
        display: block;
        border-radius: 0.294rem;
        margin-right:0.88235rem;
    }
    .clock_box .rank_right{
       position: absolute;
        right:0;
        top:0;
    }
    .clock_time{
        font-size: 0.88235rem;
        color: #666;
        line-height: 1;
        position: absolute;
        right:0;
        top:0;
    }
    .care_icon{padding: 0.8rem 0.88235rem 0.8rem 1.2rem}
    .clock_box .rank_right img{
        display: block;
        width:0.9412rem;
        height:0.88235rem;
    }
    .clock_box .rank_right span{
        line-height: 0.7647rem;
        font-size: 0.7059rem;
        color: #999;
        display: block;
        text-align: center;
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
        margin-top: 0.88235rem
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


