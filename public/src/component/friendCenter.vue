<template id="friendIndex">
    <div class="myIndex_box">
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
    var friendIndex = {
        template: '#friendIndex'
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
                friendSetLink: null

            }
        },
        methods: {},
        mounted: function () {
            let _this = this;


            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/' + _this.$route.query.friendId,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.friend = eval(data.data.data);
                    _this.friendSetLink = "/me/friendsCount/friendSet/?friendId=" +  _this.$route.query.friendId;
                }
            }, function (error) {
                //error
            });

            _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/' + _this.$route.query.friendId)
                .then((data) => {
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
                })
                .catch((response) => {

                });


        },


        components: {
            "v-chart": chart, "v-banner": banner
        }
    }


</script>
<style>


</style>