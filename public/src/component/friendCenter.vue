<template id="friendCenter">
    <div class="myIndex_box friendIndex_box">
        <div v-title>好友{{nickName}}的主页</div>
        <div class="banner index_banner">
            <!--<v-banner></v-banner>-->
            <img src="../images/indexBanner.jpg" alt="">
            <router-link :to="friendSetLink" class="headBox">
                <div class="userHeaderImg">
                    <img alt="" :src="wxFaceUrl(friend.faceUrl)">
                </div>
            </router-link>
            <div class="addName">陈小刚</div>
            <v-indexCount></v-indexCount>
        </div>
        <!--banner end -->

        <div class="chart_box" v-if="isLookFriend ">
            <v-chart :chartData="chartData"></v-chart>
        </div>
        <div class="canot-look" v-if="!isLookFriend "></div>

    </div>


</template>

<script>


    import chart from "./chart.vue"
    import banner from "./banner.vue"
    import indexCount from './indexCount.vue'
    var friendCenter = {
        template: '#friendCenter'
    };
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
                friendSetLink: null,
                nickName: ''

            }
        },

        methods: {
            wxFaceUrl:function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },
            initData: function () {
                let _this = this;
                _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/' + _this.$route.query.friendId)
                    .then(function (data) {
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

                let friendId = _this.$route.query.friendId;
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/' + friendId
                }).then(function (data) {//es5写法

                    if (data.body.data) {
                        console.log(data.body.data)
                        _this.friend = (data.body.data);
                        _this.nickName = _this.friend.nickName
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
            console.log("activated")
            let _this = this;
            _this.initData();
            xqzs.wx.setConfig(_this);
        },


        components: {
            "v-chart": chart, "v-banner": banner,
            'v-indexCount':indexCount
        }
    }


</script>
<style>
    .canot-look {
        clear: both;
        width: 90%;
        height: 10px;
        background: url(../images/xt.jpg) top center no-repeat;
        margin: 20px auto auto auto;
        margin-top: 50px;
    }

    .friendIndex_box {

    }



    .userHeaderImg img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: auto;
        display: block;
    }

</style>