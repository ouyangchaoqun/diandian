<template id="friendCenter">
    <div class="myIndex_box friendIndex_box">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>好友{{nickName}}的主页</div>
        <div class="banner index_banner">
            <!--<v-banner></v-banner>-->
            <img src="../images/indexBanner1.jpg" alt="">
            <router-link :to="friendSetLink" class="headBox">
                <div class="userHeaderImg">
                    <img alt="" :src="wxFaceUrl(friend.faceUrl)">
                </div>
            </router-link>
            <div class="addName">{{nickName}}</div>
        </div>
        <v-indexCount></v-indexCount>
        <ul class="centerClass">
            <li class="centerClassItem classGetup">
                <div class="classImg getUpImg"></div>
                <div class="classItem_top">
                    早起打卡
                </div>
                <div class="class_title">
                    <div class="class_titleTop">
                        <div v-for="item in classGetup.list">
                            <span>{{subDate(item.date)}}</span>
                        </div>
                    </div>
                    <div class="class_titleBottom">

                        <div v-for="item in classGetup.list">
                            <template v-if="item.shorttime!=''">{{item.shorttime}}</template>
                            <template v-if="item.shorttime==''">
                                <img src="../images/norecord.png" alt="">
                            </template>
                        </div>

                    </div>

                </div>
            </li>
            <li class="centerClassItem classCalendar">
                <div class="classImg rlImg"></div>
                <div class="classItem_top">
                    心情日历
                </div>
                <div class="class_title">
                    <div class="class_titleTop">
                        <div v-for="item in classCalendar.list">
                            <span>{{subDate(item.date)}}</span>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                            <div v-for="item in moodList">
                                <template>
                                    <img :src="item.smailUrl" alt="">
                                </template>
                            </div>
                    </div>

                </div>
            </li >
            <li class="centerClassItem classHabit">
                <div class="classImg xgImg"></div>
                <div class="classItem_top">
                    健康习惯
                </div>
                <div class="class_title">
                    <div class="class_titleTop">
                        <div v-for="item in classHabit.list">
                            <span>{{subDate(item.date)}}</span>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                        <div v-for="item in classHabit.list">
                            <template v-if="item.finishNum!=0">
                                <img src="../images/habitf.png" alt="">
                            </template>
                            <template v-if="item.finishNum==0">
                                <img src="../images/norecord.png" alt="">
                            </template>
                        </div>
                    </div>

                </div>
            </li>
            <li class="centerClassItem lastClassItem">
                <div class="classImg sportImg"></div>
                <div class="classItem_top">
                    运动步数
                </div>
                <div class="class_title">
                    <div class="class_titleTop">
                        <div v-for="item in classStep.list">
                            <span>{{subDate(item.date)}}</span>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                        <div v-for="item in classStep.list">
                            <template>{{stepChange(item.step)}}</template>
                        </div>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import scroll from './lib/scroll.vue'
    import banner from "./banner.vue"
    import indexCount from './indexCount.vue'
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                friend: {},
                isLookFriend: true,
                showLoad:false,
                chartData: [
                    {"days": ["1月1", "2", "3", "4", "5", "6", "7"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月8", "9", "10", "11", "12", "13", "14"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月15", "16", "17", "18", "19", "20", "21"], "moods": [0, 0, 0, 0, 0, 0, 0]},
                    {"days": ["1月22", '23', "24", "25", "26", "27", "28"], "moods": [0, 0, 0, 0, 0, 0, 0]}

                ],
                friendSetLink: '',
                classGetup:'',
                classCalendar:'',
                classHabit:'',
                classStep:'',
                moodList:'',
                todayMood:''

            }
        },

        methods: {
            stepChange:function (n) {
                if(n>=10000){
                    n = parseInt(n/1000) + 'k';
                }
                return n;
            },
            subDate:function (date) {
                date = date.substring(8);
                console.log(date)
                return date;
            },
            getWeekClass:function () {
                let _this = this;
                let friendId = _this.$route.params.Id;
                _this.showLoad = true
                _this.$http.get(web.API_PATH+'user/index/week/'+friendId).then(function (data) {
                    var res = data.data.data
                    _this.showLoad = false
                    _this.classGetup = res.getUp;
                    _this.classCalendar = res.mood;
                    _this.todayMood = res.mood.today;
                    let todayfaceIndex = 0;
                    if( _this.todayMood.moodValue){
                        todayfaceIndex =  _this.todayMood.moodValue;
                    }else {
                        todayfaceIndex = 0;
                        _this.todayMood.moodValue = 0;
                    }
                    _this.todayMood.smailUrl = web.IMG_PATH + "list_mood_0" + todayfaceIndex + ".png";
                    _this.$set( _this.todayMood)
                    _this.classHabit = res.habits;
                    _this.classStep = res.weRun;
                    let faceIndex = 0;
                    _this.moodList =  res.mood.list;
                    for(let i = 0;i<_this.moodList.length;i++){
                        if(_this.moodList[i].moodValue){
                            faceIndex = _this.moodList[i].moodValue;
                        }else{
                            faceIndex = 0;
                            _this.moodList[i].moodValue= 0;
                        }
                        _this.moodList[i].smailUrl = web.IMG_PATH + "list_mood_0" + faceIndex + ".png";
                        _this.$set(_this.moodList,i,_this.moodList[i]);
                    }
                })
            },
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },
            initData: function () {
                let _this = this;
                let friendId = this.$route.params.Id;
                _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/' + friendId)
                    .then(function (data) {
                        console.log(data.data.data[3])
                            if (data.data.status === 1) {
                                for (let i = 0; i < data.data.data.length; i++) {
                                    let week = {days: [], moods: []};
                                    for (let j = 0; j < data.data.data[i].length; j++) {
                                        week.days.push(data.data.data[i][j].day);
                                        week.moods.push(data.data.data[i][j].value);
                                    }
                                    _this.$set(_this.chartData, i, week)
                                }
                                console.log(_this.chartData)
                            }
                        }
                        , function (error) {
                            //error
                        });


                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/friend/'+friendId+'/_userId_'
                }).then(function (data) {//es5写法
                    console.log(data)
                    if (data.body.data) {
                        console.log(data.body.data)
                        _this.friend = (data.body.data);
                        _this.nickName = _this.friend.outName
                        _this.friendSetLink = "/me/friendsCount/friendSet/?friendId=" + friendId
                    }
                }, function (error) {
                    //error
                });

                _this.$http.get(web.API_PATH + "user/is/look/friend/_userId_/" + friendId)
                    .then(function (bt) {
                        console.log(bt)
                        if (bt && bt.body.status == 1) {
                            _this.isLookFriend = bt.body.data == 1 ? true : false;

                        }
                    })
            },
        },
        mounted: function () {
            let _this = this;
            _this.initData();
            _this.getWeekClass();
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.me);
        },


        components: {
            "v-banner": banner,
            'v-indexCount':indexCount,
            'v-scroll':scroll,
            'v-showLoad':showLoad
        }
    }


</script>
<style>
    .friendIndex_box {
        background: #fff !important;
    }
    .centerClassItem .classImg.getUpImg{
        background: url(../images/index_btn_get_up.png) no-repeat #ffefcb center;
        background-size: 1.4rem 1.4rem;
        border:0.03rem  solid #ffb700;
    }
    .centerClassItem .classImg.rlImg{
        background: url(../images/class_btn_rl.png) no-repeat rgba(251,208,190,1) center;
        background-size: 1.2rem ;
        border:0.03rem  solid rgba(255,102,51,1);
    }
    .centerClassItem .classImg.xgImg{
        background: url(../images/index_btn_habit.png) no-repeat #def3cd center;
        background-size: 1.03rem ;
        border: 0.03rem solid #71c06d;
    }
    .centerClassItem .classImg.sportImg{
        background: url(../images/class_btn_sport.png) no-repeat rgba(214,251,229,1) center;
        background-size: 1rem ;
        border: 0.03rem solid rgba(133,215,166,1);
    }
    .friendIndex_box .IndexAdd>div:active{
        background: none;
    }
    .friendIndex_box .centerClass{
        margin-bottom: 2rem;
    }
    .friendIndex_box .index_banner{
        height:8.8235rem;
    }
    .index_banner img{
        height:100%;
    }
</style>