<template >
    <div class="habit_box">
        <div class="my_habit">
             <div class="item on">
                 <div class="img"  style="background: url(../src/images/habit_icon_1.png) no-repeat center; background-size: 40%; "></div>
                 <div class="txt">跑步</div>
             </div>
            <div class="item on">
                <div class="img"  style="background: url(../src/images/habit_icon_2.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃早餐</div>
            </div>
            <div class="item on">
                <div class="img"  style="background: url(../src/images/habit_icon_3.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">八杯水</div>
            </div>
            <div class="item on">
                <div class="img"  style="background: url(../src/images/habit_icon_4.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">看书一小时</div>
            </div>
            <div class="item">
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃水果</div>
            </div>
            <div class="item">
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">晚上泡脚</div>
            </div>
            <div class="item">
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">晚上泡脚</div>
            </div>
            <div class="item" @click="goAdd()">
                <div class="img">+</div>
                <div class="txt">编辑</div>
            </div>
            <div class="clear"></div>

        </div>
        <div class="habit_history">
            <div class="title">历史习惯</div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <div class="time">10.23</div>
                <div class="day_habits">
                    <span><img src="../images/habit_icon_1.png" /></span>
                    <span><img src="../images/habit_icon_2.png" /></span>
                    <span><img src="../images/habit_icon_3.png" /></span>
                    <span><img src="../images/habit_icon_4.png" /></span>
                    <span><img src="../images/habit_icon_5.png" /></span>
                    <span><img src="../images/habit_icon_6.png" /></span>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="habit_btns">
            <div class="btn btn_s" @click="goStatistics()">
                <div class="img"></div>
                <div class="txt">统计</div>
            </div>
            <div class="btn btn_card" @click="goCard()">
                <div class="img"></div>
                <div class="txt">卡片</div>
            </div>
        </div>
    </div>
</template>
<style>
    .habit_box{ background: #fff}
    .habit_box .my_habit{ padding: 0.6rem 0.88235rem; padding-bottom: 1rem; border-bottom: #F5F5F5 solid 0.55882352941176470588235294117647rem}
    .habit_box .my_habit .item{  width: 25%; float:left; text-align: center; color:#999; font-size: 0.70588235294117647058823529411765rem ;  margin-top: 0.8rem;  }
    .habit_box .my_habit .item .img{  display: inline-block;border: 1px solid #DCDCDC ; height: 2.9411764705882352941176470588235rem; width: 2.9411764705882352941176470588235rem;  border-radius: 50%; font-size: 2rem;  line-height:2.7rem;  overflow: hidden;}
    .habit_box .my_habit .item .txt{color:#DCDCDC}
    .habit_box .my_habit .item.on .img{border: 1px solid #FF9900 ;}
    .habit_box .my_habit .item.on .txt{ color:#333}


    .habit_box .habit_history{ position: relative; height: 600px;}
    .habit_box .habit_history .title{ color:#4A4949; font-size:0.82352941176470588235294117647059rem; font-weight: bold; padding-left: 0.88235rem; padding-top: 0.6rem; }
    .habit_box .habit_history .item .time{ font-size: 0.70588235294117647058823529411765rem;color:#999;float:left;line-height:2rem; margin-left: 0.88235rem }
    .habit_box .habit_history:before{width: 1px; height:100%; background: #eee; content: ' '; display: block; position: absolute; top:2rem; left:3.4rem;  }
    .habit_box .habit_history .item .day_habits img{ height:1rem; }
    .habit_box .habit_history .item .day_habits{ line-height: 2.2rem; margin-left: 1.6rem;float:left}
    .habit_box .habit_history .item .day_habits span{display: inline-block; width:2rem; text-align: center }
    .habit_box .habit_history .item{ position: relative}
    .habit_box .habit_history .item:before{content:"";display:block; position:absolute; top:.8rem; left:3.3rem;height: 0.29411764705882352941176470588235rem;width: 0.29411764705882352941176470588235rem; border-radius: 50%; background: #FF9900}

    .habit_btns{ position: fixed; bottom:2rem; right:1.2rem}
    .habit_btns .btn{ height: 2.4rem; width: 2.6rem; ;background: #FF9900; border-radius: 3px; text-align: center; color:#fff; font-size: 0.82rem;  padding-top: 0.3rem; margin-bottom: 1rem;  }
    .habit_btns .btn_s .img{ background: url(../images/habit_btn_s.png) no-repeat center; background-size: 44%; height: 1rem; width: 100%; }
    .habit_btns .btn_card .img{ background: url(../images/habit_btn_card.png) no-repeat center; background-size: 44%; height: 1rem; width: 100%; }


</style>
<script type="text/javascript">

    export default {
        data() {
            return {

            }
        },

        mounted: function () {
            let _this = this;

        },
        methods:{
            goStatistics:function () {
                this.$router.push("/habit/statistics")
            },
            goCard:function () {
                this.$router.push("/habit/card")
            }
        },
        components: {

        }
    }

</script>
