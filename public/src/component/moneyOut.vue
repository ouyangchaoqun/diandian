<template >
    <div class="moneyOut">
        <div v-title>余额明细</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <ul>
            <li class="moneyOut_item">
                <div class="time">
                    <span>2017-09-12</span>
                    <span>12:00</span>
                </div>
                <div class="item_type">提现</div>
                <div class="item_right">
                    <span>审核中</span>
                    ¥78.50
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                showLoad:false,
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

        },
        methods:{
            getUserInfo:function () {
                let _this = this;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.user = eval(data.data.data);
                    }
                }, function (error) {
                    //error
                });
            },
            formatPrice:function(price){
                return  xqzs.string.formatPrice(price)
            },
        }


    }
</script>
<style>
    .moneyOut{
        background: #fff;
    }
    .moneyOut .moneyOut_item{
        height:2.88235rem;
        line-height: 2.88235rem;
        border-bottom: 1px solid rgba(238,238,238,1);
        padding:0 0.88235rem;
        display: flex;
    }
    .time{
        color:rgba(153,153,153,1);
        font-size: 0.6471rem;
        float: left;
    }
    .item_right{
        font-size: 0.88235rem;
        float: right;
        color:rgba(255,157,24,1);
    }
    .item_right span{
        font-size: 0.76471rem;
        color:rgba(69,75,84,1);
        margin-right: 0.735rem;
    }
    .item_type{
        margin: 0 auto;
        text-align: center;
        color:rgba(36,37,61,0.5);
        font-size: 0.76471rem;
    }
</style>