<template id="friendCenter">
    <div class="myIndex_box friendIndex_box">

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
                        <span>起床时间</span>
                        <div class="class_info">
                            <div>一</div>
                            <div>二</div>
                            <div>三</div>
                            <div>四</div>
                            <div>五</div>
                            <div>六</div>
                            <div>日</div>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                        <span style="height:0.88235rem;">{{classGetup&&classGetup.today.shorttime}}</span>
                        <div class="class_info" style="height:0.588235rem;">
                            <div v-for="item in classGetup.list">
                                <template v-if="item.shorttime!=''">{{item.shorttime}}</template>
                                <template v-if="item.weekix<=classGetup.today.weekix&&item.shorttime==''">
                                    <img src="../images/norecord.png" alt="">
                                </template>
                            </div>
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
                        <span>今日心情</span>
                        <div class="class_info">
                            <div>一</div>
                            <div>二</div>
                            <div>三</div>
                            <div>四</div>
                            <div>五</div>
                            <div>六</div>
                            <div>日</div>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                                <span>
                                    <img :src="todayMood.smailUrl" alt="">
                                </span>
                        <div class="class_info">
                            <div v-for="item in moodList">
                                <template>
                                    <img :src="item.smailUrl" alt="">
                                </template>
                            </div>
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
                        <span>今日完成</span>
                        <div class="class_info">
                            <div>一</div>
                            <div>二</div>
                            <div>三</div>
                            <div>四</div>
                            <div>五</div>
                            <div>六</div>
                            <div>日</div>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                        <span style="height:0.88235rem;">{{classHabit&&classHabit.today.finishNum}}</span>
                        <div class="class_info">
                            <div v-for="item in classHabit.list">
                                <template v-if="item.finishNum!=0">
                                    <img src="../images/habitf.png" alt="">
                                </template>
                                <template v-if="item.finishNum==0&&classHabit.today.weekix>item.weekix">
                                    <img src="../images/habitnof.png" alt="">
                                </template>
                            </div>
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
                        <span>今日步数</span>
                        <div class="class_info">
                            <div>一</div>
                            <div>二</div>
                            <div>三</div>
                            <div>四</div>
                            <div>五</div>
                            <div>六</div>
                            <div>日</div>
                        </div>
                    </div>
                    <div class="class_titleBottom">
                        <span style="height:0.88235rem;">{{classStep&&stepChange(classStep.today.step)}}</span>
                        <div class="class_info">
                            <div v-for="item in classStep.list">
                                <template v-if="classStep.today.weekix>=item.weekix">{{stepChange(item.step)}}</template>
                                <template v-if="classStep.today.weekix<item.weekix"></template>
                            </div>
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
    export default {
        data() {
            return {
                friend: {},
                isLookFriend: true,
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
            getWeekClass:function () {
                let _this = this;
                let friendId = _this.$route.params.Id;
                _this.$http.get(web.API_PATH+'user/index/week/'+friendId).then(function (data) {
                    var res = data.data.data
                    console.log(res)
                    _this.classGetup = res.getUp;
                    _this.classCalendar = res.mood;
                    console.log(_this.classCalendar.today)
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
                    console.log( _this.todayMood)


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
            'v-scroll':scroll
        }
    }


</script>
<style>
    .friendIndex_box {
        background: #fff !important;
    }
    .friendIndex_box .IndexAdd>div:active{
        background: none;
    }
    .friendIndex_box .index_banner{
        height:8.8235rem;
    }
    .index_banner img{
        height:100%;
    }
</style>