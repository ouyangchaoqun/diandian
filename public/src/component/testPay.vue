<template id="testPay">
    <div class="testPay_box">
        <div class="btn"
             style="background:red; text-align: center; color:#fff; height: 55px; line-height: 55px; margin-top: 20px;"
             @click="pay">支付
        </div>
        <div class="list_count"><input type="text" v-model="counts" placeholder="输入查询数量">
            <button @click="showlist">显示</button>
        </div>
        <div class="pay_list">
            <div class="pay_li" style="font-size: 20px">
                <div class="pay_user">用户名</div>
                <div class="pay_money">支付金额</div>
                <div class="payTime">支付时间</div>
                <div class="payState">支付状态</div>
            </div>
            <div class="pay_li" v-for="item in pay_list">
                <div class="pay_user">{{item.nickName | shortName(5)}}</div>
                <div class="pay_money">{{item.amount}}</div>
                <div class="pay_time">{{item.time}}</div>
                <div class="pay_state" v-if="item.type==1">成功</div>
                <div class="pay_state" v-if="item.type==0">失败</div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script type="">
    let testPay = {
        template: '#testPay',
    };

    export default {

        data() {
            return {
                counts: 50,
                pay_list: []
            }
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        methods: {
            onBridgeReady: function (config) {
                alert(config)
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', config,
                    function (res) {
                        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                        if (res.err_msg == "get_brand_wcpay_request:ok") {


                        }
                    }
                );
            },

            pay: function () {
                let _this = this;
                _this.$http.put(web.API_PATH + 'create/order/_userId_/1').then(function (res) {
                //_this.$http.put(web.API_PATH + 'power/plan/_userId_/' + 1 + '/' + 1 + '').then(function (res) {

                    let config = res.data.data;

                    let url = web.BASE_PATH + "wxpay.php?appId=" + config.appId + "&timeStamp=" + config.timeStamp + "&nonceStr=" + config.nonceStr + "&package=" + config.package + "&signType=" + config.signType + "&paySign=" + config.paySign + "&reurl=" + window.location.href

                    window.location.href = url
                })
            },
            showlist: function () {
                let _this = this
                this.$http.get(web.API_PATH + 'pay/flow/' + _this.counts).then(function (data) {

                    if (data.body.status == 1) {
                        _this.pay_list = data.body.data;
                    }
                })
            }

        },

        mounted: function () {
            this.showlist()
        }
    }
</script>
<style>
    .pay_list {
        width: 100%;
        margin-top: 20px;
    }

    .pay_li {
        height: 30px;
        width: 100%;
    }

    .pay_li div {
        float: left;
        font-size: 15px;
        text-align: center;
        height: 24px;
    }

    .pay_user {

        width: 20%;
    }

    .pay_money {

        width: 25%;
    }

    .pay_time {

        width: 40%;
    }

    .pay_state {
        width: 15%;
    }

    .payState {
        width: 20%;
    }

    .payTime {
        width: 35%;
    }
</style>
