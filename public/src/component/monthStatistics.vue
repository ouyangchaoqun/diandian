<template id="monthStatistics">
    <div class="max_box">
            <div v-for="year in years" class="Sta_years">
                <div class="Sta_year"><img src="../images/时间.png"><span>{{year.year}}年</span></div>
                <div></div>
                <div v-for="month in months" class="Sta_months">
                    <div class="Sta_month"> {{month.month}}月</div>
                    <div class="Sta_progress">
                        <div class="weui-progress">
                            <div class="weui-progress__bar">
                                <div class="weui-progress__inner-bar js_progress" style="width: 50%;"></div>
                            </div>
                        </div>

                    </div>
                    <div class="Sta_count">22条</div>
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
                years: [
                    {year: 2017},
                    {year: 2016}
                ],
                months: [
                    {month: 1},
                    {month: 2},
                    {month: 3},
                    {month: 4},
                    {month: 5},
                    {month: 6},
                    {month: 7}
                ]
            }
        }
    }
</script>
<style>
    .Sta_years{
        border-left: solid #eeeeee 1px;
        border-right: solid #eeeeee 1px;
        border-bottom: solid #eeeeee 1px;
    }
    .Sta_year{
        padding: 15.5px 20.5px;
    }
    .Sta_year img{
        padding: 1px 0px;
    }
    .Sta_year img {
        width: 18px;
    }
    .Sta_months{
        border-left: solid #eeeeee  1px;
        border-right: solid #eeeeee  1px;
        border-top: solid #eeeeee  1px;
        height: 49.5px;
        position: relative;

    }
    .Sta_progress
    {
        width: 60.7%;
        margin-left: 21.06%;
        position: absolute;
        top:40%
    }
    .Sta_month{
        width: 15.6%;
        border-right:  solid #eeeeee  1px;
        height: 49.5px;
        position: absolute;
        left: 1%;
        text-align: center;
        top:20%;
    }

    .weui-progress__bar{
        height: 10px;
        background: rgba(9,187,7,0.15);
    }
    .Sta_count{
        position: absolute;
        right: 4%;
        top:20%;
    }

</style>