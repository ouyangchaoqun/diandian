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
                _this.$http.put(web.API_PATH + 'power/plan/_userId_/' + 1 + '/' + 1 + '').then(function (res) {




                    let config = res.data.data;


                    let url  =web.BASE_PATH +"wxpay.php?appId="+config.appId+"&timeStamp="+config.timeStamp+"&nonceStr="+config.nonceStr+"&package="+config.package+"&signType="+config.signType+"&paySign="+config.paySign+"&reurl="+  window.location.href


                    console.log(url)
                    window.location.href= url
                })
            }

        },

        mounted: function () {

        }
    }
</script>
