<template id="friendIndex">
    <div class="myIndex_box">
        <div v-title>好友{{nickName}}的主页</div>
        <div class="banner index_banner">
            <v-banner></v-banner>
            <div class="userHeaderImg">
                <router-link :to="friendSetLink">
                    <img :src="friend.faceUrl" alt="">
                </router-link>
            </div>
        </div>
        <!--banner end -->

        <div class="chart_box">
            <v-chart :chartData="chartData"></v-chart>
        </div>


    </div>


</template>

<script>


    import chart from "./chart.vue"
    import banner from "./banner.vue"
    var friendCenter = {
        template: '#friendCenter'
    };
    export default {
        data() {
            return {
                friend: {},
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
        beforeCreate:function () {
            let _this = this;

            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/' + _this.$route.query.friendId,
            }).then(function (data) {//es5写法

                if (data.body.data) {
                    console.log(data.body.data)
                    _this.friend = (data.body.data);
                    _this.nickName = _this.friend.nickName
                    _this.friendSetLink = "/me/friendsCount/friendSet/?friendId=" + _this.$route.query.friendId;
                }
            }, function (error) {
                //error
            });
        },
        methods: {},
        mounted: function () {
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


        },


        components: {
            "v-chart": chart, "v-banner": banner
        }
    }


</script>
<style>
    .userHeaderImg {
        position: absolute;
        left: 50%;
        bottom: -32px;
        margin-left: -32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        padding: 2px;
    }

    .userHeaderImg img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: auto;
        display: block;
    }

</style>