<template >
    <div class="habit_add_box">
        <div class="my_habit">
            <div class="title">我的好习惯</div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_1.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">跑步</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_2.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃早餐</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_3.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">八杯水</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_4.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">看书一小时</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃水果</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">晚上泡脚</div>
            </div>
            <div class="item on">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">晚上泡脚</div>
            </div>

            <div class="clear"></div>

        </div>
        <div class="my_habit no_b_b">
            <div class="title">我的好习惯</div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">跑步</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃早餐</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">八杯水</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">看书一小时</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">吃水果</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center ; background-size: 40%;"></div>
                <div class="txt">晚上泡脚</div>
            </div>
            <div class="item ">
                <div class="close">+</div>
                <div class="img"  style="background: url(../src/images/habit_icon_6_no.png) no-repeat center; background-size: 40%; "></div>
                <div class="txt">晚上泡脚</div>
            </div>

            <div class="clear"></div>

        </div>
    </div>
</template>
<style>
    .habit_add_box{ background: #fff}
    .habit_add_box .my_habit{ padding: 0.6rem 0.88235rem; padding-bottom: 1rem; border-bottom: #F5F5F5 solid 0.55882352941176470588235294117647rem}
    .habit_add_box .my_habit .item{  width: 25%; float:left; text-align: center; color:#999; font-size: 0.70588235294117647058823529411765rem ;  margin-top: 0.8rem; position: relative  }
    .habit_add_box .my_habit .item .img{  display: inline-block;border: 1px solid #DCDCDC ; height: 2.9411764705882352941176470588235rem; width: 2.9411764705882352941176470588235rem;  border-radius: 50%; font-size: 2rem;  line-height:2.7rem;  overflow: hidden;}
    .habit_add_box .my_habit .item .txt{color:#333}
    .habit_add_box .my_habit .item.on .img{border: 1px solid #FF9900 ;}
    .habit_add_box .my_habit .item.on .txt{ color:#333}
    .habit_add_box .my_habit .item .close{ transform: rotate(45deg); -webkit-transform: rotate(45deg); height: 0.88235rem; width: 0.88235rem; border-radius: 50%; border: 1px solid #ccc; color:#ccc; line-height: 0.82rem; position: absolute;left:50%;top:-0.6rem; margin-left: -2rem;}
    .habit_add_box .my_habit .title{ font-size: 0.88235rem; font-weight: bold; padding-left: 0.6rem; padding-top: 0.4rem; padding-bottom: 0.4rem;}
    .habit_add_box .no_b_b{ border-bottom: 0}
    .habit_add_box .no_b_b .item .close{transform: rotate(0deg); -webkit-transform: rotate(0deg);border: 1px solid #FF9900; color:#FF9900;}
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

        },
        components: {

        }
    }

</script>
