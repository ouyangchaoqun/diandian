<template id="testPay">
    <div class="testPay_box">
        <div class="btn"
             style="background:red; text-align: center; color:#fff; height: 55px; line-height: 55px; margin-top: 60px;"
             @click="pay">支付
        </div>

    </div>
</template>
<style>

</style>
<script type="es6">
    let testPay = {
        template: '#testPay'
    };

    export default {

        data() {
            return {}
        },
        methods: {
            onBridgeReady:function(config) {

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
                _this.$http.put(web.API_PATH + 'power/plan/_userId_/' + 1 + '/' + 1 + '').then(function (res) {


                    let config ={
                        "appId": res.data.data.appid,     //公众号名称，由商户传入
                        "timeStamp": res.data.data.time,        //时间戳，自1970年以来的秒数
                        "nonceStr": res.data.data.nonce_str, //随机串
                        "package": "prepay_id=" + res.data.data.prepay_id + "",
                        "signType": "MD5",         //微信签名方式：
                        "paySign": res.data.data.sign //微信签名
                    };



                    if (typeof WeixinJSBridge == "undefined") {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', _this.onBridgeReady(config), false);
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', _this.onBridgeReady(config));
                            document.attachEvent('onWeixinJSBridgeReady', _this.onBridgeReady(config));
                        }
                    } else {
                        _this.onBridgeReady(config);
                    }


                    console.log(res)
                })
            }

        },

        mounted: function () {

        }
    }
</script>
