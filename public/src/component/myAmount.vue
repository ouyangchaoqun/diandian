<template >
    <div style="height: 100%" class="my_amount_box wbg">

        <div v-title>我的余额</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="my_income">
            <div class="img"></div>
            <div class="my_income_txt">我的余额</div>
            <div class="money">￥{{formatPrice(user.balance)}}</div>
            <div class="get_money">提现</div>
        </div>

    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                showLoad:false
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        components: {
            'v-showLoad': showLoad
        },

        mounted: function () {
            let _this=this;
             xqzs.wx.setConfig(this);
        },
        methods:{
            formatPrice:function(price){
                console.log(price)
                return  xqzs.string.formatPrice(price)
            },
        }


    }
</script>
<style>

.wbg{ background: #fff;}
    .my_amount_box .my_income .img{ background: url(../images/income.png) no-repeat; width: 6.21rem; height: 5.941176471rem; background-size: 100% 100%; margin: 0 auto ; margin-top:3.7rem; }
    .my_amount_box .my_income{ line-height: 1}
    .my_amount_box .my_income .my_income_txt{color:#333; width: 100%; text-align: center; margin-top: 0.76471rem;font-size: 0.8823529411764706rem; }
    .my_amount_box .my_income .money{color:#FE7301 ; margin-top: 0.7058823529411765rem; text-align: center; width: 100%; font-size: 2.117647058823529rem; line-height: 1}

    .my_amount_box  .my_income .get_money{color:#383333; margin:0 auto;line-height:2.88235rem; border-top:1px solid #D1D1D1;border-bottom:1px solid #D1D1D1;text-align: center; font-size: 1.058823529411765rem; margin-top: 2.941176471rem;}
    .my_amount_box .my_income .income_list{ position:absolute;bottom:6rem;text-align: center;  width: 100%}
    .my_amount_box .my_income .income_list span{padding-bottom:0.35294rem; border-bottom: 1px solid #999; font-size: 0.7647058823529412rem; color:#999;border-radius: 1px}

</style>