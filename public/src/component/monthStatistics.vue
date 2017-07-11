<template id="monthStatistics">
    <div class="max_box">
        <div v-for="year in data" class="Sta_years">
            <div class="Sta_year"><img src="../images/time.png"><span>{{year.year}}年</span><div class="clear"></div> </div>
            <div v-for="month in year.months" class="Sta_months">
                <div class="Sta_month"> {{month.month}}月</div>
                <div class="Sta_progress">
                    <div class="weui-progress">
                        <div class="weui-progress__bar">
                            <div class="weui-progress__inner-bar js_progress" :style="month.style"></div>
                        </div>
                    </div>
                </div>
                <div class="Sta_days">{{month.dayCount}}天</div>
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>
<script>
    var monthStatistics = {
        template: '#monthStatistics'
    };


    export default {

        data() {
            return {
                data: [],
                day: []
            }
        },
        props: {
            user: {
                type: Object
            }
        },
        created: function () {
            let _this = this;
            _this.$http.get(web.API_PATH + 'mood/get/user/months/day/count/_userId_').then(function (response) {
                if (response.data.status === 1) {

                    for (var i = 0; i < response.data.data.length; i++) {
                        for (var j = 0; j < response.data.data[i].months.length; j++){
                           var style=response.data.data[i].months[j].dayCount/response.data.data[i].months[j].dayInMonthCount;

                            response.data.data[i].months[j].style= "width: "+(style*100)+"%;";
                        }
                    }
                    _this.data = response.data.data;
                    console.log(_this.data);
                }
            }, function (response) {
                // error
            });
        }
    }

</script>
<style>
    .clear{ clear: both ; height: 0; overflow: hidden}
    .max_box {
        background-color: #ffffff;
    }

    .Sta_years {
        border-left: solid #eeeeee 1px;
        border-right: solid #eeeeee 1px;
        border-bottom: solid #eeeeee 1px;
    }

    .Sta_year {
        padding: 15.5px 20.5px;
        line-height: 18px;

    }

    .Sta_year span {
        font-size: 20px;
        margin-left: 10px;
        float:left;
    }

    .Sta_year img {
        width: 18px;
        float:left;
    }

    .Sta_months {
        border-left: solid #eeeeee 1px;
        border-right: solid #eeeeee 1px;
        border-top: solid #eeeeee 1px;
        height: 49.5px;
        position: relative;

    }

    .Sta_progress {
        width: 60.7%;
        margin-left: 22.56%;
        position: absolute;
        top: 43%
    }

    .Sta_month {
        width: 16.6%;
        border-right: solid #eeeeee 1px;
        height: 35.5px;
        position: absolute;
        text-align: center;
        padding-top: 14px;
        font-size: 15px;
        color: #838383;
    }

    .circle {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 1px solid #a0a0a0;
        position: absolute;
        left: 16.6%;
        top: 18.5px;
        margin-left: -5.5px;
        background-color: #ffffff;
    }

    .weui-progress__bar {
        height: 10px;
        background: rgba(9, 187, 7, 0.15);
        border-radius: 9px;
    }

    .weui-progress__inner-bar {
        border-radius: 9px;
    }

    .Sta_days {
        position: absolute;
        right:5%;
        top: 12.5px;
        font-size: 15px;
        color:#666;
    }

</style>