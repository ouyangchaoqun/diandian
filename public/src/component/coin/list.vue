<template>
    <div class="coin_list">
        <div v-title>积分明细</div>
        <div class="my_coin">
            <div class="word">当前积分：<span>1100</span></div>
        </div>
        <div class="list">
            <div class="item">
                <div class="name">早起打卡</div>
                <div class="time">2017-1-01</div>
                <div class="coin">+69</div>
            </div>
            <div class="item">
                <div class="name">早起打卡</div>
                <div class="time">2017-1-01</div>
                <div class="coin">+69</div>
            </div>
            <div class="item">
                <div class="name">早起打卡</div>
                <div class="time">2017-1-01</div>
                <div class="coin">+69</div>
            </div>
            <div class="item">
                <div class="name">早起打卡</div>
                <div class="time">2017-1-01</div>
                <div class="coin">+69</div>
            </div>
            <div class="item">
                <div class="name">早起打卡</div>
                <div class="time">2017-1-01</div>
                <div class="coin">+69</div>
            </div>

        </div>

    </div>
</template>
<script>

    export default {
        data() {
            return {

            }
        },
        mounted:function () {




        },
        methods: {

        }
    }


</script>
<style>
    .coin_list{ background: #fff;}
    .coin_list .my_coin{
        height: 3.6rem;
        background:-webkit-gradient(linear, 0 0, right 0, from(#f97f06), to(#ffb336));
        line-height: 3.6rem; color:#fff; font-size: 0.9411764705882353rem; padding-left: 1rem;
    }
    .coin_list .my_coin span{ font-size:1.764705882352941rem; }
    .coin_list  .list{ margin-left: 1rem;}
    .coin_list  .list .item{ line-height: 1; border-bottom: 1px solid #eee;
        height:3.1rem; padding-top: 0.9rem; position: relative}
    .coin_list  .list .item .name{ font-size: 0.88235rem;; color:#333;}
    .coin_list  .list .item .time{ color:#999; font-size: 0.7058823529411765rem  ; margin-top: 0.5rem;}
    .coin_list  .list .item    .coin{ position: absolute;top:0; right:1.233rem; line-height:4rem; color:#E28B27; font-size: 1.411764705882353rem; }
</style>